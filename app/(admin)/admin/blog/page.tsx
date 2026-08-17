"use client";

import { useState, useRef } from "react";
import { useAdminStore, AdminBlogPost } from "@/lib/adminStore";
import {
  BookOpen,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript as SubIcon,
  Superscript as SupIcon,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Sparkles,
  X,
  FileText,
  Maximize2
} from "lucide-react";

const SAMPLE_INITIAL_CONTENT = `<p>At the heart of haute parfumerie lies the patient art of maceration. Unlike mass-manufactured fragrances that are bottled immediately after blending, <strong class="text-[#D4AF37]">OZNIOR Extrait de Parfum</strong> undergoes a strict <em class="italic">90-day aging process</em> inside dark, temperature-controlled copper vessels.</p>

<h2 class="text-[#D4AF37] font-serif text-xl font-bold my-4">Why Copper Aging Matters</h2>
<p>Copper naturally stabilizes the heavy agarwood terpenes and amber resins, allowing top notes like Kashmiri Saffron and Calabrian Bergamot to seamlessly meld with base notes of 25-year aged wild Cambodian Oud.</p>

<blockquote class="border-l-2 border-[#D4AF37] pl-4 italic my-4 text-[#D4AF37]">"True sillage is not born from volume, but from atmospheric density achieved through maceration."</blockquote>

<h3 class="text-[#F7F3EE] font-serif text-lg font-bold my-3">Extrait Concentration Metrics</h3>
<ul class="list-disc pl-5 space-y-1 my-3">
  <li><strong class="text-[#D4AF37]">Extrait de Parfum:</strong> 30% Pure Oil Concentration (18-24 hrs longevity)</li>
  <li><strong>Eau de Parfum:</strong> 15-20% Concentration (6-8 hrs longevity)</li>
</ul>

<p>For more details on our harvesting process, explore our <a href="/parfums" target="_blank" class="text-[#D4AF37] underline">Full Extrait Collection</a>.</p>`;

