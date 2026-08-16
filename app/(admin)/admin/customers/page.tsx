export default function AdminCustomersPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Royale VIP Customers</h1>
        <p className="text-xs text-alabaster-muted mt-1">Manage customer profiles, VIP points, referral tracking, and order history.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">John Doe (john@example.com)</span>
          <span className="font-mono text-gold-champagne font-bold">50 VIP Points</span>
        </div>
      </div>
    </div>
  );
}
