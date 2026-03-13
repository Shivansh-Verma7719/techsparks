"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export const Hero = () => {
    const easeEditorial = [0.25, 1, 0.5, 1] as const;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1.2, Math: easeEditorial } 
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-background overflow-hidden px-6 pt-20">
            {/* Very subtle grain or nothing at all—let's stick to pure clean background */}
            <div className="container mx-auto relative z-10 max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start text-left"
                >
                    <motion.p 
                        variants={itemVariants as any}
                        className="text-accent tracking-widest uppercase text-xs font-bold mb-6 flex items-center gap-4"
                    >
                        <span className="w-8 h-px bg-accent"></span>
                        Ashoka University
                    </motion.p>

                    <motion.h1
                        variants={itemVariants as any}
                        className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.95] tracking-tight mb-8"
                    >
                        A <span className="italic font-light text-accent">Deep Human</span><br />
                        <span className="font-semibold">Initiative.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants as any}
                        className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12 leading-relaxed font-sans font-light"
                    >
                        Where biosciences, psychology, economics, maths and computer science meet real-world problems. Ignite a deep-tech movement.
                    </motion.p>

                    <motion.div
                        variants={itemVariants as any}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button 
                            size="lg" 
                            className="font-sans font-medium px-8 py-7 text-lg bg-foreground text-background rounded-none hover:bg-accent hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-foreground/5"
                        >
                            Explore Programs
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline"
                            className="font-sans font-medium px-8 py-7 text-lg border-foreground text-foreground rounded-none hover:bg-foreground hover:text-background transition-all duration-300"
                        >
                            Read Vision
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
