import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import G1 from "@/assets/gestion (1).jpg";
import Students from "@/assets/students-happy.jpg";
import DirectorStudies from "@/assets/directeur étude.jpg";
import SecretaryImg from "@/assets/secretaire (1).jpg";
import CommunicationImg from "@/assets/charger de communication.jpg";

const teamMembers = [
  {
    name: "Mr. KOUAKABI Frankel",
    role: "Directeur Générale",
    speciality: "Pédagogie",
    experience: "20 ans",
    description: "........................................",
    image: Students
  },
  
  {
    name: "Mr.LUMUMBA NDJEKAEMBO Albert",
    role: "Directeur des études",
    speciality: "Directeur",
    experience: "... ans",
    description: "M.LUMUMBA est un éducateur dévoué et soucieux de la réussite des élèves. Après avoir exercé pendant deux ans à l’école La Vie des Palmiers, il rejoint aujourd’hui l’Institut Moderne Elohim School en qualité de Directeur d’études, apportant avec lui son expérience et son engagement pour une éducation de qualité.",
    image: DirectorStudies
  },
  {
    name: "Mme.Thégérance Rose Nzoungoulouka",
    role: "Chargé de communication",
    speciality: "Est là chargée de la communication et des activités culturelles de notre Institut",
    experience: "... ans",
    description: "Journaliste , et passionnée par la communication, elle allie créativité, rigueur et sens de l’écoute pour valoriser l’image des institutions éducatives. Animée par des valeurs d’intégrité, de respect et de professionnalisme, elle fait de chaque projet un espace d’expression, de culture et de connexion humaine.",
    image: CommunicationImg
  },
  {
    name: "GAKOSSO PEA Princilia",
    role: "Gestionaire",
    speciality: ".....",
    experience: "+5 ans",
    description: "Mme GAKOSSO est une professionnelle rigoureuse et passionnée par la gestion éducative. Après avoir débuté sa carrière à NCIA Assurance comme secrétaire, elle a mis à profit son sens de l’organisation et de la responsabilité pour rejoindre l’Institut Moderne Elohim School, où elle occupe aujourd’hui le poste de gestionnaire.",
    image: G1
  },
  
  {
    name: "BOKOLO Dorina Charelle",
    role: "Secrétaire",
    speciality: "....",
    experience: "+3 ans",
    description: "Une secrétaire dynamique et polyvalente, formée en gestion d’entreprise et en gestion de caisse. Elle a effectué un stage à World Consulting, où elle a occupé le poste de caissière, développant ainsi ses compétences en organisation et en gestion administrative.",
    image: SecretaryImg
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              À Propos de l'Institut Moderne Elohim School
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Depuis plus de 12 ans, nous accompagnons votre enfant dans son éducation et son épanouissement, en lui transmettant non seulement le savoir, mais aussi une vision claire pour bâtir son avenir.
            </p>
          </div>
        </section>

        {/* Histoire & Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-primary">Notre Histoire</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fondée en 2014, l’Institut Moderne Elohim School est bien plus qu’une école : c’est un lieu où l’excellence académique rencontre l’épanouissement personnel. Portée par la vision d’éducateurs passionnés, l’école offre à chaque enfant l’opportunité de révéler son potentiel unique dans un environnement stimulant, bienveillant et tourné vers l’avenir.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Depuis plus de dix ans, plus de 2000 élèves ont franchi nos portes et poursuivent aujourd’hui des carrières brillantes dans des domaines variés. Cette réussite est le fruit d’une pédagogie exigeante, d’un suivi individualisé et d’une passion constante pour la réussite des enfants.

👉 À l'institut Moderne Elohim School, nous ne formons pas seulement des élèves, nous préparons les leaders de demain.
                </p>
              </div>
              
              <div className="space-y-8 animate-slide-in-right">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center p-6 hover-lift card-shadow">
                    <CardContent className="space-y-2">
                      <Users className="h-12 w-12 text-accent mx-auto" />
                      <h3 className="text-2xl font-bold text-primary">2000+</h3>
                      <p className="text-muted-foreground">Élèves diplômés</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center p-6 hover-lift card-shadow">
                    <CardContent className="space-y-2">
                      <Award className="h-12 w-12 text-accent mx-auto" />
                      <h3 className="text-2xl font-bold text-primary">95%</h3>
                      <p className="text-muted-foreground">Taux de réussite</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center p-6 hover-lift card-shadow">
                    <CardContent className="space-y-2">
                      <BookOpen className="h-12 w-12 text-accent mx-auto" />
                      <h3 className="text-2xl font-bold text-primary">50+</h3>
                      <p className="text-muted-foreground">Enseignants experts</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center p-6 hover-lift card-shadow">
                    <CardContent className="space-y-2">
                      <Heart className="h-12 w-12 text-accent mx-auto" />
                      <h3 className="text-2xl font-bold text-primary">+10</h3>
                      <p className="text-muted-foreground">Années d'expérience</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in-up">
                Vision-Valeurs-Mission
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Notre Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Former une génération d’élèves compétents, responsables et visionnaires, capables de bâtir un avenir meilleur grâce à une éducation d’excellence et à des valeurs solides.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-8 hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Nos Valeurs</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Volonté : Cultiver la détermination et la persévérance chez chaque élève.

Travail : Promouvoir l’effort, la rigueur et le sens du devoir comme clés du succès.

Réussite : Encourager chaque apprenant à atteindre son plein potentiel et à exceller dans tout ce qu’il entreprend.</p>
                  </CardContent>
                </Card>
                <Card className="p-8 hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Notre Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Offrir une éducation de qualité qui allie excellence académique et développement personnel, afin de former des élèves épanouis, ambitieux et prêts à relever les défis de demain.
                    </p>
                  </CardContent>
                </Card>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Équipe Pédagogique */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Notre Équipe Pédagogique
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rencontrez les professionnels passionnés qui guident nos élèves vers l'excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift card-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <a href={member.image} target="_blank" rel="noopener noreferrer">
                        <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                      </a>
                      
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-xl font-semibold text-primary">
                            {member.name}
                          </h3>
                          <p className="text-accent font-medium">{member.role}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge variant="secondary">{member.speciality}</Badge>
                          <Badge variant="outline">{member.experience}</Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}