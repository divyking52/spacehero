import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  format?: "comma" | "indian" | "plain";
};

function formatNumber(n: number, format: Props["format"]) {
  const rounded = Math.round(n);
  if (format === "indian") {
    return rounded.toLocaleString("en-IN");
  }
  if (format === "comma") {
    return rounded.toLocaleString("en-US");
  }
  return String(rounded);
}

export function Counter({ value, suffix = "", label, format = "plain" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => formatNumber(latest, format));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <div ref={ref} className="min-w-0 text-center">
      <div className="font-mono text-2xl font-bold tracking-tight text-text tabular-nums sm:text-3xl md:text-4xl lg:text-5xl">
        <motion.span className="break-words">{display}</motion.span>
        <span className="text-amber">{suffix}</span>
      </div>
      <p className="mt-2 text-xs text-muted sm:text-sm md:text-base">{label}</p>
    </div>
  );
}
