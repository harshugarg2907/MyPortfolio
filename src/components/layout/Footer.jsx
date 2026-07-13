import { profile } from "../../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, motion, and careful pixels.</p>
        <a className="focus-ring rounded-full text-cyan-100 hover:text-white" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
