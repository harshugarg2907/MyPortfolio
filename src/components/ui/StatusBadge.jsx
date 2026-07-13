export default function StatusBadge({ children }) {
  return (
    <span className="status-badge inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold">
      <span className="relative flex size-2">
        <span className="status-badge-ping absolute inline-flex size-full animate-ping rounded-full opacity-60" />
        <span className="status-badge-dot relative inline-flex size-2 rounded-full" />
      </span>
      {children}
    </span>
  );
}
