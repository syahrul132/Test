/**
 * Mail list view with skeleton/loading and empty states.
 */
import SkeletonList from './SkeletonList';

export default function MailList({ messages, loading, onSelect, hasEmail }) {
  return (
    <div className="neon-border rounded-2xl bg-[#070b1f]/85 p-5 backdrop-blur">
      <h3 className="text-lg font-semibold">Inbox</h3>

      {!hasEmail && <p className="mt-4 text-sm text-slate-300">Generate an email first to activate inbox polling.</p>}
      {loading && <SkeletonList />}
      {!loading && hasEmail && messages.length === 0 && (
        <p className="mt-4 animate-pulseSoft text-sm text-slate-300">No messages yet. Waiting for incoming mail...</p>
      )}

      <ul className="mt-4 space-y-3">
        {!loading &&
          messages.map((mail) => (
            <li
              key={mail.id}
              className="cursor-pointer rounded-xl border border-slate-300/20 bg-cyan-500/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-500/10"
              onClick={() => onSelect(mail)}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium">{mail.subject}</p>
                <span className="text-xs text-slate-300">{mail.date}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">From: {mail.sender}</p>
              <p className="mt-2 line-clamp-2 text-sm text-slate-400">{mail.preview}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
