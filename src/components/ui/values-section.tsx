import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Volonté",
    description: "Déterminés à donner le meilleur, chaque jour, pour atteindre nos objectifs."
  },
  {
    icon: Users,
    title: "Travail",
    description: "Le goût de l'effort, la rigueur et la persévérance au service de l'excellence."
  },
  {
    icon: Award,
    title: "Réussite",
    description: "Accompagner chaque élève vers la réussite académique et personnelle."
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les principes qui guident notre mission éducative et façonnent l'avenir de nos élèves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="border-0 card-shadow hover-lift bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}