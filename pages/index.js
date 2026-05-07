/**
 * Landing page with hero and CTA.
 */
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="mb-4 rounded-full border border-cyan-300/50 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
        CYBERPUNK MAIL NODE
      </span>
      <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
        Disposable Inbox in
        <span className="ml-2 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]">
          Neon Grid
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
        Shield your identity in the cyber lane. Generate temporary email instantly and monitor incoming transmissions in real time.
      </p>
      <Link
        href="/dashboard"
        className="mt-10 inline-flex items-center rounded-xl border border-cyan-300/50 bg-cyan-400/15 px-6 py-3 font-semibold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/25"
      >
        Generate Temp Email
      </Link>
    </section>
  );
}
