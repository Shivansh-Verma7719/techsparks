"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis for that slow, gradual, premium scroll feel
        const lenis = new Lenis({
            duration: 1.8,      // Slower duration for gradual feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease out expo
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.8, // Make mouse wheel scrolling slightly heavier/slower
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
