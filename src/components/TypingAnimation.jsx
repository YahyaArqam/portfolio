import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const roles = [
    "Full‑Stack Developer",
    "AI Enthusiast",
    "Python Developer",
    "React Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="font-mono text-lg md:text-xl text-white/70 tracking-wide">
      {displayText}
      <span
        className="inline-block w-[2px] h-5 ml-1 align-middle bg-white/70"
        style={{
          animation: "blink 1s infinite",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}