"use client";

import { motion } from "framer-motion";

export const Mantra = () => {
    const words = ["Build.", "Break.", "Manifest."];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const letterVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
        },
        hover: {
            y: -10,
            color: "var(--accent)",
            transition: { duration: 0.2, type: "spring" as const, stiffness: 300 }
        }
    };

    return (
        <section className="py-24 md:py-48 relative overflow-hidden bg-foreground text-background">
            <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center justify-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="text-accent tracking-widest uppercase text-xs font-bold mb-12 lg:mb-20 flex items-center justify-center gap-4"
                >
                    <span className="w-8 h-px bg-accent"></span>
                    The Mantra
                    <span className="w-8 h-px bg-accent"></span>
                </motion.p>

                <div className="flex flex-col gap-6 md:gap-8">
                    {words.map((word, i) => (
                        <motion.div
                            key={word}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-150px" }}
                            className="overflow-hidden flex justify-center cursor-default"
                            style={{ paddingBottom: '0.2em' }} // prevent cut-off on lower letters
                        >
                            {word.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[12rem] font-serif font-black tracking-tighter leading-none inline-block relative"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Very subtle background delight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none z-0"></div>
        </section>
    );
};


