"use client";

import { Card } from "@heroui/react";
import { motion } from "framer-motion";

export const Vision = () => {
    return (
        <section id="vision" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                        >
                            Vision & <br /> <span className="text-accent">Positioning</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-default-500 leading-relaxed mb-8"
                        >
                            TechSparks – <strong className="text-foreground">Deep Human Accelerator</strong> is Ashoka University’s deep-tech pathway where biosciences, psychology, economics, maths and computer science meet real-world problems.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-default-500 leading-relaxed"
                        >
                            It enables Ashoka students to <span className="text-accent italic">fall in love with a problem worth solving</span>, build research-backed models, and turn rigorous inquiry into scalable deep-tech ventures grounded in human need.
                        </motion.p>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 gap-6">
                        <Card className="bg-surface-secondary/50 backdrop-blur-sm border border-white/5">
                            <Card.Content className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-warning">Not Just Technology</h3>
                                <p className="text-default-400">
                                    A deeply human initiative to ignite a deep-tech movement on campus and beyond.
                                </p>
                            </Card.Content>
                        </Card>
                        <Card className="bg-surface-secondary/50 backdrop-blur-sm border border-white/5">
                            <Card.Content className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-accent">Partnership with CfE</h3>
                                <p className="text-default-400">
                                    In partnership with the InfoEdge Centre for Entrepreneurship (CfE), Ashoka’s creative hub for student founders.
                                </p>
                            </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
