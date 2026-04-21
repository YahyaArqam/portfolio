import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import PageProgress from "./components/PageProgress";
import MouseTrail from "./components/MouseTrail";
import TypingAnimation from "./components/TypingAnimation";
import StatsCounter from "./components/StatsCounter";
import ProjectFilter from "./components/ProjectFilter";


export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl font-bold text-[#00D1C1]"
        >
          yahyaarqam
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Global Features */}
      <PageProgress />
      <MouseTrail />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid rgba(0,209,193,0.3)",
            fontFamily: "monospace",
            fontSize: "13px",
          },
        }}
      />

      {/* Blueprint Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'%3E%3Cdefs%3E%3Cstyle%3E.f%7Bfont-family:monospace;fill:%23ffffff%7D%3C/style%3E%3C/defs%3E%3Cline x1='0' y1='450' x2='1200' y2='450' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='600' y1='0' x2='600' y2='900' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3Cellipse cx='200' cy='200' rx='80' ry='20' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3Cline x1='120' y1='200' x2='200' y2='320' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='280' y1='200' x2='200' y2='320' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='500' cy='150' r='80' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3Cellipse cx='500' cy='150' rx='80' ry='25' stroke='%23ffffff' fill='none' stroke-width='0.5' opacity='0.5'/%3E%3Crect x='750' y='80' width='100' height='100' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3Crect x='780' y='50' width='100' height='100' stroke='%23ffffff' fill='none' stroke-width='1' opacity='0.5'/%3E%3Cline x1='900' y1='300' x2='1150' y2='300' stroke='%23ffffff' stroke-width='1'/%3E%3Cline x1='900' y1='150' x2='900' y2='350' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M900,280 Q950,200 1000,250 T1100,220' stroke='%2300D1C1' fill='none' stroke-width='1.5'/%3E%3Ctext x='50' y='420' class='f' font-size='14'%3EF = ma%3C/text%3E%3Ctext x='200' y='380' class='f' font-size='13'%3EE = mc2%3C/text%3E%3Ctext x='400' y='420' class='f' font-size='13'%3EP = mv%3C/text%3E%3Ctext x='600' y='380' class='f' font-size='14'%3Ea2 + b2 = c2%3C/text%3E%3Ctext x='50' y='500' class='f' font-size='13'%3Ed/dx(x2) = 2x%3C/text%3E%3Ctext x='300' y='500' class='f' font-size='13'%3Elim(x-0) f(x)%3C/text%3E%3Cpolygon points='100,700 200,550 300,700' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3Ctext x='950' y='500' class='f' font-size='13'%3Ef(x) = sin(x)%3C/text%3E%3Ctext x='50' y='600' class='f' font-size='13'%3Etan(theta) = o/a%3C/text%3E%3Ctext x='350' y='600' class='f' font-size='13'%3Ev = u + at%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Grain */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
<motion.header
  style={{
    opacity: headerOpacity,
    backdropFilter: "blur(12px)",
  }}
  className="fixed top-0 w-full z-50 bg-[#050505]/60 border-b border-white/5 transition-colors duration-300"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
    
    {/* Logo */}
    <a href="#" className="font-mono text-sm font-medium text-white">
      yahyaarqam
    </a>

    {/* Navigation */}
    <nav className="hidden md:flex gap-8">
      {[
        { label: "About", id: "About" },
        { label: "Projects", id: "Projects" },
        { label: "Skills", id: "Skills" },
        { label: "Contact", id: "Contact" },
      ].map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="relative text-xs font-medium text-gray-400 hover:text-white transition px-1"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#00D1C1] rounded-full"
            />
            <span className="text-xs text-gray-300">Available for new projects</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-5xl md:text-6xl font-black tracking-tight"
  style={{
    background: "linear-gradient(90deg, #00D1C1, #8B5CF6, #00D1C1)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientMove 6s linear infinite",
  }}
>
  Yahya Arqam
</motion.h1>

<style>
{`
@keyframes gradientMove {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
`}
</style>

            {/* Typing Animation */}
            <div className="text-xl md:text-2xl min-h-[36px]">
              <TypingAnimation />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            4th semester BSCS student building intelligent systems — from React frontends
            to Python backends. Learning AI/ML and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-[#00D1C1] text-black font-bold text-sm rounded-lg hover:bg-[#00E5D3] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 font-bold text-sm rounded-lg hover:bg-white/5 transition"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <p className="text-xs text-gray-500 mb-2">SCROLL</p>
            <div className="text-gray-500 text-center">↓</div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter - Right after Hero */}
      <StatsCounter />

      {/* About - Terminal */}
      <section id="About" className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-12 tracking-tight"
          >
            ABOUT<span className="text-[#00D1C1]">_</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-black/50 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500 font-mono ml-4">terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm text-gray-300 space-y-3">
              <div>
                <span className="text-[#00D1C1]">$</span> whoami
              </div>
              <div className="pl-4 text-gray-400">
                Yahya Arqam — 4th Semester BSCS Student, Pakistan
              </div>

              <div className="pt-2">
                <span className="text-[#00D1C1]">$</span> cat skills.txt
              </div>
              <div className="pl-4 text-gray-400 space-y-1">
                <div>→ React, JavaScript, Tailwind CSS</div>
                <div>→ Python, FastAPI (learning)</div>
                <div>→ AI/ML Integration (learning)</div>
                <div>→ Git, GitHub, Vite, Framer Motion</div>
              </div>

              <div className="pt-2">
                <span className="text-[#00D1C1]">$</span> cat philosophy.txt
              </div>
              <div className="pl-4 text-gray-400">
                "Learn by building. Ship real projects. Stay curious about AI."
              </div>

              <div className="pt-2 flex items-center gap-1">
                <span className="text-[#00D1C1]">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-[#00D1C1] ml-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects - Using ProjectFilter */}
      <section id="Projects" className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              PROJECTS<span className="text-[#8B5CF6]">_</span>
            </h2>
            <p className="text-xs text-gray-500 uppercase mb-8 font-mono tracking-widest">
              Selected Work
            </p>
            <ProjectFilter />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="Skills" className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              SKILLS<span className="text-[#00D1C1]">_</span>
            </h2>
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="Contact" className="border-t border-white/10">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}