import { Check } from "lucide-react";
import { assets } from "../data/assets";
import { valetContent } from "../data/content";
import { ValetTimeline } from "../components/sections/ValetTimeline";
import { BookingConfigurator } from "../components/sections/BookingConfigurator";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";

export function ValetPage() {
  return (
    <>
      <PageBanner
        title="The Ultimate Valet Service"
        desktopSrc={assets.valetBanner}
        mobileSrc={assets.valetMobile}
        alt="valet banner images for desktop"
      />
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-12 md:px-6 lg:px-8">
          <div className="md:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {valetContent.deepDive.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={assets.valetHero}
                alt="Valet Services"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ValetTimeline />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Why opt for Valet Services?" eyebrow="For your guests" />
          <ul className="grid gap-4 md:grid-cols-2">
            {valetContent.forGuests.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-3 rounded-2xl border border-border bg-surface p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                <span className="text-sm leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BookingConfigurator defaultTab="contact" />
    </>
  );
}
