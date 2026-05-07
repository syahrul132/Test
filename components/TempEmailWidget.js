/**
 * Displays the generated temp email and interaction controls.
 */
import { useState } from 'react';

export default function TempEmailWidget({ email, onGenerate, loading, domain }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl border border-neon-blue/25 bg-white/70 p-5 shadow-xl backdrop-blur dark:bg-slate-900/80">
      <h2 className="text-xl font-semibold">Temporary Email Address</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Generate an inbox and keep it open for live incoming messages.</p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Domain aktif: <span className="font-mono">@{domain}</span></p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onGenerate}
          className="rounded-xl border border-neon-green/50 bg-neon-green/20 px-4 py-2 font-medium text-neon-green transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-green/30"
        >
          {loading ? 'Generating...' : 'Generate New Email'}
        </button>

        <button
          onClick={onCopy}
          disabled={!email}
          className="rounded-xl border border-neon-purple/50 bg-neon-purple/20 px-4 py-2 font-medium text-neon-purple transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-purple/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? 'Copied!' : 'Auto-Copy'}
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-slate-400/30 bg-slate-50 p-3 font-mono text-sm dark:bg-slate-950/60">
        {email || 'No temp email yet. Generate one to begin.'}
      </div>
    </div>
  );
}
