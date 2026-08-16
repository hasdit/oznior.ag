import Link from "next/link";
import { MessageCircle, ShieldCheck, Lock, Truck } from "lucide-react";

export default function FooterDepartmentStore() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F7F3EE] pt-20 pb-28 md:pb-16 text-left font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-[#555555]/30 pb-16">
        {/* Col 1: Maison Bio & WhatsApp */}
        <div className="md:col-span-2 space-y-5">
          <Link href="/" className="font-serif text-3xl font-bold tracking-[0.25em] text-[#F7F3EE]">
            OZNIOR
          </Link>
          <p className="text-xs text-[#E7DED2]/80 leading-relaxed font-light max-w-sm">
            Maison de Parfum. Artisanal haute parfumerie formulated with 30% pure Extrait concentration, Cambodian agarwood, and damask rose.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#2F6F4F] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#B08D57] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>1-Tap WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* Col 2: Boutique Directory */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#B08D57] uppercase">Boutique Directory</h4>
          <ul className="space-y-2 text-xs text-[#E7DED2]/80 font-light">
            <li><Link href="/parfums" className="hover:text-[#B08D57]">Extrait de Parfums</Link></li>
            <li><Link href="/collections/signature" className="hover:text-[#B08D57]">Signature Series</Link></li>
            <li><Link href="/parfums?format=discovery" className="hover:text-[#B08D57]">Discovery Coffrets</Link></li>
            <li><Link href="/quiz" className="hover:text-[#B08D57]">30-Sec Fragrance Finder</Link></li>
            <li><Link href="/journal" className="hover:text-[#B08D57]">The OZNIOR Edit</Link></li>
          </ul>
        </div>

        {/* Col 3: Client Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#B08D57] uppercase">Client Care</h4>
          <ul className="space-y-2 text-xs text-[#E7DED2]/80 font-light">
            <li><Link href="/account" className="hover:text-[#B08D57]">Client VIP Account</Link></li>
            <li><Link href="/support" className="hover:text-[#B08D57]">Concierge Support</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-[#B08D57]">Delivery & Shipping FAQs</Link></li>
            <li><Link href="/policies/refund" className="hover:text-[#B08D57]">7-Day Return Policy</Link></li>
            <li><Link href="/policies/authenticity" className="hover:text-[#B08D57]">Authenticity Guarantee</Link></li>
          </ul>
        </div>

        {/* Col 4: Secured Payment Methods */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#B08D57] uppercase">Secured MFS & COD</h4>
          <p className="text-xs text-[#E7DED2]/80 font-light leading-relaxed">
            bKash Merchant • Nagad Express • Rocket • Cash on Delivery Nationwide
          </p>
          <div className="pt-2 text-[10px] text-[#B08D57] uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted Checkout
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#E7DED2]/60 space-y-4 md:space-y-0 font-light">
        <div>© 2026 OZNIOR Parfums Paris. All rights reserved.</div>
        <div className="flex space-x-6">
          <Link href="/policies/privacy" className="hover:text-[#B08D57]">Privacy Policy</Link>
          <Link href="/policies/terms" className="hover:text-[#B08D57]">Terms of Service</Link>
          <Link href="/admin/login" className="hover:text-[#B08D57]">Staff Portal</Link>
        </div>
      </div>
    </footer>
  );
}
