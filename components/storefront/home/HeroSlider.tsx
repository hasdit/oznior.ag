"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface SlideData {
  id: number;
  tag: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageUrl: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    tag: "NEW ARRIVALS",
    headline: "Meet the latest olfactory stories.",
    subtext: "Fresh expressions and rare materials, selected for a new beginning.",
    primaryCta: { label: "Shop new arrivals", href: "/parfums?sort=new" },
    secondaryCta: { label: "View all fragrances", href: "/parfums" },
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 2,
    tag: "DISCOVERY SETS",
    headline: "Begin with a smaller ritual.",
    subtext: "Explore a considered selection before choosing the fragrance that becomes yours.",
    primaryCta: { label: "Shop discovery sets", href: "/parfums?format=discovery" },
    secondaryCta: { label: "Find your fragrance", href: "/quiz" },
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 3,
    tag: "ROYALE OUD CONCENTRÉ",
    headline: "The art of quiet presence.",
    subtext: "Cambodian agarwood distilled in copper vats, formulated at 30% Extrait density.",
    primaryCta: { label: "Explore Royale Oud", href: "/parfums/royale-oud-concentre" },
    secondaryCta: { label: "Learn about extraction", href: "/journal" },
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 4,
    tag: "AMBER ELIXIR GOLD",
    headline: "Warmth captured in glass.",
    subtext: "Luminous Baltic amber paired with Guatemalan cardamom and vanilla crystal accords.",
    primaryCta: { label: "Shop Amber Gold", href: "/parfums/aeterna-amber-gold" },
    secondaryCta: { label: "Explore amber notes", href: "/parfums?family=amber" },
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function HeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 6s Auto-advance with Play/Pause toggle
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    trackEvent("hero_cta_click", { action: "prev_slide" });
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    trackEvent("hero_cta_click", { action: "next_slide" });
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[520px] md:h-[540px] lg:h-[580px] xl:h-[620px] bg-[#111111] text-[#FFFFFF] overflow-hidden select-none font-sans">
      {/* Full-Bleed Background Image Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.imageUrl}
            alt={slide.headline}
            className="w-full h-full object-cover object-center md:object-[center_35%] filter brightness-90 contrast-105"
          />
          {/* Subtle Scrim Gradient Overlay for Crisp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/40 to-transparent max-md:bg-gradient-to-t max-md:from-[#111111]/90 max-md:via-[#111111]/50 max-md:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Viewport Content Overlay */}
      <div className="relative z-10 max-w-[1440px] w-full h-full mx-auto px-6 md:px-16 flex flex-col justify-between py-8 md:py-12 text-left">
        
        {/* Top Spacer / Tag */}
        <div className="pt-1">
          <motion.span
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#B08D57] block"
          >
            {slide.tag}
          </motion.span>
        </div>

        {/* Center/Left Content Zone */}
        <div className="max-w-xl space-y-4 my-auto">
          {/* Headline Typography (Playfair Display / Serif) */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F7F3EE] leading-[1.1]"
            >
              {slide.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Subtext Body */}
          <motion.p
            key={`subtext-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#F7F3EE]/85 font-light leading-[1.65] max-w-lg"
          >
            {slide.subtext}
          </motion.p>

          {/* CTA Action Buttons Group */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            {/* Primary Button (Cream Solid Container + Dark Text + Arrow) */}
            <Link
              href={slide.primaryCta.href}
              onClick={() => trackEvent("hero_cta_click", { label: slide.primaryCta.label })}
              className="px-6 py-3 bg-[#F7F3EE] text-[#111111] font-semibold text-xs tracking-wider rounded-xs hover:bg-[#B08D57] hover:text-[#FFFFFF] transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 text-center"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            {/* Secondary Link (Clean Underline) */}
            <Link
              href={slide.secondaryCta.href}
              className="px-2 py-3 text-xs text-[#F7F3EE] hover:text-[#B08D57] font-medium tracking-wide underline underline-offset-8 decoration-1 decoration-[#F7F3EE]/40 hover:decoration-[#B08D57] transition-all text-center sm:text-left"
            >
              {slide.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        {/* Bottom Control Bar ([<] [— — — —] [▶] [>]) */}
        <div className="flex items-center space-x-3 pt-4 pb-1">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-8 h-8 border border-[#FFFFFF]/40 hover:border-[#FFFFFF] flex items-center justify-center text-[#FFFFFF] transition-colors rounded-xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Horizontal Slide Indicators */}
          <div className="flex items-center space-x-2 px-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className="py-2 focus:outline-none"
                aria-label={`Go to slide ${s.id}`}
              >
                <div
                  className={`h-[2px] transition-all duration-500 ${
                    idx === currentSlideIndex
                      ? "w-8 bg-[#FFFFFF]"
                      : "w-5 bg-[#FFFFFF]/30 hover:bg-[#FFFFFF]/60"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 border border-[#FFFFFF]/40 hover:border-[#FFFFFF] flex items-center justify-center text-[#FFFFFF] transition-colors rounded-xs"
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-8 h-8 border border-[#FFFFFF]/40 hover:border-[#FFFFFF] flex items-center justify-center text-[#FFFFFF] transition-colors rounded-xs"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
