"use client";

import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";
import DemoSection from "@/components/sections/DemoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <StatsSection />
      <DemoSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
