import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const JOURNAL_POSTS = [
  {
    slug: "art-of-layering-oud-and-amber",
    title: "The Art of Olfactory Layering: Combining Cambodian Oud & Amber",
    excerpt: "How Parisian perfumers layer pure Extrait oils to create bespoke scent silhouettes that evolve across 18 hours.",
    date: "August 12, 2026",
    category: "Olfactory Technique",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "small-batch-copper-maceration",
    title: "Why Small-Batch Copper Vat Maceration Matters",
    excerpt: "Exploring the 90-day aging process in dark copper vessels that stabilizes high-concentration fragrance oils.",
    date: "August 04, 2026",
    category: "Maison Craftsmanship",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "harvesting-damask-rose-at-dawn",
    title: "Harvesting Damask Rose at Dawn in Grasse",
    excerpt: "Why petals harvested before sunrise yield 40% higher natural oil density for luxury Extrait de Parfum.",
    date: "July 28, 2026",
    category: "Botanical Sourcing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function JournalDirectoryPage() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto space-y-12 text-left font-sans">
      <div className="border-b border-[#E7DED2] pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-[#B08D57]">
          <BookOpen className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">PARISIAN EDITORIAL</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A]">THE OZNIOR EDIT</h1>
        <p className="text-sm text-[#555555]">
          Stories of rare botanical sourcing, copper maceration techniques, and olfactory artistry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {JOURNAL_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#B08D57] transition-all shadow-card"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] w-full bg-[#F7F3EE] rounded-xl overflow-hidden p-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-[#B08D57]">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 font-bold text-xs uppercase tracking-widest text-[#B08D57] flex items-center group-hover:underline">
              READ ARTICLE <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
