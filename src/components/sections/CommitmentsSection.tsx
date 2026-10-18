import { commitments } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

export function CommitmentsSection() {
  return (
    <section id="commitment" className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow="Why SpaceHero" title="Our Commitment" />
        <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
          {commitments.map((item, i) => (
            <GlowCard
              key={item.title}
              glow={item.accent}
              className={
                i === 0
                  ? "lg:col-span-4"
                  : i === 1
                    ? "lg:col-span-4"
                    : i === 2
                      ? "lg:col-span-4"
                      : i === 3
                        ? "lg:col-span-6"
                        : "lg:col-span-6"
              }
            >
              <div className="flex h-full flex-col gap-3 p-5 md:gap-4 md:p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-14 w-14 object-contain transition-transform duration-[400ms] group-hover:scale-105"
                />
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
