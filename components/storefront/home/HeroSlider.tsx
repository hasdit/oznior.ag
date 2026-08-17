"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface SlideData {
  id: number;
  numberStr: string;
  tag: string;
  line1: string;
  line2: string;
  line3: string;
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
    line1: "ROYALE",
    line2: "OUD",
    line3: "CONCENTRÉ",
    subtext:
      "Distilled from 25-year aged wild Cambodian agarwood and French damask rose. Aged 90 days in copper vats for unmistakable 18-hour projection.",
    primaryCta: { label: "EXPLORE ROYALE OUD", href: "/parfums/royale-oud-concentre" },
    secondaryCta: { label: "30-SEC QUIZ", href: "/quiz" },
    imageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80",
    editionName: "Royale Oud Concentré",
    price: "৳ 8,500 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Signature Series",
  },
  {
    id: 2,
    numberStr: "02",
    tag: "LUMINOUS RESIN ACCORD",
    line1: "AMBER",
    line2: "ELIXIR",
    line3: "GOLD",
    subtext:
      "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for a magnetic sensual warmth that captivates every room.",
    primaryCta: { label: "EXPLORE AMBER GOLD", href: "/parfums/aeterna-amber-gold" },
    secondaryCta: { label: "VIEW ALL NOTES", href: "/parfums?family=amber" },
    imageUrl:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=80",
    editionName: "Amber Elixir Gold",
    price: "৳ 7,800 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Luminous Series",
  },
  {
    id: 3,
    numberStr: "03",
    tag: "EXECUTIVE SMOKY OUD",
    line1: "NOIR",
    line2: "TOBACCO",
    line3: "INTENSE",
    subtext:
      "Raw Virginia tobacco leaf, dark cedarwood bark, and black pepper crystals macerated for 180 oak cask days to forge an executive signature.",
    primaryCta: { label: "EXPLORE NOIR TOBACCO", href: "/parfums/noir-wood-intense" },
    secondaryCta: { label: "ORDER SAMPLE (৳ 350)", href: "/checkout" },
    imageUrl:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=80",
    editionName: "Noir Tobacco Intense",
    price: "৳ 9,200 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Private Barrel",
  },
  {
    id: 4,
    numberStr: "04",
    tag: "CREAMY LEATHER & SPICE",
    line1: "WHITE",
    line2: "SAFFRON",
    line3: "ROYAL",
    subtext:
      "Kashmiri white saffron paired with Italian bergamot and Tuscan leather accords for an unforgettable velvet trail.",
    primaryCta: { label: "DISCOVER WHITE SAFFRON", href: "/parfums" },
    secondaryCta: { label: "DISCOVERY SET (৳ 1,200)", href: "/checkout" },
    imageUrl:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1600&q=80",
    editionName: "White Saffron Royal",
    price: "৳ 8,000 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Heritage Edition",
  },
  {
    id: 5,
    numberStr: "05",
    tag: "VELVET CASHMERE TRAIL",
    line1: "IMPERIAL",
    line2: "MUSK",
    line3: "SUPREME",
    subtext:
      "Sublime white musk, Iris butter, and Mysore sandalwood harvested for unmatched 24-hour skin persistence.",
    primaryCta: { label: "DISCOVER IMPERIAL MUSK", href: "/parfums" },
    secondaryCta: { label: "EXPLORE COLLECTION", href: "/collections" },
    imageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80",
    editionName: "Imperial Musk Supreme",
    price: "৳ 7,500 BDT",
    volume: "50ml Extrait (30%)",
    collection: "Velvet Series",
  },
];

