import Link from "next/link";
import { ArrowRight } from "lucide-react";

const QUICK_CARDS = [
  { label: "For Him", href: "/parfums?wearer=him", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80" },
  { label: "For Her", href: "/parfums?wearer=her", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80" },
  { label: "Unisex", href: "/parfums?wearer=unisex", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=400&q=80" },
  { label: "Best Sellers", href: "/collections/bestsellers", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80" },
  { label: "New Arrivals", href: "/parfums?sort=new", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80" },
  { label: "Discovery Sets", href: "/parfums?format=discovery", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=400&q=80" },
  { label: "Gifts", href: "/parfums?category=gifts", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80" },
];

export default function QuickShopCategories() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-10 bg-[#F7F3EE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4 text-left">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] block mb-1">
            HAUTE PARFUMERIE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            QUICK SHOP CATEGORIES
          </h2>
        </div>
        <Link href="/parfums" className="text-xs uppercase tracking-widest text-[#B08D57] font-bold hover:underline flex items-center">
          BROWSE FULL DIRECTORY <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {QUICK_CARDS.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="group bg-[#FFFFFF] border border-[#E7DED2] rounded-xl p-4 flex flex-col items-center text-center hover:border-[#B08D57] transition-all shadow-xs"
          >
            <div className="w-16 h-20 bg-[#F7F3EE] rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3">
              <img
                src={card.image}
                alt={card.label}
                className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-serif font-bold text-sm text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
              {card.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
