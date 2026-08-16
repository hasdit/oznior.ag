import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiscoveryCoffret() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FFFFFF] border-y border-[#E4DDD2]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Image Coffret Box */}
        <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#F8F5EF] border border-[#E4DDD2] rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          <img
            src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
            alt="OZNIOR Discovery Sample Coffret"
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(138,106,68,0.15)]"
          />
        </div>

        {/* Right Story & Offer Specs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#8A6A44]" />
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              RISK-FREE FRAGRANCE TRIAL
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
            THE MAISON DISCOVERY COFFRET
          </h2>

          <p className="text-lg text-[#4B4B4B] font-light leading-[1.75]">
            Unsure which scent defines your signature? Experience 5 iconic 5ml Extrait de Parfum editions delivered in a velvet-lined coffret box.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-3 text-sm text-[#111111] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8A6A44]" />
              <span>Includes 5 x 5ml Spray Bottles (Royale Oud, Aeterna Amber, Noir Wood, Soleil Rose, Imperial Leather)</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-[#111111] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8A6A44]" />
              <span>Includes ৳ 500 Credit Voucher towards your full-sized 50ml or 100ml bottle</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-[#111111] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8A6A44]" />
              <span>Complimentary Nationwide Express Delivery Across Bangladesh</span>
            </div>
          </div>

          <div className="pt-4 flex items-center space-x-6">
            <span className="font-serif text-3xl font-bold text-[#111111]">
              ৳ 1,200 <span className="text-sm font-sans text-[#4B4B4B]/60 font-normal">BDT</span>
            </span>
            <Link href="/checkout">
              <Button size="lg" className="bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44] transition-colors py-4 px-8 text-xs tracking-widest uppercase">
                CLAIM DISCOVERY COFFRET <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
