import Header4Layer from "@/components/storefront/Header4Layer";
import SearchOverlay from "@/components/storefront/SearchOverlay";
import MobileDrawer from "@/components/storefront/MobileDrawer";
import MobileBottomStickyNav from "@/components/storefront/MobileBottomStickyNav";
import CartDrawer from "@/components/storefront/CartDrawer";
import FragranceFinderModal from "@/components/storefront/FragranceFinderModal";
import FooterDepartmentStore from "@/components/storefront/home/FooterDepartmentStore";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EE] text-[#1A1A1A] font-sans selection:bg-[#B08D57] selection:text-[#F7F3EE]">
      {/* 4-Layer Header */}
      <Header4Layer />

      {/* Global Modals & Overlays */}
      <SearchOverlay />
      <MobileDrawer />
      <CartDrawer />
      <FragranceFinderModal />

      {/* Main Page Slot */}
      <main className="flex-1 pb-20 md:pb-0">{children}</main>

      {/* Department Store Footer */}
      <FooterDepartmentStore />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomStickyNav />
    </div>
  );
}
