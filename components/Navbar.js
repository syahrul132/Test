/**
 * Global navigation and theme toggle.
 */
import Link from 'next/link';

export default function Navbar({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/10 bg-slate-950/70 backdrop-blur dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-wide text-neon-blue">
          TempMailX
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm text-slate-700 transition hover:text-neon-purple dark:text-slate-200">
            Dashboard
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg border border-slate-400/20 px-3 py-1 text-sm transition hover:border-neon-blue/50 hover:text-neon-blue"
            aria-label="Toggle theme"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  );
}
