import { motion } from "framer-motion";
import { orbitTech, skillGroups } from "../../data/portfolio.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";

function TechOrbit() {
  return (
    <div className="skill-orbit relative mx-auto grid aspect-square w-full max-w-[430px] place-items-center rounded-full border">
      <div className="absolute inset-10 rounded-full border border-cyan-200/20" />
      <div className="absolute inset-20 rounded-full border border-violet-300/20" />
      <div className="skill-orbit-core grid size-32 place-items-center rounded-full text-xl font-black shadow-[0_0_60px_rgba(0,245,255,0.34)]">HKG</div>
      {orbitTech.map((tech, index) => {
        const angle = (index / orbitTech.length) * Math.PI * 2;
        const x = Math.cos(angle) * 42;
        const y = Math.sin(angle) * 42;
        return (
          <motion.span
            key={tech}
            className="skill-orbit-pill absolute rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur"
            style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + index * 0.12, repeat: Infinity, ease: "easeInOut" }}
          >
            {tech}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="A compact stack for interfaces, systems, and AI workflows."
        text="No percentage bars, just practical capability grouped around how products are actually built."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <TechOrbit />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.name} delay={index * 0.04}>
                <TiltCard className="h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="skill-icon grid size-11 place-items-center rounded-2xl">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <h3 id={index === 0 ? "skills-title" : undefined} className="text-lg font-semibold text-white">{group.name}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-chip rounded-full border px-3 py-1.5 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
