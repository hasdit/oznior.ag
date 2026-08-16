"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, Phone, Tag, UserPlus, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountRegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone: phone || null,
          password,
          referralCode: referralCode || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      router.push("/account");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to register account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-24 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44] flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#8A6A44]" /> Join OZNIOR VIP Privilege
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#111111]">Create Client Account</h1>
          <p className="text-base text-[#4B4B4B] font-light">
            Unlock exclusive bespoke curation, priority express delivery, and 50 Welcome Royale VIP Points.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center gap-3 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-10 space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-left">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tanvir Ahmed"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tanvir@domain.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Phone Number (Optional)</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XXXXXXXX"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Password *</label>
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

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block mb-2">Referral Code (Optional)</label>
              <div className="relative">
                <Tag className="w-4 h-4 text-[#8A6A44] absolute left-4 top-4" />
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="OZ-XXXXXX"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F8F5EF] border border-[#E4DDD2] rounded-lg text-sm text-[#111111] focus:border-[#8A6A44] focus:outline-none transition-colors uppercase tracking-widest"
                />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44] transition-colors py-4 font-bold tracking-widest uppercase text-xs" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Creating Account...
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" /> Register Privilege Account
              </>
            )}
          </Button>

          <div className="text-center pt-2 text-sm text-[#4B4B4B]">
            Already have an account?{" "}
            <Link href="/account/login" className="text-[#8A6A44] font-semibold hover:underline">
              Sign In Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
