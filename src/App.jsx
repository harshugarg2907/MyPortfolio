import { lazy, Suspense } from "react";
import AmbientBackground from "./components/background/AmbientBackground.jsx";
import CursorGlow from "./components/background/CursorGlow.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navigation from "./components/layout/Navigation.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import Education from "./components/sections/Education.jsx";
import Experience from "./components/sections/Experience.jsx";
import Hero from "./components/sections/Hero.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import useLenis from "./hooks/useLenis.js";

const FloatingGeometry = lazy(() => import("./components/three/FloatingGeometry.jsx"));

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--color-bg)] text-slate-50 selection:bg-cyan-300/30 selection:text-white">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AmbientBackground />
      <CursorGlow />
      <Suspense fallback={null}>
        <FloatingGeometry />
      </Suspense>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
