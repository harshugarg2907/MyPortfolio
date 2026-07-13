import { education } from "../../data/portfolio.js";
import GlassCard from "../ui/GlassCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Education() {
  const Icon = education.icon;
  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      <SectionHeading eyebrow="Education" title="Computer science foundation, product direction." />
      <Reveal>
        <GlassCard className="mx-auto max-w-4xl p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <span className="education-icon grid size-14 shrink-0 place-items-center rounded-2xl">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3 id="education-title" className="text-2xl font-semibold text-white">{education.degree}</h3>
                <p className="mt-3 text-slate-300">{education.institution}</p>
                <p className="mt-1 text-sm text-slate-400">{education.university}</p>
              </div>
            </div>
            <span className="education-period w-fit rounded-full border px-4 py-2 text-sm font-medium">{education.period}</span>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
