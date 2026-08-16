"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

const TRENDING_SEARCHES = [
  "Cambodian Oud",
  "Damask Rose",
  "Amber Gold",
  "Discovery Coffret",
  "Night Wear",
  "Attar Oils",
];

const SUGGESTED_PRODUCTS = [
  {
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    family: "Oud • Floral • Amber",
    price: "৳ 8,500",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    family: "Amber • Cardamom",
    price: "৳ 7,800",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    family: "Cedarwood • Vetiver",
    price: "৳ 7,200",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=300&q=80",
  },
];

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackEvent("search_submit", { query });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Fragrance Directory"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex items-start justify-center pt-16 px-4"
    >
      <div className="bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Input Header Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-[#E7DED2] px-6 py-4">
          <Search className="w-5 h-5 text-[#B08D57] shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by perfume name, note (Oud, Rose), or occasion..."
            className="w-full text-base md:text-lg bg-transparent text-[#1A1A1A] placeholder-[#555555]/60 focus:outline-none"
          />
          <button
            type="button"
            onClick={closeSearch}
            className="p-2 text-[#555555] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-[#F7F3EE]"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Trending Searches */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#B08D57] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Trending Olfactory Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {TRENDING_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    trackEvent("search_submit", { query: term });
                  }}
                  className="px-3.5 py-1.5 bg-[#F7F3EE] border border-[#E7DED2] rounded-full text-xs text-[#1A1A1A] hover:border-[#B08D57] hover:bg-[#FFFFFF] transition-all font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Product Suggestions */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#B08D57] block">
              Curated Fragrance Suggestions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SUGGESTED_PRODUCTS.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/parfums/${prod.slug}`}
                  onClick={() => {
                    trackEvent("search_result_click", { slug: prod.slug });
                    closeSearch();
                  }}
                  className="group bg-[#F7F3EE] border border-[#E7DED2] p-4 rounded-xl flex items-center space-x-3 hover:border-[#B08D57] transition-all shadow-xs"
                >
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="w-12 h-16 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
                      {prod.name}
                    </h5>
                    <span className="text-[10px] text-[#555555] block">{prod.family}</span>
                    <span className="text-xs font-serif font-bold text-[#B08D57]">{prod.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Category & Collection Suggestions */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E7DED2] text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#B08D57] tracking-widest block mb-2">Categories</span>
              <ul className="space-y-1 text-[#555555]">
                <li><Link href="/parfums?family=oud" onClick={closeSearch} className="hover:text-[#B08D57]">Royal Oud Series</Link></li>
                <li><Link href="/parfums?family=amber" onClick={closeSearch} className="hover:text-[#B08D57]">Amber & Spices</Link></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#B08D57] tracking-widest block mb-2">Discovery</span>
              <ul className="space-y-1 text-[#555555]">
                <li><Link href="/quiz" onClick={closeSearch} className="hover:text-[#B08D57]">30-Sec Fragrance Finder Quiz</Link></li>
                <li><Link href="/parfums?format=discovery" onClick={closeSearch} className="hover:text-[#B08D57]">5 x 5ml Discovery Coffret (৳ 1,200)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-[#F7F3EE] px-6 py-3 border-t border-[#E7DED2] flex justify-between items-center text-xs text-[#555555]">
          <span>Press ESC to close</span>
          <Link href="/parfums" onClick={closeSearch} className="font-bold text-[#B08D57] flex items-center hover:underline">
            View All Parfums <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
