import HeroSlider from "@/components/storefront/home/HeroSlider";
import TrustStrip from "@/components/storefront/home/TrustStrip";
import QuickShopCategories from "@/components/storefront/home/QuickShopCategories";
import BestSellersGrid from "@/components/storefront/home/BestSellersGrid";
import ShopByScentFamily from "@/components/storefront/home/ShopByScentFamily";
import NewArrivalsSection from "@/components/storefront/home/NewArrivalsSection";
import DiscoveryCoffret from "@/components/storefront/home/DiscoveryCoffret";
import OccasionGiftingSection from "@/components/storefront/home/OccasionGiftingSection";
import FeaturedCollectionStory from "@/components/storefront/home/FeaturedCollectionStory";
import SocialProofReviews from "@/components/storefront/home/SocialProofReviews";
import InstagramGallery from "@/components/storefront/home/InstagramGallery";
import NewsletterSignup from "@/components/storefront/home/NewsletterSignup";

export default function Homepage() {
  return (
    <div className="bg-[#F7F3EE] text-[#1A1A1A] min-h-screen selection:bg-[#B08D57] selection:text-[#F7F3EE]">
      {/* 03. Hero Slider */}
      <HeroSlider />

      {/* 04. Trust Strip */}
      <TrustStrip />

      {/* 05. Quick Shop Categories */}
      <QuickShopCategories />

      {/* 06. Best Sellers */}
      <BestSellersGrid />

      {/* 07. Shop by Scent Family */}
      <ShopByScentFamily />

      {/* 08. New Arrivals */}
      <NewArrivalsSection />

      {/* 09. Discovery Sets */}
      <DiscoveryCoffret />

      {/* 10. Occasion & Gifting */}
      <OccasionGiftingSection />

      {/* 11. Featured Collection Story */}
      <FeaturedCollectionStory />

      {/* 12. Reviews */}
      <SocialProofReviews />

      {/* 13. Instagram / UGC Gallery */}
      <InstagramGallery />

      {/* 14. Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
