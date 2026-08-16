export default function AdminVendorsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Vendors & Suppliers</h1>
        <p className="text-xs text-alabaster-muted mt-1">Manage luxury fragrance suppliers, essential oil distillers, and packaging vendors.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Grasse Botanical Distillers</span>
          <span className="font-mono text-gold-champagne">France</span>
        </div>
      </div>
    </div>
  );
}
