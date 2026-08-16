import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedFragrance() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#171717] text-[#F8F5EF] border-t border-[#8A6A44]/30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Large Media Frame (~55%) */}
        <div className="lg:col-span-7 relative aspect-[4/3] w-full bg-[#0B0B0F] border border-[#8A6A44]/30 rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
            alt="Royale Oud Concentré Campaign"
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_50px_rgba(138,106,68,0.25)]"
          />
        </div>

        {/* Story Spread Narrative (~45%) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#B89B72]">
            FEATURED CAMPAIGN EDITION
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F5EF] leading-tight">
            ROYALE OUD CONCENTRÉ
          </h2>

          <p className="text-lg text-[#E4DDD2] font-light leading-[1.75]">
            An enveloping composition where rare Cambodian oud meets luminous damask rose and warm golden amber crystals. Distilled in small copper pot batches and aged for 90 days.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#8A6A44]/30 text-xs">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#B89B72] block font-semibold mb-1">
                CONCENTRATION
              </span>
              <strong className="text-[#F8F5EF] font-serif text-base">30% Extrait de Parfum</strong>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#B89B72] block font-semibold mb-1">
                PERFORMANCE
              </span>
              <strong className="text-[#F8F5EF] font-serif text-base">18+ Hours Longevity</strong>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/parfums/royale-oud-concentre"
              className="inline-flex items-center px-9 py-4 bg-[#B89B72] text-[#171717] font-bold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#F8F5EF] transition-all duration-300 shadow-md"
            >
              DISCOVER ROYALE OUD (৳ 8,500) <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
