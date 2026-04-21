import { motion, useScroll } from "framer-motion";

export default function PageProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(to right, #00D1C1, #8B5CF6)",
      }}
    />
  );
}