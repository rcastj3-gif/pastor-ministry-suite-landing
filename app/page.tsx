"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import Savings from "@/components/Savings";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const openForm = (plan?: string) => {
    setSelectedPlan(plan || "");
    setIsFormOpen(true);
  };

  return (
    <main>
      <Hero onCtaClick={() => openForm()} />
      <Agents />
      <Savings onCtaClick={() => openForm()} />
      <Testimonials />
      <Pricing onPlanSelect={openForm} />
      <FAQ />
      <CTA onCtaClick={() => openForm()} />
      <Footer />
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        plan={selectedPlan}
      />
    </main>
  );
}
