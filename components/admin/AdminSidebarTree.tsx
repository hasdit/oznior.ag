"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Layers,
  FolderTree,
  ShoppingBag,
  Boxes,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Truck,
  Database,
  Tag,
  Zap,
  LogOut,
  BarChart3,
  Building2,
  Warehouse,
  Star,
  Search,
  Sliders,
  Image,
  Layout,
  ShieldCheck,
} from "lucide-react";

export default function AdminSidebarTree() {
  const router = useRouter();
  const pathname = usePathname();

  const handleAdminLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  const menuSections = [
    {
      title: "Core Operations",
      items: [
        { label: "Executive Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { label: "Product Inventory", href: "/admin/products", icon: Package },
        { label: "Categories", href: "/admin/categories", icon: Layers },
        { label: "Curated Collections", href: "/admin/collections", icon: FolderTree },
        { label: "Flash Sales Engine", href: "/admin/flash-sales", icon: Zap },
        { label: "Orders & MFS", href: "/admin/orders", icon: ShoppingBag },
        { label: "Inventory Matrix", href: "/admin/inventory", icon: Boxes },
        { label: "Client Directory (CRM)", href: "/admin/customers", icon: Users },
      ],
    },
    {
      title: "Logistics & Fulfillment",
      items: [
        { label: "Shipments & Tracking", href: "/admin/shipments", icon: Truck },
        { label: "Courier Integration API", href: "/admin/courier", icon: Zap },
        { label: "Warehouses & Depots", href: "/admin/warehouses", icon: Warehouse },
        { label: "Raw Material Vendors", href: "/admin/vendors", icon: Building2 },
      ],
    },
    {
      title: "CMS & Customer Engagement",
      items: [
        { label: "Hero Campaign CMS", href: "/admin/cms", icon: Layout },
        { label: "Media Asset Library", href: "/admin/media", icon: Image },
        { label: "Vouchers & Discounts", href: "/admin/coupons", icon: Tag },
        { label: "Journal Articles", href: "/admin/blog", icon: FileText },
        { label: "Reviews", href: "/admin/reviews", icon: Star },
        { label: "Support Tickets", href: "/admin/support", icon: MessageSquare },
        { label: "Bulk CSV Ops", href: "/admin/bulk", icon: Database },
      ],
    },
    {
      title: "Analytics & Security",
      items: [
        { label: "Analytics Reports", href: "/admin/analytics", icon: BarChart3 },
        { label: "Admin Team & Roles", href: "/admin/team", icon: ShieldCheck },
        { label: "SEO Manager", href: "/admin/seo", icon: Search },
        { label: "Integrations & Pixels", href: "/admin/integrations", icon: Sliders },
        { label: "System Settings", href: "/admin/settings", icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-obsidian-surface border-r border-gold-muted/30 p-6 flex flex-col justify-between min-h-screen">
      <div className="space-y-8">
        {/* Brand Header */}
        <div>
          <Link href="/admin/dashboard" className="font-serif text-2xl font-bold tracking-widest text-gold-champagne">
            OZNIOR ADMIN
          </Link>
          <p className="text-[10px] text-alabaster-muted tracking-wider uppercase mt-1">
            Enterprise CMS & Control Hub
          </p>
        </div>

        {/* Menu Navigation */}
        <nav className="space-y-6">
          {menuSections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] uppercase font-semibold text-gold-champagne tracking-widest px-2">
                {section.title}
              </span>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 text-xs rounded transition-all ${
                          isActive
                            ? "bg-gold-champagne text-obsidian font-bold shadow-gold-glow"
                            : "text-alabaster-muted hover:text-gold-champagne hover:bg-gold-muted/10"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="pt-6 border-t border-gold-muted/20 space-y-4">
        <button
          onClick={handleAdminLogout}
          className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded border border-red-500/20 transition-all font-semibold"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin Session</span>
        </button>
        <div className="text-[10px] text-center text-alabaster-muted/60">
          OZNIOR v1.0.0 • Production Build
        </div>
      </div>
    </aside>
  );
}
