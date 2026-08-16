const ARTICLES = [
  {
    title: "Understanding Cambodian Oud",
    category: "INGREDIA",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "The Architecture of a Fragrance",
    category: "CRAFT",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "How to Choose Your Signature Scent",
    category: "GUIDE",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
  },
];

export default function JournalPreview() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16 bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DDD2] pb-8">
        <div>
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44] block mb-2">
            EDITORIAL & ESSAYS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#111111]">
            FROM THE OZNIOR JOURNAL
          </h2>
        </div>
        <span className="text-xs uppercase tracking-[0.22em] text-[#8A6A44] font-semibold flex items-center cursor-pointer hover:text-[#111111] transition-colors">
          EXPLORE JOURNAL →
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {ARTICLES.map((art, i) => (
          <div key={i} className="group space-y-4 cursor-pointer">
            <div className="relative aspect-[16/10] w-full bg-[#F8F5EF] border border-[#E4DDD2] rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[11px] uppercase tracking-widest text-[#8A6A44] font-semibold">
                <span>{art.category}</span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] group-hover:text-[#8A6A44] transition-colors leading-snug">
                {art.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
