import { useState } from "react";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Certifications } from "@/app/components/certifications";
import { Contact } from "@/app/components/contact";
import { Navigation } from "@/app/components/navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}
