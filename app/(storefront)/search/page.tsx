"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { Suspense } from "react";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const allProducts = [
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
    {
      id: "p3",
      name: "Noir Wood Intense",
      slug: "noir-wood-intense",
      fragranceFamily: "Cedarwood • Vetiver • Pepper",
      topNotes: ["Cedarwood", "Vetiver", "Black Pepper"],
      imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 30, price: 4800, sku: "OZN-NWD-30" },
        { volumeMl: 50, price: 7200, compareAtPrice: 8500, sku: "OZN-NWD-50" },
        { volumeMl: 100, price: 11800, sku: "OZN-NWD-100" },
      ],
    },
  ];

  const results = query
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.fragranceFamily.toLowerCase().includes(query.toLowerCase())
      )
    : allProducts;

  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-10 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Search className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">SEARCH RESULTS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
          {query ? `Results for "${query}"` : "ALL FRAGRANCE EDITIONS"}
        </h1>
        <p className="text-sm text-[#555555]">
          Showing {results.length} matching haute parfumerie formulations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {results.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-sm font-bold text-[#B08D57]">Loading search...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
