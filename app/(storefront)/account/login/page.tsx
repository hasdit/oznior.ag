"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, LogIn, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function AccountLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/account";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push(redirectPath);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-10 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-left">
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@domain.com"
                className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44] transition-colors py-4 font-bold tracking-widest uppercase text-xs" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Authenticating...
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4 mr-2" /> Sign In to Account
            </>
          )}
        </Button>

        <div className="text-center pt-2 text-sm text-[#4B4B4B]">
          Don't have an account?{" "}
          <Link href="/account/register" className="text-[#8A6A44] font-semibold hover:underline">
            Register Here
          </Link>
        </div>
      </form>
    </>
  );
}

export default function AccountLoginPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-24 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">Client Portal</span>
          <h1 className="font-serif text-4xl font-bold text-[#111111]">Welcome Back to OZNIOR</h1>
          <p className="text-base text-[#4B4B4B] font-light">Access your luxury wishlist, order status, and Royale VIP points.</p>
        </div>

        <Suspense fallback={
          <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-10 text-center text-sm text-[#4B4B4B]">
            Loading Client Portal...
          </div>
        }>
          <AccountLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
