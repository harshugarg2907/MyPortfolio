export default function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      className="focus-ring glass inline-flex size-12 items-center justify-center rounded-full text-slate-200 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:text-cyan-100"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon aria-hidden="true" size={18} />
    </a>
  );
}
