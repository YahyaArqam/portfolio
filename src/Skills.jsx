import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Learning" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "HTML & CSS", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ y: -3 }}
          className="p-5 rounded-lg border border-white/10 hover:border-cyan-500/30 bg-gradient-to-br from-slate-900/30 to-slate-900/10 transition"
        >
          <h3 className="text-lg font-bold">{skill.name}</h3>
          <p className="text-xs text-cyan-400 font-semibold mt-2">{skill.level}</p>
        </motion.div>
      ))}
    </div>
  );
}