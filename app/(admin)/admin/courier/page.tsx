export default function AdminCourierPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Courier Logistics Hub</h1>
        <p className="text-xs text-alabaster-muted mt-1">1-tap consignment generation and tracking sync for Pathao, Steadfast, RedX, and Sundarban.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Pathao Courier API</span>
          <span className="text-green-400 font-bold">ACTIVE CONNECTED</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Steadfast Courier API</span>
          <span className="text-green-400 font-bold">ACTIVE CONNECTED</span>
        </div>
      </div>
    </div>
  );
}
