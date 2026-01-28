import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 hero-gradient text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-gentle"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-gentle"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Prêt à rejoindre notre
            <span className="block text-accent">communauté éducative ?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Donnez à votre enfant les meilleures chances de réussir. Découvrez nos programmes d'excellence 
            et intégrez une école qui fait la différence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Classes à taille humaine</h3>
              <p className="text-white/80 text-sm">Maximum 20 élèves par classe pour un suivi personnalisé</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Inscriptions ouvertes</h3>
              <p className="text-white/80 text-sm">Rejoignez-nous dès maintenant pour la prochaine rentrée</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <ArrowRight className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Processus simplifié</h3>
              <p className="text-white/80 text-sm">Inscription en ligne rapide et accompagnement personnalisé</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="success-gradient text-white hover-lift px-8 py-6 text-lg font-semibold"
            >
              <Link to="/admissions" className="flex items-center gap-2">
                Commencer l'inscription
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Link to="/contact">
                Prendre rendez-vous
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}