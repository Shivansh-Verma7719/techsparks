import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechSparks | Deep Human Accelerator",
  description: "Ashoka University’s deep-tech pathway where biosciences, psychology, economics, maths and computer science meet real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${manrope.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
