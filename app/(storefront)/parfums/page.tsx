import ProductCard from "@/components/storefront/ProductCard";
import Link from "next/link";
import { Sparkles, SlidersHorizontal } from "lucide-react";

const ALL_PARFUMS = [
  {
    id: "p1",
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    category: "oud",
    fragranceFamily: "Oud • Floral • Amber",
    wearer: "unisex",
    format: "edp",
    isNew: true,
    hasOffer: true,
    isGift: true,
    topNotes: ["Calabrian Bergamot", "Pink Pepper", "Kashmiri Saffron"],
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
    category: "amber",
    fragranceFamily: "Amber • Cardamom",
    wearer: "unisex",
    format: "edp",
    isNew: false,
    hasOffer: true,
    isGift: true,
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
    category: "woody",
    fragranceFamily: "Cedarwood • Vetiver • Pepper",
    wearer: "him",
    format: "edp",
    isNew: false,
    hasOffer: false,
    isGift: true,
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
    category: "floral",
    fragranceFamily: "Floral • Citrus",
    wearer: "her",
    format: "edp",
    isNew: true,
    hasOffer: false,
    isGift: true,
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
    category: "oud",
    fragranceFamily: "Saffron • Oud • Leather",
    wearer: "unisex",
    format: "edp",
    isNew: true,
    hasOffer: false,
    isGift: true,
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
    name: "Maison Discovery Coffret",
    slug: "maison-discovery-coffret",
    category: "discovery",
    fragranceFamily: "5 x 5ml Discovery Set",
    wearer: "unisex",
    format: "discovery",
    isNew: false,
    hasOffer: true,
    isGift: true,
    topNotes: ["5 Iconic Extrait Sprays", "৳ 500 Voucher"],
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { volumeMl: 25, price: 1200, compareAtPrice: 1700, sku: "OZN-DISC-SET" },
    ],
  },
];

export default async function ParfumsCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{
    sort?: string;
    filter?: string;
    category?: string;
    family?: string;
    wearer?: string;
    gifts?: string;
    format?: string;
  }>;
}) {
  const params = await searchParams;
  const sort = params.sort;
  const filter = params.filter;
  const category = params.category;
  const family = params.family;
  const wearer = params.wearer;
  const gifts = params.gifts;
  const format = params.format;

  let pageTitle = "Extrait de Parfum Concentrés";
  let pageSubtitle = "Forged with rare natural botanicals, Cambodian oud, and golden amber accords formulated for 18+ hour longevity.";
  let filteredProducts = [...ALL_PARFUMS];

  // Dynamic Context Filtering Logic
  if (sort === "new") {
    pageTitle = "NEW ARRIVALS — PARISIAN HARVEST";
    pageSubtitle = "Be the first to discover our latest small-batch 30% Extrait de Parfum releases.";
    filteredProducts = ALL_PARFUMS.filter((p) => p.isNew);
  } else if (filter === "offers") {
    pageTitle = "MAISON PRIVILEGES & OFFERS";
    pageSubtitle = "Explore exclusive price privileges and special Extrait bundle offerings.";
    filteredProducts = ALL_PARFUMS.filter((p) => p.hasOffer);
  } else if (category === "gifts" || gifts) {
    pageTitle = "PRESTIGE GIFTING SELECTION";
    pageSubtitle = "Hand-packaged in velvet gift boxes with gold ribbon wrapping and complimentary certificate of authenticity.";
    filteredProducts = ALL_PARFUMS.filter((p) => p.isGift);
    if (gifts === "him") {
      filteredProducts = filteredProducts.filter((p) => p.wearer === "him" || p.wearer === "unisex");
    } else if (gifts === "her") {
      filteredProducts = filteredProducts.filter((p) => p.wearer === "her" || p.wearer === "unisex");
    }
  } else if (format === "discovery" || category === "discovery") {
    pageTitle = "DISCOVERY COFFRETS & SAMPLE SETS";
    pageSubtitle = "Explore our 5x5ml trial coffret before choosing your full-sized 50ml or 100ml bottle.";
    filteredProducts = ALL_PARFUMS.filter((p) => p.format === "discovery");
  } else if (family) {
    const familyNames: Record<string, string> = {
      oud: "ROYAL CAMBODIAN OUD",
      amber: "GOLDEN BALTIC AMBER",
      woody: "CEDARWOOD & VETIVER",
      floral: "PARISIAN DAMASK ROSE",
      fresh: "ITALIAN CITRUS & BERGAMOT",
      musk: "WHITE CASHMERE MUSK",
    };
    pageTitle = familyNames[family] || `${family.toUpperCase()} SELECTION`;
    pageSubtitle = `Explore formulations featuring rich ${family} accords.`;
    filteredProducts = ALL_PARFUMS.filter((p) => p.category === family);
  } else if (wearer) {
    pageTitle = wearer === "him" ? "FOR HIM" : wearer === "her" ? "FOR HER" : "UNISEX EXTRAITS";
    filteredProducts = ALL_PARFUMS.filter((p) => p.wearer === wearer || p.wearer === "unisex");
  }

  // Fallback if filter returns empty
  if (filteredProducts.length === 0) {
    filteredProducts = ALL_PARFUMS;
  }

  return (
    <div className="bg-[#F7F3EE] text-[#1A1A1A] min-h-screen py-12 md:py-16 px-6 md:px-12 font-sans text-left">
      <div className="max-w-[1440px] mx-auto space-y-10">
        
        {/* Header Bar */}
        <div className="space-y-3 border-b border-[#E7DED2] pb-8">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#B08D57]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HAUTE PARFUMERIE DIRECTORY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            {pageTitle}
          </h1>

          <p className="text-sm md:text-base text-[#555555] font-light max-w-2xl leading-relaxed">
            {pageSubtitle}
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          <Link
            href="/parfums"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              !sort && !filter && !category && !family && !wearer && !gifts && !format
                ? "bg-[#1A1A1A] text-[#F7F3EE]"
                : "bg-[#FFFFFF] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
            }`}
          >
            All Parfums ({ALL_PARFUMS.length})
          </Link>

          <Link
            href="/parfums?sort=new"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              sort === "new"
                ? "bg-[#1A1A1A] text-[#F7F3EE]"
                : "bg-[#FFFFFF] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
            }`}
          >
            New Arrivals
          </Link>

          <Link
            href="/parfums?filter=offers"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              filter === "offers"
                ? "bg-[#1A1A1A] text-[#F7F3EE]"
                : "bg-[#FFFFFF] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
            }`}
          >
            Offers & Privileges
          </Link>

          <Link
            href="/parfums?category=gifts"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              category === "gifts" || gifts
                ? "bg-[#1A1A1A] text-[#F7F3EE]"
                : "bg-[#FFFFFF] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
            }`}
          >
            Gifting
          </Link>

          <Link
            href="/parfums?format=discovery"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              format === "discovery"
                ? "bg-[#1A1A1A] text-[#F7F3EE]"
                : "bg-[#FFFFFF] border border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
            }`}
          >
            Discovery Sets
          </Link>
        </div>

        {/* Dynamic Catalog Grid: 2 per row on mobile, 4 per row on PC */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>

      </div>
    </div>
  );
}
