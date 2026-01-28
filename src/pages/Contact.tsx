import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, User, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Arrêt la ferme de manianga"],
    color: "text-accent"
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["06 422 65 65", "24H/7"],
    color: "text-primary"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["Institumoderneelohimschool@gmail.com", "Institumoderneelohimschool@gmail.com"],
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun-Ven: 7h30-17h00", "Sam: 7h30-13h00"],
    color: "text-primary"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Une question ? Un projet ? Nous sommes à votre écoute pour vous accompagner dans votre démarche éducative.
            </p>
          </div>
        </section>

        {/* Informations de contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nos Coordonnées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plusieurs moyens pour nous joindre et nous rencontrer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center hover-lift card-shadow animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formulaire et carte */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Formulaire de contact */}
              <div className="animate-fade-in-up">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      Envoyez-nous un message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom complet *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Sujet *</Label>
                          <Select value={formData.subject} onValueChange={(value) => handleChange('subject', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admission">Demande d'admission</SelectItem>
                              <SelectItem value="information">Demande d'information</SelectItem>
                              <SelectItem value="rdv">Prise de rendez-vous</SelectItem>
                              <SelectItem value="pedagogie">Questions pédagogiques</SelectItem>
                              <SelectItem value="tarifs">Informations tarifaires</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez votre demande ou vos questions..."
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full success-gradient text-white hover-lift">
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Carte et informations supplémentaires */}
              <div className="space-y-8 animate-slide-in-right">
                {/* Carte Google Maps */}
                <Card className="overflow-hidden card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Notre localisation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <MapPin className="h-16 w-16 text-accent mx-auto" />
                        <div>
                          <p className="font-semibold text-primary">Elohim School</p>
                          <p className="text-muted-foreground text-sm">Arrêt la ferme de manianga(quartier Talangaï)</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ouvrir dans Google Maps
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Informations pratiques */}
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Informations Pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Transports</h4>
                      <p className="text-muted-foreground text-sm">
                        Bus : Arrêt la ferme de manianga<br />
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Rendez-vous</h4>
                      <p className="text-muted-foreground text-sm">
                        Visites sur rendez-vous du lundi au vendredi.<br />
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Urgences</h4>
                      <p className="text-muted-foreground text-sm">
                        En cas d'urgence concernant un élève :<br />
                        +242 06 422 65 65 (24h/24)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ rapide */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-8 animate-fade-in-up">
                Questions Fréquentes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="text-left hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Quand puis-je visiter l'école ?</h3>
                    <p className="text-muted-foreground text-sm">
                      Les visites se font sur rendez-vous du lundi au vendredi. Nous organisons aussi des portes ouvertes le premier samedi de chaque mois.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-left hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Comment s'inscrire ?</h3>
                    <p className="text-muted-foreground text-sm">
                      L'inscription se fait via notre formulaire en ligne, suivi d'un entretien famille et d'une évaluation de l'élève.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-left hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Quels sont les tarifs ?</h3>
                    <p className="text-muted-foreground text-sm">
                      Les tarifs varient selon le niveau : 350€/mois pour le primaire et 420€/mois pour le secondaire, services inclus.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-left hover-lift card-shadow animate-fade-in-up">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Y a-t-il une cantine ?</h3>
                    <p className="text-muted-foreground text-sm">
                      Oui, nous proposons une cantine avec des repas bio préparés sur place par notre équipe de cuisiniers.
                    </p>
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