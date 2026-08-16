"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    tag: "HAUTE PARFUMERIE CONCENTRÉ",
    title: "THE ART OF PRESENCE",
    subtext: "Rare compositions crafted to leave an unmistakable impression long after the moment has passed. Distilled in small copper pot batches.",
    primaryCta: { label: "EXPLORE COLLECTION", href: "/parfums" },
    secondaryCta: { label: "DISCOVER YOUR SCENT", href: "/quiz" },
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    editionName: "Royale Oud Concentré",
    price: "৳ 8,500",
  },
  {
    id: 2,
    tag: "DISCOVERY SET",
    title: "THE DISCOVERY COFFRET",
    subtext: "Explore 5 iconic 5ml Extrait de Parfum editions. Includes a ৳ 500 voucher redeemable towards your full-sized 50ml bottle.",
    primaryCta: { label: "CLAIM DISCOVERY SET (৳ 1,200)", href: "/checkout" },
    secondaryCta: { label: "VIEW ALL NOTES", href: "/parfums" },
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    editionName: "Maison Discovery Coffret",
    price: "৳ 1,200",
  },
  {
    id: 3,
    tag: "DIGITAL SOMMELIER",
    title: "FIND YOUR SIGNATURE",
    subtext: "Answer 4 quick preference questions to discover your personalized fragrance match with 98% olfactory confidence.",
    primaryCta: { label: "START 30-SEC CONSULTATION", href: "/quiz" },
    secondaryCta: { label: "EXPLORE BEST SELLERS", href: "/parfums" },
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    editionName: "Noir Wood Intense",
    price: "৳ 7,200",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-[#F8F5EF] border-b border-[#E4DDD2] overflow-hidden px-6 md:px-12 py-16 md:py-24">
      <div className="relative max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Editorial Text */}
        <div className="lg:col-span-6 space-y-8 text-left transition-all duration-500">
          <div className="inline-flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#8A6A44]" />
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              {slide.tag}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111] leading-[1.02]">
              {slide.title.split(" ")[0]} <br />
              <span className="italic font-normal text-[#8A6A44]">
                {slide.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B4B4B] font-light leading-[1.75] max-w-lg pt-2">
              {slide.subtext}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={slide.primaryCta.href}
              className="px-9 py-4 bg-[#111111] text-[#F8F5EF] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#8A6A44] transition-all duration-300 shadow-md text-center flex items-center justify-center"
            >
              {slide.primaryCta.label} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href={slide.secondaryCta.href}
              className="px-9 py-4 border border-[#111111]/30 text-[#111111] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:border-[#8A6A44] hover:text-[#8A6A44] transition-all duration-300 text-center"
            >
              {slide.secondaryCta.label}
            </Link>
          </div>

          {/* Slider Progress Controls */}
          <div className="flex items-center space-x-6 pt-6 border-t border-[#E4DDD2]">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="p-2.5 rounded-full border border-[#E4DDD2] text-[#111111] hover:border-[#8A6A44] hover:text-[#8A6A44] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2.5 rounded-full border border-[#E4DDD2] text-[#111111] hover:border-[#8A6A44] hover:text-[#8A6A44] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-3 text-xs font-serif font-bold text-[#111111]">
              <span>0{slide.id}</span>
              <div className="w-24 h-1 bg-[#E4DDD2] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8A6A44] transition-all duration-500"
                  style={{ width: `${((slide.id) / HERO_SLIDES.length) * 100}%` }}
                />
              </div>
              <span>0{HERO_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Right Bottle Showcase */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] group">
            <img
              src={slide.imageUrl}
              alt={slide.editionName}
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(138,106,68,0.15)] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-[#E4DDD2] pt-4 bg-[#FFFFFF]/95 backdrop-blur-sm p-4 rounded-lg">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A6A44] block font-semibold">FEATURED EDITION</span>
                <span className="font-serif text-xl font-bold text-[#111111]">{slide.editionName}</span>
              </div>
              <span className="font-serif text-lg font-bold text-[#8A6A44]">{slide.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
