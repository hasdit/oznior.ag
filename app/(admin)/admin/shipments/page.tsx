export default function AdminShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Shipments & Logistics Tracking</h1>
        <p className="text-xs text-alabaster-muted mt-1">Track active courier consignments, transit statuses, and delivery confirmations.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Consignment #PATH-84920</span>
          <span className="text-yellow-400 font-bold">IN TRANSIT</span>
        </div>
      </div>
    </div>
  );
}
