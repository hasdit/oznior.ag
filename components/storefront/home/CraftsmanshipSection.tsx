"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const CRAFT_STORIES = [
  {
    number: "01",
    tag: "ETHICAL BOTANICALS",
    title: "RARE BOTANICAL HARVESTS",
    desc: "25-year aged wild Cambodian agarwood, damask rose, and golden amber crystals selected for rare depth.",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    tag: "HIGH CONCENTRATION",
    title: "30% EXTRAIT DENSITY",
    desc: "Formulated at maximum oil concentration for rich olfactory sillage and 18+ hour skin persistence.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    tag: "ARTISANAL AGING",
    title: "90-DAY COPPER MACERATION",
    desc: "Meticulously aged in dark copper vessels for 90 days before cold filtration in limited small batches.",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    tag: "AUTHENTIC PRESENTATION",
    title: "HAND-SEALED VELVET BOX",
    desc: "Every bottle is hand-packaged in velvet-cushioned boxes with an authenticated certificate of origin.",
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CraftsmanshipSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 3-Second Auto-Slide Interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const cardWidth = 360;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isEnd) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "craft_scroll_left" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "craft_scroll_right" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-8 bg-[#F7F3EE] border-y border-[#E7DED2] my-12 font-sans text-left">
      {/* Header & Controls Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-2" /> OUR CRAFT MANIFESTO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-1">
            COMPOSED WITH INTENTION
          </h2>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleScrollLeft}
            className="w-9 h-9 border border-[#1A1A1A]/30 hover:border-[#B08D57] hover:text-[#B08D57] flex items-center justify-center text-[#1A1A1A] transition-colors rounded-xs"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-9 h-9 border border-[#1A1A1A]/30 hover:border-[#B08D57] hover:text-[#B08D57] flex items-center justify-center text-[#1A1A1A] transition-colors rounded-xs"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3-Second Auto-Scrolling Horizontal Story Cards Rail */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CRAFT_STORIES.map((story) => (
          <div
            key={story.number}
            className="group relative w-[280px] sm:w-[320px] md:w-[350px] h-[420px] md:h-[460px] shrink-0 snap-start rounded-2xl overflow-hidden border border-[#E7DED2] flex flex-col justify-between p-6 shadow-card hover:border-[#B08D57] transition-all duration-500"
          >
            {/* Background Photography Canvas */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/50 to-transparent" />
            </div>

            {/* Overlaid Content */}
            <div className="relative z-10 flex justify-between items-center text-[#FFFFFF]">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#B08D57]">
                {story.tag}
              </span>
              <span className="font-serif text-3xl font-bold text-[#B08D57]">
                {story.number}
              </span>
            </div>

            <div className="relative z-10 space-y-2 text-[#FFFFFF]">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#F7F3EE] group-hover:text-[#B08D57] transition-colors leading-snug">
                {story.title}
              </h3>
              <p className="text-xs text-[#F7F3EE]/80 font-light leading-relaxed">
                {story.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
