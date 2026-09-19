"use client";

const TYPE_BADGE = {
  Tutorial: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  Documentation: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  Notes: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export default function ResourceCard({ resource, selectedTags, onTagClick }) {
  const { title, type, source, description, tags, date, favorite } = resource;

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TYPE_BADGE[type]}`}
        >
          {type}
        </span>
        {favorite && <span title="Favorite">⭐</span>}
      </div>

      <h3 className="text-base font-semibold leading-snug group-hover:text-indigo-500">
        {title}
      </h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{source}</p>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`rounded px-1.5 py-0.5 font-mono text-[11px] transition ${
              selectedTags.includes(tag)
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-500 hover:text-indigo-500 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      <time className="mt-4 block text-xs text-slate-400">
        Saved {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </time>
    </article>
  );
}