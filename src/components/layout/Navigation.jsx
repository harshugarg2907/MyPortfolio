import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { navItems } from "../../data/portfolio.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const active = useActiveSection(ids);

  const navigate = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2" aria-label="Primary navigation">
        <a className="focus-ring rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-white" href="#main">
          HKG
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                className={`focus-ring relative rounded-full px-4 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
                href={item.href}
              >
                {isActive ? <motion.span layoutId="nav-pill" className="nav-active-pill absolute inset-0 rounded-full" /> : null}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            className="nav-cta focus-ring rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
            href="#contact"
          >
            Let&apos;s talk
          </a>
        </div>
        <button
          className="focus-ring glass inline-flex size-11 items-center justify-center rounded-full md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="glass mx-3 mt-3 rounded-[24px] p-3 md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                className="mobile-nav-link focus-ring block rounded-2xl px-4 py-3 text-sm font-medium"
                href={item.href}
                onClick={navigate}
              >
                {item.label}
              </a>
            ))}
            <div className="px-1 pt-2">
              <ThemeToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
