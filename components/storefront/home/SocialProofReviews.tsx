import { Star, ShieldCheck } from "lucide-react";

const REVIEWS = [
  {
    author: "Tanvir H.",
    location: "Gulshan, Dhaka",
    rating: 5,
    date: "Verified Purchaser • 2 days ago",
    title: "Unbelievable Longevity and Projection",
    comment:
      "Royale Oud Concentré easily lasts 18+ hours on my linen jackets. The Cambodian oud is rich without being overwhelming. Definitely Creed-level presentation.",
  },
  {
    author: "Rahim Chowdhury",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    date: "Verified Purchaser • 1 week ago",
    title: "Express Delivery in Velvet Packaging",
    comment:
      "Ordered at 3 PM and received it the next morning via Pathao courier. The velvet box and authenticity card make unboxing feel like a true luxury experience.",
  },
  {
    author: "Dr. Farhana Y.",
    location: "Chittagong",
    rating: 5,
    date: "Verified Purchaser • 2 weeks ago",
    title: "Aeterna Amber Gold is My New Signature",
    comment:
      "Luminous, warm, and sophisticated. Compliments every time I wear it to formal hospital dinners.",
  },
];

export default function SocialProofReviews() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16 bg-[#F8F5EF]">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
          VOICES OF DISCERNING CLIENTS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111]">
          VERIFIED CLIENT REVIEWS
        </h2>
        <div className="flex items-center justify-center space-x-2 text-sm text-[#4B4B4B]">
          <div className="flex text-[#8A6A44]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#8A6A44]" />
            ))}
          </div>
          <span className="font-bold text-[#111111]">4.9 / 5.0</span>
          <span>(Based on 420+ Verified Buyers in Bangladesh)</span>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-8 space-y-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
          >
            <div className="flex justify-between items-start">
              <div className="flex text-[#8A6A44]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8A6A44]" />
                ))}
              </div>
              <span className="text-[10px] text-[#8A6A44] font-semibold flex items-center gap-1 bg-[#8A6A44]/10 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Verified Buyer
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#111111]">{rev.title}</h3>
            <p className="text-base text-[#4B4B4B] font-light leading-[1.75] italic">
              &ldquo;{rev.comment}&rdquo;
            </p>

            <div className="pt-4 border-t border-[#E4DDD2] flex justify-between items-center text-xs">
              <span className="font-bold text-[#111111]">{rev.author} ({rev.location})</span>
              <span className="text-[#4B4B4B]/60 text-[10px]">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
