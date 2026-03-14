"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Animated counter ──────────────────────────────────────────────── */
const Counter = ({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const spring = useSpring(count, { duration: duration * 1000, bounce: 0 });
    const display = useTransform(spring, (v) => `${Math.round(v).toLocaleString()}${suffix}`);

    useEffect(() => {
        if (inView) count.set(target);
    }, [inView, count, target]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

/* ─── Copy ──────────────────────────────────────────────────────────── */
const stats = [
    { value: 60, suffix: "B+", label: "invested annually into deep technology", prefix: "$" },
    { value: 20, suffix: "%", label: "of global venture capital now flows into deep tech" },
    { value: 70, suffix: "%", label: "of breakthrough innovations emerge from multiple disciplines" },
];

const reasons = [
    {
        index: "I",
        heading: "A Convergence Moment",
        body: "AI, biotech, and materials science are colliding at an unprecedented rate. The problems of the coming decade — pandemics, climate, cognition — cannot be solved by any single field. The moment is demanding generalists who think deep.",
    },
    {
        index: "II",
        heading: "Infrastructure Has Arrived",
        body: "The compute, the tools, the open-source models and protein databases — the scaffolding that once took a decade to build is now available to any student with a laptop. The gap between idea and experiment has never been smaller.",
    },
    {
        index: "III",
        heading: "Founders Are Finding Edges in Depth",
        body: "The next category-defining companies will not be built at the surface. They will be built by researchers who know the literature, who see patterns across domains, and who treat a thesis like a hypothesis and a startup like an experiment.",
    },
];

const easeOut = [0.25, 1, 0.5, 1] as const;

/* ─── Section ───────────────────────────────────────────────────────── */
export const Motivation = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

    return (
        <section
            id="motivation"
            ref={sectionRef}
            className="relative bg-foreground text-background overflow-hidden py-32 md:py-48 px-6 lg:px-12"
        >
            {/* ── Decorative huge background numeral ──────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 leading-none text-[35vw] font-serif font-black italic text-background/[0.03] whitespace-nowrap z-0"
            >
                Now.
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div ref={headingRef} className="mb-24 lg:mb-36 pb-12 border-b-2 border-background/10 flex flex-col lg:flex-row items-start justify-between gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={headingInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.2, ease: easeOut }}
                        className="flex items-center gap-6 shrink-0 pt-2"
                    >
                        <span className="w-16 h-[2px] bg-accent" />
                        <span className="font-sans font-black uppercase tracking-[0.25em] text-[10px] text-background/40">
                            Why Now
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: 0.1, ease: easeOut }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light italic tracking-tighter text-background leading-[0.9] max-w-3xl"
                    >
                        The window for deep impact has never been this{" "}
                        <span className="text-accent not-italic font-semibold">open.</span>
                    </motion.h2>
                </div>

                {/* ── Stats row ──────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-28 lg:mb-44 border-l-2 border-background/10">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 1, delay: i * 0.15, ease: easeOut }}
                            className="border-r-2 border-background/10 px-8 md:px-10 py-10 flex flex-col gap-4 group hover:bg-background/5 transition-colors duration-500"
                        >
                            <div className="font-sans font-black text-5xl md:text-6xl tracking-tighter text-background leading-none tabular-nums">
                                {s.prefix && <span className="text-accent">{s.prefix}</span>}
                                <Counter target={s.value} suffix={s.suffix} duration={2 + i * 0.3} />
                            </div>
                            <p className="font-sans font-light text-background/50 text-base leading-snug max-w-[18ch]">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Reasons ────────────────────────────────────────────── */}
                <div className="flex flex-col gap-0 border-t-2 border-background/10">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1, delay: 0.05, ease: easeOut }}
                            className="group grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr_1.5fr] gap-6 md:gap-12 py-10 md:py-12 border-b-2 border-background/10 hover:bg-background/[0.03] transition-colors duration-500 px-2 md:px-4 cursor-default"
                        >
                            {/* Roman numeral */}
                            <span className="font-serif italic text-2xl md:text-3xl text-accent/60 group-hover:text-accent transition-colors duration-500 pt-1 font-light">
                                {r.index}.
                            </span>

                            {/* Heading */}
                            <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-background leading-tight self-start">
                                {r.heading}
                            </h3>

                            {/* Body – hidden on mobile */}
                            <p className="hidden md:block font-sans font-light text-background/55 text-lg leading-relaxed self-start max-w-xl">
                                {r.body}
                            </p>

                            {/* Body – visible on mobile only */}
                            <p className="col-span-2 md:hidden font-sans font-light text-background/55 text-base leading-relaxed">
                                {r.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Pull quote ─────────────────────────────────────────── */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, ease: easeOut }}
                    className="mt-28 md:mt-44 max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
                >
                    <span className="w-12 h-[2px] bg-accent" />
                    <p className="font-serif italic text-3xl md:text-5xl text-background/80 leading-[1.2] tracking-tight">
                        &ldquo;The researchers who cross disciplines will write the future. TechSparks is where they begin.&rdquo;
                    </p>
                    <span className="font-sans font-bold uppercase tracking-widest text-xs text-background/30">
                        InfoEdge Centre for Entrepreneurship
                    </span>
                </motion.blockquote>

            </div>
        </section>
    );
};
