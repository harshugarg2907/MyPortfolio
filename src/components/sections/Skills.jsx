import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Braces, ChartNoAxesCombined, Database, Network, Workflow } from "lucide-react";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import {
  SiCplusplus,
  SiCss,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSap,
  SiTailwindcss,
} from "react-icons/si";
import { orbitTech, skillGroups } from "../../data/portfolio.js";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";

const skillIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
  "C++": SiCplusplus,
  "ASP.NET": SiDotnet,
  "VB.NET": FaMicrosoft,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": Network,
  Git: SiGit,
  GitHub: SiGithub,
  MongoDB: SiMongodb,
  SQL: Database,
  "SQL Server": FaMicrosoft,
  "Data modeling": Braces,
  Analytics: ChartNoAxesCombined,
  AWS: FaAws,
  "Oracle VBCS": Workflow,
  "Oracle OIC": Workflow,
  "Fusion HCM": Workflow,
  "SAP UX": SiSap,
  "AI integrations": Braces,
  "RAG systems": Network,
  "Gemini AI": SiGooglegemini,
  "Vector search": Database,
};

function SkillChip({ skill }) {
  const Icon = skillIcons[skill] ?? Braces;

  return (
    <span className="skill-chip group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition duration-300 hover:-translate-y-0.5">
      <Icon aria-hidden="true" className="skill-chip-icon size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      {skill}
    </span>
  );
}

function TechOrbit() {
  const [animateOrbit, setAnimateOrbit] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const update = () => setAnimateOrbit(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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
            animate={animateOrbit ? { y: [0, -8, 0] } : undefined}
            transition={animateOrbit ? { duration: 3 + index * 0.12, repeat: Infinity, ease: "easeInOut" } : undefined}
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
                    {group.skills.map((skill) => <SkillChip key={skill} skill={skill} />)}
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
