"use client";

import { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { useUIStore } from "@/lib/store";
import { trackEvent } from "@/lib/analytics";

export default function FragranceFinderModal() {
  const { isFinderOpen, closeFinder, addToCart, toggleWishlist, wishlist } = useUIStore();

  const [step, setStep] = useState(1);
  const [wearer, setWearer] = useState("Unisex");
  const [mood, setMood] = useState("Regal & Executive");
  const [occasion, setOccasion] = useState("Formal Gala");
  const [preferredScent, setPreferredScent] = useState("Oud & Amber");
  const [longevity, setLongevity] = useState("18+ Hours Pure Extrait");
  const [budget, setBudget] = useState("৳ 8,500 – ৳ 14,000");

  const [isCompleted, setIsCompleted] = useState(false);

  if (!isFinderOpen) return null;

  const handleNext = () => {
    if (step === 1) trackEvent("finder_start");
    if (step < 6) {
      setStep(step + 1);
    } else {
      trackEvent("finder_complete", { wearer, mood, occasion, preferredScent });
      setIsCompleted(true);
    }
  };

  const matchedProduct = {
    name: "Royale Oud Concentré",
    slug: "royale-oud-concentre",
    family: "Oud • Floral • Amber",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    volumeMl: 50,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Digital Fragrance Finder Quiz"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="bg-[#FFFFFF] border border-[#E7DED2] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl p-8 space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-[#E7DED2] pb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#B08D57]" />
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Digital Sommelier Finder</h3>
          </div>
          <button
            onClick={closeFinder}
            className="p-2 text-[#555555] hover:text-[#1A1A1A] transition-colors rounded-full hover:bg-[#F7F3EE]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isCompleted ? (
          /* RESULT SCREEN */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-full flex items-center justify-center mx-auto text-[#B08D57]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#B08D57]">
                98% MATCH CONFIDENCE
              </span>
              <h4 className="font-serif text-3xl font-bold text-[#1A1A1A]">
                {matchedProduct.name}
              </h4>
              <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                Based on your selection for {wearer} wear, {mood} mood, and {preferredScent} notes, this edition is your exact personal match.
              </p>
            </div>

            {/* Shoppable Product Card */}
            <div className="bg-[#F7F3EE] border border-[#E7DED2] p-6 rounded-xl flex items-center justify-between gap-4 max-w-lg mx-auto">
              <img src={matchedProduct.imageUrl} alt={matchedProduct.name} className="w-16 h-20 object-contain" />
              <div className="text-left flex-1">
                <h5 className="font-serif font-bold text-lg text-[#1A1A1A]">{matchedProduct.name}</h5>
                <span className="text-xs text-[#555555] block">{matchedProduct.family} • 50ml</span>
                <span className="font-serif font-bold text-base text-[#B08D57]">৳ {matchedProduct.price.toLocaleString()} BDT</span>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() =>
                    addToCart({
                      id: "p1",
                      name: matchedProduct.name,
                      slug: matchedProduct.slug,
                      volumeMl: 50,
                      price: 8500,
                      imageUrl: matchedProduct.imageUrl,
                    })
                  }
                  className="px-4 py-2 bg-[#1A1A1A] text-[#F7F3EE] rounded text-xs font-bold uppercase tracking-wider flex items-center space-x-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
                <Link
                  href={`/parfums/${matchedProduct.slug}`}
                  onClick={closeFinder}
                  className="text-[11px] text-[#B08D57] font-semibold hover:underline text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* STEP ENGINE */
          <div className="space-y-6">
            <div className="flex justify-between items-center text-xs text-[#555555]">
              <span>Question {step} of 6</span>
              <span className="font-bold text-[#B08D57]">{Math.round((step / 6) * 100)}% Complete</span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">1. Who will wear this fragrance?</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["Male", "Female", "Unisex"].map((w) => (
                    <button
                      key={w}
                      onClick={() => setWearer(w)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        wearer === w
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">2. Select your desired wear mood</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["Magnetic & Sensual", "Fresh & Energetic", "Regal & Executive"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        mood === m
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">3. Primary wear occasion</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["Formal Gala", "Daily Office", "Date Night"].map((o) => (
                    <button
                      key={o}
                      onClick={() => setOccasion(o)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        occasion === o
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">4. Preferred scent family</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["Oud & Amber", "Damask Rose", "Cedarwood & Vetiver", "Fresh Bergamot"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setPreferredScent(s)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        preferredScent === s
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">5. Longevity requirement</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["12+ Hours EDP", "18+ Hours Pure Extrait"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setLongevity(l)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        longevity === l
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">6. Budget tier</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["৳ 5,000 – ৳ 8,500", "৳ 8,500 – ৳ 14,000"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`p-4 text-xs font-semibold rounded-lg border transition-all ${
                        budget === b
                          ? "bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A]"
                          : "bg-[#F7F3EE] border-[#E7DED2] text-[#555555] hover:border-[#B08D57]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-[#E7DED2]">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs text-[#555555] uppercase font-bold hover:text-[#1A1A1A]"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#1A1A1A] text-[#F7F3EE] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#B08D57] transition-all flex items-center space-x-1"
              >
                <span>{step === 6 ? "Get Results" : "Next Step"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
