import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 200 });
    }

    return NextResponse.json({ authenticated: true, user }, { status: 200 });
  } catch (error: any) {
    console.error("Session fetch error:", error);
    return NextResponse.json({ authenticated: false, user: null, error: error.message }, { status: 500 });
  }
}
