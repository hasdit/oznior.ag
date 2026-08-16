"use client";

export interface OlfactoryPyramidProps {
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
}

export default function OlfactoryPyramid({
  topNotes = ["Bergamot", "Pink Pepper", "Saffron"],
  heartNotes = ["Damask Rose", "Jasmine", "Assam Oud"],
  baseNotes = ["Cambodian Oud", "Ambergris", "Sandalwood"],
}: OlfactoryPyramidProps) {
  return (
    <div className="bg-obsidian-surface border border-gold-muted/30 rounded-xl p-8 space-y-6">
      <div className="text-center space-y-1">
        <h3 className="font-serif text-2xl font-semibold text-gold-champagne">Olfactory Scent Pyramid</h3>
        <p className="text-xs text-alabaster-muted">Notes progression from initial atomization to dry-down</p>
      </div>

      <div className="max-w-md mx-auto space-y-3 pt-4">
        {/* Top Notes Tier */}
        <div className="bg-obsidian border border-gold-champagne/40 rounded-lg p-4 text-center space-y-1 shadow-gold-glow">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-champagne">
            Top Notes (0 - 15 Mins)
          </span>
          <div className="text-xs text-alabaster font-medium">{topNotes.join(" • ")}</div>
        </div>

        {/* Heart Notes Tier */}
        <div className="bg-obsidian border border-gold-muted/60 rounded-lg p-4 text-center space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-alabaster-muted">
            Heart Notes (15 Mins - 4 Hours)
          </span>
          <div className="text-xs text-alabaster font-medium">{heartNotes.join(" • ")}</div>
        </div>

        {/* Base Notes Tier */}
        <div className="bg-obsidian border border-gold-muted/40 rounded-lg p-4 text-center space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-alabaster-muted/80">
            Base Notes (4 Hours - 12+ Hours)
          </span>
          <div className="text-xs text-alabaster font-medium">{baseNotes.join(" • ")}</div>
        </div>
      </div>
    </div>
  );
}
