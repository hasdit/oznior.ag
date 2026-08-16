"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, ShieldAlert, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Admin authentication failed");
      }

      router.push(redirectPath);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid credentials or unauthorized role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="bg-red-950/60 border border-red-500/50 p-4 rounded-lg flex items-center gap-3 text-red-200 text-xs">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleAdminLogin} className="bg-[#171717] border border-[#8A6A44]/40 rounded-2xl p-10 space-y-6 shadow-2xl text-left">
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#B89B72] block mb-2">Admin Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#B89B72] absolute left-4 top-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@oznior.com"
                className="w-full pl-11 pr-4 py-3.5 bg-[#0B0B0F] border border-[#8A6A44]/40 rounded-lg text-sm text-[#F8F5EF] focus:border-[#B89B72] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#B89B72] block mb-2">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#B89B72] absolute left-4 top-4" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 bg-[#0B0B0F] border border-[#8A6A44]/40 rounded-lg text-sm text-[#F8F5EF] focus:border-[#B89B72] focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full bg-[#B89B72] text-[#171717] hover:bg-[#F8F5EF] transition-colors py-4 font-bold tracking-widest uppercase text-xs" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Verifying Credentials...
            </>
          ) : (
            "Authenticate & Access Dashboard"
          )}
        </Button>

        <div className="flex items-center justify-center space-x-2 text-xs text-[#E4DDD2]/60 pt-2">
          <ShieldAlert className="w-4 h-4 text-[#B89B72]" />
          <span>Authorized Staff Only • Session IP Logged</span>
        </div>
      </form>
    </>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="font-serif text-4xl font-bold tracking-widest text-[#111111]">OZNIOR ADMIN</h1>
          <p className="text-xs text-[#8A6A44] font-semibold uppercase tracking-widest">Protected Control Panel Access</p>
        </div>

        <Suspense fallback={
          <div className="bg-[#171717] border border-[#8A6A44]/40 rounded-2xl p-10 text-center text-sm text-[#E4DDD2]">
            Loading Admin Control Panel...
          </div>
        }>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
