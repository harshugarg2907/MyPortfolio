import { useEffect, useState } from "react";
import { Bot, Building2, Calculator, ExternalLink, FileText, Image, Link2, PieChart, WalletCards } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio.js";
import GlowButton from "../ui/GlowButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";

const accentMap = {
  cyan: "from-cyan-300/30 to-blue-500/10",
  violet: "from-violet-400/30 to-cyan-300/10",
  blue: "from-blue-500/30 to-violet-400/10",
};

const previewMap = {
  EveryTools: {
    type: "tools",
    icon: Calculator,
    title: "Tool suite",
    widgets: [FileText, Image, Calculator, Bot],
    lines: ["PDF", "Image", "Text", "AI"],
  },
  "Finance Tracker": {
    type: "finance",
    icon: WalletCards,
    title: "Spend insight",
    widgets: [PieChart, WalletCards],
    lines: ["Budget", "Transactions", "Analytics"],
  },
  LinkSage: {
    type: "links",
    icon: Link2,
    title: "Link intelligence",
    widgets: [Link2, Bot],
    lines: ["Extract", "Summarize", "Answer"],
  },
  "RAG AI Chatbot": {
    type: "chat",
    icon: Bot,
    title: "Knowledge chat",
    widgets: [Bot, FileText],
    lines: ["Embeddings", "Retrieval", "Response"],
  },
  "Employee Transfer and Internal Mobility System": {
    type: "enterprise",
    icon: Building2,
    title: "Mobility flow",
    widgets: [Building2, Link2],
    lines: ["Fusion HCM", "OIC", "VBCS"],
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with real product edges."
        text="Each card keeps external links honest: live links appear where available, repository actions stay disabled until a real URL exists."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05}>
            <TiltCard className={`group relative h-full overflow-hidden p-5 md:p-6 ${index === 0 ? "md:min-h-[420px]" : ""}`}>
              <div className={`absolute inset-x-6 top-6 h-36 rounded-[28px] bg-gradient-to-br ${accentMap[project.accent]} blur-2xl transition group-hover:scale-110`} />
              <ProjectPreview project={project} />
              <h3 id={index === 0 ? "projects-title" : undefined} className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="soft-chip rounded-full border px-3 py-1.5 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <GlowButton href={project.liveUrl} target="_blank" rel="noreferrer" icon={ExternalLink}>
                    Live
                  </GlowButton>
                ) : (
                  <GlowButton disabled icon={ExternalLink}>Live unavailable</GlowButton>
                )}
                <GlowButton variant="secondary" disabled icon={FaGithub}>
                  Repo pending
                </GlowButton>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  const preview = previewMap[project.name] || previewMap.EveryTools;
  const Icon = preview.icon;
  const [allowLivePreview, setAllowLivePreview] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const update = () => setAllowLivePreview(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (project.liveUrl && allowLivePreview) {
    return (
      <a
        className="project-preview relative mb-6 block h-44 overflow-hidden rounded-[24px] border"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open live preview of ${project.name}`}
      >
        <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-rose-300/90" />
            <span className="size-2 rounded-full bg-amber-300/90" />
            <span className="size-2 rounded-full bg-emerald-300/90" />
          </div>
          <span className="live-preview-badge rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
            Live site
          </span>
        </div>
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[1280px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.16] border-0 bg-white md:scale-[0.19]"
          src={project.liveUrl}
          title={`${project.name} live website preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
      </a>
    );
  }

  return (
    <div className="project-preview relative mb-6 h-44 overflow-hidden rounded-[24px] border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.2),transparent_16rem),linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-80" />
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-300/80" />
          <span className="size-2 rounded-full bg-amber-300/80" />
          <span className="size-2 rounded-full bg-emerald-300/80" />
        </div>
        <span className="soft-chip rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
          Preview
        </span>
      </div>
      <div className="relative grid h-full grid-cols-[0.92fr_1.08fr] gap-4 p-5 pt-12">
        <div className="grid gap-3">
          <div className="soft-icon grid size-14 place-items-center rounded-2xl border shadow-[0_0_30px_rgba(0,245,255,0.12)]">
            <Icon aria-hidden="true" size={25} />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{preview.title}</p>
            <div className="mt-2 grid gap-1.5">
              {preview.lines.slice(0, 3).map((line, index) => (
                <span key={line} className="preview-line h-1.5 rounded-full" style={{ width: `${88 - index * 16}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 self-end">
          {preview.widgets.map((Widget, index) => (
            <div key={`${project.name}-${index}`} className="soft-surface grid min-h-16 place-items-center rounded-2xl border backdrop-blur">
              <Widget aria-hidden="true" size={22} />
            </div>
          ))}
          {preview.type === "finance" ? <MiniChart /> : null}
          {preview.type === "enterprise" ? <FlowDots /> : null}
          {preview.type === "chat" || preview.type === "links" ? <ChatLines /> : null}
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  return (
    <div className="soft-surface col-span-2 flex h-16 items-end gap-2 rounded-2xl border p-3">
      {[42, 74, 55, 90, 68].map((height) => (
        <span key={height} className="flex-1 rounded-full bg-cyan-300/70" style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}

function FlowDots() {
  return (
    <div className="soft-surface col-span-2 flex h-16 items-center justify-between rounded-2xl border p-4">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="size-4 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(0,245,255,0.35)]" />
      ))}
    </div>
  );
}

function ChatLines() {
  return (
    <div className="soft-surface col-span-2 grid h-16 gap-2 rounded-2xl border p-3">
      <span className="h-2 rounded-full bg-cyan-300/65" />
      <span className="preview-line h-2 w-3/4 rounded-full" />
      <span className="h-2 w-1/2 rounded-full bg-violet-300/45" />
    </div>
  );
}
