import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";
import { services } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

const colClass = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export function ServicesSection() {
  const stackRef = useRef<HTMLDivElement>(null);

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
        const progress = Math.min(
          1,
          Math.max(0, (STICKY + 48 - next.top) / 180),
        );
        shell.style.transform = `scale(${(1 - progress * 0.07).toFixed(4)})`;
        shell.style.opacity = (1 - progress * 0.2).toFixed(3);
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
    <section id="services" className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Services we Offer"
          description="Four pillars of urban mobility and hospitality across Delhi-NCR."
        />

        <div
          ref={stackRef}
          className="services-stack flex flex-col gap-0 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5"
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              data-stack-item
              className="services-stack-item md:contents"
              style={
                {
                  ["--stack-z"]: i + 1,
                  ["--stack-offset"]: `${i * 12}px`,
                } as CSSProperties
              }
            >
              <div
                data-stack-shell
                className="services-stack-shell md:contents md:h-full"
              >
                <Link
                  to={service.href}
                  className={`block h-full ${colClass[i]}`}
                >
                  <GlowCard
                    glow={service.accent}
                    className="h-full min-h-[min(58vh,440px)] md:min-h-[260px] lg:min-h-[300px]"
                  >
                    <div className="relative flex h-full min-h-[min(58vh,440px)] flex-col overflow-hidden p-4 md:min-h-[260px] md:p-5 lg:min-h-[300px] lg:p-6">
                      <div className="absolute inset-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover opacity-40 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
                      </div>
                      <div className="relative z-10 mt-auto">
                        <span
                          className={`mb-3 inline-flex rounded-lg border px-2.5 py-1 text-xs font-semibold md:translate-y-2 md:opacity-0 md:transition-all md:duration-[400ms] md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
                            service.accent === "amber"
                              ? "border-amber/40 bg-amber/10 text-amber"
                              : "border-blue/40 bg-blue/10 text-blue"
                          }`}
                        >
                          {service.title}
                        </span>
                        <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-text">
                          {service.title}
                          <ArrowUpRight className="h-5 w-5 text-dim transition group-hover:text-text" />
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                          {service.summary}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
