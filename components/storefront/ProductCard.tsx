"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface VariantOption {
  volumeMl: number;
  price: number;
  compareAtPrice?: number;
  sku: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  fragranceFamily: string;
  topNotes: string[];
  imageUrl: string;
  variants: VariantOption[];
  rating?: number;
  reviewCount?: number;
}

export default function ProductCard({
  name,
  slug,
  fragranceFamily,
  topNotes,
  imageUrl,
  variants,
  rating = 4.9,
  reviewCount = 124,
}: ProductCardProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const activeVariant = variants[selectedVariantIndex] || {
    volumeMl: 50,
    price: 8500,
    compareAtPrice: 10000,
    sku: "OZN-DEFAULT",
  };

  return (
    <div className="group relative bg-[#FFFFFF] border border-[#E4DDD2] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#8A6A44]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
      {/* Top Media & Badges */}
      <div className="relative aspect-[3/4] w-full bg-[#F8F5EF] overflow-hidden p-6 flex items-center justify-center">
        <Badge variant="gold" className="absolute top-3 left-3 z-10 bg-[#8A6A44] text-[#F8F5EF]">
          Extrait de Parfum
        </Badge>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E4DDD2] text-[#111111] hover:text-[#8A6A44] transition-all shadow-sm"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#8A6A44] text-[#8A6A44]" : ""}`} />
        </button>

        {/* Product Bottle Image */}
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"}
            alt={name}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80";
            }}
          />
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#8A6A44] font-semibold">
            {fragranceFamily} • {topNotes.slice(0, 2).join(", ")}
          </div>
          <Link href={`/parfums/${slug}`}>
            <h3 className="font-serif text-2xl font-bold text-[#111111] group-hover:text-[#8A6A44] transition-colors leading-snug">
              {name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1.5 text-xs text-[#4B4B4B]">
            <div className="flex text-[#8A6A44]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#8A6A44]" />
              ))}
            </div>
            <span className="text-xs font-medium">({reviewCount})</span>
          </div>
        </div>

        {/* Size Variant Selector Pills */}
        <div className="space-y-4 pt-3 border-t border-[#E4DDD2]">
          <div className="flex items-center space-x-2">
            {variants.map((v, idx) => (
              <button
                key={v.sku}
                onClick={() => setSelectedVariantIndex(idx)}
                className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded transition-all ${
                  selectedVariantIndex === idx
                    ? "bg-[#111111] text-[#F8F5EF] font-bold shadow-sm"
                    : "bg-[#F8F5EF] border border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                }`}
              >
                {v.volumeMl}ml
              </button>
            ))}
          </div>

          {/* Pricing & Quick Add Button */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-2xl font-bold text-[#111111]">
                ৳ {activeVariant.price.toLocaleString()}
              </span>
              {activeVariant.compareAtPrice && (
                <span className="text-xs text-[#4B4B4B]/60 line-through">
                  ৳ {activeVariant.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button className="p-3 bg-[#111111] text-[#F8F5EF] rounded hover:bg-[#8A6A44] transition-all shadow-md flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
