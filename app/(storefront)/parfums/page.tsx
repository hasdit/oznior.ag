import ProductCard from "@/components/storefront/ProductCard";

const SAMPLE_PRODUCTS = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    fragranceFamily: "Oud",
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
    fragranceFamily: "Amber",
    topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 50, price: 7800, sku: "OZN-AMB-50" },
      { volumeMl: 100, price: 12500, sku: "OZN-AMB-100" },
    ],
  },
  {
    id: "p3",
    name: "Noir Wood Intense",
    slug: "noir-wood-intense",
    fragranceFamily: "Woody",
    topNotes: ["Cedarwood", "Vetiver", "Black Pepper"],
    imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 50, price: 7200, sku: "OZN-NWD-50" },
      { volumeMl: 100, price: 11800, sku: "OZN-NWD-100" },
    ],
  },
];

export default function ParfumsCatalogPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 border-b border-[#E4DDD2] pb-8 text-left">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
            HAUTE PARFUMERIE DIRECTORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
            Extrait de Parfum Concentrés
          </h1>
          <p className="text-lg md:text-xl text-[#4B4B4B] font-light max-w-2xl leading-[1.75]">
            Forged with rare natural botanicals, Cambodian oud, and golden amber accords designed for 18+ hour longevity.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SAMPLE_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  );
}
