import HeroSlider from "@/components/storefront/home/HeroSlider";
import TrustStrip from "@/components/storefront/home/TrustStrip";
import BestSellersGrid from "@/components/storefront/home/BestSellersGrid";
import DiscoveryCoffret from "@/components/storefront/home/DiscoveryCoffret";
import NewArrivalsSection from "@/components/storefront/home/NewArrivalsSection";
import ShopByScentFamily from "@/components/storefront/home/ShopByScentFamily";
import AllProductsGrid from "@/components/storefront/home/AllProductsGrid";
import OlfactoryWorldSection from "@/components/storefront/home/OlfactoryWorldSection";
import CraftsmanshipSection from "@/components/storefront/home/CraftsmanshipSection";
import SocialProofReviews from "@/components/storefront/home/SocialProofReviews";
import NewsletterSignup from "@/components/storefront/home/NewsletterSignup";

export default function Homepage() {
  return (
    <div className="bg-[#F7F3EE] text-[#1A1A1A] min-h-screen selection:bg-[#B08D57] selection:text-[#F7F3EE]">
      {/* 01. Hero Campaign Slider */}
      <HeroSlider />

      {/* 02. Trust Strip */}
      <TrustStrip />

      {/* 03. Best Sellers (3-Second Auto-Slider Carousel) */}
      <BestSellersGrid />

      {/* 04. Discovery Coffret (Dark Luxury Editorial Banner) */}
      <DiscoveryCoffret />

      {/* 05. New Arrivals (3-Second Auto-Slider Carousel) */}
      <NewArrivalsSection />

      {/* 06. Shop by Scent Family */}
      <ShopByScentFamily />

      {/* 07. All Fragrance Editions Grid (Multi-Row Grid + See All Products Button) */}
      <AllProductsGrid />

      {/* 08. Fragrance Notes Experience (3-Tier Olfactory Pyramid) */}
      <OlfactoryWorldSection />

      {/* 09. Brand Story & Craftsmanship Editorial */}
      <CraftsmanshipSection />

      {/* 10. Reviews & Social Proof */}
      <SocialProofReviews />

      {/* 11. VIP Privilege Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
