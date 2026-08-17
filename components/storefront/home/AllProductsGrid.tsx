import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const ALL_PRODUCTS = [
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
  {
    id: "p4",
    name: "Soleil Rose Extrait",
    slug: "soleil-rose-extrait",
    fragranceFamily: "Floral • Citrus",
    topNotes: ["Damask Rose", "Neroli", "Mandarin"],
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5200, sku: "OZN-SOL-30" },
      { volumeMl: 50, price: 8000, sku: "OZN-SOL-50" },
      { volumeMl: 100, price: 13000, sku: "OZN-SOL-100" },
    ],
  },
  {
    id: "p5",
    name: "Imperial Saffron Oud",
    slug: "imperial-saffron-oud",
    fragranceFamily: "Saffron • Oud • Leather",
    topNotes: ["Kashmiri Saffron", "Oud", "Leather"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5800, sku: "OZN-IMP-30" },
      { volumeMl: 50, price: 8900, sku: "OZN-IMP-50" },
      { volumeMl: 100, price: 14500, sku: "OZN-IMP-100" },
    ],
  },
  {
    id: "p6",
    name: "Velvet Iris Supreme",
    slug: "velvet-iris-supreme",
    fragranceFamily: "Powdery • Iris • Sandalwood",
    topNotes: ["Iris Butter", "Sandalwood", "Cashmere"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 4900, sku: "OZN-IRI-30" },
      { volumeMl: 50, price: 7600, sku: "OZN-IRI-50" },
      { volumeMl: 100, price: 12200, sku: "OZN-IRI-100" },
    ],
  },
  {
    id: "p7",
    name: "Citrus Bergamot Reserve",
    slug: "citrus-bergamot-reserve",
    fragranceFamily: "Citrus • Fresh • Amber",
    topNotes: ["Calabrian Bergamot", "Neroli", "Ambergris"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 4600, sku: "OZN-CIT-30" },
      { volumeMl: 50, price: 7000, sku: "OZN-CIT-50" },
      { volumeMl: 100, price: 11500, sku: "OZN-CIT-100" },
    ],
  },
  {
    id: "p8",
    name: "Assam Reserve Oud",
    slug: "assam-reserve-oud",
    fragranceFamily: "Rare Oud • Incense",
    topNotes: ["Assam Oud", "Frankincense", "Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 6200, sku: "OZN-ASM-30" },
      { volumeMl: 50, price: 9500, sku: "OZN-ASM-50" },
      { volumeMl: 100, price: 15500, sku: "OZN-ASM-100" },
    ],
  },
];

export default function AllProductsGrid() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F7F3EE]">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center justify-center">
          <Sparkles className="w-4 h-4 mr-2" /> HAUTE PARFUMERIE DIRECTORY
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A]">
          ALL FRAGRANCE EDITIONS
        </h2>
        <p className="text-sm md:text-base text-[#555555] font-light max-w-xl mx-auto">
          Explore our complete portfolio of 30% Extrait de Parfum formulations.
        </p>
      </div>

      {/* Product Grid: 2 per row on mobile, 4 per row on PC */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {ALL_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>

      {/* Bottom Action: SEE ALL PRODUCTS */}
      <div className="text-center pt-6">
        <Link
          href="/parfums"
          className="inline-flex items-center px-9 py-4 bg-[#1A1A1A] text-[#F7F3EE] font-bold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#B08D57] transition-all duration-300 shadow-md"
        >
          <span>SEE ALL EXTRAIT DE PARFUMS</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}
