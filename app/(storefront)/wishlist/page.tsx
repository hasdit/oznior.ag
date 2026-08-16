"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useUIStore } from "@/lib/store";
import ProductCard from "@/components/storefront/ProductCard";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useUIStore();

  const mockWishlistProducts = [
    {
      id: "p1",
      name: "Royale Oud Concentré",
      slug: "royale-oud-concentre",
      fragranceFamily: "Oud • Floral • Amber",
      topNotes: ["Bergamot", "Saffron"],
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 30, price: 5500, sku: "OZN-ROY-30" },
        { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-ROY-50" },
        { volumeMl: 100, price: 14000, sku: "OZN-ROY-100" },
      ],
    },
    {
      id: "p2",
      name: "Aeterna Amber Gold",
      slug: "aeterna-amber-gold",
      fragranceFamily: "Amber • Cardamom",
      topNotes: ["Golden Amber", "Vanilla"],
      imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 30, price: 5000, sku: "OZN-AMB-30" },
        { volumeMl: 50, price: 7800, compareAtPrice: 9000, sku: "OZN-AMB-50" },
        { volumeMl: 100, price: 12500, sku: "OZN-AMB-100" },
      ],
    },
  ];

  const filteredProducts = mockWishlistProducts.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-10 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Heart className="w-5 h-5 fill-[#B08D57]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">YOUR SAVED EDITIONS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">WISHLIST</h1>
        <p className="text-sm text-[#555555]">
          Curated selection of your preferred haute parfumerie editions.
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4 bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl p-12">
          <Heart className="w-12 h-12 text-[#B08D57] mx-auto opacity-30" />
          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Your Wishlist is Empty</h3>
          <p className="text-sm text-[#555555] max-w-md mx-auto">
            Explore our collection and click the heart icon on any fragrance to save it to your wishlist.
          </p>
          <Link
            href="/parfums"
            className="inline-flex items-center px-8 py-3.5 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#B08D57] transition-all"
          >
            EXPLORE EXTRAIT COLLECTION <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      )}
    </div>
  );
}
