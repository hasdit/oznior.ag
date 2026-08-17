import Link from "next/link";

export default function FooterSystem() {
  return (
    <footer className="bg-[#F7F3EE] border-t border-[#E7DED2] pt-16 pb-24 md:pb-16 text-[#555555] font-sans text-left selection:bg-[#B08D57] selection:text-[#F7F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand Manifesto */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold tracking-[0.25em] text-[#1A1A1A]">OZNIOR</h3>
          <p className="text-xs leading-relaxed text-[#555555] font-light">
            Maison de Parfum. Artisanal haute parfumerie forged with rare Cambodian Oud, Ambergris, and Damask Rose. Blended in Paris, macerated for 90 days.
          </p>
        </div>

        {/* Column 2: Boutique Directory */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">Boutique</h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link href="/parfums" className="hover:text-[#B08D57] transition-colors">Extrait Catalog</Link></li>
            <li><Link href="/parfums?sort=new" className="hover:text-[#B08D57] transition-colors">New Arrivals</Link></li>
            <li><Link href="/collections" className="hover:text-[#B08D57] transition-colors">Signature Collections</Link></li>
            <li><Link href="/quiz" className="hover:text-[#B08D57] transition-colors">Digital Sommelier Quiz</Link></li>
            <li><Link href="/journal" className="hover:text-[#B08D57] transition-colors">The OZNIOR Edit</Link></li>
          </ul>
        </div>

        {/* Column 3: Client Services & Care */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">Client Care</h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link href="/account" className="hover:text-[#B08D57] transition-colors">My Account</Link></li>
            <li><Link href="/wishlist" className="hover:text-[#B08D57] transition-colors">Saved Wishlist</Link></li>
            <li><Link href="/support" className="hover:text-[#B08D57] transition-colors">VIP Support & WhatsApp</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-[#B08D57] transition-colors">Nationwide Delivery FAQs</Link></li>
            <li><Link href="/policies/refund" className="hover:text-[#B08D57] transition-colors">7-Day Guarantee & Returns</Link></li>
          </ul>
        </div>

        {/* Column 4: Secured Payments & Origin */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">Secured Payments</h4>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            bKash Merchant • Nagad Express • Rocket • Upay • Visa • Mastercard • Cash on Delivery
          </p>
          <div className="pt-2 text-[10px] text-[#B08D57] uppercase tracking-widest font-bold flex items-center space-x-1.5">
            <span>🔒 256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#E7DED2] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#555555] space-y-4 md:space-y-0 font-light">
        <div>© 2026 OZNIOR Parfums. All rights reserved. Handcrafted in Paris & Dhaka.</div>
        <div className="flex space-x-6">
          <Link href="/policies/privacy" className="hover:text-[#B08D57] transition-colors">Privacy Policy</Link>
          <Link href="/policies/terms" className="hover:text-[#B08D57] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
