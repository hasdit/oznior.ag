export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gold-muted/20 pb-6">
        <h1 className="font-serif text-3xl font-semibold text-gold-champagne">Journal & Editorial Articles</h1>
        <p className="text-xs text-alabaster-muted mt-1">Publish scent stories, fragrance guides, and haute parfumerie essays.</p>
      </div>
      <div className="bg-obsidian-surface border border-gold-muted/30 p-6 rounded-lg space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-serif font-bold text-alabaster">Understanding Cambodian Oud</span>
          <span className="font-mono text-gold-champagne">/journal/understanding-cambodian-oud</span>
        </div>
      </div>
    </div>
  );
}
