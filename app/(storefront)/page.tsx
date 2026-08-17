import BrandShowroomIntro from "@/components/storefront/home/BrandShowroomIntro";
import QuickShopCategories from "@/components/storefront/home/QuickShopCategories";
import DiscoveryCoffret from "@/components/storefront/home/DiscoveryCoffret";
import BestSellersGrid from "@/components/storefront/home/BestSellersGrid";
import OlfactoryWorldSection from "@/components/storefront/home/OlfactoryWorldSection";
import CraftsmanshipSection from "@/components/storefront/home/CraftsmanshipSection";
import SocialProofReviews from "@/components/storefront/home/SocialProofReviews";
import TrustStrip from "@/components/storefront/home/TrustStrip";
import NewsletterSignup from "@/components/storefront/home/NewsletterSignup";

export default function Homepage() {
  return (
    <div className="bg-[#F7F3EE] text-[#1A1A1A] min-h-screen selection:bg-[#B08D57] selection:text-[#F7F3EE]">
      {/* 01. Premium Brand Introduction (No Hero Slider) */}
      <BrandShowroomIntro />

      {/* 02. Collection Explorer */}
      <QuickShopCategories />

      {/* 03. Discovery Coffret Section (Primary Acquisition Gateway) */}
      <DiscoveryCoffret />

      {/* 04. Best Sellers Grid */}
      <BestSellersGrid />

      {/* 05. Fragrance Notes Experience (3-Tier Olfactory Pyramid) */}
      <OlfactoryWorldSection />

      {/* 06. Brand Story & Craftsmanship Editorial */}
      <CraftsmanshipSection />

      {/* 07. Reviews & BD Trust Signals */}
      <SocialProofReviews />
      <TrustStrip />

      {/* VIP Privilege Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
