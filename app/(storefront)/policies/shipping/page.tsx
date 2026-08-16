import Link from "next/link";
import { Truck, ArrowLeft } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left font-sans">
      <Link href="/support" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> CLIENT SUPPORT
      </Link>

      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Truck className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">LOGISTICS & DELIVERY</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">SHIPPING POLICY</h1>
      </div>

      <div className="prose max-w-none text-[#1A1A1A] space-y-6 text-sm md:text-base leading-relaxed font-light">
        <p>
          Maison OZNIOR provides complimentary nationwide express delivery across Bangladesh on all orders exceeding ৳ 5,000 BDT.
        </p>
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">1. Dispatch & Delivery Timelines</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dhaka Metropolitan Area:</strong> Delivered within 24 hours via Pathao Express Courier.</li>
          <li><strong>All Other Districts in Bangladesh:</strong> Delivered within 24–48 hours via Steadfast Courier.</li>
        </ul>
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">2. Cash on Delivery (COD) Inspection</h3>
        <p>
          Clients may inspect the outer velvet box hologram security seal prior to handing payment to the delivery rider.
        </p>
      </div>
    </div>
  );
}
