import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    { label: "Projects Built", value: 10, suffix: "+" },
    { label: "Technologies", value: 8, suffix: "+" },
    { label: "Semesters", value: 4, suffix: "" },
    { label: "Commits", value: 200, suffix: "+" },
  ];

  return (
    <section className="py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-1"
            >
              <div
                className="text-3xl md:text-4xl font-black"
                style={{
                  background: "linear-gradient(to right, #00D1C1, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-[#71717A] font-mono uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}