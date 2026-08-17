"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const NEW_ARRIVALS = [
  {
    id: "p4",
    name: "Soleil Rose Extrait",
    slug: "soleil-rose-extrait",
    fragranceFamily: "Floral • Citrus",
    topNotes: ["Damask Rose", "Neroli", "Mandarin"],
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5200, sku: "OZN-SOL-30" },
      { volumeMl: 50, price: 8000, sku: "OZN-SOL-50" },
      { volumeMl: 100, price: 13000, sku: "OZN-SOL-100" },
    ],
  },
  {
    id: "p5",
    name: "Imperial Saffron Oud",
    slug: "imperial-saffron-oud",
    fragranceFamily: "Saffron • Oud • Leather",
    topNotes: ["Kashmiri Saffron", "Oud", "Leather"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5800, sku: "OZN-IMP-30" },
      { volumeMl: 50, price: 8900, sku: "OZN-IMP-50" },
      { volumeMl: 100, price: 14500, sku: "OZN-IMP-100" },
    ],
  },
  {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    fragranceFamily: "Amber • Cardamom",
    topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5000, sku: "OZN-AMB-30" },
      { volumeMl: 50, price: 7800, sku: "OZN-AMB-50" },
      { volumeMl: 100, price: 12500, sku: "OZN-AMB-100" },
    ],
  },
  {
    id: "p3",
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    fragranceFamily: "Cedarwood • Vetiver • Pepper",
    topNotes: ["Cedarwood", "Vetiver", "Black Pepper"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 4800, sku: "OZN-NWD-30" },
      { volumeMl: 50, price: 7200, sku: "OZN-NWD-50" },
      { volumeMl: 100, price: 11800, sku: "OZN-NWD-100" },
    ],
  },
];

export default function NewArrivalsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 3-Second Auto-Slide Interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const cardWidth = 340;
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
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "new_arrivals_scroll_left" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "new_arrivals_scroll_right" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-8 bg-[#FFFFFF] border-y border-[#E7DED2]">
      {/* Header & Controls Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4 text-left">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] block mb-1">
            PARISIAN NEW HARVEST
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            NEW ARRIVALS
          </h2>
        </div>

        {/* Action Controls: Arrow Buttons & View All */}
        <div className="flex items-center space-x-4">
          <Link
            href="/parfums?sort=new"
            className="text-xs uppercase tracking-widest text-[#B08D57] font-bold hover:underline flex items-center mr-2"
          >
            VIEW ALL <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            className="w-9 h-9 border border-[#1A1A1A]/30 hover:border-[#B08D57] hover:text-[#B08D57] flex items-center justify-center text-[#1A1A1A] transition-colors rounded-xs"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            className="w-9 h-9 border border-[#1A1A1A]/30 hover:border-[#B08D57] hover:text-[#B08D57] flex items-center justify-center text-[#1A1A1A] transition-colors rounded-xs"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Single-Row Auto-Scrolling Horizontal Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {NEW_ARRIVALS.map((prod) => (
          <div
            key={prod.id}
            className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start"
          >
            <ProductCard {...prod} />
          </div>
        ))}
      </div>
    </section>
  );
}
