"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Button } from "@heroui/react";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    
    // Delight: Scroll Progress Indicator
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            // Basic ScrollSpy logic
            const sections = ['vision', 'phases', 'principles'];
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 200)) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        
        window.addEventListener("scroll", handleScroll);
        // Initial call
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Vision", href: "#vision", id: "vision" },
        { name: "Timeline", href: "#phases", id: "phases" },
        { name: "Principles", href: "#principles", id: "principles" },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
                style={{ scaleX }}
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-background/90 backdrop-blur-xl border-b border-foreground/10 py-5"
                        : "bg-transparent py-8 mt-1"
                }`}
            >
                <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                    <Link href="/" className="font-serif font-semibold text-2xl tracking-tight text-foreground z-50 hover:opacity-80 transition-opacity">
                        Tech<span className="italic text-accent">Sparks</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-sm font-medium tracking-wide uppercase group overflow-hidden py-1 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                                >
                                    {link.name}
                                    <span className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ease-out bg-accent ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            );
                        })}
                        <Link href="https://forms.gle/SbcwF9nYjUXCxHX56" target="_blank" rel="noopener noreferrer" passHref>
                            <Button
                                className="font-sans font-medium uppercase tracking-wider text-xs px-6 py-5 bg-accent text-accent-foreground rounded-none hover:bg-foreground hover:text-background transition-colors duration-500"
                            >
                                Apply Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 flex flex-col gap-2 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                            className="w-7 h-0.5 bg-foreground block rounded-full"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-7 h-0.5 bg-foreground block rounded-full"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                            className="w-7 h-0.5 bg-foreground block rounded-full"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        className="fixed inset-0 z-40 bg-background md:hidden flex flex-col items-center justify-center gap-10"
                    >
                        {navLinks.map((link, i) => {
                            const isActive = activeSection === link.id;
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-4xl font-serif transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            );
                        })}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="https://forms.gle/SbcwF9nYjUXCxHX56" target="_blank" rel="noopener noreferrer" passHref>
                                <Button
                                    size="lg"
                                    className="font-sans font-medium uppercase tracking-wider bg-accent text-accent-foreground rounded-none px-10 py-8 mt-6"
                                    onPress={() => setIsMobileMenuOpen(false)}
                                >
                                    Apply Now
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

