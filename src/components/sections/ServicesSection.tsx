import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";
import { services } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

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

        {/* Desktop: clean 2×2 grid */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:gap-5">
          {services.map((service) => (
            <Link key={service.id} to={service.href} className="block h-full">
              <GlowCard glow={service.accent} className="h-full">
                <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden lg:min-h-[320px]">
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover opacity-55 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-65"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/75 to-canvas/20" />
                  </div>

                  <div className="relative z-10 mt-auto flex flex-col gap-2 p-6 lg:p-7">
                    <span
                      className={`w-fit rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        service.accent === "amber"
                          ? "border-amber/35 bg-amber/10 text-amber"
                          : "border-blue/35 bg-blue/10 text-blue"
                      }`}
                    >
                      Service
                    </span>
                    <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-text lg:text-[1.75rem]">
                      {service.title}
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-dim transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text" />
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted lg:text-[0.95rem]">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        {/* Mobile: sticky card stack */}
        <div ref={stackRef} className="services-stack flex flex-col md:hidden">
          {services.map((service, i) => (
            <div
              key={service.id}
              data-stack-item
              className="services-stack-item"
              style={
                {
                  ["--stack-z"]: i + 1,
                  ["--stack-offset"]: `${i * 12}px`,
                } as CSSProperties
              }
            >
              <div data-stack-shell className="services-stack-shell">
                <Link to={service.href} className="block">
                  <GlowCard
                    glow={service.accent}
                    className="min-h-[min(58vh,440px)]"
                  >
                    <div className="relative flex min-h-[min(58vh,440px)] flex-col overflow-hidden p-4">
                      <div className="absolute inset-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover opacity-45"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
                      </div>
                      <div className="relative z-10 mt-auto">
                        <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-text">
                          {service.title}
                          <ArrowUpRight className="h-5 w-5 text-dim" />
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
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
