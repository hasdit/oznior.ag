export default function AdminReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Customer Reviews & Ratings</h1>
        <p className="text-xs text-alabaster-muted mt-1">Moderate user product ratings, verified buyer badges, and photo uploads.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Royale Oud Concentré (5 Stars)</span>
          <span className="text-green-400 font-bold">APPROVED</span>
        </div>
      </div>
    </div>
  );
}
