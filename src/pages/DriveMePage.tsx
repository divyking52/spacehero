import { BadgeCheck } from "lucide-react";
import { assets } from "../data/assets";
import { driveMeContent } from "../data/content";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { GlowCard } from "../components/ui/GlowCard";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";

export function DriveMePage() {
  return (
    <>
      <PageBanner
        title="Doorstep Driver Services"
        desktopSrc={assets.driveMeBanner}
        mobileSrc={assets.driveMeMobile}
        alt="drive me banner"
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {driveMeContent.deepDive.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {driveMeContent.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-xl border border-blue/30 bg-blue/10 px-3 py-2 text-sm font-medium text-blue"
              >
                <BadgeCheck className="h-4 w-4" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="How can we assist you?"
            description="Share your requirements, and we'll tailor our services to meet your needs."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {driveMeContent.useCases.map((card) => (
              <GlowCard key={card.title} glow="blue">
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.body}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
      <BookingConfigurator defaultTab="drive" />
    </>
  );
}
