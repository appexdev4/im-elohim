import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Clock, Star, ArrowRight, Palette, Music, Calculator, Globe, FlaskConical, Laptop } from "lucide-react";

const programs = [
  {
    level: "Primaire",
    ageRange: "6-11 ans",
    description: "Formation fondamentale avec méthodes pédagogiques innovantes",
    features: ["Classes de 15-18 élèves", "Suivi individualisé", "Activités créatives", "Initiation aux langues"],
    subjects: [
      { name: "Français", icon: BookOpen },
      { name: "Mathématiques", icon: Calculator },
      { name: "Sciences", icon: FlaskConical },
      { name: "Arts", icon: Palette }
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    level: "Secondaire",
    ageRange: "12-18 ans",
    description: "Préparation excellence vers études supérieures",
    features: ["Classes de 18-20 élèves", "Orientation personnalisée", "Options spécialisées", "Préparation examens"],
    subjects: [
      { name: "Langues", icon: Globe },
      { name: "Sciences", icon: FlaskConical },
      { name: "Informatique", icon: Laptop },
      { name: "Arts", icon: Music }
    ],
    color: "bg-green-50 border-green-200"
  }
];

const extracurricular = [
  {
    category: "Sports",
    activities: ["Football", "Basketball", "Tennis", "Natation", "Athlétisme"],
    icon: "🏃‍♀️"
  },
  {
    category: "Arts",
    activities: ["Théâtre", "Musique", "Peinture", "Danse", "Arts plastiques"],
    icon: "🎨"
  },
  {
    category: "Sciences",
    activities: ["Robotique", "Astronomie", "Chimie amusante", "Coding club", "Mathématiques ludiques"],
    icon: "🔬"
  },
  {
    category: "Langues",
    activities: ["Club anglais", "Club espagnol", "Club allemand", "Échanges internationaux"],
    icon: "🌍"
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Nos Programmes Éducatifs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Découvrez nos programmes d'excellence adaptés à chaque étape du développement de votre enfant, 
              du primaire au secondaire.
            </p>
          </div>
        </section>

        {/* Programmes Académiques */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Programmes Académiques
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des cursus conçus pour développer les compétences et talents de chaque élève.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden hover-lift elevated-shadow animate-fade-in-up ${program.color}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold text-primary">
                        {program.level}
                      </CardTitle>
                      <Badge className="success-gradient text-white">
                        {program.ageRange}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {program.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Matières principales */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Matières principales
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {program.subjects.map((subject, idx) => {
                          const IconComponent = subject.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-white/70 rounded-lg">
                              <IconComponent className="h-4 w-4 text-accent" />
                              <span className="text-sm font-medium">{subject.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Caractéristiques */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        Points forts
                      </h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full hero-gradient text-white hover-lift">
                      <Link to="/admissions" className="flex items-center justify-center gap-2">
                        S'inscrire - {program.level}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activités Extrascolaires */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Activités Extrascolaires
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Épanouissement personnel à travers une large gamme d'activités créatives, sportives et culturelles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {extracurricular.map((category, index) => (
                <Card 
                  key={index} 
                  className="hover-lift card-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-primary">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Informations Pratiques */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12 animate-fade-in-up">
                Informations Pratiques
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6 space-y-3">
                    <Clock className="h-12 w-12 text-accent mx-auto" />
                    <h3 className="font-semibold text-primary">Horaires</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi</p>
                      <p>8h00 - 16h30</p>
                      <p>Garderie: 7h30 - 18h00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6 space-y-3">
                    <Users className="h-12 w-12 text-accent mx-auto" />
                    <h3 className="font-semibold text-primary">Classes</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Primaire: 15-18 élèves</p>
                      <p>Secondaire: 18-20 élèves</p>
                      <p>Suivi personnalisé</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6 space-y-3">
                    <Star className="h-12 w-12 text-accent mx-auto" />
                    <h3 className="font-semibold text-primary">Services+</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Cantine bio</p>
                      <p>Transport scolaire</p>
                      <p>Soutien scolaire</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}