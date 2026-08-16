import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_PERFUMES = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    family: "Oud • Floral • Amber",
    story: "An opulent fusion of rare Cambodian oud, damask rose, and golden amber crystals.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    prices: { vol30: 5500, vol50: 8500, vol100: 14000 },
  },
  {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    family: "Luminous Amber • Cardamom",
    story: "Luminous amber crystals and warm cardamom accords designed for magnetic evening presence.",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    prices: { vol30: 5000, vol50: 7800, vol100: 12500 },
  },
  {
    id: "p3",
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    family: "Cedarwood • Vetiver • Pepper",
    story: "Deep cedarwood and vetiver notes balanced with fresh black pepper and smoky leather.",
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    prices: { vol30: 4800, vol50: 7200, vol100: 11800 },
  },
];

export default function SignatureCollection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16 bg-[#F8F5EF]">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DDD2] pb-8">
        <div>
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44] block mb-2">
            CURATED EDITIONS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#111111]">
            THE SIGNATURE TRIO
          </h2>
        </div>
        <Link
          href="/parfums"
          className="text-xs uppercase tracking-[0.22em] text-[#8A6A44] hover:text-[#111111] font-semibold transition-colors flex items-center"
        >
          EXPLORE ALL EDITIONS <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* 3 Featured Editorial Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {FEATURED_PERFUMES.map((item) => (
          <div
            key={item.id}
            className="group bg-[#FFFFFF] border border-[#E4DDD2] rounded-xl overflow-hidden p-8 flex flex-col justify-between hover:border-[#8A6A44]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
          >
            <div className="space-y-6">
              {/* Bottle Media Frame */}
              <div className="relative aspect-[3/4] w-full bg-[#F8F5EF] rounded-lg overflow-hidden flex items-center justify-center p-6">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Story & Family */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6A44]">
                  {item.family}
                </span>
                <Link href={`/parfums/${item.slug}`}>
                  <h3 className="font-serif text-2xl font-bold text-[#111111] group-hover:text-[#8A6A44] transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-base text-[#4B4B4B] font-light leading-[1.75]">
                  {item.story}
                </p>
              </div>
            </div>

            {/* Sizes & Price */}
            <div className="space-y-4 pt-6 border-t border-[#E4DDD2] mt-6">
              <div className="flex items-center space-x-2 text-[11px] font-semibold uppercase tracking-wider text-[#4B4B4B]">
                <span className="px-3 py-1 bg-[#F8F5EF] border border-[#E4DDD2] rounded">30ml</span>
                <span className="px-3 py-1 bg-[#111111] text-[#F8F5EF] rounded font-bold">50ml</span>
                <span className="px-3 py-1 bg-[#F8F5EF] border border-[#E4DDD2] rounded">100ml</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-bold text-[#111111]">
                  ৳ {item.prices.vol50.toLocaleString()} BDT
                </span>
                <Link
                  href={`/parfums/${item.slug}`}
                  className="text-xs uppercase tracking-widest text-[#8A6A44] font-semibold hover:underline"
                >
                  DISCOVER →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
