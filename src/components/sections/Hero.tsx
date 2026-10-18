import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { assets, EXTERNAL } from "../../data/assets";
import { Button } from "../ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const artX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 70,
    damping: 22,
  });
  const artScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.08]), {
    stiffness: 70,
    damping: 22,
  });
  const stageFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-16 md:min-h-[100svh] md:pt-0"
    >
      {/* —— Desktop: Night Dispatch stage —— */}
      <div className="relative hidden md:block md:min-h-[100svh]">
        {/* Atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 100% 50%, rgba(59,130,246,0.14), transparent 60%), radial-gradient(ellipse 40% 50% at 8% 90%, rgba(245,158,11,0.1), transparent 55%), #070708",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 30% 50%, black, transparent)",
          }}
        />

        {/* Full-bleed art plane — bleeds top / right / bottom */}
        <motion.div
          aria-hidden
          style={{ x: artX, scale: artScale, opacity: stageFade }}
          className="pointer-events-none absolute -top-[6%] -bottom-[6%] right-0 w-[64vw] max-w-none origin-right lg:w-[68vw]"
        >
          <motion.img
            src={assets.heroCar}
            alt=""
            initial={{ opacity: 0, x: 72 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.15, ease, delay: 0.12 }}
            className="absolute inset-0 h-full w-full scale-110 object-cover object-[28%_40%] mix-blend-multiply contrast-[1.3]"
          />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-canvas via-canvas/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-canvas to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas to-transparent" />
        </motion.div>

        {/* Copy column */}
        <div className="relative z-10 flex min-h-[100svh] w-full items-center px-6 pt-20 pb-16 md:px-8 lg:px-10 xl:px-12">
          <div className="w-full max-w-[34rem] lg:max-w-[36rem]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-dim"
            >
              Delhi-NCR · Driver hire
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="mt-4 font-display text-[clamp(3.25rem,7.5vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-text"
            >
              Space
              <span className="text-amber">Hero</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, ease, delay: 0.35 }}
              className="mt-6 h-px w-28 origin-left bg-amber"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.28 }}
              className="mt-6 max-w-md text-xl font-medium leading-snug tracking-tight text-text/90 md:text-2xl"
            >
              Roam the city in the comfort of your car.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.38 }}
              className="mt-3 max-w-sm text-sm leading-relaxed text-muted md:text-[0.95rem]"
            >
              Book a verified driver for hourly runs, outstation trips, or a
              permanent monthly chauffeur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.48 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href={EXTERNAL.bookNow} external variant="amber">
                BOOK NOW
              </Button>
              <Button href={EXTERNAL.bookNow} external variant="secondary">
                Book Driver
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom rail accent */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent"
        />
      </div>

      {/* —— Mobile —— */}
      <div className="relative flex min-h-[78svh] items-end md:hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={assets.mobileBannerHome2}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover object-[72%_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/55 via-canvas/70 to-canvas" />
        </div>

        <div className="relative z-10 w-full px-4 pb-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-xl"
          >
            <p className="font-display text-2xl font-extrabold tracking-tight text-text">
              Space<span className="text-amber">Hero</span>
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Roam the city in the comfort of your car.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Book a professional driver and move through Delhi-NCR without
              leaving your own car.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Button href={EXTERNAL.bookNow} external variant="amber">
                BOOK NOW
              </Button>
              <Button href={EXTERNAL.bookNow} external variant="secondary">
                Book Driver
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
