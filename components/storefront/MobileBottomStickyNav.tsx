"use client";

import Link from "next/link";
import { Home, Grid, Search, Heart, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function MobileBottomStickyNav() {
  const { cart, wishlist, openCart, openSearch } = useUIStore();
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t border-[#E7DED2] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-2 flex items-center justify-around text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A]">
      <Link href="/" className="flex flex-col items-center space-y-1 text-[#1A1A1A] hover:text-[#B08D57]">
        <Home className="w-5 h-5 text-[#B08D57]" />
        <span>Home</span>
      </Link>

      <Link href="/parfums" className="flex flex-col items-center space-y-1 text-[#1A1A1A] hover:text-[#B08D57]">
        <Grid className="w-5 h-5 text-[#B08D57]" />
        <span>Shop</span>
      </Link>

      <button
        onClick={() => {
          openSearch();
          trackEvent("search_open");
        }}
        className="flex flex-col items-center space-y-1 text-[#1A1A1A] hover:text-[#B08D57]"
      >
        <Search className="w-5 h-5 text-[#B08D57]" />
        <span>Search</span>
      </button>

      <Link href="/wishlist" className="flex flex-col items-center space-y-1 text-[#1A1A1A] hover:text-[#B08D57] relative">
        <Heart className="w-5 h-5 text-[#B08D57]" />
        <span>Wishlist</span>
        {wishlist.length > 0 && (
          <span className="absolute -top-1 right-2 bg-[#B08D57] text-[#FFFFFF] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </Link>

      <button
        onClick={() => {
          openCart();
          trackEvent("mini_cart_open");
        }}
        className="flex flex-col items-center space-y-1 text-[#1A1A1A] hover:text-[#B08D57] relative"
      >
        <ShoppingBag className="w-5 h-5 text-[#B08D57]" />
        <span>Bag</span>
        {totalCartCount > 0 && (
          <span className="absolute -top-1 right-2 bg-[#1A1A1A] text-[#F7F3EE] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {totalCartCount}
          </span>
        )}
      </button>
    </div>
  );
}
