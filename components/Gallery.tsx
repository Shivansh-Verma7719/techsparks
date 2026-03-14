"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

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
export const Gallery = () => {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <>
            {/* Lightbox (rendered outside section so it covers everything) */}
            {lightboxSrc && (
                <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
            )}

            <section id="gallery" className="py-32 md:py-48 px-6 lg:px-12 bg-background">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, ease: easeOut }}
                        className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 lg:mb-28 pb-10 border-b-2 border-foreground/10"
                    >
                        <div className="flex items-center gap-6 shrink-0 pt-2">
                            <span className="w-16 h-[2px] bg-accent" />
                            <span className="font-sans font-black uppercase tracking-[0.25em] text-[10px] text-foreground/40">
                                Community
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light italic tracking-tighter text-foreground leading-none">
                            In the room.
                        </h2>
                    </motion.div>

                    {/* Masonry-style CSS Grid */}
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
            </section>
        </>
    );
};
