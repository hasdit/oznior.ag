import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { encodeSession, SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    let user: { id: string; email: string; fullName: string; role: Role | string; vipPoints: number } | null = null;

    try {
      let dbUser = await prisma.user.findUnique({
        where: { email: cleanEmail },
      });

      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            email: cleanEmail,
            fullName: cleanEmail.split("@")[0].toUpperCase(),
            firebaseUid: `CLIENT_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            role: Role.CUSTOMER,
            vipPoints: 50,
          },
        });
      }

      user = {
        id: dbUser.id,
        email: dbUser.email,
        fullName: dbUser.fullName,
        role: dbUser.role,
        vipPoints: dbUser.vipPoints,
      };
    } catch (dbErr) {
      console.warn("⚠️ Database offline. Operating in customer local dev mode fallback.");
      user = {
        id: `user-dev-${Date.now()}`,
        email: cleanEmail,
        fullName: cleanEmail.split("@")[0].toUpperCase(),
        role: Role.CUSTOMER,
        vipPoints: 100,
      };
    }

    const sessionToken = encodeSession({
      userId: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    });

    const response = NextResponse.json({
      success: true,
      user,
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
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process login request" },
      { status: 500 }
    );
  }
}
