import ProductDetailClient from "@/components/storefront/pdp/ProductDetailClient";

const SAMPLE_PRODUCTS: Record<string, any> = {
  "royale-oud-concentre": {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    category: "Oud Concentrés",
    fragranceFamily: "Oud • Floral • Amber",
    gender: "Unisex",
    occasion: "Executive / Formal Evening",
    season: "Winter & Autumn",
    description:
      "An opulent fusion of 25-year aged wild Cambodian agarwood, damask rose, and golden amber crystals. Macerated in dark copper vessels for 90 days to achieve unparalleled 18+ hour sillage.",
    topNotes: ["Calabrian Bergamot", "Pink Pepper", "Kashmiri Saffron"],
    heartNotes: ["Damask Rose", "Jasmine Absolute", "Aged Assam Oud"],
    baseNotes: ["Wild Cambodian Oud", "Baltic Ambergris", "Mysore Sandalwood"],
    galleryImages: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85",
    ],
    variants: [
      { volumeMl: 30, price: 5500, compareAtPrice: 6500, sku: "OZN-ROY-30" },
      { volumeMl: 50, price: 8500, compareAtPrice: 10000, sku: "OZN-ROY-50" },
      { volumeMl: 100, price: 14000, compareAtPrice: 16500, sku: "OZN-ROY-100" },
    ],
  },
  "aeterna-amber-gold": {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    category: "Luminous Series",
    fragranceFamily: "Amber • Cardamom",
    gender: "Unisex",
    occasion: "Evening / Dates",
    season: "Autumn & Winter",
    description:
      "Golden Baltic amber fused with Guatemalan cardamom and Madagascar vanilla pods for a magnetic sensual warmth that captivates every room.",
    topNotes: ["Guatemalan Cardamom", "Bergamot", "Cinnamon"],
    heartNotes: ["Golden Amber Resin", "Labdanum", "Patchouli"],
    baseNotes: ["Madagascar Vanilla", "Benzoin", "Cashmere Wood"],
    galleryImages: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85",
    ],
    variants: [
      { volumeMl: 30, price: 5000, compareAtPrice: 6000, sku: "OZN-AMB-30" },
      { volumeMl: 50, price: 7800, compareAtPrice: 9000, sku: "OZN-AMB-50" },
      { volumeMl: 100, price: 12500, compareAtPrice: 15000, sku: "OZN-AMB-100" },
    ],
  },
};

const DEFAULT_RELATED = [
  {
    id: "p2",
    name: "Aeterna Amber Gold",
    slug: "aeterna-amber-gold",
    fragranceFamily: "Amber • Cardamom",
    topNotes: ["Golden Amber", "Cardamom", "Vanilla"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 30, price: 5000, sku: "OZN-AMB-30" },
      { volumeMl: 50, price: 7800, sku: "OZN-AMB-50" },
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
      { volumeMl: 50, price: 7200, sku: "OZN-NWD-50" },
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
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = SAMPLE_PRODUCTS[slug] || SAMPLE_PRODUCTS["royale-oud-concentre"];

  return <ProductDetailClient {...product} relatedProducts={DEFAULT_RELATED} />;
}
