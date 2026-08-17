import HeroSlider from "@/components/storefront/home/HeroSlider";
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
      {/* 01. Hero Slider (AESOP / LE LABO / BYREDO Reference Style) */}
      <HeroSlider />

      {/* 02. Trust Strip */}
      <TrustStrip />

      {/* 03. Quick Shop Categories */}
      <QuickShopCategories />

      {/* 04. Discovery Coffret Section */}
      <DiscoveryCoffret />

      {/* 05. Best Sellers Grid */}
      <BestSellersGrid />

      {/* 06. Fragrance Notes Experience */}
      <OlfactoryWorldSection />

      {/* 07. Brand Story & Craftsmanship Editorial */}
      <CraftsmanshipSection />

      {/* 08. Reviews & BD Trust Signals */}
      <SocialProofReviews />

      {/* VIP Privilege Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
