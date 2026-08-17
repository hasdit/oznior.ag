import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const SCENT_FAMILIES = [
  {
    name: "Royal Oud",
    slug: "oud",
    tag: "AGARWOOD & RESIN",
    desc: "25-year aged Cambodian & Assam oud",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Golden Amber",
    slug: "amber",
    tag: "LUMINOUS WARMTH",
    desc: "Baltic amber fused with Guatemalan cardamom",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Damask Rose",
    slug: "floral",
    tag: "PARISIAN FLORAL",
    desc: "Velvet damask rose & jasmine blossom",
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cedarwood & Vetiver",
    slug: "woody",
    tag: "EXECUTIVE WOODS",
    desc: "Raw cedarwood bark & black pepper crystals",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fresh Bergamot",
    slug: "fresh",
    tag: "ITALIAN CITRUS",
    desc: "Calabrian bergamot & neroli blossom",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cashmere Musk",
    slug: "musk",
    tag: "SENSUAL POWDER",
    desc: "Sublime Iris butter & Mysore sandalwood",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ShopByScentFamily() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F7F3EE]">
      {/* Editorial Header */}
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center justify-center">
          <Sparkles className="w-4 h-4 mr-2" /> OLFACTORY INGREDIENT PORTFOLIO
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
          SHOP BY SCENT FAMILY
        </h2>
        <p className="text-sm md:text-base text-[#555555] font-light max-w-xl mx-auto">
          Discover formulations grouped by key botanical raw materials.
        </p>
      </div>

      {/* Editorial Ingredient Photo Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {SCENT_FAMILIES.map((fam) => (
          <Link
            key={fam.slug}
            href={`/parfums?family=${fam.slug}`}
            className="group relative h-72 md:h-80 rounded-xl overflow-hidden border border-[#E7DED2] flex flex-col justify-end p-5 text-left shadow-card hover:border-[#B08D57] transition-all duration-500"
          >
            {/* Macro Photography Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={fam.imageUrl}
                alt={fam.name}
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Dark Gradient Overlay for Crisp Serif Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent group-hover:from-[#111111]/95 transition-colors duration-500" />
            </div>

            {/* Overlaid Editorial Content */}
            <div className="relative z-10 space-y-2 text-[#FFFFFF]">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#B08D57] block">
                {fam.tag}
              </span>
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#F7F3EE] group-hover:text-[#B08D57] transition-colors leading-snug">
                {fam.name}
              </h3>
              <p className="text-[11px] text-[#F7F3EE]/80 font-light leading-relaxed line-clamp-2">
                {fam.desc}
              </p>

              <div className="pt-2 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-widest flex items-center group-hover:text-[#B08D57] transition-colors">
                <span>EXPLORE</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
