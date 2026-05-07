/**
 * Global navigation and theme toggle.
 */
import Link from 'next/link';

export default function Navbar({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/30 bg-[#040718]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-[0.2em] text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)]">
          TEMPMAILX
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm text-cyan-100 transition hover:text-fuchsia-300">
            Dashboard
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg border border-fuchsia-400/50 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-200 transition hover:shadow-[0_0_16px_rgba(217,70,239,0.6)]"
            aria-label="Toggle theme"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  );
}
