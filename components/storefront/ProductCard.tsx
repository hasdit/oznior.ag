"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

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
  id,
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
  const { wishlist, toggleWishlist, addToCart } = useUIStore();

  const isWishlisted = wishlist.includes(slug);

  const activeVariant = variants[selectedVariantIndex] || {
    volumeMl: 50,
    price: 8500,
    compareAtPrice: 10000,
    sku: "OZN-DEFAULT",
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      slug,
      volumeMl: activeVariant.volumeMl,
      price: activeVariant.price,
      imageUrl,
    });
    trackEvent("add_to_bag", { name, slug, volume: activeVariant.volumeMl, price: activeVariant.price });
  };

  return (
    <div className="group relative bg-[#FFFFFF] border border-[#E4DDD2] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#B08D57]/80 transition-all duration-300 shadow-card">
      {/* Top Media & Badges - Compact Controlled Height */}
      <div className="relative h-44 sm:h-52 w-full bg-[#F7F3EE] overflow-hidden p-3 flex items-center justify-center">
        <Badge variant="gold" className="absolute top-2.5 left-2.5 z-10 bg-[#B08D57] text-[#FFFFFF] text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
          Extrait
        </Badge>
        <button
          onClick={() => {
            toggleWishlist(slug);
            trackEvent("wishlist_add", { slug });
          }}
          className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E7DED2] text-[#1A1A1A] hover:text-[#B08D57] transition-all shadow-xs"
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-[#B08D57] text-[#B08D57]" : ""}`} />
        </button>

        {/* Product Bottle Image */}
        <div className="w-full h-full flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500">
          <img
            src={imageUrl || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"}
            alt={name}
            className="max-h-full max-w-full object-contain filter drop-shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80";
            }}
          />
        </div>
      </div>

      {/* Product Information Body - Compact & Clear */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-left">
        <div className="space-y-1.5">
          <div className="text-[10px] uppercase tracking-wider text-[#B08D57] font-bold">
            {fragranceFamily}
          </div>
          <Link href={`/parfums/${slug}`}>
            <h3 className="font-serif text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors leading-snug line-clamp-1">
              {name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1 text-[11px] text-[#555555]">
            <div className="flex text-[#B08D57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#B08D57]" />
              ))}
            </div>
            <span className="font-medium text-[#1A1A1A]">({reviewCount})</span>
          </div>
        </div>

        {/* Size Variant Selector Pills & Pricing */}
        <div className="space-y-3 pt-2 border-t border-[#E7DED2]">
          <div className="flex items-center space-x-1.5">
            {variants.map((v, idx) => (
              <button
                key={v.sku}
                onClick={() => setSelectedVariantIndex(idx)}
                className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                  selectedVariantIndex === idx
                    ? "bg-[#1A1A1A] text-[#F7F3EE]"
                    : "bg-[#F7F3EE] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                }`}
              >
                {v.volumeMl}ml
              </button>
            ))}
          </div>

          {/* Pricing & 1-Tap Quick Add Button */}
          <div className="flex items-center justify-between pt-0.5">
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif text-lg md:text-xl font-bold text-[#1A1A1A]">
                ৳ {activeVariant.price.toLocaleString()}
              </span>
              {activeVariant.compareAtPrice && (
                <span className="text-[11px] text-[#555555]/60 line-through">
                  ৳ {activeVariant.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="p-2.5 bg-[#1A1A1A] text-[#F7F3EE] rounded hover:bg-[#B08D57] transition-all shadow-xs flex items-center justify-center"
              aria-label="Add to Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
