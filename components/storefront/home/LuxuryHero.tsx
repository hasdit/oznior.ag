import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LuxuryHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F8F5EF] border-b border-[#E4DDD2] overflow-hidden px-6 md:px-12 py-20 md:py-28">
      <div className="relative max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Editorial Text (~45%) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-block">
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              MAISON DE PARFUM
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111] leading-[1.02]">
              THE ART <br />
              <span className="italic font-normal text-[#8A6A44]">OF PRESENCE</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B4B4B] font-light leading-[1.75] max-w-lg pt-2">
              Fragrance is not worn. It is remembered. Rare compositions distilled in copper vessels with Cambodian oud and damask rose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/parfums"
              className="px-9 py-4 bg-[#111111] text-[#F8F5EF] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#8A6A44] transition-all duration-300 shadow-md text-center flex items-center justify-center"
            >
              DISCOVER COLLECTION <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/quiz"
              className="px-9 py-4 border border-[#111111]/30 text-[#111111] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:border-[#8A6A44] hover:text-[#8A6A44] transition-all duration-300 text-center"
            >
              FIND YOUR SIGNATURE
            </Link>
          </div>

          <div className="flex items-center space-x-8 pt-8 border-t border-[#E4DDD2] text-xs text-[#4B4B4B] font-medium">
            <div>
              <span className="block font-serif text-2xl font-bold text-[#111111]">30%</span>
              <span className="uppercase tracking-widest text-[10px] text-[#8A6A44] font-semibold">Pure Extrait</span>
            </div>
            <div className="h-8 w-px bg-[#E4DDD2]" />
            <div>
              <span className="block font-serif text-2xl font-bold text-[#111111]">18+ HR</span>
              <span className="uppercase tracking-widest text-[10px] text-[#8A6A44] font-semibold">Longevity</span>
            </div>
            <div className="h-8 w-px bg-[#E4DDD2]" />
            <div>
              <span className="block font-serif text-2xl font-bold text-[#111111]">HAND-SEALED</span>
              <span className="uppercase tracking-widest text-[10px] text-[#8A6A44] font-semibold">In Velvet</span>
            </div>
          </div>
        </div>

        {/* Right Perfume Bottle Visual (~55%) */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] group">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
              alt="OZNIOR Royale Oud Concentré"
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(138,106,68,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-[#E4DDD2] pt-4 bg-[#FFFFFF]/95 backdrop-blur-sm p-4 rounded-lg">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A6A44] block font-semibold">CROWN EDITION</span>
                <span className="font-serif text-xl font-bold text-[#111111]">Royale Oud Concentré</span>
              </div>
              <span className="font-serif text-lg font-bold text-[#8A6A44]">৳ 8,500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
