import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/home.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elohim School - Excellence en Éducation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Excellence en
            <span className="block text-accent"> Éducation</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Découvrez une éducation d'exception qui prépare vos enfants à un avenir brillant. 
            Rejoignez notre communauté éducative depuis plus de 20 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild 
              size="lg" 
              className="success-gradient text-white hover-lift px-8 py-6 text-lg font-semibold"
            >
              <Link to="/admissions" className="flex items-center gap-2">
                S'inscrire maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Play className="h-5 w-5 mr-2" />
              Découvrir en vidéo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-gentle">
          <div className="w-1 h-12 bg-white/40 rounded-full">
            <div className="w-1 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-gentle"></div>
    </section>
  );
}