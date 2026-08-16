export default function AdminSeoPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">SEO Metadata & Schema Manager</h1>
        <p className="text-xs text-alabaster-muted mt-1">Configure page meta titles, descriptions, canonical URLs, OpenGraph images, and JSON-LD schemas.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Homepage Route ( / )</span>
          <span className="font-mono text-gold-champagne">CONFIGURED</span>
        </div>
      </div>
    </div>
  );
}
