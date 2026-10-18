import { assets } from "../../data/assets";
import { SectionHeading } from "../ui/SectionHeading";

export function MediaSection() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading title="Media" eyebrow="In the press" />
        <div className="snap-row">
          {assets.media.map((src, i) => (
            <div
              key={src}
              className="snap-item group w-[80vw] max-w-md overflow-hidden rounded-2xl border border-border bg-surface md:w-96"
            >
              <img
                src={src}
                alt={`news area media ${i + 1}`}
                className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
