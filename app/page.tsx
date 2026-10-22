import { CohortTwoCallout } from "@/components/CohortTwoCallout";
import { Footer } from "@/components/Footer";
import { CohortOne } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Mantra } from "@/components/Mantra";
import { Mentors } from "@/components/Mentors";
import { Motivation } from "@/components/Motivation";
import { NavBar } from "@/components/NavBar";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent/30 selection:text-white">
      <NavBar />
      <Hero />
      <Vision />
      <Motivation />
      <Mentors />
      <Mantra />
      {/* Timeline is intentionally hidden until the next programme update. */}
      <CohortOne />
      <CohortTwoCallout />
      <Footer />
    </main>
  );
}
