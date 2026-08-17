"use client";

import { useState, useEffect, useRef } from "react";
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const REVIEWS = [
  {
    id: 1,
    name: "Tariqul Islam",
    location: "Gulshan, Dhaka",
    rating: 5,
    date: "2 days ago",
    verified: true,
    perfume: "Royale Oud Concentré (50ml)",
    title: "Unbelievable 18-hour projection!",
    comment:
      "I was skeptical about buying an extrait online, but Royale Oud exceeded every expectation. Applied at 8 AM for an executive meeting and could still smell the rich damask rose and agarwood at midnight.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    location: "Banani, Dhaka",
    rating: 5,
    date: "1 week ago",
    verified: true,
    perfume: "Maison Discovery Coffret (5x5ml)",
    title: "The discovery set is a must-buy",
    comment:
      "The packaging alone feels like something straight out of Harrods London. All 5 samples smell distinct and luxurious. The ৳ 500 voucher credit towards the 50ml bottle was the cherry on top!",
  },
  {
    id: 3,
    name: "Adnan Chowdhury",
    location: "Chittagong",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    perfume: "Aeterna Amber Gold (50ml)",
    title: "Warm, magnetic & highly complimented",
    comment:
      "Amber Gold has become my signature evening scent. The amber and Guatemalan cardamom blend is smooth and sophisticated. Got 4 compliments on the very first night I wore it.",
  },
  {
    id: 4,
    name: "Mahmud Hasan",
    location: "Uttara, Dhaka",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    perfume: "Noir Wood Intense (50ml)",
    title: "Executive smoky cedarwood perfection",
    comment:
      "Dark, smoky, and extremely rich. You can tell this oil was aged in copper vats. Far superior to mass commercial designer fragrances.",
  },
  {
    id: 5,
    name: "Farhana Rahman",
    location: "Sylhet",
    rating: 5,
    date: "1 month ago",
    verified: true,
    perfume: "Soleil Rose Extrait (50ml)",
    title: "Velvety Parisian rose perfection",
    comment:
      "Damask rose paired with mandarin and neroli. It smells so fresh yet warm. Delivery via bKash COD was fast and packaging was 100% authentic.",
  },
];

export default function SocialProofReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 3.5-Second Auto-Slide Interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const cardWidth = 380;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isEnd) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "reviews_scroll_left" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
      trackEvent("hero_cta_click", { action: "reviews_scroll_right" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-8 bg-[#FFFFFF] border-y border-[#E7DED2] my-12 font-sans text-left">
      {/* Header & Controls Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[#B08D57] mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B08D57]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1A1A1A]">4.9 / 5.0</span>
            <span className="text-xs text-[#555555] font-light">(420+ Verified Reviews)</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            CLIENT TESTIMONIALS
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

      {/* Single-Row Auto-Scrolling Horizontal Review Carousel */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="w-[300px] sm:w-[340px] md:w-[380px] shrink-0 snap-start bg-[#F7F3EE] border border-[#E7DED2] rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#B08D57] transition-all shadow-xs"
          >
            <div className="space-y-3">
              {/* Rating & Quote Icon Row */}
              <div className="flex justify-between items-center">
                <div className="flex text-[#B08D57]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B08D57]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#B08D57]/40" />
              </div>

              {/* Review Headline & Body */}
              <h3 className="font-serif font-bold text-base text-[#1A1A1A]">
                "{rev.title}"
              </h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {rev.comment}
              </p>
            </div>

            {/* Reviewer Details & Perfume Purchased */}
            <div className="pt-3 border-t border-[#E7DED2] flex items-center justify-between text-left">
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif font-bold text-sm text-[#1A1A1A]">
                    {rev.name}
                  </span>
                  {rev.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57]" />
                  )}
                </div>
                <span className="text-[10px] text-[#555555] block">
                  {rev.location} • {rev.perfume}
                </span>
              </div>
              <span className="text-[10px] text-[#B08D57] font-semibold uppercase tracking-wider">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
