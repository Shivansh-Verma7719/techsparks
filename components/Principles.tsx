"use client";

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
        <section id="principles" className="py-32 bg-background relative border-t border-foreground/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between mb-24">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="text-5xl md:text-6xl font-serif text-foreground tracking-tight"
                        >
                            Our <span className="italic">Principles.</span>
                        </motion.h2>
                    </div>
                    <div className="md:w-1/2">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="text-xl md:text-2xl text-foreground font-serif leading-relaxed"
                        >
                            Every activity, from mixers to incubation, is built on these four unbreakable pillars.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                            className="group relative"
                        >
                            <span className="absolute -left-6 md:-left-12 -top-16 text-[8rem] font-serif font-light text-foreground/[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-accent/5 -z-10">
                                0{index + 1}
                            </span>
                            <div className="pt-4 border-t-2 border-foreground/10 group-hover:border-accent transition-colors duration-500">
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-base text-foreground/70 font-sans font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
