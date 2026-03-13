"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-screen bg-background flex flex-col items-center overflow-hidden">
            <div className="flex-1 w-full flex flex-col justify-end pt-32 pb-8 px-6 lg:px-12 relative z-10">
                
                {/* Extreme Asymmetry & Scale Jump - FLIPPED */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-24 mb-16 lg:mb-24 w-full">
                    
                    {/* Massive Typography - Now on Left */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="w-full lg:w-2/3 flex flex-col items-start overflow-visible"
                    >
                        <h1 className="flex flex-col text-left w-full">
                            <span className="text-[17vw] lg:text-[13vw] font-serif font-light italic leading-[0.7] text-accent lg:-mb-4 z-10 relative block">
                                Deep Human
                            </span>
                            <span className="text-[18vw] lg:text-[14vw] font-sans font-black uppercase leading-[0.75] tracking-tighter text-foreground ml-[-1vw] block">
                                INITIATIVE
                            </span>
                        </h1>
                    </motion.div>

                    {/* Descriptive Text - Now on Right */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="w-full lg:w-1/3 flex flex-col gap-10 lg:pb-4 items-start lg:items-end text-left lg:text-right"
                    >
                        <div className="flex items-center gap-6 justify-start lg:justify-end w-full">
                            <span className="font-sans font-black uppercase tracking-[0.3em] text-[10px] text-foreground/50">
                                InfoEdge CfE
                            </span>
                            <span className="w-16 h-[2px] bg-accent"></span>
                        </div>
                        <p className="text-3xl md:text-5xl text-foreground font-serif leading-[1.1] tracking-tight">
                            Where <span className="italic font-light text-accent">deep inquiry</span> meets real-world problems.
                        </p>
                        <p className="text-lg text-foreground/60 font-sans font-light leading-relaxed max-w-sm">
                            Biosciences, psychology, economics, maths and computer science united to ignite a deep-tech movement.
                        </p>
                    </motion.div>
                </div>

                {/* Unexpected Footer-Style Element at the Bottom of Hero */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full border-t-2 border-foreground/10 pt-6 lg:pt-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 lg:gap-0"
                >
                    <div className="font-sans font-bold uppercase tracking-widest text-xs text-foreground flex gap-6 lg:py-8 mt-2 lg:mt-0">
                        <span>Ashoka University</span>
                        <span className="text-foreground/30">•</span>
                        <span>Cohort 2026</span>
                    </div>

                    <a 
                        href="https://forms.gle/SbcwF9nYjUXCxHX56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-foreground flex items-center justify-center p-8 lg:py-12 lg:px-20 w-full md:w-auto -mb-8 lg:-mb-8 lg:-mr-12"
                    >
                        <div className="absolute inset-0 bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[0.25,1,0.5,1] z-0"></div>
                        <span className="relative z-10 text-background group-hover:text-foreground font-sans font-black uppercase tracking-[0.2em] text-sm md:text-lg transition-colors duration-500">
                            Register Now
                        </span>
                        
                        {/* Dramatic hover reveal arrow */}
                        <svg className="absolute right-8 md:right-10 text-foreground opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500 ease-[0.25,1,0.5,1] z-10 w-6 h-6 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
                
            </div>
        </section>
    );
};
