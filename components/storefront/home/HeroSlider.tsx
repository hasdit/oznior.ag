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
      "Formulated with 25-year aged wild Cambodian agarwood and damask rose. Macerated 90 days for 18-hour projection.",
    price: "৳ 8,500",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums/royale-oud-concentre" },
    secondaryCta: { label: "View Notes", href: "/parfums?family=oud" },
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
      "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for magnetic warmth.",
    price: "৳ 7,800",
    volume: "50ml",
    concentration: "Extrait de Parfum (30%)",
    primaryCta: { label: "Discover Fragrance", href: "/parfums/aeterna-amber-gold" },
    secondaryCta: { label: "View Notes", href: "/parfums?family=amber" },
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
    secondaryCta: { label: "View Notes", href: "/parfums?family=woody" },
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
    secondaryCta: { label: "View Notes", href: "/parfums?family=floral" },
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
    secondaryCta: { label: "View Notes", href: "/parfums?family=fresh" },
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
      className="relative w-full bg-[#F8F5EF] border-b border-[#E7DED2] text-[#111111] overflow-hidden py-8 lg:py-10 max-h-[750px] flex items-center justify-center font-sans"
      aria-label="OZNIOR Luxury Fragrance E-Commerce Hero"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        
        {/* DESKTOP LEFT (Top Left -> Below -> Below) / MOBILE ORDER (Label -> Name -> Story -> Price -> CTA -> Bottle) */}
        <div className="lg:col-span-6 space-y-4 z-10 flex flex-col justify-center">
          
          {/* 1. Collection Label */}
          <motion.div
            key={`label-${slide.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9C7A4D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#9C7A4D]">
              {slide.collectionLabel}
            </span>
          </motion.div>

          {/* 2. Fragrance Name */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight"
            >
              {slide.fragranceName} <span className="italic font-normal text-[#9C7A4D]">{slide.italicWord}</span>
            </motion.h1>
          </AnimatePresence>

          {/* 3. 2-Line Story */}
          <motion.p
            key={`story-${slide.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed max-w-lg"
          >
            {slide.story}
          </motion.p>

          {/* MOBILE ORDER ONLY: Price comes before CTAs on mobile */}
          <div className="block lg:hidden pt-1">
            <span className="font-serif text-lg font-bold text-[#111111]">{slide.price} BDT</span>
            <span className="text-xs text-[#555555] ml-2">({slide.volume} • {slide.concentration})</span>
          </div>

          {/* 4. Primary CTA & Secondary CTA */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-3 pt-1 flex-wrap"
          >
            <Link
              href={slide.primaryCta.href}
              onClick={() => trackEvent("hero_cta_click", { cta: slide.primaryCta.label, edition: slide.fragranceName })}
              className="px-6 py-3 bg-[#111111] text-[#F8F5EF] font-bold text-xs tracking-[0.2em] uppercase rounded hover:bg-[#9C7A4D] transition-all shadow-xs flex items-center space-x-2"
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

          {/* DESKTOP ORDER ONLY: Price, Size, Concentration below CTAs */}
          <motion.div
            key={`micro-${slide.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="hidden lg:flex items-center space-x-4 text-xs pt-1"
          >
            <span className="font-serif text-lg font-bold text-[#111111]">{slide.price} BDT</span>
            <span className="text-[#E7DED2]">|</span>
            <span className="text-[#555555] font-medium">{slide.volume}</span>
            <span className="text-[#E7DED2]">|</span>
            <span className="text-[#9C7A4D] font-semibold">{slide.concentration}</span>
          </motion.div>

          {/* Slider Progress Navigation Bar */}
          <div className="pt-3 border-t border-[#E7DED2] flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="p-1.5 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
                aria-label="Previous Fragrance Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-1.5 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
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

        {/* RIGHT SIDE: Bottle Image (Max 65% width, fully visible without extreme zoom) */}
        <div className="lg:col-span-6 relative flex items-center justify-center max-lg:pt-2">
          <div className="relative aspect-[4/3] w-full max-w-md bg-[#FFFFFF] border border-[#E7DED2] rounded-xl overflow-hidden p-4 flex flex-col items-center justify-center shadow-xs group">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                src={slide.bottleImageUrl}
                alt={slide.fragranceName}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 0.85 }} // Fully visible without extreme zoom
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-h-[220px] lg:max-h-[260px] w-auto object-contain filter drop-shadow-sm group-hover:scale-90 transition-transform duration-300"
              />
            </AnimatePresence>

            {/* Micro Badge */}
            <div className="absolute bottom-3 left-4 right-4 bg-[#F8F5EF]/95 border border-[#E7DED2] p-2 rounded-lg flex justify-between items-center text-xs">
              <span className="font-serif font-bold text-[#111111]">{slide.fragranceName} {slide.italicWord}</span>
              <span className="font-serif font-bold text-[#9C7A4D]">{slide.price} BDT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
