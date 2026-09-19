"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, RESOURCES } from "@/data/resources";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import TagCloud from "./TagCloud";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract unique tags from all resources
  const allTags = useMemo(
    () => [...new Set(RESOURCES.flatMap((r) => r.tags))].sort(),
    []
  );

  // Toggle tag selection
  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  // Filtering logic
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return RESOURCES.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.source.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
      const matchesCategory = category === "All" || r.type === category;
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => r.tags.includes(t));
      return matchesQuery && matchesCategory && matchesTags;
    });
  }, [query, category, selectedTags]);

  return (
    <section className="space-y-6">
      <SearchBar query={query} onChange={setQuery} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          categories={CATEGORIES}
          active={category}
          onSelect={setCategory}
        />
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {filtered.length} resource{filtered.length !== 1 && "s"}
        </span>
      </div>

      <TagCloud tags={allTags} selected={selectedTags} onToggle={toggleTag} />

      {/* Grid Rendering */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              selectedTags={selectedTags}
              onTagClick={toggleTag}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900">
          <p className="text-lg font-medium text-slate-900 dark:text-white">No resources found</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Try adjusting your search or filters.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("All");
              setSelectedTags([]);
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}