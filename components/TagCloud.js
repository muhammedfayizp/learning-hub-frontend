// components/TagCloud.js
"use client";

export default function TagCloud({ tags, selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = selected.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`rounded-md px-2.5 py-1 font-mono text-xs transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900"
            }`}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}