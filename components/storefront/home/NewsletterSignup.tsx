"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Crown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackEvent("newsletter_submit", { email });
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto font-sans my-12">
      <div className="relative rounded-2xl bg-[#111111] border border-[#B08D57]/40 p-8 md:p-16 text-center space-y-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        {/* Ambient Gold Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#B08D57]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          {/* Gold Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] px-4 py-1.5 rounded-full border border-[#B08D57]/40">
            <Crown className="w-3.5 h-3.5 text-[#B08D57]" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-[#B08D57]">
              BY PRIVATE INVITATION
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EE] leading-[1.08]">
            Join the Maison Privilege Circle.
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-[#F7F3EE]/80 font-light leading-[1.7] max-w-lg mx-auto">
            Receive 10% off your inaugural order and unlock early allocation access to rare small-batch barrel drops and private consultations.
          </p>

          {/* 3 VIP Member Privileges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#F7F3EE]/90 font-medium bg-[#1A1A1A]/80 py-2 px-3 rounded-lg border border-[#B08D57]/20">
              <Sparkles className="w-3 h-3 text-[#B08D57]" />
              <span>10% Inaugural Code</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#F7F3EE]/90 font-medium bg-[#1A1A1A]/80 py-2 px-3 rounded-lg border border-[#B08D57]/20">
              <Sparkles className="w-3 h-3 text-[#B08D57]" />
              <span>Early Batch Priority</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#F7F3EE]/90 font-medium bg-[#1A1A1A]/80 py-2 px-3 rounded-lg border border-[#B08D57]/20">
              <Sparkles className="w-3 h-3 text-[#B08D57]" />
              <span>Sommelier Invitations</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative z-10 max-w-md mx-auto pt-2">
          {submitted ? (
            <div className="p-5 bg-[#1A1A1A] border border-[#B08D57]/50 rounded-xl flex items-center justify-center space-x-3 text-[#F7F3EE] font-semibold text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0" />
              <span>Your inaugural 10% privilege code has been dispatched to your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-[#B08D57] absolute left-4 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for private access..."
                  className="w-full pl-11 pr-4 py-3.5 bg-[#1A1A1A] border border-[#B08D57]/40 rounded-xs text-xs md:text-sm text-[#F7F3EE] placeholder-[#F7F3EE]/40 focus:border-[#B08D57] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#F7F3EE] text-[#111111] hover:bg-[#B08D57] hover:text-[#FFFFFF] font-bold text-xs tracking-[0.2em] uppercase rounded-xs transition-all shadow-sm shrink-0 whitespace-nowrap"
              >
                CLAIM ACCESS
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
