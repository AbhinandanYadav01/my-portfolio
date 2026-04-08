"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Cpu,
  FileText,
  FolderKanban,
  History,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  User,
} from "lucide-react";

type SidebarProps = {
  onLogout: () => void;
};

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/hero", label: "Hero", icon: User },
  { href: "/admin/about", label: "About", icon: FileText },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/experience", label: "Experience", icon: History },
  { href: "/admin/tech", label: "Tech Stack", icon: Cpu },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
];

export default function Sidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-zinc-800 bg-zinc-950/95 lg:flex">
      <div className="flex w-full flex-col p-6">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Admin Panel
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">Portfolio CMS</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Manage your content, stats, and messages.
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onLogout}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
