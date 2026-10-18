import { aboutPage, commitments } from "../data/content";
import { assets } from "../data/assets";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GlowCard } from "../components/ui/GlowCard";
import { PartnersSection } from "../components/sections/PartnersSection";

export function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        desktopSrc={assets.aboutBanner}
        mobileSrc={assets.aboutMobile}
        alt="about banner"
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="max-w-4xl text-base leading-relaxed text-muted md:text-lg">
            {aboutPage.intro}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {aboutPage.services.map((s) => (
              <GlowCard key={s.title} glow="amber">
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
          <div className="mt-8 max-w-4xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {aboutPage.closing.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Our Commitment" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <GlowCard key={item.title} glow={item.accent}>
                <div className="p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-4 h-12 w-12 object-contain"
                  />
                  <h3 className="text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
      <PartnersSection />
    </>
  );
}