export default function AdminBlogPage() {
  const { blogPosts, addBlogPost, toggleBlogPost, deleteBlogPost } = useAdminStore();
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [readingPost, setReadingPost] = useState<AdminBlogPost | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Oud Craftsmanship");
  const [readTime, setReadTime] = useState("5 min read");
  const [author, setAuthor] = useState("OZNIOR Perfumery Lab");
  const [excerpt, setExcerpt] = useState("");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85");
  const [contentHtml, setContentHtml] = useState(SAMPLE_INITIAL_CONTENT);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [toast, setToast] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Helper to insert HTML tags into content text at cursor or around selection
  const insertFormatting = (openTag: string, closeTag: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setContentHtml((prev) => prev + `${openTag}text${closeTag}`);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = contentHtml.substring(start, end) || "sample text";
    const replacement = `${openTag}${selectedText}${closeTag}`;

    const newContent = contentHtml.substring(0, start) + replacement + contentHtml.substring(end);
    setContentHtml(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + openTag.length + selectedText.length);
    }, 50);
  };

  const handlePromptLink = () => {
    const url = prompt("Enter Target Link URL (e.g. https://oznior.com/parfums):", "https://");
    if (!url) return;
    const text = prompt("Enter Link Text:", "Explore Perfumes");
    insertFormatting(`<a href="${url}" target="_blank" class="text-[#D4AF37] underline hover:text-[#E5C158]">`, `${text || url}</a>`);
  };

  const handlePromptImage = () => {
    const url = prompt("Enter Image Attachment URL:", "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85");
    if (!url) return;
    const caption = prompt("Enter Image Caption / Alt Text:", "Aged Cambodian Oud Copper Vessel");
    const imgHtml = `\n<figure class="my-6"><img src="${url}" alt="${caption}" class="w-full rounded-xl border border-[#B08D57]/40 shadow-2xl object-cover max-h-[400px]" /><figcaption class="text-center text-xs font-mono text-[#D4AF37] mt-2">${caption}</figcaption></figure>\n`;
    setContentHtml((prev) => prev + imgHtml);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt) return;

    const newPost: AdminBlogPost = {
      id: `b-${Date.now()}`,
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      category,
      readTime,
      author,
      excerpt,
      content: contentHtml,
      publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      isPublished: true,
      imageUrl: imageUrl || "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
    };

    addBlogPost(newPost);
    setShowEditorModal(false);
    resetForm();
    setToast("Journal Essay published & formatted successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContentHtml(SAMPLE_INITIAL_CONTENT);
  };

  return (
    <div className="space-y-8 bg-[#0F0F0F] min-h-screen text-[#F7F3EE] p-2 sm:p-4">
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-[#143521] border border-emerald-500/60 text-emerald-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#B08D57]/30 pb-6 gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-[#D4AF37] flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-[#D4AF37]" /> Haute Journal & Editorial CMS
          </h1>
          <p className="text-xs text-zinc-400 mt-1">Publish olfactory stories, maceration essays, rich typography guides, and perfume reviews.</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowEditorModal(true);
          }}
          className="bg-[#D4AF37] text-[#0F0F0F] font-bold px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#E5C158] transition shadow-xl"
        >
          <Plus className="w-4 h-4" /> Compose Rich Article
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-[#181818] border border-[#B08D57]/30 rounded-xl overflow-hidden flex flex-col justify-between p-6 space-y-4 group hover:border-[#D4AF37]/60 transition">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider bg-[#252525] px-2.5 py-1 rounded border border-[#B08D57]/30">
                  {post.category || "Editorial"} • {post.readTime || "4 min"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleBlogPost(post.id)}
                    className={`p-1.5 rounded transition ${post.isPublished ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/40' : 'text-amber-400 bg-amber-950/60 border border-amber-500/40'}`}
                    title={post.isPublished ? "Published Live" : "Draft Hidden"}
                  >
                    {post.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => deleteBlogPost(post.id)}
                    className="p-1.5 text-zinc-400 hover:text-rose-400 transition"
                    title="Delete Essay"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#F7F3EE] group-hover:text-[#D4AF37] transition">{post.title}</h3>
              <p className="text-xs font-mono text-[#D4AF37]/80">/journal/{post.slug}</p>
              <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-[#B08D57]/20 flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-400 text-[11px]">By {post.author} • {post.publishedAt}</span>
              <button
                onClick={() => setReadingPost(post)}
                className="text-[#D4AF37] hover:text-[#E5C158] text-xs font-bold flex items-center gap-1"
              >
                Read Full <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FULL RICH TEXT ARTICLE EDITOR MODAL WITH CRYSTAL-CLEAR HIGH CONTRAST */}
      {showEditorModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-[#181818] border border-[#B08D57]/60 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl text-[#F7F3EE] overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#B08D57]/40 flex justify-between items-center bg-[#121212]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="font-serif text-xl font-bold text-[#D4AF37]">Compose Rich Journal Article</h2>
              </div>
              <button
                onClick={() => setShowEditorModal(false)}
                className="text-zinc-400 hover:text-[#F7F3EE] p-1.5 rounded-lg hover:bg-zinc-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs">
              
              {/* Metadata Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Article Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
                    }}
                    className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3.5 py-2.5 rounded-lg text-[#F7F3EE] placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm"
                    placeholder="e.g. The 90-Day Maceration Philosophy in Copper Vessels"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">URL Slug</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3.5 py-2.5 rounded-lg text-[#D4AF37] font-mono text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Category / Tag</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3 py-2.5 rounded-lg text-[#F7F3EE] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Oud Craftsmanship">Oud Craftsmanship</option>
                    <option value="Extrait Longevity">Extrait Longevity</option>
                    <option value="Notes & Ingredients">Notes & Ingredients</option>
                    <option value="Seasonal Olfactory">Seasonal Olfactory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Read Time</label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3 py-2.5 rounded-lg text-[#F7F3EE] font-mono focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3 py-2.5 rounded-lg text-[#F7F3EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Cover Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3 py-2.5 rounded-lg text-[#D4AF37] font-mono text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">Short Excerpt / Teaser *</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-[#B08D57]/40 px-3.5 py-2.5 rounded-lg text-[#F7F3EE] placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] h-16 text-xs leading-relaxed"
                  placeholder="Summary for article list cards..."
                  required
                />
              </div>

              {/* RICH TEXT FORMATTING TOOLBAR & CANVAS */}
              <div className="border border-[#B08D57]/40 rounded-xl overflow-hidden bg-[#0F0F0F]">
                
                {/* Editor Toolbar */}
                <div className="bg-[#222222] border-b border-[#B08D57]/40 p-2.5 flex flex-wrap justify-between items-center gap-2">
                  {/* Rich Text Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => insertFormatting("<strong>", "</strong>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Bold (<strong>)"
                    >
                      <Bold className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("<em>", "</em>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Italic (<em>)"
                    >
                      <Italic className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("<u>", "</u>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Underline (<u>)"
                    >
                      <Underline className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("<s>", "</s>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Strikethrough (<s>)"
                    >
                      <Strikethrough className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("<sub>", "</sub>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Subscript (<sub>)"
                    >
                      <SubIcon className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("<sup>", "</sup>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Superscript (<sup>)"
                    >
                      <SupIcon className="w-4 h-4" />
                    </button>

                    <div className="w-[1px] h-5 bg-[#B08D57]/40 mx-1" />

                    <button
                      type="button"
                      onClick={() => insertFormatting('<h2 class="text-[#D4AF37] font-serif text-2xl font-bold my-4">', "</h2>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Heading 2 (<h2>)"
                    >
                      <Heading2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('<h3 class="text-[#F7F3EE] font-serif text-lg font-bold my-3">', "</h3>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Heading 3 (<h3>)"
                    >
                      <Heading3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('<blockquote class="border-l-2 border-[#D4AF37] pl-4 italic my-4 text-[#D4AF37]">', "</blockquote>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Blockquote (<blockquote>)"
                    >
                      <Quote className="w-4 h-4" />
                    </button>

                    <div className="w-[1px] h-5 bg-[#B08D57]/40 mx-1" />

                    <button
                      type="button"
                      onClick={() => insertFormatting('<ul class="list-disc pl-5 space-y-1 my-3">\n  <li>', "</li>\n</ul>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Bullet List (<ul>)"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('<ol class="list-decimal pl-5 space-y-1 my-3">\n  <li>', "</li>\n</ol>")}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Numbered List (<ol>)"
                    >
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handlePromptLink}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Insert Hyperlink"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handlePromptImage}
                      className="p-2 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] font-bold rounded border border-zinc-700 transition"
                      title="Insert Image Attachment"
                    >
                      <ImageIcon className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('\n<hr class="border-[#B08D57]/30 my-6" />\n')}
                      className="px-2 py-1 bg-[#333333] hover:bg-[#D4AF37] hover:text-[#0F0F0F] text-[#F7F3EE] rounded border border-zinc-700 text-[10px] font-mono font-bold"
                      title="Horizontal Divider"
                    >
                      HR
                    </button>
                  </div>

                  {/* Edit vs Live Preview Mode */}
                  <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-lg border border-[#B08D57]/40 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab("edit")}
                      className={`px-3 py-1 rounded transition ${activeTab === 'edit' ? 'bg-[#D4AF37] text-[#0F0F0F] font-bold' : 'text-zinc-400 hover:text-white'}`}
                    >
                      Rich HTML Code
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("preview")}
                      className={`px-3 py-1 rounded transition ${activeTab === 'preview' ? 'bg-[#D4AF37] text-[#0F0F0F] font-bold' : 'text-zinc-400 hover:text-white'}`}
                    >
                      Live Preview
                    </button>
                  </div>
                </div>

                {/* Editor Content Area */}
                {activeTab === "edit" ? (
                  <textarea
                    ref={textareaRef}
                    value={contentHtml}
                    onChange={(e) => setContentHtml(e.target.value)}
                    className="w-full bg-[#0F0F0F] text-[#F7F3EE] p-4 focus:outline-none font-mono text-xs h-72 leading-relaxed resize-y border-none"
                    placeholder="Write article content using HTML formatting or toolbar icons above..."
                  />
                ) : (
                  <div className="p-6 bg-[#0F0F0F] text-[#F7F3EE] h-72 overflow-y-auto max-w-none text-xs leading-relaxed space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#B08D57]/40 bg-[#121212] flex justify-between items-center">
              <span className="text-[11px] font-mono text-[#D4AF37] font-bold">Status: Ready for Publishing</span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowEditorModal(false)}
                  className="px-5 py-2.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white bg-[#252525] hover:bg-[#333] transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePublish}
                  className="bg-[#D4AF37] text-[#0F0F0F] font-bold px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#E5C158] transition shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Publish Journal Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FULL ARTICLE READING MODAL */}
      {readingPost && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#181818] border border-[#B08D57]/60 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl text-[#F7F3EE] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#B08D57]/40 flex justify-between items-center bg-[#121212]">
              <span className="text-xs font-mono text-[#D4AF37] font-bold">{readingPost.category || "Editorial"} • {readingPost.readTime}</span>
              <button onClick={() => setReadingPost(null)} className="text-zinc-400 hover:text-[#F7F3EE] p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <h1 className="font-serif text-3xl font-bold text-[#D4AF37]">{readingPost.title}</h1>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 border-b border-[#B08D57]/20 pb-4">
                <span>By {readingPost.author}</span>
                <span>• {readingPost.publishedAt}</span>
              </div>
              {readingPost.imageUrl && (
                <img src={readingPost.imageUrl} alt={readingPost.title} className="w-full h-64 object-cover rounded-xl border border-[#B08D57]/30" />
              )}
              <div
                className="text-xs leading-relaxed space-y-4 text-[#F7F3EE] font-serif"
                dangerouslySetInnerHTML={{ __html: readingPost.content || `<p>${readingPost.excerpt}</p>` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
