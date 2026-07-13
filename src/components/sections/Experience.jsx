import { experiences } from "../../data/portfolio.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-title">
      <SectionHeading eyebrow="Experience" title="Enterprise timelines with product momentum." />
      <div className="relative">
        <div className="absolute left-4 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent md:block" />
        <div className="grid gap-5">
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="grid gap-4 md:grid-cols-[2rem_1fr]">
                <div className="hidden size-8 rounded-full border border-cyan-200/40 bg-cyan-300/20 shadow-[0_0_30px_rgba(0,245,255,0.3)] md:block" />
                <TiltCard className="p-6 md:p-7">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="experience-company text-sm font-semibold uppercase tracking-[0.22em]">{item.company}</p>
                      <h3 id={index === 0 ? "experience-title" : undefined} className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <span className="soft-chip w-fit rounded-full border px-3 py-1.5 text-xs">{item.duration}</span>
                  </div>
                  <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.impact.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
