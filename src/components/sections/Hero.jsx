import { useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { heroLabels, profile } from "../../data/portfolio.js";
import GlassCard from "../ui/GlassCard.jsx";
import GlowButton from "../ui/GlowButton.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import SocialLink from "../ui/SocialLink.jsx";
import StatusBadge from "../ui/StatusBadge.jsx";

export default function Hero() {
  const [imageReady, setImageReady] = useState(true);

  return (
    <section className="section-shell flex min-h-screen items-center pt-28" aria-labelledby="hero-title">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <StatusBadge>{profile.availability}</StatusBadge>
          <h1 id="hero-title" className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.02em] text-white md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-cyan-100 md:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-400 md:text-lg">{profile.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton>
              <GlowButton href="#projects">View Projects</GlowButton>
            </MagneticButton>
            <GlowButton href="#contact" variant="secondary" icon={Mail}>
              Contact Me
            </GlowButton>
            <GlowButton href={profile.resumePath} variant="secondary" icon={Download} target="_blank" rel="noreferrer">
              Download Resume
            </GlowButton>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {profile.socials.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
            <a className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-400 hover:text-cyan-100" href="#about">
              Explore profile <ArrowDown aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroLabels.map((label) => (
              <motion.span
                key={label}
                className="soft-chip rounded-full border px-3 py-1.5 text-xs font-medium"
                whileHover={{ y: -3, borderColor: "rgba(0,245,255,0.45)" }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-[520px]">
          <GlassCard className="relative min-h-[520px] overflow-hidden p-5 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(0,245,255,0.2),transparent_34rem)]" />
            <div className="relative grid h-[330px] place-items-center md:h-[380px]">
              <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
              <motion.div
                className="profile-frame relative grid aspect-square w-[min(88%,340px)] place-items-center rounded-[40px] border p-3 shadow-[0_28px_120px_rgba(0,245,255,0.14)]"
                animate={{ y: [0, -10, 0], rotate: [0, 1.4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {imageReady ? (
                  <img
                    className="h-full w-full rounded-[34px] object-contain drop-shadow-[0_22px_34px_rgba(0,0,0,0.32)]"
                    src={profile.profileImage}
                    alt={`${profile.name} profile sticker`}
                    onError={() => setImageReady(false)}
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center rounded-[34px] bg-cyan-300 text-6xl font-black text-slate-950">
                    HG
                  </div>
                )}
              </motion.div>
            </div>
            <div className="identity-card-panel relative grid gap-3 rounded-[22px] border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Identity card</p>
                  <p className="text-lg font-semibold text-white">Application Developer</p>
                </div>
                <div className="identity-card-mark grid size-14 place-items-center rounded-2xl text-lg font-black">HG</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                <span className="identity-card-chip rounded-2xl px-3 py-2">IBM</span>
                <span className="identity-card-chip rounded-2xl px-3 py-2">{profile.location}</span>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
