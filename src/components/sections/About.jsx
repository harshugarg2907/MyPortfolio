import { BriefcaseBusiness, CalendarDays, TrendingUp } from "lucide-react";
import { experiences, focusAreas, stats } from "../../data/portfolio.js";
import GlassCard from "../ui/GlassCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

function calculateTotalExperience(items, today = new Date()) {
  const milliseconds = items.reduce((total, item) => {
    const start = new Date(`${item.startDate}T00:00:00`);
    const end = item.endDate ? new Date(`${item.endDate}T23:59:59`) : today;
    return total + Math.max(0, end - start);
  }, 0);

  return (milliseconds / MS_PER_YEAR).toFixed(1);
}

export default function About() {
  const totalExperience = calculateTotalExperience(experiences);

  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Enterprise engineering with a product designer's eye."
        text="Harsh blends modern full-stack development with enterprise delivery discipline, building interfaces that are clear, fast, and ready for real users."
      />
      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <GlassCard className="h-full p-6 md:p-8">
            <h3 id="about-title" className="text-2xl font-semibold text-white">Building useful systems, not decorative software.</h3>
            <p className="mt-5 text-pretty leading-8 text-slate-400">
              I focus on React, Next.js, enterprise application workflows, cloud-connected products, and AI-powered tools. My approach is to understand the user&apos;s mental model first, then shape the interface, data flow, and interaction details around that clarity.
            </p>
            <p className="mt-4 text-pretty leading-8 text-slate-400">
              The work sits between polished product craft and practical engineering: accessible UI, maintainable components, clean integrations, and performance that survives real usage.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
            </GlassCard>
          ))}
        </Reveal>
      </div>
      <Reveal delay={0.1} className="mt-4">
        <GlassCard className="experience-summary relative overflow-hidden p-6 md:p-8">
          <div className="relative z-10 grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <span className="experience-summary-icon grid size-14 place-items-center rounded-2xl">
              <BriefcaseBusiness aria-hidden="true" size={25} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Total experience</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Professional engineering journey</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays aria-hidden="true" size={15} />
                Calculated live from all employment periods
              </p>
            </div>
            <div className="experience-summary-value min-w-40 rounded-3xl border px-6 py-5 text-center">
              <p className="flex items-center justify-center gap-2 text-4xl font-black text-white">
                {totalExperience}
                <TrendingUp className="text-cyan-200" aria-hidden="true" size={22} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Years</p>
            </div>
          </div>
        </GlassCard>
      </Reveal>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <Reveal key={area.title} delay={index * 0.06}>
              <GlassCard className="h-full p-6 transition hover:-translate-y-1 hover:border-cyan-200/30">
                <Icon className="text-cyan-200" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{area.text}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
