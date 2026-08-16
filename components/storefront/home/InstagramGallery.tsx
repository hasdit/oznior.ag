import { Instagram, ShoppingBag } from "lucide-react";
import Link from "next/link";

const UGC_TILES = [
  { id: 1, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80", tag: "@tanvir.g" },
  { id: 2, image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=400&q=80", tag: "@rahim_oud" },
  { id: 3, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80", tag: "@farhana_y" },
  { id: 4, image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=400&q=80", tag: "@oznior_paris" },
  { id: 5, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80", tag: "@unboxing_bd" },
  { id: 6, image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=400&q=80", tag: "@gourmet_scents" },
];

export default function InstagramGallery() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 bg-[#F7F3EE]">
      <div className="text-center space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center justify-center">
          <Instagram className="w-4 h-4 mr-2" /> #OZNIORPARFUMS
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          FOLLOW OUR OLFACTORY JOURNEY
        </h2>
        <p className="text-base text-[#555555] font-light max-w-xl mx-auto">
          Tag @ozniorparfums on Instagram for a chance to be featured in our monthly editorial gallery.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {UGC_TILES.map((tile) => (
          <div key={tile.id} className="group relative aspect-square bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E7DED2]">
            <img
              src={tile.image}
              alt={tile.tag}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-[#F7F3EE] space-y-2">
              <Instagram className="w-6 h-6 text-[#B08D57]" />
              <span className="text-xs font-bold">{tile.tag}</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold">Shop Post</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-8 py-3.5 bg-[#FFFFFF] border border-[#E7DED2] text-[#1A1A1A] font-bold text-xs tracking-widest uppercase rounded-full hover:border-[#B08D57] hover:text-[#B08D57] transition-all shadow-xs"
        >
          <Instagram className="w-4 h-4 mr-2 text-[#B08D57]" /> FOLLOW @OZNIORPARFUMS ON INSTAGRAM
        </a>
      </div>
    </section>
  );
}
