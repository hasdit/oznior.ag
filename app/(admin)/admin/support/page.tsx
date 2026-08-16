export default function AdminSupportPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Customer Support Tickets</h1>
        <p className="text-xs text-alabaster-muted mt-1">Manage concierge inquiries, delivery support tickets, and olfactory consultations.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Order #OZN-8492 Delivery Tracking</span>
          <span className="text-yellow-400 font-bold">OPEN</span>
        </div>
      </div>
    </div>
  );
}
