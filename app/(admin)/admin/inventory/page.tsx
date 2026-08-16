export default function AdminInventoryPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Warehouse Stock & Inventory</h1>
        <p className="text-xs text-alabaster-muted mt-1">Multi-warehouse stock matrix for 30ml, 50ml, and 100ml bottle variants.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Dhaka Central Hub (DHK-01)</span>
          <span className="font-mono text-gold-champagne font-bold">180 Units Stocked</span>
        </div>
      </div>
    </div>
  );
}
