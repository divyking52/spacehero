import { motion } from "framer-motion";

type Props = {
  title: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
};

export function PageBanner({ title, desktopSrc, mobileSrc, alt }: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={desktopSrc}
          alt={alt}
          className="hidden h-full w-full object-cover md:block"
        />
        <img
          src={mobileSrc}
          alt={alt}
          className="h-full w-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-canvas/55 to-canvas" />
      </div>
      <div className="relative mx-auto flex min-h-[36vh] max-w-7xl items-end px-4 pb-8 pt-20 md:min-h-[42vh] md:px-6 md:pb-10 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
