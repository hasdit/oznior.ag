import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SCENT_FAMILIES = [
  { name: "Royal Oud", slug: "oud", desc: "Smoky Cambodian & Assam agarwood", icon: "🪵" },
  { name: "Golden Amber", slug: "amber", desc: "Warm luminous resins & cardamom", icon: "✨" },
  { name: "Cedarwood & Vetiver", slug: "woody", desc: "Deep forest woods & black pepper", icon: "🌲" },
  { name: "Damask Rose", slug: "floral", desc: "Velvety Parisian rose & jasmine", icon: "🌹" },
  { name: "Fresh Bergamot", slug: "fresh", desc: "Luminous Italian citrus & neroli", icon: "🌿" },
  { name: "White Musk", slug: "musk", desc: "Clean sensual powder & cashmere", icon: "☁️" },
  { name: "Citrus Zest", slug: "citrus", desc: "Vibrant mandarin & pink grapefruit", icon: "🍊" },
];

export default function ShopByScentFamily() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F7F3EE]">
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
          OLFACTORY CLASSIFICATION
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          SHOP BY SCENT FAMILY
        </h2>
        <p className="text-base text-[#555555] font-light max-w-xl mx-auto">
          Filter our haute parfumerie directory by key botanical accords.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {SCENT_FAMILIES.map((fam) => (
          <Link
            key={fam.slug}
            href={`/parfums?family=${fam.slug}`}
            className="group bg-[#FFFFFF] border border-[#E7DED2] rounded-xl p-6 flex flex-col justify-between hover:border-[#B08D57] transition-all shadow-xs text-left"
          >
            <div className="space-y-3">
              <span className="text-2xl block">{fam.icon}</span>
              <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
                {fam.name}
              </h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {fam.desc}
              </p>
            </div>
            <div className="pt-4 text-[11px] font-bold text-[#B08D57] uppercase tracking-wider flex items-center group-hover:underline">
              Explore <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
