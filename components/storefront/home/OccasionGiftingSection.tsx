import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const GIFT_COLLECTIONS = [
  {
    title: "Gifts for Him",
    desc: "Bold Cambodian oud, cedarwood, and spicy saffron formulations.",
    href: "/parfums?gifts=him",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Gifts for Her",
    desc: "Luminous damask rose, golden amber, and vanilla crystal accords.",
    href: "/parfums?gifts=her",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Prestige Coffret Sets",
    desc: "Curated 50ml + 10ml travel spray in velvet-lined rigid gift box.",
    href: "/parfums?gifts=sets",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
  },
];

export default function OccasionGiftingSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F7F3EE]">
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center justify-center">
          <Gift className="w-4 h-4 mr-2" /> BESPOKE PRESENTATION
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          OCCASION & LUXURY GIFTS
        </h2>
        <p className="text-base text-[#555555] font-light max-w-xl mx-auto">
          Every order includes complimentary gold ribbon velvet box wrapping & personalized gift notes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {GIFT_COLLECTIONS.map((g, idx) => (
          <div
            key={idx}
            className="group bg-[#FFFFFF] border border-[#E7DED2] rounded-xl overflow-hidden p-8 flex flex-col justify-between hover:border-[#B08D57] transition-all shadow-xs text-left"
          >
            <div className="space-y-4">
              <div className="aspect-[4/3] w-full bg-[#F7F3EE] rounded-lg overflow-hidden flex items-center justify-center p-4">
                <img
                  src={g.image}
                  alt={g.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
                {g.title}
              </h3>
              <p className="text-sm text-[#555555] font-light leading-relaxed">
                {g.desc}
              </p>
            </div>

            <div className="pt-6">
              <Link href={g.href}>
                <Button variant="outline" className="w-full border-[#1A1A1A]/30 text-[#1A1A1A] hover:border-[#B08D57] hover:text-[#B08D57]">
                  EXPLORE GIFT GUIDE <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
