import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").toUpperCase();

  return (
    <article className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-10 text-left font-sans">
      <Link href="/journal" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#B08D57] hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO THE EDIT
      </Link>

      <div className="space-y-4 border-b border-[#E7DED2] pb-8">
        <div className="flex items-center space-x-4 text-xs font-semibold text-[#B08D57] uppercase tracking-widest">
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> August 12, 2026</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 min read</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1A1A1A] leading-tight">
          {title}
        </h1>
      </div>

      <div className="aspect-[21/9] w-full bg-[#F7F3EE] rounded-2xl overflow-hidden border border-[#E7DED2] p-4 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
          alt={title}
          className="max-h-full object-contain filter drop-shadow-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-6 text-base md:text-lg leading-[1.8] font-light">
        <p>
          Haute Parfumerie is not merely the combination of fragrant oils; it is an architectural art form. At Maison OZNIOR, every formulation undergoes a rigorous 90-day dark vat copper maceration process designed to settle raw botanical compounds.
        </p>
        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] pt-4">The Role of Extrait Density</h3>
        <p>
          Standard Eau de Parfum sprays contain 12% to 15% fragrance oil. By elevating our concentration to 30% pure Extrait de Parfum density, scent projection transitions from an immediate volatile burst into a sustained 18-hour olfactory trail.
        </p>
      </div>
    </article>
  );
}
