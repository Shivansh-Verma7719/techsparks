"use client";

import { Card, Chip } from "@heroui/react";
import { motion } from "framer-motion";

const phases = [
    {
        phase: "Phase 0",
        title: "Spark – Awareness and Community",
        date: "26 February",
        description: "Launch & Mixer with Problem Solvers in AI, Bio and Tech. Key Guest: Vibhore Sharma.",
        details: ["Lightning talks on problems worth solving", "Founder fireside chats", "Open-mic 'spark pitches'"],
        outcome: "50–100+ students exposed, initial pool of 'problem fellows'."
    },
    {
        phase: "Phase 1",
        title: "TechSparks Festival – Exploration Studio",
        date: "17 March",
        description: "Find your Inner Spark -> Channelise it through Deep Exploration -> Fall in Love with a Problem.",
        details: ["AI Room: Find a Problem with Real AI", "Bio Room: The World of Biosciences", "LeanSparks Room: The Wanderer's Den"],
        outcome: "1–2 clearly articulated problem statements, early teams, 4-6 week sprint commitment."
    },
    {
        phase: "Phase 2",
        title: "TechSparks Immersion – Bangalore",
        date: "10–12 April",
        description: "Immersion to Bangalore, India's deep-tech and startup capital.",
        details: ["Lab tours and founder conversations", "Problem clinics with practitioners", "Reality checks on regulation & IP"],
        outcome: "Problem–space clarity, ecosystem map, deep tech thesis."
    },
    {
        phase: "Phase 3",
        title: "TechSparks Champion RoundTable",
        date: "20 April",
        description: "Curated, invitation-only roundtable with external champions.",
        details: ["5–7 minute Deep Problem Briefs", "Feedback on feasibility & ethics", "Selection of TechSparks Champions"],
        outcome: "Refined problem thesis, 90-day validation roadmap, assigned mentors."
    },
    {
        phase: "Phase 4",
        title: "TechSparks Incubator",
        date: "Starts 20 May",
        description: "Hosted by InfoEdge Centre for Entrepreneurship (~3.5 Months).",
        details: ["Weekly Sprints (Lean Execution)", "Systems and Ethics Studio", "Build for Scale Labs"],
        outcome: "Validated problem, functional prototype, Go/No-go decisions."
    }
];

export const Phases = () => {
    return (
        <section id="phases" className="py-24 bg-surface/30 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Program <span className="text-accent">Phases</span> & Timeline
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {phases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <Card className="bg-background/60 backdrop-blur-md border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                                        <Card.Header className="flex flex-col items-start gap-2 pb-0">
                                            <div className="flex justify-between w-full items-center">
                                                <Chip size="sm" variant="soft" color="accent" className="uppercase font-bold tracking-wider text-[10px]">
                                                    {item.phase}
                                                </Chip>
                                                <span className="text-accent font-mono text-sm">{item.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mt-2 group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h3>
                                        </Card.Header>
                                        <Card.Content>
                                            <p className="text-default-400 mb-4">{item.description}</p>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-default-500 marker:text-accent/50">
                                                {item.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </Card.Content>
                                    </Card>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>

                                <div className="w-full md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
