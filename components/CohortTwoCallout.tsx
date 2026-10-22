"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const applicationUrl = "https://forms.gle/SbcwF9nYjUXCxHX56";

export const CohortTwoCallout = () => {
  return (
    <section
      id="cohort-two"
      className="relative overflow-hidden bg-accent text-accent-foreground px-6 py-28 md:py-40 lg:px-12"
    >
      <div
        aria-hidden
        className="absolute -right-8 -top-24 select-none font-serif text-[32vw] font-black italic leading-none text-foreground/[0.06]"
      >
        02
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="mb-12 flex items-center gap-6 border-b-2 border-foreground/15 pb-8">
          <span className="h-[2px] w-16 bg-foreground" />
          <span className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-foreground/60">
            Applications open
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-14 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <h2 className="font-serif text-6xl font-light italic leading-[0.88] tracking-tighter text-foreground md:text-8xl lg:text-[8.5rem]">
              Bring us the problem you cannot ignore.
            </h2>
            <p className="mt-9 max-w-2xl font-sans text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
              Applications for TechSparks Cohort 2 are now open to Ashoka
              students ready to turn rigorous inquiry into a venture grounded in
              human need.
            </p>
          </div>

          <a
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full shrink-0 items-center justify-between gap-8 bg-foreground px-8 py-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-background transition-colors duration-500 hover:bg-background hover:text-foreground sm:w-auto md:px-10 md:py-9"
          >
            Apply for Cohort 2
            <IconArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={22}
              stroke={2}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
