import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BEST_SELLER_PRODUCTS = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    fragranceFamily: "Oud • Floral • Amber",
    topNotes: ["Bergamot", "Pink Pepper", "Saffron"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5500, sku: "OZN-ROY-30" },
      { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-ROY-50" },
      { volumeMl: 100, price: 14000, sku: "OZN-ROY-100" },
    ],
  },
  {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    fragranceFamily: "Amber • Cardamom",
    topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5000, sku: "OZN-AMB-30" },
      { volumeMl: 50, price: 7800, compareAtPrice: 9000, sku: "OZN-AMB-50" },
      { volumeMl: 100, price: 12500, sku: "OZN-AMB-100" },
    ],
  },
  {
    id: "p3",
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    fragranceFamily: "Cedarwood • Vetiver • Pepper",
    topNotes: ["Cedarwood", "Vetiver", "Black Pepper"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 4800, sku: "OZN-NWD-30" },
      { volumeMl: 50, price: 7200, compareAtPrice: 8500, sku: "OZN-NWD-50" },
      { volumeMl: 100, price: 11800, sku: "OZN-NWD-100" },
    ],
  },
];

export default function BestSellersGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#FFFFFF] border-y border-[#E7DED2]">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4 text-left">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] block mb-1">
            MOST LOVED EDITIONS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            BEST SELLERS
          </h2>
        </div>
        <Link href="/collections/bestsellers" className="text-xs uppercase tracking-widest text-[#B08D57] font-bold hover:underline flex items-center">
          VIEW ALL BEST SELLERS <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {BEST_SELLER_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}
