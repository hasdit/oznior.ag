"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, MessageCircle, HelpCircle, Truck, User, Heart, Sparkles, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function MobileDrawer() {
  const { isMobileDrawerOpen, closeMobileDrawer, openFinder } = useUIStore();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!isMobileDrawerOpen) return null;

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex justify-start"
    >
      <div className="bg-[#F7F3EE] w-full max-w-sm h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
        {/* Top Header Bar */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7DED2] pb-4">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#1A1A1A]">
              OZNIOR
            </span>
            <button
              onClick={closeMobileDrawer}
              className="p-2 text-[#555555] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-[#FFFFFF]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Accordion Navigation */}
          <nav className="space-y-3 font-sans text-left">
            <Link
              href="/parfums?sort=new"
              onClick={closeMobileDrawer}
              className="block py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase hover:text-[#B08D57]"
            >
              New Arrivals
            </Link>

            {/* Shop Accordion */}
            <div className="border-b border-[#E7DED2] pb-2">
              <button
                onClick={() => toggleAccordion("shop")}
                className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase"
              >
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 text-[#B08D57] transition-transform ${openAccordion === "shop" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "shop" && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#555555]">
                  <Link href="/parfums?wearer=him" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">For Him</Link>
                  <Link href="/parfums?wearer=her" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">For Her</Link>
                  <Link href="/parfums?wearer=unisex" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Unisex Extrait</Link>
                  <Link href="/parfums?family=oud" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Royal Oud Series</Link>
                  <Link href="/parfums?family=amber" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Amber & Spices</Link>
                </div>
              )}
            </div>

            {/* Collections Accordion */}
            <div className="border-b border-[#E7DED2] pb-2">
              <button
                onClick={() => toggleAccordion("collections")}
                className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase"
              >
                <span>Collections</span>
                <ChevronDown className={`w-4 h-4 text-[#B08D57] transition-transform ${openAccordion === "collections" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "collections" && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#555555]">
                  <Link href="/collections/signature" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Signature Series</Link>
                  <Link href="/collections/exclusive" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Exclusive Line</Link>
                  <Link href="/collections/bestsellers" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Best Sellers</Link>
                </div>
              )}
            </div>

            {/* Discovery Accordion */}
            <div className="border-b border-[#E7DED2] pb-2">
              <button
                onClick={() => toggleAccordion("discovery")}
                className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase"
              >
                <span>Discovery</span>
                <ChevronDown className={`w-4 h-4 text-[#B08D57] transition-transform ${openAccordion === "discovery" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "discovery" && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#555555]">
                  <button onClick={() => { closeMobileDrawer(); openFinder(); }} className="block text-left text-[#B08D57] font-bold">
                    ✨ 30s Fragrance Finder Quiz
                  </button>
                  <Link href="/parfums?format=discovery" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">5 x 5ml Discovery Coffret</Link>
                </div>
              )}
            </div>

            {/* Gifts Accordion */}
            <div className="border-b border-[#E7DED2] pb-2">
              <button
                onClick={() => toggleAccordion("gifts")}
                className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase"
              >
                <span>Gifts</span>
                <ChevronDown className={`w-4 h-4 text-[#B08D57] transition-transform ${openAccordion === "gifts" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "gifts" && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#555555]">
                  <Link href="/parfums?gifts=him" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Gifts for Him</Link>
                  <Link href="/parfums?gifts=her" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Gifts for Her</Link>
                  <Link href="/parfums?gifts=sets" onClick={closeMobileDrawer} className="block hover:text-[#B08D57]">Gift Sets</Link>
                </div>
              )}
            </div>

            <Link
              href="/parfums?filter=offers"
              onClick={closeMobileDrawer}
              className="block py-2 text-sm font-bold tracking-wider text-[#B08D57] uppercase"
            >
              Offers
            </Link>

            <Link
              href="/journal"
              onClick={closeMobileDrawer}
              className="block py-2 text-sm font-bold tracking-wider text-[#1A1A1A] uppercase hover:text-[#B08D57]"
            >
              The OZNIOR Edit
            </Link>
          </nav>
        </div>

        {/* Bottom Utility Actions */}
        <div className="pt-6 border-t border-[#E7DED2] space-y-4 text-xs text-[#555555] text-left">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/account"
              onClick={closeMobileDrawer}
              className="flex items-center space-x-2 p-3 bg-[#FFFFFF] border border-[#E7DED2] rounded-lg text-[#1A1A1A] font-semibold"
            >
              <User className="w-4 h-4 text-[#B08D57]" />
              <span>Account</span>
            </Link>
            <Link
              href="/wishlist"
              onClick={closeMobileDrawer}
              className="flex items-center space-x-2 p-3 bg-[#FFFFFF] border border-[#E7DED2] rounded-lg text-[#1A1A1A] font-semibold"
            >
              <Heart className="w-4 h-4 text-[#B08D57]" />
              <span>Wishlist</span>
            </Link>
          </div>

          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center space-x-2 p-3 bg-[#2F6F4F] text-[#FFFFFF] font-bold rounded-lg uppercase tracking-wider text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp 1-Tap Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
}
