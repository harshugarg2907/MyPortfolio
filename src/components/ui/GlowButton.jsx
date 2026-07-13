import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GlowButton({
  children,
  href,
  type = "button",
  variant = "primary",
  icon: Icon = ArrowUpRight,
  className = "",
  disabled = false,
  ...props
}) {
  const classes =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 shadow-[0_0_38px_rgba(0,245,255,0.28)]"
      : "glass text-slate-100 hover:border-cyan-200/45";
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
    </>
  );

  const shared = `focus-ring light-sweep relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 ${classes} ${className}`;

  if (href) {
    return (
      <motion.a whileHover={{ scale: disabled ? 1 : 1.025 }} whileTap={{ scale: disabled ? 1 : 0.97 }} className={shared} href={href} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ scale: disabled ? 1 : 1.025 }} whileTap={{ scale: disabled ? 1 : 0.97 }} className={shared} type={type} disabled={disabled} {...props}>
      {content}
    </motion.button>
  );
}
