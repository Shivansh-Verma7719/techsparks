"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/0.png", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/1.png", span: "" },
  { src: "/images/2.png", span: "" },
  { src: "/images/3.png", span: "md:col-span-2" },
  { src: "/images/4.png", span: "" },
  { src: "/images/5.png", span: "md:col-span-2" },
  { src: "/images/6.png", span: "" },
  { src: "/images/7.png", span: "" },
  { src: "/images/8.png", span: "md:col-span-2" },
  { src: "/images/9.png", span: "" },
  { src: "/images/10.png", span: "md:col-span-2" },
  { src: "/images/14.png", span: "md:col-span-2" },
  { src: "/images/13.jpg", span: "" },
  { src: "/images/15.jpg", span: "" },
  { src: "/images/16.jpg", span: "" },
  { src: "/images/12.png", span: "" },
];

const easeOut = [0.25, 1, 0.5, 1] as const;

const ventures = [
  { index: "01", label: "Venture profile", status: "To be announced" },
  { index: "02", label: "Venture profile", status: "To be announced" },
  { index: "03", label: "Venture profile", status: "To be announced" },
];

const cohortUpdates = [
  {
    index: "01",
    title: "Cohort profiles",
    description:
      "Founder stories and venture profiles will be added here as the cohort takes shape.",
  },
  {
    index: "02",
    title: "Bangalore immersion",
    description:
      "Field notes from the cohort’s time inside Bangalore’s technology and startup ecosystem are coming soon.",
  },
  {
    index: "03",
    title: "Key wins",
    description:
      "A running record of the cohort’s milestones, experiments and breakthroughs will live here.",
  },
];

/* ─── Lightbox ─────────────────────────────────────────────────────── */
const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClose}
    className="fixed inset-0 z-[200] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="relative w-full max-w-5xl max-h-[90vh] aspect-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={src}
        alt="Gallery image"
        width={1400}
        height={900}
        className="object-contain w-full h-full max-h-[85vh] rounded-none"
        priority
      />
    </motion.div>

    {/* Close hint */}
    <button
      type="button"
      onClick={onClose}
      className="absolute top-6 right-8 font-sans font-light text-sm text-background/60 hover:text-background transition-colors uppercase tracking-widest"
    >
      Close ✕
    </button>
  </motion.div>
);

/* ─── Gallery card ────────────────────────────────────────────────── */
const GalleryCard = ({
  src,
  span,
  index,
  onClick,
}: {
  src: string;
  span: string;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease: easeOut }}
    onClick={onClick}
    className={`relative overflow-hidden group cursor-zoom-in bg-foreground/5 ${span}`}
  >
    <Image
      src={src}
      alt={`Gallery photo ${index + 1}`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
      loading="lazy"
    />
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
  </motion.div>
);

/* ─── Section ──────────────────────────────────────────────────────── */
export const CohortOne = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (videoInView) {
      video.play().catch(() => {
        // Autoplay can still be blocked by user-level browser preferences.
      });
    } else {
      video.pause();
    }
  }, [videoInView]);

  return (
    <>
      {/* Lightbox (rendered outside section so it covers everything) */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

      <section
        id="cohort-one"
        className="py-32 md:py-48 px-6 lg:px-12 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Cohort 1 header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: easeOut }}
            className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 lg:mb-28 pb-10 border-b-2 border-foreground/10"
          >
            <div className="ml-auto max-w-4xl lg:text-right">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light italic tracking-tighter text-foreground leading-[0.88]">
                The first spark.
              </h2>
              <p className="mt-8 ml-auto max-w-2xl font-sans text-lg font-light leading-relaxed text-foreground/60">
                Meet the ventures, people and defining moments from the first
                TechSparks cohort.
              </p>
            </div>
          </motion.div>

          {/* Cohort film */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: easeOut }}
            className="mb-28 lg:mb-40"
          >
            <div className="relative aspect-video overflow-hidden bg-foreground">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                tabIndex={-1}
                aria-label="TechSparks Cohort 1 film"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <span className="pointer-events-none absolute left-5 top-5 bg-background px-4 py-3 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-foreground md:left-8 md:top-8">
                Cohort 1 film
              </span>
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-6 border-b border-foreground/10 pb-5 font-sans text-xs uppercase tracking-[0.18em] text-foreground/40">
              <span>Inside the programme</span>
            </figcaption>
          </motion.figure>

          {/* Startup placeholders */}
          <div className="mb-28 lg:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="mb-14 flex flex-col justify-between gap-6 border-b-2 border-foreground/10 pb-8 md:flex-row md:items-end"
            >
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                01 / The ventures
              </p>
              <h3 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-6xl">
                Startups in Cohort 1.
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 border-l-2 border-foreground/10 md:grid-cols-3">
              {ventures.map((venture, index) => (
                <motion.article
                  key={venture.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: easeOut,
                  }}
                  className="group min-h-72 border-b-2 border-r-2 border-foreground/10 p-8 transition-colors duration-500 hover:bg-foreground/[0.03] md:min-h-96 md:p-10"
                >
                  <div className="flex h-full flex-col justify-between gap-16">
                    <span className="font-sans text-xs font-black tracking-widest text-foreground/20">
                      {venture.index}
                    </span>
                    <div>
                      <div
                        className="mb-7 h-12 w-12 border border-dashed border-foreground/25 transition-colors duration-500 group-hover:border-accent"
                        aria-hidden
                      />
                      <h4 className="font-serif text-3xl font-semibold text-foreground">
                        {venture.label}
                      </h4>
                      <p className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-foreground/35">
                        {venture.status}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Gallery: existing layout retained */}
          <div id="gallery" className="mb-28 scroll-mt-28 lg:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="mb-14 flex flex-col justify-between gap-6 border-b-2 border-foreground/10 pb-8 md:flex-row md:items-end"
            >
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                02 / The gallery
              </p>
              <h3 className="font-serif text-4xl font-light italic tracking-tight text-foreground md:text-6xl">
                In the room.
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[260px] gap-2 md:gap-3">
              {images.map((img, i) => (
                <GalleryCard
                  key={img.src}
                  src={img.src}
                  span={img.span}
                  index={i}
                  onClick={() => setLightboxSrc(img.src)}
                />
              ))}
            </div>
          </div>

          {/* Key updates */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="mb-4 flex flex-col justify-between gap-6 border-b-2 border-foreground/10 pb-8 md:flex-row md:items-end"
            >
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                03 / Programme notes
              </p>
              <h3 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-6xl">
                Key updates on Cohort 1.
              </h3>
            </motion.div>

            <div className="flex flex-col">
              {cohortUpdates.map((update, index) => (
                <motion.article
                  key={update.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="group grid gap-6 border-b border-foreground/10 py-10 md:grid-cols-[5rem_1fr_1fr] md:items-start md:gap-10 md:py-14"
                >
                  <span className="font-serif text-2xl italic text-accent">
                    {update.index}
                  </span>
                  <h4 className="font-serif text-3xl font-semibold text-foreground transition-colors duration-500 group-hover:text-accent md:text-4xl">
                    {update.title}
                  </h4>
                  <p className="max-w-lg font-sans font-light leading-relaxed text-foreground/60">
                    {update.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
