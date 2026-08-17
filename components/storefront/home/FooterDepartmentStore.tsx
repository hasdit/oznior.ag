import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Lock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function FooterDepartmentStore() {
  return (
    <footer className="bg-[#111111] text-[#F7F3EE] border-t border-[#B08D57]/30 font-sans text-left">
      
      {/* LAYER 1: 4-PILLAR SERVICE BADGE STRIP */}
      <div className="border-b border-[#E7DED2]/15 bg-[#1A1A1A]/60 py-8 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Truck className="w-5 h-5 text-[#B08D57] shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-[#F7F3EE]">NATIONWIDE EXPRESS</span>
              <span className="text-[11px] text-[#F7F3EE]/70 font-light">Free delivery over ৳ 5,000</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <ShieldCheck className="w-5 h-5 text-[#B08D57] shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-[#F7F3EE]">100% AUTHENTIC SEAL</span>
              <span className="text-[11px] text-[#F7F3EE]/70 font-light">Gold hologram guarantee</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <RotateCcw className="w-5 h-5 text-[#B08D57] shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-[#F7F3EE]">7-DAY EASY RETURN</span>
              <span className="text-[11px] text-[#F7F3EE]/70 font-light">Hassle-free refund policy</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Headphones className="w-5 h-5 text-[#B08D57] shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-[#F7F3EE]">DIRECT CONCIERGE</span>
              <span className="text-[11px] text-[#F7F3EE]/70 font-light">Personal scent consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* LAYER 2: 5-COLUMN EDITORIAL & COMPLIANCE MATRIX */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* COL 1: MAISON BRAND & GOOGLE VERIFIED BOUTIQUE LOCATION */}
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl font-bold tracking-widest text-[#F7F3EE]">
              OZNIOR
            </span>
          </Link>
          <p className="text-xs text-[#F7F3EE]/75 font-light leading-relaxed">
            Maison de Parfum. Artisanal haute parfumerie formulated with 30% pure Extrait concentration.
          </p>

          <div className="space-y-2 pt-2 text-xs text-[#F7F3EE]/80">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
              <span>House 14, Road 11, Banani, Dhaka - 1213, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>+880 1700-000000 (10 AM - 10 PM)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#B08D57] shrink-0" />
              <span>concierge@oznior.com</span>
            </div>
          </div>

          {/* Sleek Gold Outline WhatsApp Concierge Link (No neon green box) */}
          <div className="pt-2">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 border border-[#B08D57]/60 hover:border-[#B08D57] text-[#B08D57] hover:text-[#FFFFFF] text-xs font-bold uppercase tracking-wider rounded transition-all bg-[#1A1A1A]/80"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct Concierge Desk</span>
            </a>
          </div>
        </div>

        {/* COL 2: BOUTIQUE DIRECTORY */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08D57]">
            BOUTIQUE DIRECTORY
          </h3>
          <ul className="space-y-2.5 text-xs text-[#F7F3EE]/80 font-light">
            <li>
              <Link href="/parfums" className="hover:text-[#B08D57] transition-colors">
                Extrait de Parfums
              </Link>
            </li>
            <li>
              <Link href="/parfums?family=oud" className="hover:text-[#B08D57] transition-colors">
                Signature Oud Series
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-[#B08D57] transition-colors">
                Maison Discovery Coffrets (৳ 1,200)
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-[#B08D57] transition-colors">
                30-Sec Digital Sommelier Quiz
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-[#B08D57] transition-colors">
                The OZNIOR Edit Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 3: CLIENT CARE & TRUST */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08D57]">
            CLIENT CARE
          </h3>
          <ul className="space-y-2.5 text-xs text-[#F7F3EE]/80 font-light">
            <li>
              <Link href="/account/login" className="hover:text-[#B08D57] transition-colors">
                Client VIP Account
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-[#B08D57] transition-colors">
                Order Tracking & Status
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-[#B08D57] transition-colors">
                Concierge Support
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-[#B08D57] transition-colors">
                Discovery Voucher Redemption
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-[#B08D57] transition-colors">
                Frequently Asked Questions (FAQ)
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 4: GOOGLE SHOPPING COMPLIANCE & LEGAL POLICIES */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08D57]">
            GOOGLE MERCHANT POLICIES
          </h3>
          <ul className="space-y-2.5 text-xs text-[#F7F3EE]/80 font-light">
            <li>
              <Link href="/policies/shipping" className="hover:text-[#B08D57] transition-colors">
                Shipping & Delivery Policy
              </Link>
            </li>
            <li>
              <Link href="/policies/refund" className="hover:text-[#B08D57] transition-colors">
                7-Day Refund & Return Policy
              </Link>
            </li>
            <li>
              <Link href="/policies/authenticity" className="hover:text-[#B08D57] transition-colors">
                Authenticity & Hologram Guarantee
              </Link>
            </li>
            <li>
              <Link href="/policies/privacy" className="hover:text-[#B08D57] transition-colors">
                Privacy & Data Protection Policy
              </Link>
            </li>
            <li>
              <Link href="/policies/terms" className="hover:text-[#B08D57] transition-colors">
                Terms of Service & Sales Agreement
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 5: SECURED PAYMENTS & VERIFICATION */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08D57]">
            PAYMENTS & VERIFICATION
          </h3>
          <p className="text-xs text-[#F7F3EE]/75 font-light">
            Secured MFS, Card & Cash on Delivery nationwide.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#E7DED2]/20 rounded text-[10px] font-bold text-[#F7F3EE]">
              bKash Merchant
            </span>
            <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#E7DED2]/20 rounded text-[10px] font-bold text-[#F7F3EE]">
              Nagad Express
            </span>
            <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#E7DED2]/20 rounded text-[10px] font-bold text-[#F7F3EE]">
              Rocket
            </span>
            <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#E7DED2]/20 rounded text-[10px] font-bold text-[#F7F3EE]">
              Visa / Mastercard
            </span>
            <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#E7DED2]/20 rounded text-[10px] font-bold text-[#F7F3EE]">
              Cash on Delivery
            </span>
          </div>

          <div className="pt-2 flex items-center space-x-2 text-xs text-[#B08D57] font-semibold">
            <Lock className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>256-BIT SSL ENCRYPTED CHECKOUT</span>
          </div>
        </div>

      </div>

      {/* LAYER 3: FOOTER COPYRIGHT & STAFF DISCLOSURE BAR */}
      <div className="border-t border-[#E7DED2]/15 bg-[#0D0D0D] py-6 px-6 md:px-12 text-xs text-[#F7F3EE]/60">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} OZNIOR Parfums Paris. All rights reserved. Registered Trade License BD-14892.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/admin/login" className="hover:text-[#B08D57] transition-colors">
              Staff Portal
            </Link>
            <Link href="/policies/privacy" className="hover:text-[#B08D57] transition-colors">
              Privacy
            </Link>
            <Link href="/policies/terms" className="hover:text-[#B08D57] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
