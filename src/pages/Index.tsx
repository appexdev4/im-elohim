import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/hero-section";
import { ValuesSection } from "@/components/ui/values-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { CTASection } from "@/components/ui/cta-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValuesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
