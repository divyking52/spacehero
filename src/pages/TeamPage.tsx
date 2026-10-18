import { assets } from "../data/assets";
import { team } from "../data/content";
import { GlowCard } from "../components/ui/GlowCard";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionHeading } from "../components/ui/SectionHeading";

export function TeamPage() {
  return (
    <>
      <PageBanner
        title="Leadership Team"
        desktopSrc={assets.teamBanner}
        mobileSrc={assets.teamMobile}
        alt="team banner images for desktop"
      />
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="The people behind SpaceHero"
            description="Operations, strategy, compliance, workforce, and technology — united for Delhi-NCR mobility."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <GlowCard key={member.name} glow="amber" className="group">
                <div className="overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 translate-y-1 rounded-md border border-amber/30 bg-canvas/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber opacity-0 backdrop-blur transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-amber">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
