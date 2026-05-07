/**
 * Landing page with hero and CTA.
 */
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="mb-4 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-1 text-xs uppercase tracking-widest text-neon-blue">
        Disposable • Secure • Instant
      </span>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Next-Gen Temporary Email for{' '}
        <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
          Web4 Privacy
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
        Generate a temporary inbox in one click. Protect your real identity from spam, trackers, and unwanted signups.
      </p>
      <Link
        href="/dashboard"
        className="mt-10 inline-flex items-center rounded-xl border border-neon-blue/60 bg-neon-blue/20 px-6 py-3 font-semibold text-neon-blue shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-blue/30"
      >
        Generate Temp Email
      </Link>
    </section>
  );
}
