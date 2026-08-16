import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPolicyPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left font-sans">
      <Link href="/support" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> CLIENT SUPPORT
      </Link>

      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <FileText className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">LEGAL TERMS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">TERMS OF SERVICE</h1>
      </div>

      <div className="prose max-w-none text-[#1A1A1A] space-y-6 text-sm md:text-base leading-relaxed font-light">
        <p>
          By purchasing from Maison OZNIOR, you agree to our client service terms, including authentic product guarantee, cash on delivery inspection rights, and 7-day risk-free trial terms.
        </p>
      </div>
    </div>
  );
}
