import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { encodeSession, SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, fullName, phone, referralCode } = body;

    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Email and Full Name are required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email address already exists." },
        { status: 400 }
      );
    }

    let referredById: string | undefined;
    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: referralCode.trim().toUpperCase() },
      });
      if (referrer) {
        referredById = referrer.id;
        await prisma.user.update({
          where: { id: referrer.id },
          data: { vipPoints: { increment: 100 } },
        });
      }
    }

    const newReferralCode = `OZ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const user = await prisma.user.create({
      data: {
        email: cleanEmail,
        fullName: fullName.trim(),
        phone: phone ? phone.trim() : null,
        firebaseUid: `CLIENT_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        role: Role.CUSTOMER,
        referralCode: newReferralCode,
        referredById: referredById || null,
        vipPoints: referredById ? 100 : 50,
      },
    });

    const sessionToken = encodeSession({
      userId: user.id,
      email: user.email,
      role: user.role,
      firebaseUid: user.firebaseUid,
      fullName: user.fullName,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        referralCode: user.referralCode,
        vipPoints: user.vipPoints,
      },
    });

    response.cookies.set(SESSION_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error: any) {
    console.error("Register API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create account" },
      { status: 500 }
    );
  }
}
