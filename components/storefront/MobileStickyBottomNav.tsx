"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, Heart, User } from "lucide-react";

export default function MobileStickyBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/search", label: "Search", icon: Search },
    { href: "/parfums", label: "Shop", icon: ShoppingBag },
    { href: "/wishlist", label: "Wishlist", icon: Heart },
    { href: "/account", label: "Account", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[68px] bg-obsidian-glass backdrop-blur-xl border-t border-gold-muted px-4 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
              isActive ? "text-gold-champagne" : "text-alabaster-muted hover:text-alabaster"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] tracking-wider uppercase font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
