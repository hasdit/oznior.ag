import Link from "next/link";
import { RotateCcw, ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left font-sans">
      <Link href="/support" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> CLIENT SUPPORT
      </Link>

      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <RotateCcw className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">RISK-FREE TRIAL GUARANTEE</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">7-DAY RETURN POLICY</h1>
      </div>

      <div className="prose max-w-none text-[#1A1A1A] space-y-6 text-sm md:text-base leading-relaxed font-light">
        <p>
          We offer a 7-day risk-free concierge return policy. Every full-sized 50ml or 100ml bottle comes with a complimentary sample pouch.
        </p>
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">1. How to Test Your Fragrance</h3>
        <p>
          Please open and spray the sample pouch first. If you decide the scent does not suit your accord signature, return the unopened, sealed 50ml or 100ml bottle within 7 days for a 100% refund.
        </p>
      </div>
    </div>
  );
}
