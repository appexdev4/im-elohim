import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import studentsImage from "@/assets/eleve.jpeg";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Parent d'élève",
    content: "Elohim School a transformé l'éducation de ma fille. L'équipe pédagogique est exceptionnelle et l'environnement stimulant.",
    rating: 5
  },
  {
    name: "Jean Martin",
    role: "Parent d'élève",
    content: "Un établissement qui combine excellence académique et développement personnel. Nos enfants y grandissent dans de parfaites conditions.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "Ancienne élève",
    content: "Grâce à Elohim School, j'ai développé ma confiance et mes compétences. Cette école m'a préparée à réussir dans mes études supérieures.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative animate-fade-in-up">
            <img
              src={studentsImage}
              alt="Étudiants heureux à Elohim School"
              className="rounded-2xl card-shadow w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ce que disent nos familles
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez les témoignages de parents et d'anciens élèves qui ont vécu l'expérience Elohim School.
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="border-l-4 border-accent hover-lift card-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div className="space-y-3">
                        <p className="text-foreground leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-primary">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}