/**
 * Skeleton list for loading feedback.
 */
export default function SkeletonList() {
  return (
    <ul className="mt-4 space-y-3">
      {[...Array(3)].map((_, index) => (
        <li key={index} className="animate-pulse rounded-xl border border-slate-700/40 bg-slate-800/40 p-4">
          <div className="h-4 w-1/2 rounded bg-slate-700" />
          <div className="mt-3 h-3 w-1/3 rounded bg-slate-700" />
          <div className="mt-3 h-3 w-full rounded bg-slate-700" />
        </li>
      ))}
    </ul>
  );
}
