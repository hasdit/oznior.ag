"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface SlideData {
  id: number;
  numberStr: string;
  tag: string;
  headline: string;
  italicWord: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageUrl: string;
  editionName: string;
  price: string;
  volume: string;
  collection: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    numberStr: "01",
    tag: "PARISIAN EXTRAIT DE PARFUM",
    headline: "ROYALE OUD",
    italicWord: "CONCENTRÉ",
    subtext:
      "Formulated with 25-year aged wild Cambodian agarwood & damask rose. Aged 90 days in copper vats for 18-hour projection.",
    primaryCta: { label: "EXPLORE ROYALE OUD", href: "/parfums/royale-oud-concentre" },
    secondaryCta: { label: "30-SEC QUIZ", href: "/quiz" },
    imageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    editionName: "Royale Oud Concentré",
    price: "৳ 8,500 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Signature Series",
  },
  {
    id: 2,
    numberStr: "02",
    tag: "LUMINOUS RESIN ACCORD",
    headline: "AETERNA AMBER",
    italicWord: "GOLD",
    subtext:
      "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for magnetic sensual warmth.",
    primaryCta: { label: "EXPLORE AMBER GOLD", href: "/parfums/aeterna-amber-gold" },
    secondaryCta: { label: "VIEW ALL NOTES", href: "/parfums?family=amber" },
    imageUrl:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    editionName: "Aeterna Amber Gold",
    price: "৳ 7,800 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Luminous Series",
  },
  {
    id: 3,
    numberStr: "03",
    tag: "EXECUTIVE SMOKY OUD",
    headline: "NOIR TOBACCO",
    italicWord: "INTENSE",
    subtext:
      "Raw Virginia tobacco leaf, dark cedarwood bark, and black pepper crystals macerated for 180 oak cask days.",
    primaryCta: { label: "EXPLORE NOIR TOBACCO", href: "/parfums/noir-wood-intense" },
    secondaryCta: { label: "ORDER SAMPLE (৳ 350)", href: "/checkout" },
    imageUrl:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    editionName: "Noir Tobacco Intense",
    price: "৳ 9,200 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Private Barrel",
  },
  {
    id: 4,
    numberStr: "04",
    tag: "CREAMY LEATHER & SPICE",
    headline: "WHITE SAFFRON",
    italicWord: "ROYAL",
    subtext:
      "Kashmiri white saffron paired with Italian bergamot and Tuscan leather accords for an unforgettable velvet trail.",
    primaryCta: { label: "DISCOVER SAFFRON", href: "/parfums" },
    secondaryCta: { label: "DISCOVERY SET (৳ 1,200)", href: "/checkout" },
    imageUrl:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    editionName: "White Saffron Royal",
    price: "৳ 8,000 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Heritage Edition",
  },
  {
    id: 5,
    numberStr: "05",
    tag: "VELVET CASHMERE TRAIL",
    headline: "IMPERIAL MUSK",
    italicWord: "SUPREME",
    subtext:
      "Sublime white musk, Iris butter, and Mysore sandalwood harvested for unmatched 24-hour skin persistence.",
    primaryCta: { label: "DISCOVER MUSK", href: "/parfums" },
    secondaryCta: { label: "ALL COLLECTIONS", href: "/collections" },
    imageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    editionName: "Imperial Musk Supreme",
    price: "৳ 7,500 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Velvet Series",
  },
];

export default function HeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4000ms Auto-advance for comfortable reading
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#F7F3EE] border-b border-[#E7DED2] text-[#111111] overflow-hidden lg:h-[75vh] lg:min-h-[580px] lg:max-h-[720px] flex items-center justify-center"
      aria-label="OZNIOR Luxury Commerce Hero"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        
        {/* LEFT COLUMN: Content Zone (6 of 12 Cols on LG) */}
        <div className="lg:col-span-6 space-y-5 z-10">
          
          {/* Badge */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9C7A4D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#9C7A4D]">
              {slide.tag}
            </span>
          </motion.div>

          {/* Headline - Byredo / Le Labo Style Editorial Serif */}
          <div className="space-y-1">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${slide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05]"
              >
                {slide.headline} <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#9C7A4D]">{slide.italicWord}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <motion.p
            key={`subtext-${slide.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm md:text-base text-[#555555] font-light leading-relaxed max-w-lg"
          >
            {slide.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              href={slide.primaryCta.href}
              onClick={() => trackEvent("hero_cta_click", { cta: slide.primaryCta.label })}
              className="px-7 py-3.5 bg-[#111111] text-[#F7F3EE] font-bold text-xs tracking-[0.2em] uppercase rounded hover:bg-[#9C7A4D] transition-all duration-300 shadow-sm flex items-center space-x-2"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="px-7 py-3.5 border border-[#111111]/30 text-[#111111] font-bold text-xs tracking-[0.2em] uppercase rounded hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-all duration-300"
            >
              {slide.secondaryCta.label}
            </Link>
          </motion.div>

          {/* Minimal Controls & Progress Indicator */}
          <div className="flex items-center space-x-6 pt-4 border-t border-[#E7DED2]">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-full border border-[#E7DED2] text-[#111111] hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#111111]">
              <span>{slide.numberStr}</span>
              <div className="w-16 h-1 bg-[#E7DED2] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#9C7A4D] transition-all duration-500"
                  style={{ width: `${((currentSlideIndex + 1) / HERO_SLIDES.length) * 100}%` }}
                />
              </div>
              <span className="text-[#555555]">05</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Showcase Canvas (6 of 12 Cols on LG) */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-lg bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center shadow-card group">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                src={slide.imageUrl}
                alt={slide.editionName}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-h-[280px] lg:max-h-[340px] w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </AnimatePresence>

            {/* Subtle Commerce Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#F7F3EE]/95 backdrop-blur-sm border border-[#E7DED2] p-3 rounded-xl flex justify-between items-center text-left">
              <div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#9C7A4D] block">{slide.collection}</span>
                <span className="font-serif font-bold text-base text-[#111111]">{slide.editionName}</span>
              </div>
              <div className="text-right">
                <span className="font-serif font-bold text-base text-[#9C7A4D] block">{slide.price}</span>
                <span className="text-[10px] text-[#555555] font-medium">{slide.volume}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
