import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "amber" | "emerald";
};

const glowMap = {
  blue: "59, 130, 246",
  amber: "245, 158, 11",
  emerald: "16, 185, 129",
};

export function GlowCard({ children, className = "", glow = "blue" }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pctX = useMotionValue(50);
  const pctY = useMotionValue(50);
  const rgb = glowMap[glow];

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
    pctX.set((x / width) * 100);
    pctY.set((y / height) * 100);
  }

  const borderMask = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(${rgb},0.95), transparent 55%)`;
  const liquidBlob = useMotionTemplate`radial-gradient(320px circle at ${pctX}% ${pctY}%, rgba(${rgb},0.28), rgba(255,255,255,0.06) 42%, transparent 68%)`;
  const sheen = useMotionTemplate`radial-gradient(220px circle at ${pctX}% ${pctY}%, rgba(255,255,255,0.16), transparent 50%)`;

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`liquid-glass group relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Liquid blob that follows cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-8 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: liquidBlob }}
      />

      {/* Specular sheen */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: sheen }}
      />

      {/* Cursor-tracking border glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: borderMask,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="liquid-glass-edge pointer-events-none absolute inset-0 rounded-2xl" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
