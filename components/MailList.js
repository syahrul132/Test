/**
 * Mail list view with skeleton/loading and empty states.
 */
import SkeletonList from '@/components/SkeletonList';

export default function MailList({ messages, loading, onSelect, hasEmail }) {
  return (
    <div className="rounded-2xl border border-neon-purple/20 bg-white/70 p-5 backdrop-blur dark:bg-slate-900/80">
      <h3 className="text-lg font-semibold">Inbox</h3>

      {!hasEmail && <p className="mt-4 text-sm text-slate-500">Generate an email first to activate inbox polling.</p>}
      {loading && <SkeletonList />}
      {!loading && hasEmail && messages.length === 0 && (
        <p className="mt-4 animate-pulseSoft text-sm text-slate-500">No messages yet. Waiting for incoming mail...</p>
      )}

      <ul className="mt-4 space-y-3">
        {!loading &&
          messages.map((mail) => (
            <li
              key={mail.id}
              className="cursor-pointer rounded-xl border border-slate-300/20 bg-slate-100/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-blue/40 hover:bg-slate-100 dark:bg-slate-800/50"
              onClick={() => onSelect(mail)}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium">{mail.subject}</p>
                <span className="text-xs text-slate-500">{mail.date}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">From: {mail.sender}</p>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{mail.preview}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
