"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Modules from "@/components/Modules";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <main>
      <Hero onCtaClick={openForm} />
      <Problem />
      <Solution />
      <Modules />
      <Testimonials />
      <Pricing onCtaClick={openForm} />
      <FAQ />
      <CTA onCtaClick={openForm} />
      <Footer />
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </main>
  );
}
