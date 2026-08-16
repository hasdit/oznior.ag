import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  const sessionToken = request.cookies.get("oznior_session")?.value;

  let sessionPayload: { userId?: string; role?: string; email?: string } | null = null;
  if (sessionToken) {
    try {
      const parts = sessionToken.split(".");
      const payloadPart = parts.length === 3 ? parts[1] : sessionToken;
      const jsonStr = Buffer.from(payloadPart, "base64url").toString("utf-8");
      sessionPayload = JSON.parse(jsonStr);
    } catch {
      sessionPayload = null;
    }
  }

  const staffRoles = ["SUPER_ADMIN", "ADMIN", "MANAGER", "CONTENT_EDITOR", "SUPPORT_AGENT"];

  // Admin Route Protection
  if (path.startsWith("/admin")) {
    if (path === "/admin/login") {
      // If already logged in as staff, redirect to admin dashboard
      if (sessionPayload?.role && staffRoles.includes(sessionPayload.role)) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return response;
    }

    // Require logged in staff member
    if (!sessionPayload || !sessionPayload.role || !staffRoles.includes(sessionPayload.role)) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", path);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Account Route Protection
  if (path.startsWith("/account")) {
    if (path === "/account/login") {
      // If already logged in, redirect to account dashboard
      if (sessionPayload?.userId) {
        return NextResponse.redirect(new URL("/account", request.url));
      }
      return response;
    }

    // Require logged in customer/user
    if (!sessionPayload || !sessionPayload.userId) {
      const loginUrl = new URL("/account/login", request.url);
      loginUrl.searchParams.set("redirect", path);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*"],
};
