"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

export default function DesktopHeaderNav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E8DFD2] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] tracking-[0.22em] uppercase font-medium text-[#111111]/70">
          <Link href="/parfums" className="hover:text-[#8A6A44] transition-colors">
            Parfums
          </Link>
          <Link href="/collections" className="hover:text-[#8A6A44] transition-colors">
            Collections
          </Link>
          <Link href="/quiz" className="hover:text-[#8A6A44] transition-colors">
            Fragrance Quiz
          </Link>
          <Link href="/journal" className="hover:text-[#8A6A44] transition-colors">
            Journal
          </Link>
        </nav>

        {/* Brand Logo */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#111111]">
          OZNIOR
        </Link>

        {/* Right Action Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/search" className="text-[#111111]/70 hover:text-[#8A6A44] transition-colors">
            <Search className="w-4 h-4" />
          </Link>
          <Link href="/wishlist" className="hidden sm:block text-[#111111]/70 hover:text-[#8A6A44] transition-colors">
            <Heart className="w-4 h-4" />
          </Link>
          <Link href="/account" className="hidden sm:block text-[#111111]/70 hover:text-[#8A6A44] transition-colors">
            <User className="w-4 h-4" />
          </Link>
          <Link href="/checkout" className="text-[#111111]/70 hover:text-[#8A6A44] transition-colors relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#8A6A44] text-[#F8F5EF] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