export default function HeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 2000ms (2s) Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    trackEvent("hero_cta_click", { action: "next_slide", slide: slide.editionName });
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[900px] lg:min-h-screen bg-[#F5F1EB] text-[#111111] overflow-hidden flex flex-col justify-between"
      aria-label="OZNIOR Luxury Editorial Campaign Hero"
    >
      {/* MOBILE UNIFIED COMPOSITION (Background Image + Overlaid Content) */}
      <div className="lg:hidden absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.imageUrl}
            alt={slide.editionName}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover filter brightness-75 contrast-110"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/50 to-transparent" />
      </div>

      {/* DESKTOP 35% / 65% EDITORIAL SPLIT */}
      <div className="relative z-10 w-full min-h-[900px] lg:min-h-screen grid grid-cols-1 lg:grid-cols-12 px-6 md:px-12 lg:px-20 py-12 lg:py-20 items-stretch">
        
        {/* LEFT EDITORIAL CONTENT ZONE (35% Width = 4 of 12 cols on LG) */}
        <div className="lg:col-span-5 flex flex-col justify-between z-20 space-y-8 text-left py-6">
          
          {/* Top Tag & Editorial Subheader */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5"
          >
            <Sparkles className="w-4 h-4 text-[#9C7A4D]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#9C7A4D]">
              {slide.tag}
            </span>
          </motion.div>

          {/* Massive Editorial Magazine Headline */}
          <div className="space-y-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${slide.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#111111] lg:text-[#111111] max-lg:text-[#FFFFFF] leading-[0.92]"
              >
                <div className="block">{slide.line1}</div>
                <div className="italic font-normal text-[#9C7A4D] block">{slide.line2}</div>
                <div className="block text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-normal text-[#111111] lg:text-[#111111] max-lg:text-[#FFFFFF]/90">
                  {slide.line3}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Storyteller Subtext */}
          <motion.p
            key={`subtext-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#111111]/80 lg:text-[#111111]/80 max-lg:text-[#FFFFFF]/80 font-light leading-[1.75] max-w-md"
          >
            {slide.subtext}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <Link
              href={slide.primaryCta.href}
              onClick={() => trackEvent("hero_cta_click", { cta: slide.primaryCta.label })}
              className="px-8 py-4 bg-[#111111] text-[#F5F1EB] font-bold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#9C7A4D] transition-all duration-300 shadow-lg text-center flex items-center justify-center space-x-2"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="px-8 py-4 border border-[#111111]/30 lg:border-[#111111]/30 max-lg:border-[#FFFFFF]/40 text-[#111111] lg:text-[#111111] max-lg:text-[#FFFFFF] font-bold text-xs tracking-[0.22em] uppercase rounded hover:border-[#9C7A4D] hover:text-[#9C7A4D] transition-all duration-300 text-center"
            >
              {slide.secondaryCta.label}
            </Link>
          </motion.div>

          {/* LUXURY PROGRESS NAVIGATION (Bottom-Left: 01 ——■■■■□□□□—— 05) */}
          <div className="pt-8 border-t border-[#111111]/15 lg:border-[#111111]/15 max-lg:border-[#FFFFFF]/20 flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-xs font-serif font-bold text-[#111111] lg:text-[#111111] max-lg:text-[#FFFFFF]">
              <span className="text-sm font-serif">{slide.numberStr}</span>
              
              {/* Clickable Progress Fill Bars */}
              <div className="flex items-center space-x-1.5">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      trackEvent("hero_cta_click", { action: "select_slide", slide: s.editionName });
                    }}
                    className="group py-2 focus:outline-none"
                    aria-label={`Go to slide ${s.numberStr}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === currentSlideIndex
                          ? "w-8 bg-[#9C7A4D]"
                          : "w-3 bg-[#111111]/20 lg:bg-[#111111]/20 max-lg:bg-[#FFFFFF]/30 group-hover:bg-[#9C7A4D]/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <span className="text-xs text-[#9C7A4D]">05</span>
            </div>

            <span className="text-[10px] text-[#9C7A4D] font-semibold uppercase tracking-widest hidden sm:inline">
              {isPaused ? "Paused" : "Autoplay (2s)"}
            </span>
          </div>
        </div>

        {/* RIGHT DOMINANT VISUAL AREA (65% Width = 7 of 12 cols on LG) */}
        <div className="hidden lg:flex lg:col-span-7 relative flex-col justify-end items-end pl-12">
          
          {/* Main Hero Visual Photography Canvas */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-[#111111]/10 bg-[#FFFFFF] shadow-[0_30px_70px_rgba(0,0,0,0.06)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                src={slide.imageUrl}
                alt={slide.editionName}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* FLOATING GLASS INFORMATION PANEL (Bottom: 40px, Right: 40px) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`glass-${slide.id}`}
              initial={{ opacity: 0, y: 30, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-30 bottom-10 right-10 max-w-sm bg-white/20 backdrop-blur-xl border border-white/40 p-6 rounded-2xl text-white text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] space-y-3"
            >
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">
                <span>{slide.collection}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-white font-medium">{slide.volume}</span>
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-white leading-tight">
                  {slide.editionName}
                </h4>
                <p className="text-xs text-white/80 font-light pt-1">
                  Hand-crafted small batch extraits.
                </p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/20">
                <span className="font-serif text-xl font-bold text-white">{slide.price}</span>
                <Link
                  href={slide.primaryCta.href}
                  className="px-4 py-2 bg-white text-[#111111] font-bold text-[11px] uppercase tracking-widest rounded hover:bg-[#9C7A4D] hover:text-white transition-all shadow-sm"
                >
                  DISCOVER →
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
