import { motion } from "framer-motion";
import { assets } from "../../data/assets";
import { appDownload } from "../../data/content";

export function AppSection() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
            Mobile
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {appDownload.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {appDownload.body}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-7 md:gap-4">
            <img
              src={assets.googlePlay}
              alt="Google Play"
              className="h-12 w-auto"
            />
            <img
              src={assets.appleStore}
              alt="App Store"
              className="h-12 w-auto"
            />
          </div>
          <img
            src={assets.appButtons}
            alt="comming soon mobile app poppup"
            className="mt-6 max-w-xs opacity-90"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-sm"
        >
          <div className="pointer-events-none absolute inset-8 rounded-full bg-blue/20 blur-3xl" />
          <img
            src={assets.appMock}
            alt="mobile space hero images"
            className="relative z-10 w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
