import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type CSSProperties } from "react";
import { valetContent } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function ValetTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const items = [...stack.querySelectorAll<HTMLElement>("[data-stack-item]")];
    const shells = items.map(
      (item) => item.querySelector<HTMLElement>("[data-stack-shell]"),
    );
    let ticking = false;
    const STICKY = 84;

    const reset = () => {
      shells.forEach((s) => {
        if (!s) return;
        s.style.transform = "";
        s.style.opacity = "";
      });
    };

    const update = () => {
      ticking = false;
      if (window.innerWidth >= 768) {
        reset();
        return;
      }
      items.forEach((_, i) => {
        const shell = shells[i];
        if (!shell) return;
        if (i === items.length - 1) {
          shell.style.transform = "scale(1)";
          shell.style.opacity = "1";
          return;
        }
        const next = items[i + 1].getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (STICKY + 48 - next.top) / 180));
        shell.style.transform = `scale(${(1 - p * 0.07).toFixed(4)})`;
        shell.style.opacity = (1 - p * 0.2).toFixed(3);
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reset();
    };
  }, []);

  return (
    <section className="section-y border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Valet Services"
          title="4-Step Smart Valet"
          description={valetContent.smartParking}
        />

        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px lg:left-8 lg:translate-x-0">
            <motion.div
              style={{ height }}
              className="w-full origin-top bg-gradient-to-b from-amber via-blue to-emerald shadow-[0_0_20px_rgba(245,158,11,0.55)]"
            />
          </div>

          <div
            ref={stackRef}
            className="steps-stack flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4"
          >
            {valetContent.steps.map((step, i) => (
              <div
                key={step.title}
                data-stack-item
                className="steps-stack-item md:contents"
                style={
                  {
                    ["--stack-z"]: i + 1,
                    ["--stack-offset"]: `${i * 12}px`,
                  } as CSSProperties
                }
              >
                <motion.article
                  data-stack-shell
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="steps-stack-shell group relative rounded-2xl border border-border bg-canvas p-5 md:h-full"
                >
                  <div className="mb-4 overflow-hidden rounded-xl border border-border">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-40 w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 md:h-36"
                    />
                  </div>
                  <p className="font-mono text-xs text-amber tabular-nums">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
