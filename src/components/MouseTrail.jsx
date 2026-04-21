import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          life: 1,
          color: Math.random() > 0.5 ? "#00D1C1" : "#8B5CF6",
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current = particles.current.filter((p) => p.life > 0);
      
      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.02;
        p.size *= 0.97;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  );
}