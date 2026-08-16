import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ScentDiscovery() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#FFFFFF] border-y border-[#E4DDD2]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#8A6A44]" />
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              OLFACTORY CONSULTATION
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
            FIND YOUR <br />
            <span className="italic font-normal text-[#8A6A44]">SIGNATURE SCENT</span>
          </h2>

          <p className="text-lg md:text-xl text-[#4B4B4B] font-light max-w-xl leading-[1.75]">
            Not sure where to begin? Our 30-second digital fragrance consultation evaluates your wear occasions, preferred notes, and longevity requirements to match your ideal accord.
          </p>

          <div className="pt-4">
            <Link
              href="/quiz"
              className="inline-flex items-center px-9 py-4 bg-[#111111] text-[#F8F5EF] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#8A6A44] transition-all duration-300 shadow-md"
            >
              START 30-SEC CONSULTATION <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Right Editorial Card Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="aspect-[4/3] w-full max-w-md bg-[#F8F5EF] border border-[#E4DDD2] rounded-2xl p-8 flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(0,0,0,0.03)] space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6A44]">
                STEP 01 OF 04
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111]">
                Accord Sommelier
              </h3>
              <p className="text-base text-[#4B4B4B] font-light leading-[1.75]">
                Match Cambodian Oud, Ambergris, Damask Rose, or Bergamot against your personal chemistry.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E4DDD2] flex justify-between items-center text-xs text-[#8A6A44] font-semibold uppercase tracking-widest">
              <span>98% Confidence Match</span>
              <span>Take Quiz →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
