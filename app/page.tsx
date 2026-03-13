import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Mantra } from "@/components/Mantra";
import { Vision } from "@/components/Vision";
import { Phases } from "@/components/Phases";
import { Principles } from "@/components/Principles";
import { Mentors } from "@/components/Mentors";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent/30 selection:text-white">
      <NavBar />
      <Hero />
      <Vision />
      <Mantra />
      <Mentors />
      <Phases />
      <Principles />
      <Footer />
    </main>
  );
}
