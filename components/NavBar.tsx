"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Button } from "@heroui/react";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
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
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Vision", href: "#vision" },
        { name: "Timeline", href: "#phases" },
        { name: "Principles", href: "#principles" },
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-foreground tracking-wide uppercase group overflow-hidden py-1"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ease-out"></span>
                            </Link>
                        ))}
                        <Link href="#" passHref>
                            <Button
                                className="font-sans font-medium uppercase tracking-wider text-xs px-6 py-5 bg-foreground text-background rounded-none hover:bg-accent hover:scale-[1.02] transition-all duration-300"
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
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-serif text-foreground hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="#" passHref>
                                <Button
                                    size="lg"
                                    className="font-sans font-medium uppercase tracking-wider bg-foreground text-background rounded-none px-10 py-8 mt-6"
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

