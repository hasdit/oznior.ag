import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function DiscoveryCoffret() {
  return (
    <section className="relative w-full h-[600px] md:h-[650px] bg-[#111111] text-[#FFFFFF] overflow-hidden font-sans border-y border-[#E7DED2]/20 my-16">
      {/* Background Full-Bleed Imagery Canvas with Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=2000&q=85"
          alt="OZNIOR Discovery Coffret Set"
          className="w-full h-full object-cover object-center md:object-[right_center] filter brightness-90 contrast-105"
        />
        {/* Dark Luxury Scrim Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-transparent max-md:bg-gradient-to-t max-md:from-[#111111]/95 max-md:via-[#111111]/60 max-md:to-transparent" />
      </div>

      {/* Main Editorial Content Zone */}
      <div className="relative z-10 max-w-[1440px] w-full h-full mx-auto px-6 md:px-16 flex flex-col justify-center text-left py-12">
        <div className="max-w-xl space-y-6">
          
          {/* Top Gold Tag */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#B08D57]" />
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-semibold text-[#B08D57]">
              RISK-FREE FRAGRANCE RITUAL
            </span>
          </div>

          {/* Serif Headline (Exact Reference Font Scale & Ending Period) */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F7F3EE] leading-[1.1]">
            Begin with a smaller ritual.
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-sm sm:text-base text-[#F7F3EE]/85 font-light leading-[1.7] max-w-lg">
            Explore 5 iconic 5ml Extrait de Parfum spray editions in a velvet-lined coffret box. Includes a ৳ 500 voucher credit redeemable towards your full-sized 50ml or 100ml bottle.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center space-x-2 text-xs text-[#F7F3EE]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>5 x 5ml Extrait Sprays</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#F7F3EE]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>৳ 500 Bottle Credit Voucher</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#F7F3EE]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>Velvet Packaging Included</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#F7F3EE]/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>Free Nationwide Express Delivery</span>
            </div>
          </div>

          {/* Price & Action Button Group (Exact Hero Slider Button Styling) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-3xl font-bold text-[#FFFFFF]">৳ 1,200</span>
              <span className="text-xs text-[#B08D57] font-semibold uppercase tracking-wider">BDT</span>
            </div>

            <Link
              href="/checkout"
              className="px-7 py-3.5 bg-[#F7F3EE] text-[#111111] font-semibold text-xs tracking-wider rounded-xs hover:bg-[#B08D57] hover:text-[#FFFFFF] transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 text-center"
            >
              <span>Claim discovery coffret</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/parfums?format=discovery"
              className="px-2 py-3.5 text-xs text-[#F7F3EE] hover:text-[#B08D57] font-medium tracking-wide underline underline-offset-8 decoration-1 decoration-[#F7F3EE]/40 hover:decoration-[#B08D57] transition-all text-center sm:text-left"
            >
              View included notes
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
