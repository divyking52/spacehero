import { assets } from "../data/assets";
import { driverMilestones, monthlyContent } from "../data/content";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { Counter } from "../components/ui/Counter";
import { GlowCard } from "../components/ui/GlowCard";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";

export function MonthlyDriverPage() {
  return (
    <>
      <PageBanner
        title="Hire permanent drivers on monthly basis"
        desktopSrc={assets.monthlyBanner}
        mobileSrc={assets.monthlyMobile}
        alt="monthly driver banner"
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {monthlyContent.deepDive.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <SectionHeading title="Hire a Driver for Seamless Travel" />
            <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted">
              {monthlyContent.hireSeamless.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <SectionHeading title="Why Choose Us" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {driverMilestones.map((c) => (
                <div
                  key={c.label}
                  className="min-w-0 rounded-2xl border border-border bg-surface px-4 py-5 sm:px-3 sm:py-6"
                >
                  <Counter
                    value={c.value}
                    suffix={c.suffix}
                    label={c.label}
                    format={c.format}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Discover Our Range of Driver Services" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {monthlyContent.categories.map((cat) => (
              <GlowCard key={cat.title} glow="blue" className="group">
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {cat.body}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={assets.priceDesktop}
              alt="Price table"
              className="hidden w-full md:block"
            />
            <img
              src={assets.priceMobile}
              alt="Price table mobile"
              className="w-full md:hidden"
            />
          </div>
        </div>
      </section>
      <BookingConfigurator defaultTab="monthly" />
    </>
  );
}
