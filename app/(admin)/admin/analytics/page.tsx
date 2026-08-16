export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Analytics & Executive Reports</h1>
        <p className="text-xs text-alabaster-muted mt-1">Aggregated revenue BDT, order conversion percentages, AOV, and payment breakdown.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Total Revenue BDT</span>
          <span className="font-mono text-gold-champagne font-bold">৳ 485,920.00</span>
        </div>
      </div>
    </div>
  );
}
