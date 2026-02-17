"use client";

import { Card } from "@heroui/react";
import { motion } from "framer-motion";

const principles = [
    {
        title: "Lean Execution",
        description: "Rapid prototyping and continuous user testing to avoid wasteful spending and tighten problem–solution fit."
    },
    {
        title: "Purposeful Simplicity",
        description: "Stripping away non-essentials without cutting corners, making adoption easier in resource-constrained markets."
    },
    {
        title: "Adaptive Scalability",
        description: "Modular product and venture architectures that can replicate, localise, and evolve across geographies."
    },
    {
        title: "Systemic Sustainability",
        description: "Embedding environmental, social, and ethical constraints from day zero, aligning with responsible innovation."
    }
];

export const Principles = () => {
    return (
        <section id="principles" className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Our <span className="text-accent">Principles</span>
                    </motion.h2>
                    <p className="text-default-500 max-w-2xl mx-auto">
                        Every activity, from mixers to incubation, is built on four pillars
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-surface-secondary/30 border border-white/5 hover:border-accent/50 transition-colors p-6">
                                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                                <p className="text-sm text-default-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
