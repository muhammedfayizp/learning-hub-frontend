// components/SearchBar.js
"use client";

export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search titles, sources, descriptions…"
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900"
    />
  );
}