export default function CraftsmanshipSection() {
  const principles = [
    {
      number: "01",
      title: "RARE INGREDIENTS",
      desc: "Ethically harvested Cambodian oud, damask rose, and golden amber crystals selected for character.",
    },
    {
      number: "02",
      title: "EXTRAIT CONCENTRATION",
      desc: "Formulated as 30% Extrait de Parfum for rich olfactory depth and 18+ hour longevity.",
    },
    {
      number: "03",
      title: "HAND FINISHED PACKAGING",
      desc: "Every bottle is hand-sealed in velvet-cushioned boxes with an authenticated certificate of origin.",
    },
    {
      number: "04",
      title: "SMALL BATCH PRODUCTION",
      desc: "Meticulously aged in dark copper vessels for 90 days before cold filtration in limited quantities.",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16 bg-[#FFFFFF] border-t border-[#E4DDD2]">
      <div className="text-center space-y-3">
        <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
          OUR CRAFT MANIFESTO
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
          COMPOSED WITH INTENTION
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((p) => (
          <div
            key={p.number}
            className="p-8 bg-[#F8F5EF] border border-[#E4DDD2] rounded-xl space-y-4 hover:border-[#8A6A44]/80 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
          >
            <span className="font-serif text-4xl font-bold text-[#8A6A44] block">
              {p.number}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#111111] tracking-wider">
              {p.title}
            </h3>
            <p className="text-base text-[#4B4B4B] font-light leading-[1.75]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
