import { assets } from "../data/assets";
import { driverPartner } from "../data/content";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { GlowCard } from "../components/ui/GlowCard";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";

export function DriverPartnerPage() {
  return (
    <>
      <PageBanner
        title={driverPartner.headline}
        desktopSrc={assets.partnerBanner}
        mobileSrc={assets.partnerMobile}
        alt="become partner banner"
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="max-w-3xl text-lg text-muted">{driverPartner.subhead}</p>
          <div className="mt-8">
            <SectionHeading title={driverPartner.whyTitle} />
            <div className="grid gap-4 md:grid-cols-2">
              {driverPartner.benefits.map((b) => (
                <GlowCard key={b.title} glow="emerald" className="group">
                  <div className="overflow-hidden md:flex">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-105 md:aspect-auto md:h-full md:w-40 md:shrink-0"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold tracking-tight">
                        {b.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BookingConfigurator defaultTab="partner" />
    </>
  );
}
