import Link from "next/link";
import OlfactoryPyramid from "@/components/storefront/OlfactoryPyramid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  const productData = {
    name: formattedTitle || "ROYALE OUD CONCENTRÉ",
    category: "Oud Concentrés",
    fragranceFamily: "Oud • Floral • Amber",
    gender: "Unisex",
    occasion: "Night / Formal",
    season: "Winter & Autumn",
    longevityScore: 5,
    sillageScore: 5,
    description:
      "An opulent fusion of rare Cambodian oud, damask rose, and golden amber crystals. Distilled in small copper pot batches for intense olfactory richness and 18+ hour performance.",
    topNotes: ["Bergamot", "Pink Pepper", "Saffron"],
    heartNotes: ["Damask Rose", "Jasmine", "Assam Oud"],
    baseNotes: ["Cambodian Oud", "Ambergris", "Sandalwood"],
    price: 8500,
    compareAtPrice: 10000,
    volumeMl: 50,
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-16 px-6 md:px-12 space-y-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Product Bottle Showcase */}
        <div className="relative aspect-[3/4] w-full bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl overflow-hidden p-10 flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          <Badge variant="gold" className="absolute top-5 left-5 z-10 bg-[#8A6A44] text-[#F8F5EF]">
            30% Extrait de Parfum
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
            alt={productData.name}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(138,106,68,0.15)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Product Buying Matrix */}
        <div className="space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              {productData.category} • {productData.gender}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
              {productData.name}
            </h1>
            <p className="text-lg md:text-xl text-[#4B4B4B] font-light leading-[1.75] pt-2">
              {productData.description}
            </p>
          </div>

          {/* Pricing & Size Selector */}
          <div className="space-y-6 pt-6 border-t border-[#E4DDD2]">
            <div className="flex items-baseline space-x-3">
              <span className="font-serif text-4xl font-bold text-[#111111]">
                ৳ {productData.price.toLocaleString()} BDT
              </span>
              <span className="text-base text-[#4B4B4B]/60 line-through">
                ৳ {productData.compareAtPrice.toLocaleString()} BDT
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-xs text-[#4B4B4B] uppercase tracking-wider font-semibold">Select Bottle Volume</span>
              <div className="flex items-center space-x-3">
                {[30, 50, 100].map((vol) => (
                  <button
                    key={vol}
                    className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                      vol === productData.volumeMl
                        ? "bg-[#111111] text-[#F8F5EF] font-bold shadow-md"
                        : "bg-[#FFFFFF] border border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                    }`}
                  >
                    {vol}ml
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto flex-1 bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44] transition-colors py-4">
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag
            </Button>
            <Link href="/checkout" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full border-[#111111]/30 text-[#111111] hover:border-[#8A6A44] hover:text-[#8A6A44] py-4">
                Express Checkout
              </Button>
            </Link>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E4DDD2] text-xs text-[#4B4B4B]">
            <div className="flex flex-col items-center text-center space-y-1.5">
              <ShieldCheck className="w-5 h-5 text-[#8A6A44]" />
              <span className="font-medium">100% Authentic</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1.5">
              <Truck className="w-5 h-5 text-[#8A6A44]" />
              <span className="font-medium">Express Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1.5">
              <RotateCcw className="w-5 h-5 text-[#8A6A44]" />
              <span className="font-medium">7-Day Return</span>
            </div>
          </div>
        </div>
      </div>

      {/* Olfactory Pyramid Section */}
      <div className="max-w-[1440px] mx-auto pt-8">
        <OlfactoryPyramid
          topNotes={productData.topNotes}
          heartNotes={productData.heartNotes}
          baseNotes={productData.baseNotes}
        />
      </div>
    </div>
  );
}
