"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
  href: string;
};

export default function StatCard({
  title,
  count,
  icon: Icon,
  color,
  href,
}: StatCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <p className="mt-4 text-4xl font-bold text-white">{count}</p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color} text-white shadow-lg`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-6 text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
        Open {title.toLowerCase()}
      </p>
    </Link>
  );
}
