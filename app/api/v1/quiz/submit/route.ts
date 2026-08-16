import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { gender, time, occasion, notes, userId } = body;

    if (!gender || !notes || !notes.length) {
      return NextResponse.json(
        { error: "Gender and notes preference are required" },
        { status: 400 }
      );
    }

    // Match products based on accord notes & gender
    const matchedProducts = await prisma.product.findMany({
      where: {
        isActive: true,
        gender: { in: [gender, "Unisex"] },
      },
      take: 3,
      select: { id: true, name: true, slug: true },
    });

    const matchedProductIds = matchedProducts.map((p) => p.id);

    const quizResponse = await prisma.quizResponse.create({
      data: {
        userId: userId || null,
        gender,
        time: time || "All-Day",
        occasion: occasion || "Versatile",
        notes: notes || [],
        matchedProductIds,
      },
    });

    return NextResponse.json({
      success: true,
      quizResponseId: quizResponse.id,
      matchedProducts,
    });
  } catch (error: any) {
    console.error("Quiz Submit Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit scent quiz" },
      { status: 500 }
    );
  }
}
