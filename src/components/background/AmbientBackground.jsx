export default function AmbientBackground() {
  return (
    <div className="noise pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="grid-field absolute inset-0 opacity-35" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/14 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/12 blur-3xl" />
    </div>
  );
}
