import Link from "next/link";

export default function FooterSystem() {
  return (
    <footer className="bg-[#F4EFE7] border-t border-[#E8DFD2] pt-20 pb-24 md:pb-16 text-[#555555]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand Manifesto */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold tracking-[0.2em] text-[#111111]">OZNIOR</h3>
          <p className="text-xs leading-relaxed text-[#555555]/90 font-light">
            Maison de Parfum. Artisanal haute parfumerie forged with rare Cambodian Oud, Ambergris, and Damask Rose.
          </p>
        </div>

        {/* Column 2: Boutique */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#111111] uppercase">Boutique</h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link href="/parfums" className="hover:text-[#8A6A44] transition-colors">Parfums</Link></li>
            <li><Link href="/collections" className="hover:text-[#8A6A44] transition-colors">Signature Series</Link></li>
            <li><Link href="/quiz" className="hover:text-[#8A6A44] transition-colors">Scent Finder</Link></li>
            <li><Link href="/journal" className="hover:text-[#8A6A44] transition-colors">Journal</Link></li>
          </ul>
        </div>

        {/* Column 3: Client Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#111111] uppercase">Client Care</h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link href="/account" className="hover:text-[#8A6A44] transition-colors">My Account</Link></li>
            <li><Link href="/support" className="hover:text-[#8A6A44] transition-colors">Customer Support</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-[#8A6A44] transition-colors">Delivery FAQs</Link></li>
            <li><Link href="/policies/refund" className="hover:text-[#8A6A44] transition-colors">Returns & Refunds</Link></li>
          </ul>
        </div>

        {/* Column 4: Secured Payments */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#111111] uppercase">Secured Payments</h4>
          <p className="text-xs text-[#555555]/90 font-light">bKash • Nagad • Rocket • Upay • Visa • Mastercard</p>
          <div className="pt-2 text-[10px] text-[#8A6A44] uppercase tracking-widest font-semibold">
            🔒 256-Bit SSL Encrypted Checkout
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#E8DFD2] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#555555]/70 space-y-4 md:space-y-0 font-light">
        <div>© 2026 OZNIOR Parfums. All rights reserved.</div>
        <div className="flex space-x-6">
          <Link href="/policies/privacy" className="hover:text-[#8A6A44]">Privacy</Link>
          <Link href="/policies/terms" className="hover:text-[#8A6A44]">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
