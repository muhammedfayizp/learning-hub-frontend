// components/CategoryFilter.js
"use client";

const STYLES = {
  All: "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
  Tutorial: "bg-emerald-600 text-white",
  Documentation: "bg-sky-600 text-white",
  Notes: "bg-amber-500 text-white",
};

export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            active === cat
              ? STYLES[cat]
              : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}