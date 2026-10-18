import { testimonials } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading title="Customers Love Us" eyebrow="Testimonials" />
        <div className="snap-row lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible">
          {testimonials.map((t) => (
            <GlowCard
              key={t.name}
              glow="blue"
              className="snap-item w-[82vw] max-w-sm lg:w-auto"
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={`${t.name} images`}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-border transition-transform duration-[400ms] group-hover:scale-105"
                  />
                  <h3 className="text-lg font-bold tracking-tight">{t.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {t.quote}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
