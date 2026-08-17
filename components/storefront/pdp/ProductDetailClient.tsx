"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";
import ProductCard from "@/components/storefront/ProductCard";

export interface VariantOption {
  volumeMl: number;
  price: number;
  compareAtPrice?: number;
  sku: string;
}

export interface ProductDetailProps {
  id: string;
  name: string;
  slug: string;
  category: string;
  fragranceFamily: string;
  gender: string;
  occasion: string;
  season: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  galleryImages: string[];
  variants: VariantOption[];
  relatedProducts: any[];
}

export default function ProductDetailClient({
  id,
  name,
  slug,
  category,
  fragranceFamily,
  gender,
  occasion,
  season,
  description,
  topNotes,
  heartNotes,
  baseNotes,
  galleryImages,
  variants,
  relatedProducts,
}: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(1); // Default 50ml
  const [quantity, setQuantity] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("notes");

  const { wishlist, toggleWishlist, addToCart } = useUIStore();
  const isWishlisted = wishlist.includes(slug);

  const activeVariant = variants[selectedVariantIndex] || variants[0];
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85"
  ];
  const mainImage = images[selectedImageIndex] || images[0];

  // 3-Second Auto-Slide Gallery
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id,
        name,
        slug,
        volumeMl: activeVariant.volumeMl,
        price: activeVariant.price,
        imageUrl: mainImage,
      });
    }
    trackEvent("add_to_bag", { name, slug, volume: activeVariant.volumeMl, price: activeVariant.price, quantity });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-[#F7F3EE] text-[#1A1A1A] min-h-screen py-6 md:py-10 px-6 md:px-12 font-sans selection:bg-[#B08D57] selection:text-[#F7F3EE] text-left pb-24 lg:pb-12">
      <div className="max-w-[1280px] mx-auto space-y-10">
        
        {/* BREADCRUMB */}
        <div className="flex items-center space-x-2 text-xs text-[#555555]">
          <Link href="/" className="hover:text-[#B08D57] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/parfums" className="hover:text-[#B08D57] transition-colors">Parfums</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-semibold">{name}</span>
        </div>

        {/* 2-COLUMN VIEWPORT-FITTED LUXURY SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: CONTROLLED HEIGHT GALLERY WITH 3S AUTO-SLIDE (6 Cols) */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-6 space-y-3"
          >
            {/* Main Image Viewport - Fixed Controlled Height for 100% PC Viewport Fit */}
            <div className="relative h-[380px] sm:h-[450px] lg:h-[480px] w-full bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-6 flex items-center justify-center shadow-card group">
              <span className="absolute top-3.5 left-3.5 z-10 text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">
                30% Extrait de Parfum
              </span>

              <button
                onClick={() => {
                  toggleWishlist(slug);
                  trackEvent("wishlist_add", { slug });
                }}
                className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E7DED2] text-[#1A1A1A] hover:text-[#B08D57] transition-all shadow-xs"
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#B08D57] text-[#B08D57]" : ""}`} />
              </button>

              <img
                key={selectedImageIndex}
                src={mainImage}
                alt={name}
                className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFFFFF]/80 border border-[#E7DED2] text-[#1A1A1A] hover:bg-[#FFFFFF] hover:text-[#B08D57] transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFFFFF]/80 border border-[#E7DED2] text-[#1A1A1A] hover:bg-[#FFFFFF] hover:text-[#B08D57] transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Clean Thumbnails Strip */}
            <div className="grid grid-cols-4 gap-2.5">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`h-16 sm:h-20 rounded-xl bg-[#FFFFFF] border overflow-hidden p-1.5 transition-all ${
                    selectedImageIndex === idx
                      ? "border-[#B08D57] shadow-sm ring-1 ring-[#B08D57]"
                      : "border-[#E7DED2] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: COMPACT VIEWPORT-FITTED BUYING ZONE (6 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            {/* Category & Title Header */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B08D57] block">
                {category} • {gender}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                {name}
              </h1>
              <p className="text-[11px] text-[#B08D57] font-semibold uppercase tracking-wider">
                {fragranceFamily}
              </p>
            </div>

            {/* Concise Story Paragraph */}
            <p className="text-xs md:text-sm text-[#555555] font-light leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Pricing */}
            <div className="flex items-baseline space-x-3 pt-1.5 border-t border-[#E7DED2]">
              <span className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                ৳ {(activeVariant.price * quantity).toLocaleString()} BDT
              </span>
              {activeVariant.compareAtPrice && (
                <span className="text-xs text-[#555555]/60 line-through">
                  ৳ {(activeVariant.compareAtPrice * quantity).toLocaleString()} BDT
                </span>
              )}
            </div>

            {/* Bottle Volume Pills */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] text-[#1A1A1A] font-bold uppercase tracking-wider block">
                Volume
              </span>
              <div className="flex items-center space-x-2.5">
                {variants.map((v, idx) => (
                  <button
                    key={v.sku}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-4 py-1.5 rounded-lg border text-center transition-all ${
                      selectedVariantIndex === idx
                        ? "bg-[#1A1A1A] border-[#1A1A1A] text-[#F7F3EE] font-bold shadow-sm"
                        : "bg-[#FFFFFF] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider block">{v.volumeMl}ml</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Counter & Add to Bag Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-[#E7DED2]">
              <div className="flex items-center border border-[#E7DED2] bg-[#FFFFFF] rounded-lg h-11 w-28 justify-between px-2.5 shrink-0">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="text-base font-bold text-[#1A1A1A] hover:text-[#B08D57] px-1.5"
                >
                  -
                </button>
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-base font-bold text-[#1A1A1A] hover:text-[#B08D57] px-1.5"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-11 bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#B08D57] font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG — ৳ {(activeVariant.price * quantity).toLocaleString()}</span>
              </button>
            </div>

            {/* Clean Accordion Details System */}
            <div className="border-t border-[#E7DED2] pt-3 space-y-2">
              
              {/* Accordion 1: Olfactory Notes */}
              <div className="border border-[#E7DED2] bg-[#FFFFFF] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "notes" ? null : "notes")}
                  className="w-full p-3 flex justify-between items-center text-left font-serif font-bold text-sm text-[#1A1A1A]"
                >
                  <span>Olfactory Accords & Scent Pyramid</span>
                  <span className="text-[#B08D57]">{openAccordion === "notes" ? "−" : "+"}</span>
                </button>
                {openAccordion === "notes" && (
                  <div className="p-3 pt-0 space-y-2 text-xs text-[#555555] border-t border-[#E7DED2]/50">
                    <div>
                      <span className="font-bold text-[#B08D57] block uppercase text-[9px]">Top Notes (0-15m)</span>
                      <span className="text-[#1A1A1A] font-medium">{topNotes.join(" · ")}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#B08D57] block uppercase text-[9px]">Heart Notes (15m-4h)</span>
                      <span className="text-[#1A1A1A] font-medium">{heartNotes.join(" · ")}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#B08D57] block uppercase text-[9px]">Base Notes (4-18h+)</span>
                      <span className="text-[#1A1A1A] font-medium">{baseNotes.join(" · ")}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Maceration & Longevity */}
              <div className="border border-[#E7DED2] bg-[#FFFFFF] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "craft" ? null : "craft")}
                  className="w-full p-3 flex justify-between items-center text-left font-serif font-bold text-sm text-[#1A1A1A]"
                >
                  <span>30% Extrait & Maceration Guarantee</span>
                  <span className="text-[#B08D57]">{openAccordion === "craft" ? "−" : "+"}</span>
                </button>
                {openAccordion === "craft" && (
                  <div className="p-3 pt-0 text-xs text-[#555555] leading-relaxed border-t border-[#E7DED2]/50">
                    <p>Macerated for 90 days in dark copper vessels to allow raw Cambodian agarwood, damask rose, and golden amber resins to fuse thoroughly for 18+ hour skin longevity.</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Delivery & Authenticity */}
              <div className="border border-[#E7DED2] bg-[#FFFFFF] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "shipping" ? null : "shipping")}
                  className="w-full p-3 flex justify-between items-center text-left font-serif font-bold text-sm text-[#1A1A1A]"
                >
                  <span>Express Shipping & Hologram Seal</span>
                  <span className="text-[#B08D57]">{openAccordion === "shipping" ? "−" : "+"}</span>
                </button>
                {openAccordion === "shipping" && (
                  <div className="p-3 pt-0 text-xs text-[#555555] leading-relaxed border-t border-[#E7DED2]/50">
                    <p>Free nationwide express shipping via Steadfast / RedX within 24-48 hours. Every bottle features a 100% authentic holographic seal and origin certificate.</p>
                  </div>
                )}
              </div>

            </div>

            {/* 3 Clean Minimal Pillars */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-[#555555]">
              <div className="flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Truck className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>7-Day Return</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: RELATED FRAGRANCES */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="space-y-8 pt-10 border-t border-[#E7DED2]">
            <div className="flex justify-between items-end border-b border-[#E7DED2] pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
                  RECOMMENDED COMPLEMENTS
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                  YOU MAY ALSO LIKE
                </h2>
              </div>
              <Link href="/parfums" className="text-xs uppercase tracking-widest text-[#B08D57] font-bold hover:underline">
                VIEW ALL →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ERGONOMIC MOBILE STICKY BOTTOM BUY BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] text-[#F7F3EE] p-4 border-t border-[#B08D57]/40 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div className="space-y-0.5 text-left">
            <span className="font-serif font-bold text-sm block leading-tight text-[#F7F3EE]">{name}</span>
            <span className="text-xs text-[#B08D57] font-bold block">
              {activeVariant.volumeMl}ml — ৳ {(activeVariant.price * quantity).toLocaleString()} BDT
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="h-12 px-6 bg-[#F7F3EE] text-[#111111] font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:bg-[#B08D57] hover:text-[#FFFFFF] transition-all flex items-center space-x-2 shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>ADD TO BAG</span>
          </button>
        </div>
      </div>

    </div>
  );
}
