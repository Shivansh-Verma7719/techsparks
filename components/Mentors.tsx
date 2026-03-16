"use client";

import { motion } from "framer-motion";
import { IconBrandLinkedin, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const mentors = [
    {
        name: "Vibhore Sharma",
        role: "Partner",
        bio: "Capital 2B, Ex-CTO, InfoEdge (Naukri.com)",
        linkedin: "https://www.linkedin.com/in/vibhoresharma",
        image: "/images/vibhore-sharma.png",
        index: "01",
    },
    {
        name: "Arshia Mal",
        role: "Investments",
        bio: "WTFund",
        linkedin: "https://www.linkedin.com/in/arshia-mal-0a597418b",
        image: "/images/arshia-mal.png",
        index: "02",
    },
    {
        name: "Vidushi Malhotra",
        role: "Co-Founder",
        bio: "Belong Education",
        linkedin: "https://www.linkedin.com/in/vidushimalhotra",
        image: "/images/vidushi-malhotra.png",
        index: "03",
    },
    {
        name: "Shilpy Kochhar",
        role: "Director",
        bio: "Research & Development Office, Ashoka University, Former Head-Business Development and Communications, BIRAC",
        linkedin: "https://www.linkedin.com/in/shilpy-kochhar-17a0141b",
        image: "/images/shilpy-kochhar.png",
        index: "04",
    },
    {
        name: "Aishwarya Malhi",
        role: "Co-Founder",
        bio: "Rebalance",
        linkedin: "https://www.linkedin.com/in/aishwaryamalhi/",
        image: "/images/aishwarya-malhi.png",
        index: "05",
    },
    {
        name: "Apoorv Bamba",
        role: "Co-Founder",
        bio: "Belong Education",
        linkedin: "https://www.linkedin.com/in/apoorv-bamba-19b53214/",
        image: "/images/apoorv-bamba.png",
        index: "06",
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const },
    },
};

export const Mentors = () => {
    return (
        <section id="mentors" className="py-32 md:py-48 px-6 lg:px-12 bg-background">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 lg:mb-32 pb-10 border-b-2 border-foreground/10"
                >
                    <div className="flex items-center gap-6">
                        <span className="w-16 h-[2px] bg-accent"></span>
                        <span className="font-sans font-black uppercase tracking-[0.25em] text-[10px] text-foreground/40">
                            Guidance
                        </span>
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light italic tracking-tighter text-foreground leading-none">
                        Mentors.
                    </h2>
                </motion.div>

                {/* Mentor Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-2 border-foreground/10"
                >
                    {mentors.map((mentor) => (
                        <motion.div
                            key={mentor.name}
                            variants={itemVariants}
                            className="group relative border-r-2 border-foreground/10 p-8 md:p-10 flex flex-col gap-8 hover:bg-foreground/[0.03] transition-colors duration-500"
                        >
                            {/* Index number */}
                            <span className="font-sans font-black text-xs tracking-widest text-foreground/20">
                                {mentor.index}
                            </span>

                            {/* Portrait */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden">
                                {mentor.image ? (
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.25,1,0.5,1] object-top"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-serif text-7xl font-light text-foreground/20">
                                            {mentor.name.split(" ").map(n => n[0]).join("")}
                                        </span>
                                    </div>
                                )}
                                {/* Overlay rule for grayscale state */}
                                <div className="absolute inset-0"></div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-3 flex-1">
                                <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground leading-none">
                                    {mentor.name}
                                </h3>
                                <p className="font-sans font-light text-foreground/60 text-base leading-snug">
                                    {mentor.role}
                                    {mentor.bio && (
                                        <>
                                            <br />
                                            <span className="text-accent">{mentor.bio}</span>
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* LinkedIn */}
                            <a
                                href={mentor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-widest text-foreground/40 hover:text-accent transition-colors duration-300 w-fit"
                            >
                                <IconBrandLinkedin size={18} stroke={1.5} />
                                View Profile
                                <IconArrowUpRight size={14} stroke={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
