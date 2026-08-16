import { cookies } from "next/headers";
import { Role } from "@prisma/client";

export { Role };

export interface SessionPayload {
  userId: string;
  email: string;
  role: Role | string;
  firebaseUid?: string;
  fullName?: string;
}

export const SESSION_COOKIE_NAME = "oznior_session";

export function encodeSession(payload: SessionPayload): string {
  const header = { alg: "HS256", typ: "JWT" };
  const base64UrlHeader = Buffer.from(JSON.stringify(header)).toString("base64url");
  const base64UrlPayload = Buffer.from(
    JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 })
  ).toString("base64url");
  const crypto = require("crypto");
  const signature = crypto
    .createHmac("sha256", process.env.JWT_SECRET || "oznior_ultra_secure_jwt_secret_key_2026_prestige_luxury")
    .update(`${base64UrlHeader}.${base64UrlPayload}`)
    .digest("base64url");
  return `${base64UrlHeader}.${base64UrlPayload}.${signature}`;
}

export function decodeSession(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const crypto = require("crypto");
    const expectedSignature = crypto
      .createHmac("sha256", process.env.JWT_SECRET || "oznior_ultra_secure_jwt_secret_key_2026_prestige_luxury")
      .update(`${parts[0]}.${parts[1]}`)
      .digest("base64url");
    if (parts[2] !== expectedSignature) return null;

    const payloadJson = Buffer.from(parts[1], "base64url").toString("utf-8");
    const payload = JSON.parse(payloadJson);
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch (err) {
    return null;
  }
}

export async function getCurrentUser(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return decodeSession(token);
}

export function isStaffRole(role: Role | string): boolean {
  const staffRoles: (Role | string)[] = [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
    Role.CONTENT_EDITOR,
    Role.SUPPORT_AGENT,
  ];
  return staffRoles.includes(role);
}
