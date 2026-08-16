"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="py-24 px-6 md:px-12 bg-[#FFFFFF] border-y border-[#E7DED2]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
          JOIN THE OZNIOR PRIVILEGE CLUB
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          RECEIVE 10% OFF YOUR FIRST ORDER
        </h2>
        <p className="text-base text-[#555555] font-light max-w-lg mx-auto">
          Subscribe for early access to small-batch barrel drops, private olfactory consultations, and VIP invitations.
        </p>

        {submitted ? (
          <div className="p-6 bg-[#F7F3EE] border border-[#E7DED2] rounded-xl flex items-center justify-center space-x-3 text-[#2F6F4F] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-[#2F6F4F]" />
            <span>Thank you! Your 10% privilege discount code has been sent to your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-[#B08D57] absolute left-4 top-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-lg text-sm text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none transition-colors"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#B08D57] font-bold text-xs tracking-widest uppercase py-3.5 px-8">
              JOIN VIP
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
