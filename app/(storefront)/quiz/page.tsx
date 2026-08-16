"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("Unisex");
  const [time, setTime] = useState("Night / Evening");
  const [occasion, setOccasion] = useState("Formal / Gala");
  const [selectedNotes, setSelectedNotes] = useState<string[]>(["Oud", "Amber"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleNote = (note: string) => {
    if (selectedNotes.includes(note)) {
      setSelectedNotes(selectedNotes.filter((n) => n !== note));
    } else {
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/v1/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gender,
          time,
          occasion,
          notes: selectedNotes,
        }),
      });
    } catch {
      // Fallback UI display
    } finally {
      setIsSubmitting(false);
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-[#F8F5EF] min-h-screen py-24 px-6 md:px-12 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-[#FFFFFF] border border-[#E4DDD2] rounded-2xl p-12 text-center space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          <div className="w-16 h-16 bg-[#8A6A44]/10 border border-[#8A6A44]/30 rounded-full flex items-center justify-center mx-auto text-[#8A6A44]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-3">
            <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44]">
              YOUR PERFECT OLFACTORY MATCH
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111]">
              Royale Oud Concentré
            </h1>
            <p className="text-lg text-[#4B4B4B] font-light max-w-xl mx-auto leading-[1.75]">
              Based on your preference for {gender} compositions, {time} wear, and {selectedNotes.join(", ")} accords, we recommend <strong>Royale Oud Concentré</strong> with 98% match confidence.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/parfums/royale-oud-concentre">
              <Button size="lg" className="bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44] transition-colors py-4 px-8">
                Explore Match Details (50ml) <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[12px] uppercase tracking-[0.3em] font-semibold text-[#8A6A44] flex items-center justify-center">
            <Sparkles className="w-4 h-4 mr-2 text-[#8A6A44]" /> Digital Sommelier Match
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111]">
            Discover Your Signature Accord
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4B4B4B]">
            Step {step} of 4
          </p>
        </div>

        {/* Step Container */}
        <div className="bg-[#FFFFFF] border border-[#E4DDD2] p-10 rounded-2xl space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
          {step === 1 && (
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl text-[#111111] font-bold">1. Who is this fragrance for?</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Male", "Female", "Unisex"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`p-5 text-sm font-semibold rounded-lg border transition-all ${
                      gender === g
                        ? "bg-[#111111] text-[#F8F5EF] border-[#111111] font-bold shadow-md"
                        : "bg-[#F8F5EF] border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl text-[#111111] font-bold">2. When will you wear this fragrance?</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Daytime", "Night / Evening", "All-Day"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`p-5 text-sm font-semibold rounded-lg border transition-all ${
                      time === t
                        ? "bg-[#111111] text-[#F8F5EF] border-[#111111] font-bold shadow-md"
                        : "bg-[#F8F5EF] border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl text-[#111111] font-bold">3. Primary wear occasion?</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Formal / Gala", "Daily Office", "Romantic Dates"].map((o) => (
                  <button
                    key={o}
                    onClick={() => setOccasion(o)}
                    className={`p-5 text-sm font-semibold rounded-lg border transition-all ${
                      occasion === o
                        ? "bg-[#111111] text-[#F8F5EF] border-[#111111] font-bold shadow-md"
                        : "bg-[#F8F5EF] border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl text-[#111111] font-bold">4. Select your favorite accord notes</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Oud", "Amber", "Damask Rose", "Saffron", "Cedarwood", "Bergamot"].map((n) => (
                  <button
                    key={n}
                    onClick={() => toggleNote(n)}
                    className={`p-4 text-sm font-semibold rounded-lg border transition-all ${
                      selectedNotes.includes(n)
                        ? "bg-[#111111] text-[#F8F5EF] border-[#111111] font-bold shadow-md"
                        : "bg-[#F8F5EF] border-[#E4DDD2] text-[#4B4B4B] hover:border-[#8A6A44]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-[#E4DDD2]">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4B4B4B] hover:text-[#111111] transition-colors"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <Button size="sm" onClick={() => setStep(step + 1)} className="bg-[#111111] text-[#F8F5EF] hover:bg-[#8A6A44]">
                Next Step →
              </Button>
            ) : (
              <Button size="sm" onClick={handleFinish} disabled={isSubmitting} className="bg-[#8A6A44] text-[#F8F5EF] hover:bg-[#111111]">
                {isSubmitting ? "Matching..." : "Get My Match"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
