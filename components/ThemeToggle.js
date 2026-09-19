// components/Navbar.js
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 font-bold text-white">
            L
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Learn<span className="text-indigo-500">Hub</span>
          </span>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}