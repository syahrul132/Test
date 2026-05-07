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
    <div className="neon-border rounded-2xl bg-[#070b1f]/85 p-5 backdrop-blur">
      <h2 className="text-xl font-semibold">Temporary Email Address</h2>
      <p className="mt-2 text-sm text-slate-300">Generate an inbox and keep it open for live incoming messages.</p>
      <p className="mt-1 text-xs text-cyan-200/80">Domain aktif: <span className="font-mono">@{domain}</span></p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onGenerate}
          className="rounded-xl border border border-cyan-300/50 bg-cyan-400/15 px-4 py-2 font-medium text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-green/30"
        >
          {loading ? 'Generating...' : 'Generate New Email'}
        </button>

        <button
          onClick={onCopy}
          disabled={!email}
          className="rounded-xl border border border-fuchsia-400/50 bg-fuchsia-500/15 px-4 py-2 font-medium text-fuchsia-200 shadow-[0_0_16px_rgba(217,70,239,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-purple/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? 'Copied!' : 'Auto-Copy'}
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-cyan-300/30 bg-[#020617] p-3 font-mono text-sm text-cyan-100">
        {email || 'No temp email yet. Generate one to begin.'}
      </div>
    </div>
  );
}
