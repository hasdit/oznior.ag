import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const COLLECTIONS = [
  {
    title: "Signature Series",
    slug: "signature",
    desc: "Our iconic flagship Extrait formulations distilled with 30% pure fragrance oil.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    count: "4 Editions",
  },
  {
    title: "Parisian Exclusive",
    slug: "exclusive",
    desc: "Rare artisanal blends formulated exclusively with aged Cambodian agarwood and French rose.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    count: "3 Editions",
  },
  {
    title: "Most Loved Best Sellers",
    slug: "bestsellers",
    desc: "The highest-rated fragrance compositions chosen by discerning clients in Dhaka & worldwide.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    count: "5 Editions",
  },
  {
    title: "Limited Barrel Aged",
    slug: "limited",
    desc: "Macerated for 180 days in dark oak and copper casks. Hand-numbered limited bottles.",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    count: "2 Editions",
  },
];

export default function CollectionsDirectoryPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">HAUTE PARFUMERIE DIRECTORY</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">COLLECTIONS</h1>
        <p className="text-sm text-[#555555]">
          Explore curated fragrance series categorised by extraction method, rarity, and olfactory accords.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-8 flex flex-col justify-between hover:border-[#B08D57] transition-all shadow-card"
          >
            <div className="space-y-4">
              <div className="aspect-[16/9] w-full bg-[#F7F3EE] rounded-xl overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">{c.count}</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-[#555555] font-light leading-relaxed">
                {c.desc}
              </p>
            </div>

            <div className="pt-6 font-bold text-xs uppercase tracking-widest text-[#B08D57] flex items-center group-hover:underline">
              EXPLORE COLLECTION <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
