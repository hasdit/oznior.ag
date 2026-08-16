import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function AuthenticityPolicyPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left font-sans">
      <Link href="/support" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> CLIENT SUPPORT
      </Link>

      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">CERTIFICATE OF ORIGIN</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">AUTHENTICITY GUARANTEE</h1>
      </div>

      <div className="prose max-w-none text-[#1A1A1A] space-y-6 text-sm md:text-base leading-relaxed font-light">
        <p>
          Maison OZNIOR guarantees 100% authentic haute parfumerie formulations. All oils are directly imported from Grasse, France and Cambodia.
        </p>
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">1. Hand-Sealed Hologram & Serial Verification</h3>
        <p>
          Each velvet box is secured with a tamper-evident gold hologram sticker containing a unique 8-digit serial number. You can verify your serial number with our concierge team.
        </p>
      </div>
    </div>
  );
}
