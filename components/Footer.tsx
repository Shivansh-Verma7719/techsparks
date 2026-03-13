"use client";

import Link from "next/link";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="py-24 md:py-32 bg-foreground text-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        <Link href="/" className="font-serif font-semibold text-5xl md:text-7xl tracking-tight text-background w-fit hover:opacity-80 transition-opacity">
                            Tech<span className="italic text-accent">Sparks</span>
                        </Link>
                        <p className="text-background/60 text-lg md:text-xl font-serif max-w-sm leading-relaxed">
                            Igniting innovation and entrepreneurship at Ashoka University.
                        </p>
                        <div className="flex gap-8 mt-4">
                            <img src="/images/ashoka-cfe-logo.png" alt="Ashoka University" className="h-24 w-auto transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-12 lg:pl-16 w-full">
                        <div className="flex flex-col gap-6">
                            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-accent mb-2">Navigation</h3>
                            <Link href="/" className="font-sans font-light text-background/70 hover:text-accent transition-colors text-lg w-fit">Home</Link>
                            <Link href="#vision" className="font-sans font-light text-background/70 hover:text-accent transition-colors text-lg w-fit">Vision</Link>
                            <Link href="#phases" className="font-sans font-light text-background/70 hover:text-accent transition-colors text-lg w-fit">Timeline</Link>
                            <Link href="#principles" className="font-sans font-light text-background/70 hover:text-accent transition-colors text-lg w-fit">Principles</Link>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-accent mb-2">Connect</h3>
                            <div className="flex gap-6">
                                <Link href="https://x.com/CfeAshoka" target="_blank" className="text-background/70 hover:text-accent transition-colors p-2 -ml-2">
                                    <IconBrandTwitter size={28} stroke={1.2} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/cfeashoka/" target="_blank" className="text-background/70 hover:text-accent transition-colors p-2">
                                    <IconBrandLinkedin size={28} stroke={1.2} />
                                </Link>
                                <Link href="https://www.instagram.com/centreforentrepreneurship_au/" target="_blank" className="text-background/70 hover:text-accent transition-colors p-2">
                                    <IconBrandInstagram size={28} stroke={1.2} />
                                </Link>
                                <Link href="https://www.facebook.com/CfEAshoka" target="_blank" className="text-background/70 hover:text-accent transition-colors p-2">
                                    <IconBrandFacebook size={28} stroke={1.2} />
                                </Link>
                            </div>
                            <div className="mt-4 flex flex-col gap-2 relative">
                                <span className="text-sm font-sans font-light text-background/50">Say Hello</span>
                                <a href="mailto:entrepreneurship@ashoka.edu.in" className="font-serif xl:text-xl text-base border-b border-background/20 pb-1 hover:border-accent hover:text-accent transition-colors w-fit">
                                    entrepreneurship@ashoka.edu.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-background/40 font-sans text-sm font-light">
                        © {new Date().getFullYear()} TechSparks. All rights reserved.
                    </div>
                    <div className="text-background/40 font-sans text-sm font-light">
                        Designed with Intent.
                    </div>
                </div>
            </div>
        </footer>
    );
};

