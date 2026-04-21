import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Portfolio Website",
      desc: "High-performance portfolio with blueprint aesthetic, terminal UI, and smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Python Automation Tools",
      desc: "Suite of productivity scripts and automation tools built with Python.",
      tech: ["Python", "Automation"],
    },
    {
      title: "AI Chatbot (In Progress)",
      desc: "Intelligent chatbot using free AI APIs with FastAPI backend.",
      tech: ["Python", "FastAPI", "AI APIs"],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg bg-[#00D1C1]/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

          {/* Card */}
          <div className="relative h-full p-6 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:border-[#00D1C1]/50 transition">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#00D1C1] transition">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-[#00D1C1]/10 text-[#00D1C1] border border-[#00D1C1]/20 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#00D1C1] transition"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}