import AdminSidebarTree from "@/components/admin/AdminSidebarTree";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-obsidian text-alabaster">
      <AdminSidebarTree />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
