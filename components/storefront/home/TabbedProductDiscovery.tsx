"use client";

import { useState } from "react";
import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS_DATA = {
  bestSellers: [
    {
      id: "p1",
      name: "Royale Oud Concentré",
      slug: "royale-oud-concentre",
      fragranceFamily: "Oud • Floral • Amber",
      topNotes: ["Bergamot", "Pink Pepper", "Saffron"],
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
      topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
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
  ],
  newArrivals: [
    {
      id: "p4",
      name: "Soleil Rose Extrait",
      slug: "soleil-rose-extrait",
      fragranceFamily: "Floral • Citrus",
      topNotes: ["Damask Rose", "Neroli", "Mandarin"],
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 30, price: 5200, sku: "OZN-SOL-30" },
        { volumeMl: 50, price: 8000, sku: "OZN-SOL-50" },
        { volumeMl: 100, price: 13000, sku: "OZN-SOL-100" },
      ],
    },
    {
      id: "p2",
      name: "Aeterna Amber Gold",
      slug: "aeterna-amber-gold",
      fragranceFamily: "Amber • Cardamom",
      topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
      imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 30, price: 5000, sku: "OZN-AMB-30" },
        { volumeMl: 50, price: 7800, sku: "OZN-AMB-50" },
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
        { volumeMl: 50, price: 7200, sku: "OZN-NWD-50" },
        { volumeMl: 100, price: 11800, sku: "OZN-NWD-100" },
      ],
    },
  ],
};

export default function TabbedProductDiscovery() {
  const [activeTab, setActiveTab] = useState<"bestSellers" | "newArrivals">("bestSellers");

  const products = PRODUCTS_DATA[activeTab];

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F8F5EF]">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DDD2] pb-8">
        <div className="space-y-3">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44] block">
            HAUTE PARFUMERIE DIRECTORY
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#111111]">
            CURATED EDITIONS
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-6 text-xs font-semibold uppercase tracking-widest">
          <button
            onClick={() => setActiveTab("bestSellers")}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === "bestSellers"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            BEST SELLERS
          </button>
          <button
            onClick={() => setActiveTab("newArrivals")}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === "newArrivals"
                ? "border-[#111111] text-[#111111] font-bold"
                : "border-transparent text-[#4B4B4B] hover:text-[#111111]"
            }`}
          >
            NEW ARRIVALS
          </button>
        </div>
      </div>

      {/* Product Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <div className="text-center pt-6">
        <Link
          href="/parfums"
          className="inline-flex items-center text-xs uppercase tracking-[0.22em] font-semibold text-[#8A6A44] hover:text-[#111111] transition-colors"
        >
          VIEW ALL EXTRAIT DE PARFUMS <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}
