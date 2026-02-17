"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="py-12 bg-background border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1: Branding - Takes up 2 columns on desktop for better spacing if needed, or 1 */}
                    <div className="flex flex-col space-y-4 md:col-span-2">
                        <Link href="/" className="font-bold text-2xl tracking-tighter text-foreground w-fit">
                            Tech<span className="text-accent">Sparks</span>
                        </Link>
                        <p className="text-default-400 text-sm max-w-xs">
                            Igniting innovation and entrepreneurship at Ashoka University.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <img src="/images/ashoka-logo.png" alt="Ashoka University" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
                            <img src="/images/cfe-logo.png" alt="Centre for Entrepreneurship" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
                        </div>
                    </div>

                    {/* Column 2: Pages */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-semibold text-foreground">Pages</h3>
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="text-default-400 hover:text-accent transition-colors text-sm w-fit">Home</Link>
                            <Link href="#vision" className="text-default-400 hover:text-accent transition-colors text-sm w-fit">Vision</Link>
                            <Link href="#phases" className="text-default-400 hover:text-accent transition-colors text-sm w-fit">Timeline</Link>
                            <Link href="#principles" className="text-default-400 hover:text-accent transition-colors text-sm w-fit">Principles</Link>
                        </div>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-semibold text-foreground">Socials</h3>
                        <div className="flex gap-4">
                            <Link href="https://x.com/techsparks_au" target="_blank" className="text-default-400 hover:text-accent transition-colors">
                                <IconBrandTwitter size={24} stroke={1.5} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/techsparks-au" target="_blank" className="text-default-400 hover:text-accent transition-colors">
                                <IconBrandLinkedin size={24} stroke={1.5} />
                            </Link>
                            <Link href="https://www.instagram.com/techsparks_au" target="_blank" className="text-default-400 hover:text-accent transition-colors">
                                <IconBrandInstagram size={24} stroke={1.5} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-default-300 text-xs">
                    © {new Date().getFullYear()} TechSparks. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
