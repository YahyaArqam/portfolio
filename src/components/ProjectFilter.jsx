import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AI Portfolio Website",
    desc: "High-performance portfolio with blueprint aesthetic and smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "React",
  },
  {
    title: "Python Automation Suite",
    desc: "Collection of productivity scripts and automation tools.",
    tech: ["Python", "Automation"],
    category: "Python",
  },
  {
    title: "AI Chatbot",
    desc: "Intelligent chatbot using free AI APIs with FastAPI backend.",
    tech: ["Python", "FastAPI", "AI"],
    category: "AI",
  },
  {
    title: "React Dashboard",
    desc: "Modern analytics dashboard with real-time data visualization.",
    tech: ["React", "Tailwind"],
    category: "React",
  },
  {
    title: "Python Data Analyzer",
    desc: "Data analysis tool with visualization and reporting features.",
    tech: ["Python", "Data"],
    category: "Python",
  },
  {
    title: "AI Image Classifier",
    desc: "Image classification app using free Hugging Face models.",
    tech: ["Python", "AI", "FastAPI"],
    category: "AI",
  },
];

export default function ProjectFilter() {
  const [active, setActive] = useState("All");
  const categories = ["All", "React", "Python", "AI"];

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-xs font-bold font-mono transition border ${
              active === cat
                ? "bg-[#00D1C1] text-black border-[#00D1C1]"
                : "border-white/10 text-[#71717A] hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-lg bg-[#00D1C1]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Card */}
              <div className="relative h-full p-6 rounded-lg border border-white/10 bg-white/5 hover:border-[#00D1C1]/50 transition backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00D1C1] transition">
                  {project.title}
                </h3>
                <p className="text-xs text-[#71717A] mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-[#00D1C1]/10 text-[#00D1C1] border border-[#00D1C1]/20 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-[#00D1C1] transition">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}