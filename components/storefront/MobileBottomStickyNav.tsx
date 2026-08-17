"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, LayoutGrid, Search, Heart, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function MobileBottomStickyNav() {
  const pathname = usePathname();
  const { cart, wishlist, openCart, openSearch } = useUIStore();
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hide on PDP product page to give full room to the mobile sticky buy bar
  if (pathname.startsWith("/parfums/")) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F7F3EE]/95 backdrop-blur-md border-t border-[#B08D57]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] py-2.5 px-3 flex items-center justify-around text-[#1A1A1A] transition-all">
      
      {/* Home */}
      <Link
        href="/"
        className="flex flex-col items-center space-y-1 relative group px-2 py-0.5"
      >
        <Compass
          className={`w-4.5 h-4.5 transition-colors ${
            pathname === "/" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
          }`}
          strokeWidth={1.75}
        />
        <span
          className={`text-[9px] uppercase tracking-[0.18em] font-bold transition-colors ${
            pathname === "/" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
          }`}
        >
          HOME
        </span>
        {pathname === "/" && (
          <span className="w-1 h-1 rounded-full bg-[#B08D57] absolute -bottom-1" />
        )}
      </Link>

      {/* Catalog */}
      <Link
        href="/parfums"
        className="flex flex-col items-center space-y-1 relative group px-2 py-0.5"
      >
        <LayoutGrid
          className={`w-4.5 h-4.5 transition-colors ${
            pathname === "/parfums" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
          }`}
          strokeWidth={1.75}
        />
        <span
          className={`text-[9px] uppercase tracking-[0.18em] font-bold transition-colors ${
            pathname === "/parfums" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
          }`}
        >
          CATALOG
        </span>
        {pathname === "/parfums" && (
          <span className="w-1 h-1 rounded-full bg-[#B08D57] absolute -bottom-1" />
        )}
      </Link>

      {/* Search Trigger */}
      <button
        onClick={() => {
          openSearch();
          trackEvent("search_open");
        }}
        className="flex flex-col items-center space-y-1 text-[#1A1A1A]/70 hover:text-[#B08D57] transition-colors px-2 py-0.5"
      >
        <Search className="w-4.5 h-4.5" strokeWidth={1.75} />
        <span className="text-[9px] uppercase tracking-[0.18em] font-bold">SEARCH</span>
      </button>

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className="flex flex-col items-center space-y-1 relative group px-2 py-0.5"
      >
        <div className="relative">
          <Heart
            className={`w-4.5 h-4.5 transition-colors ${
              pathname === "/wishlist" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
            }`}
            strokeWidth={1.75}
          />
          {wishlist.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#B08D57] text-[#FFFFFF] text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center ring-2 ring-[#F7F3EE]">
              {wishlist.length}
            </span>
          )}
        </div>
        <span
          className={`text-[9px] uppercase tracking-[0.18em] font-bold transition-colors ${
            pathname === "/wishlist" ? "text-[#B08D57]" : "text-[#1A1A1A]/70 group-hover:text-[#B08D57]"
          }`}
        >
          WISHLIST
        </span>
        {pathname === "/wishlist" && (
          <span className="w-1 h-1 rounded-full bg-[#B08D57] absolute -bottom-1" />
        )}
      </Link>

      {/* Cart Bag */}
      <button
        onClick={() => {
          openCart();
          trackEvent("mini_cart_open");
        }}
        className="flex flex-col items-center space-y-1 text-[#1A1A1A]/70 hover:text-[#B08D57] transition-colors relative px-2 py-0.5"
      >
        <div className="relative">
          <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.75} />
          {totalCartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#1A1A1A] text-[#F7F3EE] text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center ring-2 ring-[#F7F3EE]">
              {totalCartCount}
            </span>
          )}
        </div>
        <span className="text-[9px] uppercase tracking-[0.18em] font-bold">BAG</span>
      </button>

    </div>
  );
}
