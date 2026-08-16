export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Admin Executive Dashboard</h1>
        <p className="text-xs text-alabaster-muted mt-1">Real-time revenue, orders, conversion metrics & MFS queue.</p>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue (BDT)", value: "৳ 485,920.00", change: "+12.8%" },
          { label: "Total Orders", value: "124 Orders", change: "+8.5%" },
          { label: "Pending MFS Verification", value: "38 Orders", change: "Requires Action" },
          { label: "Average Order Value", value: "৳ 8,620.00", change: "+3.2%" },
        ].map((kpi, i) => (
          <div key={i} className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-2">
            <span className="text-[10px] uppercase font-semibold text-alabaster-muted tracking-wider">{kpi.label}</span>
            <div className="font-serif text-2xl font-bold text-alabaster">{kpi.value}</div>
            <span className="text-[10px] font-medium text-gold-champagne">{kpi.change}</span>
          </div>
        ))}
      </div>

      {/* Quick Verification Queue Placeholder */}
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <h2 className="font-serif text-lg text-gold-champagne">bKash / Nagad MFS Verification Queue</h2>
        <p className="text-xs text-alabaster-muted">Matches customer sender mobile number & last 4 digits / TrxID.</p>
        <div className="p-4 bg-obsidian border border-gold-muted/20 rounded text-xs text-alabaster-muted">
          Verification queue ready. Real-time webhook listener active.
        </div>
      </div>
    </div>
  );
}
