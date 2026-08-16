import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left font-sans">
      <Link href="/support" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> CLIENT SUPPORT
      </Link>

      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Lock className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">DATA PROTECTION</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">PRIVACY POLICY</h1>
      </div>

      <div className="prose max-w-none text-[#1A1A1A] space-y-6 text-sm md:text-base leading-relaxed font-light">
        <p>
          At Maison OZNIOR, your personal data and payment information are protected under 256-bit SSL encryption. We never share client contact details with third parties.
        </p>
      </div>
    </div>
  );
}
