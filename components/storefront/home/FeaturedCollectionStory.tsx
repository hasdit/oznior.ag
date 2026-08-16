import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/storefront/ProductCard";

export default function FeaturedCollectionStory() {
  const featuredRail = [
    {
      id: "p1",
      name: "Royale Oud Concentré",
      slug: "royale-oud-concentre",
      fragranceFamily: "Oud • Floral • Amber",
      topNotes: ["Bergamot", "Saffron"],
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-ROY-50" },
      ],
    },
    {
      id: "p2",
      name: "Aeterna Amber Gold",
      slug: "aeterna-amber-gold",
      fragranceFamily: "Amber • Cardamom",
      topNotes: ["Golden Amber", "Vanilla"],
      imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
      variants: [
        { volumeMl: 50, price: 7800, sku: "OZN-AMB-50" },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FFFFFF] border-y border-[#E7DED2]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Narrative (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
            CURATED COLLECTION STORY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            THE PARISIAN OUD SERIES
          </h2>
          <p className="text-base text-[#555555] font-light leading-relaxed">
            Composed around 25-year aged Cambodianagarwood and wild damask rose harvested at dawn in Grasse, France. Every bottle is macerated for 90 days in copper vats to achieve 30% pure extrait density.
          </p>

          <div className="pt-2">
            <Link
              href="/collections/signature"
              className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs tracking-widest uppercase rounded hover:bg-[#B08D57] transition-all shadow-sm"
            >
              EXPLORE COLLECTION STORY <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Right Shoppable Product Rail (7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredRail.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
