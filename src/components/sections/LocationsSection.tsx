import { locations, locationsIntro } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

export function LocationsSection() {
  return (
    <section id="locations" className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Locations we Serve"
          description={locationsIntro}
        />

        <div className="snap-row md:hidden">
          {locations.map((loc) => (
            <GlowCard
              key={loc.name}
              glow="amber"
              className="snap-item w-[72vw] max-w-[280px]"
            >
              <LocationCard loc={loc} />
            </GlowCard>
          ))}
        </div>

        <div className="hidden gap-3 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {locations.map((loc) => (
            <GlowCard key={loc.name} glow="amber">
              <LocationCard loc={loc} />
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  loc,
}: {
  loc: (typeof locations)[number];
}) {
  return (
    <div className="flex flex-col items-center p-4 text-center md:p-5">
      <img
        src={loc.icon}
        alt={loc.name}
        className="h-14 w-14 object-contain transition-transform duration-[400ms] group-hover:scale-105 md:h-16 md:w-16"
      />
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-amber">
        {loc.detail}
      </p>
      <h3 className="mt-1 text-base font-bold tracking-tight md:text-lg">{loc.name}</h3>
    </div>
  );
}
