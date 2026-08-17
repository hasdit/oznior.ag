import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BrandShowroomIntro() {
  return (
    <section className="relative min-h-[85vh] bg-[#F7F3EE] text-[#1A1A1A] border-b border-[#E7DED2] flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
        
        {/* Left Column: Authority Copy (6 Cols) */}
        <div className="lg:col-span-6 space-y-8 z-10">
          <div className="inline-flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#B08D57]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
              MAISON DE PARFUM PARIS
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.02]">
              THE ART OF <br />
              <span className="italic font-normal text-[#B08D57]">
                UNFORGETTABLE
              </span> <br />
              PRESENCE
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-[1.75] max-w-lg pt-2">
              Hand-crafted small-batch Extraits de Parfum (30% density) macerated for 90 days in dark copper vats. Formulated with ethically harvested Cambodian agarwood and French damask rose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/collections"
              className="px-9 py-4 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#B08D57] transition-all duration-300 shadow-md text-center flex items-center justify-center space-x-2"
            >
              <span>EXPLORE COLLECTIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quiz"
              className="px-9 py-4 border border-[#1A1A1A]/30 text-[#1A1A1A] font-bold text-xs tracking-[0.22em] uppercase rounded hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 text-center"
            >
              30-SEC FRAGRANCE QUIZ
            </Link>
          </div>

          <div className="pt-6 border-t border-[#E7DED2] flex items-center space-x-8 text-xs text-[#555555]">
            <div>
              <span className="font-serif text-xl font-bold text-[#1A1A1A] block">30%</span>
              <span className="text-[10px] uppercase font-semibold text-[#B08D57]">Extrait Density</span>
            </div>
            <div className="h-8 w-px bg-[#E7DED2]" />
            <div>
              <span className="font-serif text-xl font-bold text-[#1A1A1A] block">90 Days</span>
              <span className="text-[10px] uppercase font-semibold text-[#B08D57]">Copper Aging</span>
            </div>
            <div className="h-8 w-px bg-[#E7DED2]" />
            <div>
              <span className="font-serif text-xl font-bold text-[#1A1A1A] block">100%</span>
              <span className="text-[10px] uppercase font-semibold text-[#B08D57]">Authentic Seal</span>
            </div>
          </div>
        </div>

        {/* Right Column: Central Bottle Visual Showcase (6 Cols) */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-card group">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
              alt="Royale Oud Concentré"
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(176,141,87,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-[#E7DED2] pt-4 bg-[#FFFFFF]/95 backdrop-blur-sm p-4 rounded-lg text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B08D57] block font-semibold">FLAGSHIP EDITION</span>
                <span className="font-serif text-xl font-bold text-[#1A1A1A]">Royale Oud Concentré</span>
              </div>
              <span className="font-serif text-lg font-bold text-[#B08D57]">৳ 8,500</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
