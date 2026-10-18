import { assets } from "../../data/assets";
import { SectionHeading } from "../ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="gallery" className="section-y">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading title="Gallery" eyebrow="On the ground" />
        <div className="snap-row">
          {assets.gallery.map((src, i) => (
            <div
              key={src}
              className="snap-item group relative w-[78vw] max-w-sm overflow-hidden rounded-2xl border border-border bg-surface md:w-80"
            >
              <img
                src={src}
                alt={`gallery section images ${i + 1}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 translate-y-1 rounded-md border border-white/10 bg-canvas/70 px-2 py-1 font-mono text-[10px] text-text opacity-0 backdrop-blur transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
