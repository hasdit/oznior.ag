import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-36 px-6 md:px-12 bg-[#171717] text-[#F8F5EF] text-center border-t border-[#8A6A44]/30 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto space-y-8 z-10">
        <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#B89B72]">
          THE FINAL IMPRESSION
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-[#F8F5EF] leading-tight">
          LEAVE A MEMORY, <br />
          <span className="italic font-normal text-[#B89B72]">NOT A PRESENCE.</span>
        </h2>
        <p className="text-lg md:text-xl text-[#E4DDD2] font-light max-w-xl mx-auto leading-[1.75]">
          Enter the realm of OZNIOR haute parfumerie. Complimentary express delivery across Bangladesh on orders over ৳ 5,000 BDT.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/parfums"
            className="px-9 py-4 bg-[#B89B72] text-[#171717] font-bold text-xs tracking-[0.22em] uppercase rounded hover:bg-[#F8F5EF] transition-all duration-300 shadow-md"
          >
            EXPLORE THE COLLECTION
          </Link>
          <Link
            href="/quiz"
            className="px-9 py-4 border border-[#F8F5EF]/30 text-[#F8F5EF] font-semibold text-xs tracking-[0.22em] uppercase rounded hover:border-[#B89B72] hover:text-[#B89B72] transition-all duration-300"
          >
            TAKE SCENT QUIZ
          </Link>
        </div>
      </div>
    </section>
  );
}
