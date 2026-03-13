"use client";

import { motion } from "framer-motion";

const phases = [
    {
        phase: "00",
        title: "Spark – Awareness & Community",
        date: "26 Feb",
        description: "Launch & Mixer with Problem Solvers in AI, Bio and Tech. Key Guest: Vibhore Sharma.",
        details: ["Lightning talks on problems worth solving", "Founder fireside chats", "Open-mic 'spark pitches'"],
    },
    {
        phase: "01",
        title: "TechSparks Festival – Exploration Studio",
        date: "17 Mar",
        description: "Find your Inner Spark -> Channelise it through Deep Exploration -> Fall in Love with a Problem.",
        details: ["AI Room", "Bio Room", "LeanSparks Room"],
    },
    {
        phase: "02",
        title: "Immersion – Bangalore",
        date: "10–12 Apr",
        description: "Immersion to Bangalore, India's deep-tech and startup capital.",
        details: ["Lab tours", "Problem clinics", "IP Reality checks"],
    },
    {
        phase: "03",
        title: "TechSparks Champion RoundTable",
        date: "20 Apr",
        description: "Curated, invitation-only roundtable with external champions.",
        details: ["5–7 min Deep Problem Briefs", "Ethics Feedback", "Champion Selection"],
    },
    {
        phase: "04",
        title: "TechSparks Incubator",
        date: "From 20 May",
        description: "Hosted by InfoEdge Centre for Entrepreneurship (~3.5 Months).",
        details: ["Weekly Sprints", "Systems & Ethics Studio", "Build for Scale Labs"],
    }
];

export const Phases = () => {
    return (
        <section id="phases" className="py-32 bg-background relative border-t border-foreground/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="text-5xl md:text-7xl font-serif tracking-tight text-foreground"
                    >
                        Timeline.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                        className="text-foreground/60 max-w-md font-sans font-light"
                    >
                        Five phases to move from unformed spark to systemic impact.
                    </motion.p>
                </div>

                <div className="flex flex-col">
                    {phases.map((item, index) => (
                        <div key={index} className="group relative py-12 flex flex-col md:flex-row gap-8 items-start hover:bg-foreground/[0.02] transition-colors duration-500 -mx-6 px-6">
                            {/* Animated Drawing Line */}
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                                className="absolute top-0 left-6 right-6 h-[1px] bg-foreground/10 origin-left"
                            />
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                                className="w-full md:w-1/4 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-2 mb-4 md:mb-0"
                            >
                                <span className="font-serif text-accent text-3xl italic">{item.phase}</span>
                                <span className="font-sans font-bold tracking-widest uppercase text-xs text-foreground/50">{item.date}</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                className="md:w-3/4 flex flex-col md:flex-row gap-8"
                            >
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/70 font-sans font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <ul className="flex flex-col gap-3">
                                        {item.details.map((detail, i) => (
                                            <li key={i} className="flex gap-4 items-start text-sm text-foreground/60 font-sans font-light">
                                                <span className="w-1.5 h-1.5 mt-2 rounded-none bg-accent shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                    
                    {/* Final Bottom Line */}
                    <div className="relative h-[1px] -mx-6 px-6">
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                            className="absolute top-0 left-6 right-6 h-[1px] bg-foreground/10 origin-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

