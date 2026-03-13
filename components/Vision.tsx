"use client";

import { motion } from "framer-motion";

export const Vision = () => {
    return (
        <section id="vision" className="py-24 bg-background relative overflow-hidden border-t border-foreground/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
                    <div className="md:w-5/12">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight text-foreground sticky top-32"
                        >
                            <span className="font-light italic">Vision &</span><br />
                            <span className="font-bold">Positioning.</span>
                        </motion.h2>
                    </div>

                    <div className="md:w-7/12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl md:text-3xl text-foreground font-serif leading-relaxed mb-10"
                        >
                            TechSparks – <strong className="font-bold">Deep Human Accelerator</strong> is Ashoka University’s deep-tech pathway where biosciences, psychology, economics, maths and computer science meet real-world problems.
                        </motion.p>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-foreground/70 leading-relaxed font-sans font-light mb-16"
                        >
                            It enables Ashoka students to <span className="text-accent italic font-serif text-xl border-b border-accent/30 pb-0.5">fall in love with a problem worth solving</span>, build research-backed models, and turn rigorous inquiry into scalable deep-tech ventures grounded in human need.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group"
                            >
                                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-accent flex items-center gap-3">
                                    <span className="w-4 h-px bg-accent"></span>
                                    Not Just Tech
                                </h3>
                                <p className="text-foreground/70 font-light leading-relaxed">
                                    A deeply human initiative to ignite a deep-tech movement on campus and beyond.
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="group"
                            >
                                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground flex items-center gap-3">
                                    <span className="w-4 h-px bg-foreground"></span>
                                    Partnership
                                </h3>
                                <p className="text-foreground/70 font-light leading-relaxed">
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
