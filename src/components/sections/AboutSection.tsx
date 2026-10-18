import { motion } from "framer-motion";
import { assets } from "../../data/assets";
import { homeAbout, impactCounters } from "../../data/content";
import { Counter } from "../ui/Counter";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function AboutSection() {
  return (
    <section id="about" className="relative section-y">
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 md:grid-cols-12 md:gap-8 md:px-6 lg:gap-10 lg:px-8">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <img
              src={assets.aboutImage}
              alt="home about image"
              className="h-full w-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              style={{ transitionDuration: "400ms" }}
            />
          </motion.div>
        </div>
        <div className="md:col-span-7">
          <SectionHeading title={homeAbout.title} eyebrow="Who we are" />
          <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {homeAbout.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <Button to="/about" variant="secondary" className="mt-6">
            Learn more about us
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:gap-3 md:mt-10 md:gap-4 md:px-6 lg:px-8">
        {impactCounters.map((c) => (
          <div
            key={c.label}
            className="min-w-0 rounded-2xl border border-border bg-surface/80 px-4 py-4 sm:px-3 sm:py-5 md:px-5 md:py-6"
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
    </section>
  );
}
