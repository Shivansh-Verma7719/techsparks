"use client";

import { motion } from "framer-motion";

export const Vision = () => {
    return (
        <section id="vision" className="py-32 md:py-48 bg-background relative overflow-hidden border-t border-foreground/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-start">
                    <div className="lg:w-1/3 w-full">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight text-foreground lg:sticky lg:top-40"
                        >
                            <span className="font-light italic">Vision &</span><br />
                            <span className="font-bold">Positioning.</span>
                        </motion.h2>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <div className="max-w-2xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl md:text-4xl text-foreground font-serif leading-snug mb-12"
                            >
                                TechSparks – <strong className="font-bold">Deep Human Accelerator</strong> is Ashoka University’s deep-tech pathway where biosciences, psychology, economics, maths and computer science meet real-world problems.
                            </motion.p>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl text-foreground/70 leading-relaxed font-sans font-light mb-24"
                            >
                                It enables Ashoka students to <span className="text-accent italic font-serif text-2xl border-b border-accent/30 pb-0.5 mx-1">fall in love with a problem worth solving</span>, build research-backed models, and turn rigorous inquiry into scalable deep-tech ventures grounded in human need.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative before:absolute before:inset-0 before:border-t before:border-foreground/10 before:-mx-6 md:before:mx-0 before:pt-16 pt-16">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group max-w-sm"
                            >
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-accent flex items-center gap-4">
                                    <span className="w-6 h-px bg-accent"></span>
                                    Not Just Tech
                                </h3>
                                <p className="text-foreground/70 font-light leading-relaxed text-lg">
                                    A deeply human initiative to ignite a deep-tech movement on campus and beyond.
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="group max-w-sm"
                            >
                                <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-foreground flex items-center gap-4">
                                    <span className="w-6 h-px bg-foreground"></span>
                                    Partnership
                                </h3>
                                <p className="text-foreground/70 font-light leading-relaxed text-lg">
                                    In partnership with the InfoEdge Centre for Entrepreneurship (CfE), Ashoka’s creative hub for student founders.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
