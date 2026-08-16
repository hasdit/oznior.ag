"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Package, Crown, Share2, LogOut, Heart, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string | null;
  role: string;
  referralCode?: string | null;
  vipPoints: number;
  createdAt: string;
}

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "wishlist" | "referral">("overview");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          router.push("/account/login");
        }
      })
      .catch(() => router.push("/account/login"))
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/account/login");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="bg-[#F8F5EF] min-h-screen flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 text-[#8A6A44] animate-spin" />
        <p className="text-xs uppercase tracking-widest text-[#4B4B4B]">Loading Privileged Account...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Header Banner */}
        <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#8A6A44]/10 border border-[#8A6A44]/30 flex items-center justify-center text-[#8A6A44] font-serif text-2xl font-bold shrink-0">
              {user.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-3xl font-bold text-[#111111]">{user.fullName}</h1>
                <span className="bg-[#8A6A44]/10 text-[#8A6A44] text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#8A6A44]/30">
                  VIP Client
                </span>
              </div>
              <p className="text-sm text-[#4B4B4B]">{user.email} {user.phone ? `• ${user.phone}` : ""}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[#E4DDD2] pt-4 md:pt-0">
            <div className="text-right">
              <span className="text-[11px] uppercase tracking-widest text-[#4B4B4B] block font-semibold">Royale Balance</span>
              <span className="font-serif text-2xl font-bold text-[#8A6A44] flex items-center justify-end gap-1.5">
                <Crown className="w-5 h-5 text-[#8A6A44]" /> {user.vipPoints} PTS
              </span>
            </div>
            <Button onClick={handleLogout} variant="outline" className="text-xs border-red-500/30 text-red-600 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>
        </div>

        {/* Account Navigation Tabs */}
        <div className="flex border-b border-[#E4DDD2] space-x-10 text-xs font-semibold uppercase tracking-widest overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "overview"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            <User className="w-4 h-4 inline mr-2" /> Overview
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`pb-4 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "orders"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" /> Orders & Tracking
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`pb-4 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "wishlist"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" /> Private Wishlist
          </button>
          <button
            onClick={() => setActiveTab("referral")}
            className={`pb-4 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "referral"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            <Share2 className="w-4 h-4 inline mr-2" /> VIP Referral & Rewards
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 text-[#8A6A44]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-[#111111]">Account Information</h3>
              </div>
              <div className="space-y-2 text-sm text-[#4B4B4B]">
                <p><strong className="text-[#111111]">Full Name:</strong> {user.fullName}</p>
                <p><strong className="text-[#111111]">Email:</strong> {user.email}</p>
                <p><strong className="text-[#111111]">Phone:</strong> {user.phone || "Not set"}</p>
                <p><strong className="text-[#111111]">Member Since:</strong> {new Date(user.createdAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 text-[#8A6A44]">
                <Crown className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-[#111111]">Royale VIP Tier</h3>
              </div>
              <p className="text-sm text-[#4B4B4B] leading-[1.75]">
                Earn 1 VIP Point for every ৳ 1,000 spent. Redeem points for exclusive limited release drops & private concierge access.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#8A6A44] bg-[#8A6A44]/10 border border-[#8A6A44]/30 px-3.5 py-1.5 rounded-full inline-block">
                  Current Level: Gold Prestige
                </span>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 text-[#8A6A44]">
                <Share2 className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-[#111111]">Personal Referral Code</h3>
              </div>
              <p className="text-sm text-[#4B4B4B]">Share your bespoke referral code with distinguished colleagues.</p>
              <div className="bg-[#F8F5EF] border border-[#E4DDD2] p-4 rounded-lg text-center text-[#111111] font-mono font-bold text-base tracking-widest">
                {user.referralCode || "OZ-LOYALTY"}
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-12 text-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <Package className="w-12 h-12 text-[#8A6A44] mx-auto opacity-40" />
            <h3 className="font-serif text-2xl font-bold text-[#111111]">No Active Orders</h3>
            <p className="text-base text-[#4B4B4B] max-w-md mx-auto leading-[1.75]">
              Your luxury acquisitions will appear here along with real-time courier status and white-glove delivery tracking.
            </p>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-12 text-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <Heart className="w-12 h-12 text-[#8A6A44] mx-auto opacity-40" />
            <h3 className="font-serif text-2xl font-bold text-[#111111]">Your Wishlist is Empty</h3>
            <p className="text-base text-[#4B4B4B] max-w-md mx-auto leading-[1.75]">
              Explore our latest Extrait de Parfum editions and save your desired fragrances.
            </p>
          </div>
        )}

        {activeTab === "referral" && (
          <div className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-10 space-y-6 text-left shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-4">
              <Crown className="w-8 h-8 text-[#8A6A44]" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#111111]">OZNIOR Privilege Referral Program</h3>
                <p className="text-sm text-[#4B4B4B]">Give ৳ 500 credit, get 100 Royale VIP points for each invited client.</p>
              </div>
            </div>
            <div className="bg-[#F8F5EF] border border-[#E4DDD2] p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#4B4B4B] block font-semibold mb-1">Your Exclusive Referral Link</span>
                <span className="text-sm text-[#111111] font-mono font-semibold">
                  {typeof window !== "undefined" ? window.location.origin : "https://oznior.com"}/account/register?ref={user.referralCode}
                </span>
              </div>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/account/register?ref=${user.referralCode}`
                  );
                  alert("Referral link copied to clipboard!");
                }}
                variant="outline"
                className="text-xs border-[#111111]/30 text-[#111111] hover:border-[#8A6A44] hover:text-[#8A6A44]"
              >
                Copy Link
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
