import Hero from "@/components/Hero";
import SatisfactionSection from "@/components/SatisfactionSection";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SatisfactionSection />
      <Testimonials />
      <Services />
      <Stats />
      <Process />
      <WhyUs />
      <CTASection />
    </>
  );
}
