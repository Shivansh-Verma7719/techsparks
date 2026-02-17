"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-secondary via-background to-background">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                >
                    A <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Deep Human</span> <br />
                    Initiative in <span className="text-foreground">Tech</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-default-500 max-w-2xl mb-10 leading-relaxed"
                >
                    Where biosciences, psychology, economics, maths and computer science meet real-world problems. Ignite a deep-tech movement.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" variant="primary" className="font-semibold px-8 py-6 text-lg shadow-lg shadow-accent/20">
                        Explore Programs
                    </Button>
                    <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg border-2">
                        Read Vision
                    </Button>
                </motion.div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] opacity-30 pointer-events-none"></div>
        </section>
    );
};
