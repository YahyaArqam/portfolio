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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00D1C1]/30">

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

      {/* Blueprint Background - FULL ORIGINAL SVG DATA */}
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

      {/* Grain Effect */}
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
          <a href="#" className="font-mono text-sm font-medium text-white hover:text-[#00D1C1] transition-colors">
            yahyaarqam
          </a>

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
                className="relative text-xs font-medium text-gray-400 hover:text-white transition px-1 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D1C1] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-x-hidden pt-20">
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Availability Badge */}
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

          {/* Title & Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {/* FIXED: Added pb-4 and changed leading-tight to leading-normal to prevent clipping */}
            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-tight pb-4 leading-normal"
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

            <div className="text-xl md:text-2xl min-h-[36px] font-mono text-gray-300">
              <TypingAnimation />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            4th semester BSCS student building intelligent systems — from React frontends
            to Python backends. Learning AI/ML and modern web technologies.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="#Projects"
              className="px-8 py-3 bg-[#00D1C1] text-black font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,209,193,0.3)] transition-all hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="px-8 py-3 border border-white/20 font-bold text-sm rounded-lg hover:bg-white/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="h-24 flex items-center justify-center w-full relative z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#00D1C1] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* About Section - TERMINAL THEME */}
      <section id="About" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-16 tracking-tight"
          >
            ABOUT<span className="text-[#00D1C1]">_</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest">BASH</span>
              <div className="w-12" />
            </div>

            <div className="p-8 font-mono text-sm sm:text-base text-gray-300 space-y-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-[#00D1C1]"></span>
                  <span className="text-[#8B5CF6]">~</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="pl-6 text-gray-400 leading-relaxed">
                  Yahya Arqam. A developer focused on creating fast, accessible, and 
                  intelligent web experiences using modern engineering practices.
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-[#00D1C1]"></span>
                  <span className="text-[#8B5CF6]">~</span>
                  <span className="text-white">ls skills/</span>
                </div>
                <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-400">
                  <div>• frontend/react-nextjs</div>
                  <div>• backend/python-fastapi</div>
                  <div>• tools/git-docker</div>
                  <div>• styling/tailwind-framer</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <span className="text-[#00D1C1]"></span>
                <span className="text-[#8B5CF6]">~</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2.5 h-5 bg-[#00D1C1]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <h2 className="text-4xl font-black tracking-tight mb-4 text-white">
                PROJECTS<span className="text-[#8B5CF6]">_</span>
              </h2>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
                Selected Digital Architecture
              </p>
            </div>
            
            <ProjectFilter />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-32 px-6 md:px-12 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-16 tracking-tight">
              TECH STACK<span className="text-[#00D1C1]">_</span>
            </h2>
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="border-t border-white/10">
        <Contact />
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}