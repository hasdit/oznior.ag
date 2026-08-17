"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface SlideData {
  id: number;
  numberStr: string;
  collectionLabel: string;
  fragranceName: string;
  italicWord: string;
  story: string;
  price: string;
  volume: string;
  concentration: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  bottleImageUrl: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    numberStr: "01",
    collectionLabel: "SIGNATURE COLLECTION",
    fragranceName: "Royale Oud",
    italicWord: "Concentré",
    story:
      "Formulated with 25-year aged wild Cambodian agarwood and French damask rose. Aged 90 days in copper vats for 18-hour projection.",
    price: "৳ 8,500",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums/royale-oud-concentre" },
    secondaryCta: { label: "View Scent Notes", href: "/parfums?family=oud" },
    bottleImageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    numberStr: "02",
    collectionLabel: "LUMINOUS RESIN SERIES",
    fragranceName: "Aeterna Amber",
    italicWord: "Gold",
    story:
      "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for a magnetic, sensual warmth.",
    price: "৳ 7,800",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums/aeterna-amber-gold" },
    secondaryCta: { label: "View Scent Notes", href: "/parfums?family=amber" },
    bottleImageUrl:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    numberStr: "03",
    collectionLabel: "PRIVATE OAK BARREL",
    fragranceName: "Noir Tobacco",
    italicWord: "Intense",
    story:
      "Raw Virginia tobacco leaf, dark cedarwood bark, and black pepper crystals macerated for 180 oak cask days.",
    price: "৳ 9,200",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums/noir-wood-intense" },
    secondaryCta: { label: "View Scent Notes", href: "/parfums?family=woody" },
    bottleImageUrl:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    numberStr: "04",
    collectionLabel: "HERITAGE BOTANICAL EDITION",
    fragranceName: "White Saffron",
    italicWord: "Royal",
    story:
      "Kashmiri white saffron paired with Italian bergamot and Tuscan leather accords for an unforgettable velvet trail.",
    price: "৳ 8,000",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums" },
    secondaryCta: { label: "View Scent Notes", href: "/parfums?family=floral" },
    bottleImageUrl:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    numberStr: "05",
    collectionLabel: "VELVET CASHMERE SERIES",
    fragranceName: "Imperial Musk",
    italicWord: "Supreme",
    story:
      "Sublime white musk, Iris butter, and Mysore sandalwood harvested for unmatched 24-hour skin persistence.",
    price: "৳ 7,500",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums" },
    secondaryCta: { label: "View Scent Notes", href: "/parfums?family=fresh" },
    bottleImageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4s Auto slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#F8F5EF] border-b border-[#E7DED2] text-[#111111] overflow-hidden lg:h-[78vh] lg:min-h-[580px] lg:max-h-[720px] flex items-center justify-center font-sans"
      aria-label="Maison OZNIOR Haute Parfumerie Hero"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        
        {/* DESKTOP LEFT (45% Width = 5 of 12 Cols) / MOBILE ORDER STACKED */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4 z-10">
          
          {/* 1. Collection Label */}
          <motion.div
            key={`label-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9C7A4D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#9C7A4D]">
              {slide.collectionLabel}
            </span>
          </motion.div>

          {/* 2. Large Fragrance Name */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]"
            >
              {slide.fragranceName} <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#9C7A4D]">{slide.italicWord}</span>
            </motion.h1>
          </AnimatePresence>

          {/* 3. Short Luxury Story */}
          <motion.p
            key={`story-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-[#555555] font-light leading-relaxed max-w-md"
          >
            {slide.story}
          </motion.p>

          {/* 4. Primary & Secondary CTA Buttons */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="flex items-center gap-3 pt-1 flex-wrap"
          >
            <Link
              href={slide.primaryCta.href}
              onClick={() => trackEvent("hero_cta_click", { cta: slide.primaryCta.label, edition: slide.fragranceName })}
              className="px-6 py-3 bg-[#111111] text-[#F8F5EF] font-bold text-xs tracking-[0.2em] uppercase rounded hover:bg-[#9C7A4D] transition-all shadow-sm flex items-center space-x-2"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="px-6 py-3 border border-[#111111]/30 text-[#111111] font-bold text-xs tracking-[0.2em] uppercase rounded hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-all"
            >
              {slide.secondaryCta.label}
            </Link>
          </motion.div>

          {/* 5. Micro Product Information (Price, Size, Concentration) */}
          <motion.div
            key={`micro-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="pt-2 flex items-center space-x-4 text-xs"
          >
            <span className="font-serif text-lg font-bold text-[#111111]">{slide.price} BDT</span>
            <span className="text-[#E7DED2]">|</span>
            <span className="text-[#555555] font-medium">{slide.volume}</span>
            <span className="text-[#E7DED2]">|</span>
            <span className="text-[#9C7A4D] font-semibold">{slide.concentration}</span>
          </motion.div>

          {/* 7. Slider Controls & Navigation Bar */}
          <div className="pt-4 border-t border-[#E7DED2] flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
                aria-label="Previous Fragrance Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
                aria-label="Next Fragrance Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#111111]">
              <span>{slide.numberStr}</span>
              <div className="w-16 h-1 bg-[#E7DED2] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#9C7A4D] transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / HERO_SLIDES.length) * 100}%` }}
                />
              </div>
              <span className="text-[#555555]">05</span>
            </div>
          </div>
        </div>

        {/* DESKTOP RIGHT (55% Width = 7 of 12 Cols) / 6. Product Image Frame */}
        <div className="lg:col-span-7 relative flex items-center justify-center max-lg:pt-2">
          <div className="relative aspect-[4/3] w-full max-w-md bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center shadow-card group">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                src={slide.bottleImageUrl}
                alt={slide.fragranceName}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 0.88 }} // Scaled 80-90% cleanly as requested
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-h-[260px] lg:max-h-[320px] w-auto object-contain filter drop-shadow-md group-hover:scale-95 transition-transform duration-500"
              />
            </AnimatePresence>

            {/* Micro Badge Overlay */}
            <div className="absolute bottom-3 left-4 right-4 bg-[#F8F5EF]/95 backdrop-blur-sm border border-[#E7DED2] p-2.5 rounded-xl flex justify-between items-center text-xs">
              <span className="font-serif font-bold text-[#111111]">{slide.fragranceName} {slide.italicWord}</span>
              <span className="font-serif font-bold text-[#9C7A4D]">{slide.price} BDT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
