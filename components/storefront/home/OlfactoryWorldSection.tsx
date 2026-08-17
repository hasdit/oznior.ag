import { Sparkles } from "lucide-react";

export default function OlfactoryWorldSection() {
  const accords = [
    {
      step: "01",
      title: "TOP NOTES",
      time: "0 — 15 MINS",
      notes: "Calabrian Bergamot & Pink Pepper",
      desc: "Luminous, radiant accords awakening the senses upon initial spray.",
    },
    {
      step: "02",
      title: "HEART NOTES",
      time: "15 MINS — 4 HOURS",
      notes: "Damask Rose & Aged Assam Oud",
      desc: "Deep botanical florals unfolding as the formulation warms on skin.",
    },
    {
      step: "03",
      title: "BASE NOTES",
      time: "4 — 18+ HOURS",
      notes: "Baltic Ambergris & Mysore Sandalwood",
      desc: "Sensual velvet amber persisting for 18+ hours on skin and garments.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto bg-[#F7F3EE] border-y border-[#E7DED2] my-12 font-sans text-left">
      <div className="space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7DED2] pb-6 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57] flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-2" /> CHRONOLOGICAL SCENT ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-1">
              THE 3-STAGE SCENT EVOLUTION
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#555555] font-light max-w-md">
            Every OZNIOR Extrait de Parfum (30% density) matures across three distinct chronological accords.
          </p>
        </div>

        {/* Ultra-Light 3-Column Minimal Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E7DED2]">
          {accords.map((item, idx) => (
            <div key={item.step} className={`${idx !== 0 ? "md:pl-12 pt-6 md:pt-0" : ""} space-y-3`}>
              <div className="flex justify-between items-center text-[11px] font-bold text-[#B08D57] uppercase tracking-widest">
                <span>{item.step}. {item.title}</span>
                <span className="text-[10px] text-[#555555] font-semibold bg-[#FFFFFF] px-2.5 py-0.5 rounded border border-[#E7DED2]">
                  {item.time}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                {item.notes}
              </h3>

              <p className="text-xs text-[#555555] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
