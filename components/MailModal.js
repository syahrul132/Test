/**
 * Modal to display full email details.
 */
export default function MailModal({ mail, onClose }) {
  if (!mail) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div
        className="w-full max-w-2xl rounded-2xl border border-neon-pink/30 bg-slate-900 p-6 text-slate-100 shadow-2xl transition-all duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-semibold">{mail.subject}</h4>
          <button onClick={onClose} className="rounded-md px-3 py-1 text-sm text-slate-300 hover:bg-slate-800">
            Close
          </button>
        </div>

        <p className="text-sm text-slate-400">From: {mail.sender}</p>
        <p className="mb-4 text-xs text-slate-500">{mail.date}</p>
        <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-4 text-sm leading-relaxed text-slate-200">
          {mail.body}
        </div>
      </div>
    </div>
  );
}
