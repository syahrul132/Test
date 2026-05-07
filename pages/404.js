/**
 * Custom 404 page.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-neon-pink">404</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 rounded-lg border border-neon-blue/60 px-4 py-2 text-neon-blue transition hover:bg-neon-blue/15">
        Back Home
      </Link>
    </div>
  );
}
