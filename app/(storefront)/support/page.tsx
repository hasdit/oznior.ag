import Link from "next/link";
import { HelpCircle, MessageCircle, Truck, ShieldCheck, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const faqs = [
    { q: "How long does shipping take in Dhaka and across Bangladesh?", a: "Dhaka city orders are delivered within 24 hours. Countrywide express shipments via Pathao & Steadfast arrive within 48 hours." },
    { q: "How do I verify the authenticity of my OZNIOR bottle?", a: "Every box includes a hand-sealed hologram certificate of origin with a unique serial number verifiable on our concierge portal." },
    { q: "What is your 7-Day Return Policy?", a: "If the fragrance does not meet your expectations, return the unopened full-size bottle within 7 days using the complimentary sample pouch included in your package." },
    { q: "Can I order directly via WhatsApp?", a: "Yes. Click our 1-Tap WhatsApp Concierge button to place orders directly with a dedicated fragrance advisor." },
  ];

  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <HelpCircle className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">CLIENT ASSISTANCE</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">CONCIERGE SUPPORT</h1>
        <p className="text-sm text-[#555555]">
          Dedicated assistance for order tracking, bespoke consultations, and delivery queries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-4 shadow-card">
          <MessageCircle className="w-8 h-8 text-[#2F6F4F]" />
          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">WhatsApp Ordering</h3>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            Speak directly with a Parisian-trained fragrance sommelier for instant order booking.
          </p>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full py-3 bg-[#2F6F4F] text-[#FFFFFF] text-center text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B08D57] transition-colors"
          >
            CHAT ON WHATSAPP
          </a>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-4 shadow-card">
          <Truck className="w-8 h-8 text-[#B08D57]" />
          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Track Delivery</h3>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            Enter your Pathao or Steadfast courier tracking code to get live updates.
          </p>
          <Link
            href="/policies/shipping"
            className="inline-block w-full py-3 bg-[#1A1A1A] text-[#F7F3EE] text-center text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B08D57] transition-colors"
          >
            TRACK SHIPMENT
          </Link>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 rounded-2xl space-y-4 shadow-card">
          <ShieldCheck className="w-8 h-8 text-[#B08D57]" />
          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Authenticity Seal</h3>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            Verify hologram security seals and certificate of origin numbers.
          </p>
          <Link
            href="/policies/authenticity"
            className="inline-block w-full py-3 border border-[#1A1A1A] text-[#1A1A1A] text-center text-xs font-bold uppercase tracking-wider rounded hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
          >
            VERIFY HOLOGRAM
          </Link>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[#E7DED2] p-8 md:p-12 rounded-2xl space-y-6">
        <h3 className="font-serif text-3xl font-bold text-[#1A1A1A]">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-[#E7DED2] pb-4 space-y-1">
              <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">{f.q}</h4>
              <p className="text-sm text-[#555555] font-light leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
