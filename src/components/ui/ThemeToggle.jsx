import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import useTheme from "../../hooks/useTheme.js";

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      className={`focus-ring glass inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition hover:-translate-y-0.5 hover:border-cyan-200/40 ${
        compact ? "size-11" : "px-4 py-2"
      }`}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon aria-hidden="true" size={18} />
      </motion.span>
      {compact ? null : <span>{isDark ? "Light" : "Dark"}</span>}
    </button>
  );
}
