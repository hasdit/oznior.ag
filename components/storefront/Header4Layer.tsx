"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Phone,
  HelpCircle,
  Truck,
  MessageCircle,
  Menu,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function Header4Layer() {
  const {
    cart,
    wishlist,
    openCart,
    openSearch,
    openMobileDrawer,
    openFinder,
  } = useUIStore();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleOpenMegaMenu = (menuName: string) => {
    setActiveMegaMenu(menuName);
    trackEvent("mega_menu_open", { menu: menuName });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F3EE] border-b border-[#E7DED2] shadow-sm font-sans transition-all">
      {/* LAYER 1: Announcement Bar */}
      <div className="w-full bg-[#1A1A1A] text-[#F7F3EE] text-[11px] font-semibold uppercase tracking-[0.22em] py-2 px-4 text-center">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <span className="hidden md:inline text-[#B08D57]">✓ 100% Authentic Haute Parfumerie</span>
          <span className="mx-auto md:mx-0">
            COMPLIMENTARY EXPRESS DELIVERY ACROSS BANGLADESH ON ORDERS OVER ৳ 5,000 BDT
          </span>
          <span className="hidden md:inline text-[#B08D57]">✨ 5x5ml Discovery Coffret ৳ 1,200</span>
        </div>
      </div>

      {/* LAYER 2: Utility Bar */}
      <div className="w-full bg-[#F7F3EE] border-b border-[#E7DED2] py-1.5 px-6 md:px-12 text-[11px] text-[#555555]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#B08D57] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#2F6F4F]" />
              <span className="font-semibold text-[#1A1A1A]">WhatsApp VIP Ordering</span>
            </a>
            <span className="hidden sm:inline text-[#E7DED2]">|</span>
            <Link href="/support" className="hidden sm:flex items-center space-x-1.5 hover:text-[#B08D57]">
              <HelpCircle className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Concierge Support</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <Truck className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Dhaka 24h • Countrywide 48h</span>
            </div>
            <span className="hidden sm:inline text-[#E7DED2]">|</span>
            <Link href="/policies/shipping" className="hidden sm:inline hover:text-[#B08D57]">
              Track Order
            </Link>
          </div>
        </div>
      </div>

      {/* LAYER 3: Brand Row */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between border-b border-[#E7DED2]">
        {/* Left: Mobile Hamburger & Search Trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={openMobileDrawer}
            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#B08D57] transition-colors"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              openSearch();
              trackEvent("search_open");
            }}
            className="hidden md:flex items-center space-x-3 px-4 py-2 bg-[#FFFFFF] border border-[#E7DED2] rounded-full text-xs text-[#555555] hover:border-[#B08D57] transition-all w-64 shadow-xs"
          >
            <Search className="w-4 h-4 text-[#B08D57]" />
            <span>Search Oud, Rose, Notes...</span>
          </button>
        </div>

        {/* Center: Brand Logo */}
        <Link href="/" className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#1A1A1A]">
          OZNIOR
        </Link>

        {/* Right: Actions (Account, Wishlist, Cart) */}
        <div className="flex items-center space-x-6">
          <Link
            href="/account"
            className="hidden sm:flex items-center space-x-1.5 text-xs text-[#1A1A1A] hover:text-[#B08D57] transition-colors font-medium"
          >
            <User className="w-4 h-4 text-[#B08D57]" />
            <span className="hidden lg:inline">Account</span>
          </Link>

          <Link
            href="/wishlist"
            className="hidden sm:flex items-center space-x-1.5 text-xs text-[#1A1A1A] hover:text-[#B08D57] transition-colors relative font-medium"
            onClick={() => trackEvent("wishlist_add")}
          >
            <Heart className="w-4 h-4 text-[#B08D57]" />
            <span className="hidden lg:inline">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="bg-[#B08D57] text-[#FFFFFF] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => {
              openCart();
              trackEvent("mini_cart_open");
            }}
            className="flex items-center space-x-2 text-xs font-semibold text-[#1A1A1A] bg-[#FFFFFF] border border-[#E7DED2] px-4 py-2 rounded-full hover:border-[#B08D57] transition-all shadow-xs relative"
          >
            <ShoppingBag className="w-4 h-4 text-[#B08D57]" />
            <span className="hidden sm:inline">Bag</span>
            <span className="bg-[#1A1A1A] text-[#F7F3EE] text-[10px] font-bold rounded-full px-2 py-0.5 ml-1">
              {totalCartCount}
            </span>
          </button>
        </div>
      </div>

      {/* LAYER 4: Primary Navigation & Mega Menu Trigger Bar */}
      <nav className="hidden md:block max-w-[1440px] mx-auto px-6 md:px-12 relative">
        <ul className="flex items-center justify-center space-x-10 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1A1A1A] py-3">
          <li>
            <Link href="/parfums?sort=new" className="hover:text-[#B08D57] transition-colors py-2 block">
              NEW ARRIVALS
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleOpenMegaMenu("SHOP")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <Link
              href="/parfums"
              className="flex items-center space-x-1 hover:text-[#B08D57] transition-colors py-2"
            >
              <span>SHOP</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B08D57]" />
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleOpenMegaMenu("COLLECTIONS")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <Link
              href="/collections"
              className="flex items-center space-x-1 hover:text-[#B08D57] transition-colors py-2"
            >
              <span>COLLECTIONS</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B08D57]" />
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleOpenMegaMenu("DISCOVERY")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={openFinder}
              className="flex items-center space-x-1 hover:text-[#B08D57] transition-colors py-2"
            >
              <span>DISCOVERY</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B08D57]" />
            </button>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleOpenMegaMenu("GIFTS")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <Link
              href="/parfums?category=gifts"
              className="flex items-center space-x-1 hover:text-[#B08D57] transition-colors py-2"
            >
              <span>GIFTS</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#B08D57]" />
            </Link>
          </li>

          <li>
            <Link href="/parfums?filter=offers" className="text-[#B08D57] hover:text-[#1A1A1A] transition-colors font-bold py-2 block">
              OFFERS
            </Link>
          </li>

          <li>
            <Link href="/journal" className="hover:text-[#B08D57] transition-colors py-2 block">
              THE OZNIOR EDIT
            </Link>
          </li>
        </ul>

        {/* MEGA MENU OVERLAYS */}
        {activeMegaMenu === "SHOP" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#FFFFFF] border border-[#E7DED2] shadow-2xl p-10 grid grid-cols-4 gap-8 z-50 text-left"
            onMouseEnter={() => setActiveMegaMenu("SHOP")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Shop by Wearer</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><Link href="/parfums?wearer=him" className="hover:text-[#B08D57]">For Him</Link></li>
                <li><Link href="/parfums?wearer=her" className="hover:text-[#B08D57]">For Her</Link></li>
                <li><Link href="/parfums?wearer=unisex" className="hover:text-[#B08D57]">Unisex Extrait</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Shop by Format</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><Link href="/parfums?format=edp" className="hover:text-[#B08D57]">Extrait de Parfum (30%)</Link></li>
                <li><Link href="/parfums?format=oils" className="hover:text-[#B08D57]">Attar & Pure Oils</Link></li>
                <li><Link href="/parfums?format=travel" className="hover:text-[#B08D57]">Travel Sprays (10ml)</Link></li>
                <li><Link href="/parfums?format=discovery" className="hover:text-[#B08D57]">Discovery Sample Sets</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Fragrance Families</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><Link href="/parfums?family=oud" className="hover:text-[#B08D57]">Royal Cambodian Oud</Link></li>
                <li><Link href="/parfums?family=amber" className="hover:text-[#B08D57]">Golden Amber</Link></li>
                <li><Link href="/parfums?family=woody" className="hover:text-[#B08D57]">Cedarwood & Vetiver</Link></li>
                <li><Link href="/parfums?family=floral" className="hover:text-[#B08D57]">Damask Rose & Jasmine</Link></li>
                <li><Link href="/parfums?family=fresh" className="hover:text-[#B08D57]">Fresh Citrus & Bergamot</Link></li>
              </ul>
            </div>

            <div className="bg-[#F7F3EE] p-6 rounded-xl border border-[#E7DED2] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">FEATURED CAMPAIGN</span>
              <h5 className="font-serif text-xl font-bold text-[#1A1A1A]">Royale Oud Concentré</h5>
              <p className="text-xs text-[#555555]">30% Pure Extrait concentration aged 90 days in copper vessels.</p>
              <Link href="/parfums/royale-oud-concentre" className="inline-block text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
                EXPLORE BOTTLE (৳ 8,500) →
              </Link>
            </div>
          </div>
        )}

        {activeMegaMenu === "COLLECTIONS" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#FFFFFF] border border-[#E7DED2] shadow-2xl p-10 grid grid-cols-3 gap-8 z-50 text-left"
            onMouseEnter={() => setActiveMegaMenu("COLLECTIONS")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Haute Collections</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><Link href="/collections/signature" className="hover:text-[#B08D57]">Signature Series</Link></li>
                <li><Link href="/collections/exclusive" className="hover:text-[#B08D57]">Parisian Exclusive</Link></li>
                <li><Link href="/collections/bestsellers" className="hover:text-[#B08D57]">Most Loved Editions</Link></li>
                <li><Link href="/collections/limited" className="hover:text-[#B08D57]">Limited Barrel Aged</Link></li>
              </ul>
            </div>

            <div className="col-span-2 bg-[#1A1A1A] text-[#F7F3EE] p-8 rounded-xl flex justify-between items-center">
              <div className="space-y-2 max-w-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">NEW HARVEST EDITION</span>
                <h5 className="font-serif text-2xl font-bold">The Royal Assam Reserve</h5>
                <p className="text-xs text-[#E7DED2] font-light">Formulated with 25-year aged wild Assam agarwood extract.</p>
                <Link href="/collections/signature" className="inline-block pt-2 text-xs uppercase tracking-widest font-bold text-[#B08D57]">
                  SHOP THE COLLECTION →
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeMegaMenu === "DISCOVERY" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#FFFFFF] border border-[#E7DED2] shadow-2xl p-10 grid grid-cols-3 gap-8 z-50 text-left"
            onMouseEnter={() => setActiveMegaMenu("DISCOVERY")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Interactive Scent Sommelier</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><button onClick={openFinder} className="hover:text-[#B08D57] text-left">Find Your Fragrance (30s Quiz)</button></li>
                <li><Link href="/quiz?by=mood" className="hover:text-[#B08D57]">Shop by Wear Mood</Link></li>
                <li><Link href="/quiz?by=occasion" className="hover:text-[#B08D57]">Shop by Formal Occasion</Link></li>
                <li><Link href="/parfums?format=discovery" className="hover:text-[#B08D57]">5 x 5ml Discovery Coffret</Link></li>
              </ul>
            </div>

            <div className="col-span-2 bg-[#F7F3EE] p-8 rounded-xl border border-[#E7DED2] flex items-center justify-between">
              <div className="space-y-2">
                <Sparkles className="w-6 h-6 text-[#B08D57]" />
                <h5 className="font-serif text-2xl font-bold text-[#1A1A1A]">Take 30-Second Quiz</h5>
                <p className="text-xs text-[#555555]">Match your exact accord notes with 98% confidence.</p>
              </div>
              <button
                onClick={openFinder}
                className="px-6 py-3 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#B08D57] transition-all"
              >
                START QUIZ NOW
              </button>
            </div>
          </div>
        )}

        {activeMegaMenu === "GIFTS" && (
          <div
            className="absolute top-full left-0 right-0 w-full bg-[#FFFFFF] border border-[#E7DED2] shadow-2xl p-10 grid grid-cols-3 gap-8 z-50 text-left"
            onMouseEnter={() => setActiveMegaMenu("GIFTS")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A] border-b border-[#E7DED2] pb-2 mb-3">Prestige Gifting</h4>
              <ul className="space-y-2 text-xs text-[#555555]">
                <li><Link href="/parfums?gifts=him" className="hover:text-[#B08D57]">Gifts for Him</Link></li>
                <li><Link href="/parfums?gifts=her" className="hover:text-[#B08D57]">Gifts for Her</Link></li>
                <li><Link href="/parfums?gifts=sets" className="hover:text-[#B08D57]">Velvet Gift Coffrets</Link></li>
                <li><Link href="/parfums?gifts=under5000" className="hover:text-[#B08D57]">Under ৳ 5,000 BDT</Link></li>
              </ul>
            </div>

            <div className="col-span-2 bg-[#F7F3EE] p-8 rounded-xl border border-[#E7DED2]">
              <h5 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">Velvet Gift Packaging Included</h5>
              <p className="text-xs text-[#555555]">Every OZNIOR order includes complimentary gold ribbon velvet box wrapping.</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
