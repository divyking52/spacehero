import { assets } from "../../data/assets";
import { SectionHeading } from "../ui/SectionHeading";

export function PartnersSection() {
  return (
    <section className="section-y border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading title="Our Partners" align="center" />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4">
          {assets.partners.map((src, i) => (
            <div
              key={src}
              className="group flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-border bg-canvas p-3"
            >
              <img
                src={src}
                alt={`products partner${i + 1}`}
                className="max-h-full max-w-full object-contain opacity-80 transition duration-[400ms] group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
