import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

const COLLECTION_MAP: Record<
  string,
  { title: string; desc: string; image: string }
> = {
  signature: {
    title: "Signature Series",
    desc: "Our iconic flagship Extrait formulations distilled with 30% pure fragrance oil.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  exclusive: {
    title: "Parisian Exclusive",
    desc: "Rare artisanal blends formulated exclusively with aged Cambodian agarwood and French rose.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  bestsellers: {
    title: "Most Loved Best Sellers",
    desc: "The highest-rated fragrance compositions chosen by discerning clients in Dhaka & worldwide.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
  limited: {
    title: "Limited Barrel Aged",
    desc: "Macerated for 180 days in dark oak and copper casks. Hand-numbered limited bottles.",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
  },
};

const COLLECTION_PRODUCTS = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    fragranceFamily: "Oud • Floral • Amber",
    topNotes: ["Bergamot", "Saffron"],
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
    topNotes: ["Golden Amber", "Vanilla"],
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

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = COLLECTION_MAP[slug] || {
    title: slug.replace(/-/g, " ").toUpperCase(),
    desc: "Curated haute parfumerie collection series.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">COLLECTION SERIES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">{collection.title}</h1>
        <p className="text-sm text-[#555555] max-w-xl">{collection.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLLECTION_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}
