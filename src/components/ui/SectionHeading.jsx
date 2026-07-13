import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.01em] text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-pretty text-base leading-8 text-slate-400 md:text-lg">{text}</p> : null}
    </Reveal>
  );
}
