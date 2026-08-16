export default function OlfactoryWorldSection() {
  const pyramidLayers = [
    {
      stage: "TOP NOTES",
      label: "The First Impression",
      notes: "Bergamot · Pink Pepper · Saffron",
      desc: "Luminous, vibrant accords that awaken the senses upon initial application.",
    },
    {
      stage: "HEART NOTES",
      label: "The Core Identity",
      notes: "Damask Rose · Jasmine · Assam Oud",
      desc: "Deep botanical florals and rich oud wood unfolding after 15 minutes of skin contact.",
    },
    {
      stage: "BASE NOTES",
      label: "The Lasting Memory",
      notes: "Cambodian Oud · Ambergris · Sandalwood",
      desc: "Sensual amber and precious woods persisting for 18+ hours on skin and garments.",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16 bg-[#F8F5EF]">
      <div className="text-center space-y-4">
        <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
          THE ARCHITECTURE OF A FRAGRANCE
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
          THE OLFACTORY WORLD
        </h2>
        <p className="text-lg md:text-xl text-[#4B4B4B] font-light max-w-xl mx-auto leading-[1.75]">
          Every OZNIOR Extrait de Parfum evolves dynamically across three chronological accords.
        </p>
      </div>

      {/* Elegant Line Diagram Presentation */}
      <div className="max-w-3xl mx-auto space-y-8">
        {pyramidLayers.map((layer, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-xl p-8 space-y-3 relative hover:border-[#8A6A44]/80 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E4DDD2] pb-3 gap-2">
              <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-[#8A6A44]">
                {layer.stage}
              </span>
              <span className="text-sm font-serif italic text-[#4B4B4B]">
                {layer.label}
              </span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#111111]">
              {layer.notes}
            </h3>
            <p className="text-base text-[#4B4B4B] font-light leading-[1.75]">
              {layer.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
