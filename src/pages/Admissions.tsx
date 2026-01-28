import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, FileText, Users, Calendar, Phone, Mail, User, GraduationCap } from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Candidature en ligne",
    description: "Remplissez notre formulaire d'inscription avec les informations de l'élève",
    icon: FileText
  },
  {
    step: 2,
    title: "Entretien famille",
    description: "Rencontre avec l'équipe pédagogique pour présenter votre projet éducatif",
    icon: Users
  },
  {
    step: 3,
    title: "Évaluation élève",
    description: "Test de positionnement adapté au niveau pour personnaliser le parcours",
    icon: GraduationCap
  },
  {
    step: 4,
    title: "Confirmation",
    description: "Validation de l'admission et finalisation de l'inscription",
    icon: CheckCircle
  }
];

const tuitionFees = [
  {
    level: "Primaire",
    ages: "6-11 ans",
    monthlyFee: "350€",
    yearlyFee: "3500€",
    includes: ["Cours", "Cantine bio", "Activités", "Matériel pédagogique"]
  },
  {
    level: "Secondaire",
    ages: "12-18 ans",
    monthlyFee: "420€",
    yearlyFee: "4200€",
    includes: ["Cours", "Cantine bio", "Laboratoires", "Orientation", "Préparation examens"]
  }
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentAge: "",
    desiredLevel: "",
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    motivation: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande d'admission envoyée !",
      description: "Nous vous contacterons sous 48h pour planifier l'entretien.",
    });
    // Reset form
    setFormData({
      studentFirstName: "",
      studentLastName: "",
      studentAge: "",
      desiredLevel: "",
      parentFirstName: "",
      parentLastName: "",
      email: "",
      phone: "",
      motivation: ""
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
              Rejoignez Elohim School
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Un parcours d'admission simple et personnalisé pour intégrer une communauté éducative d'excellence.
            </p>
          </div>
        </section>

        {/* Processus d'admission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Processus d'Admission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un parcours d'admission en 4 étapes, conçu pour nous connaître mutuellement et créer les meilleures conditions d'apprentissage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card 
                    key={index} 
                    className="hover-lift card-shadow text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="h-8 w-8 text-accent" />
                        </div>
                        <Badge className="absolute -top-2 -right-2 success-gradient text-white">
                          {step.step}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formulaire d'inscription */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Formulaire de Pré-inscription
                </h2>
                <p className="text-lg text-muted-foreground">
                  Première étape de votre candidature - nous vous recontacterons rapidement.
                </p>
              </div>

              <Card className="card-shadow animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-accent" />
                    Informations de candidature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Informations Élève */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary border-b pb-2">
                        Informations de l'élève
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentFirstName">Prénom de l'élève *</Label>
                          <Input
                            id="studentFirstName"
                            value={formData.studentFirstName}
                            onChange={(e) => handleChange('studentFirstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentLastName">Nom de l'élève *</Label>
                          <Input
                            id="studentLastName"
                            value={formData.studentLastName}
                            onChange={(e) => handleChange('studentLastName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentAge">Âge de l'élève *</Label>
                          <Input
                            id="studentAge"
                            type="number"
                            min="6"
                            max="18"
                            value={formData.studentAge}
                            onChange={(e) => handleChange('studentAge', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="desiredLevel">Niveau souhaité *</Label>
                          <Select value={formData.desiredLevel} onValueChange={(value) => handleChange('desiredLevel', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un niveau" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cp">CP</SelectItem>
                              <SelectItem value="ce1">CE1</SelectItem>
                              <SelectItem value="ce2">CE2</SelectItem>
                              <SelectItem value="cm1">CM1</SelectItem>
                              <SelectItem value="cm2">CM2</SelectItem>
                              <SelectItem value="6eme">6ème</SelectItem>
                              <SelectItem value="5eme">5ème</SelectItem>
                              <SelectItem value="4eme">4ème</SelectItem>
                              <SelectItem value="3eme">3ème</SelectItem>
                              <SelectItem value="seconde">Seconde</SelectItem>
                              <SelectItem value="premiere">Première</SelectItem>
                              <SelectItem value="terminale">Terminale</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Informations Parent */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary border-b pb-2">
                        Informations du parent/tuteur
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parentFirstName">Prénom *</Label>
                          <Input
                            id="parentFirstName"
                            value={formData.parentFirstName}
                            onChange={(e) => handleChange('parentFirstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="parentLastName">Nom *</Label>
                          <Input
                            id="parentLastName"
                            value={formData.parentLastName}
                            onChange={(e) => handleChange('parentLastName', e.target.value)}
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
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary border-b pb-2">
                        Votre projet éducatif
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="motivation">
                          Pourquoi choisir Elohim School ? Quelles sont vos attentes ?
                        </Label>
                        <Textarea
                          id="motivation"
                          placeholder="Partagez-nous votre motivation et vos attentes pour l'éducation de votre enfant..."
                          className="min-h-[120px]"
                          value={formData.motivation}
                          onChange={(e) => handleChange('motivation', e.target.value)}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full success-gradient text-white hover-lift text-lg py-6">
                      Envoyer la demande d'admission
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tarifs et Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des tarifs transparents pour une éducation d'exception avec de nombreux services inclus.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tuitionFees.map((fee, index) => (
                <Card 
                  key={index} 
                  className="hover-lift elevated-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-primary">
                      {fee.level}
                    </CardTitle>
                    <Badge className="mx-auto success-gradient text-white">
                      {fee.ages}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">
                        {fee.monthlyFee}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        par mois • {fee.yearlyFee}/an
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-3">Services inclus :</h3>
                      <ul className="space-y-2">
                        {fee.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full hero-gradient text-white hover-lift">
                      Demander un devis personnalisé
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto bg-secondary/20 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Facilités de paiement</h3>
                  <p className="text-muted-foreground text-sm">
                    Paiement en plusieurs fois possible • Bourses au mérite disponibles • 
                    Réduction fratrie • Contactez-nous pour étudier votre dossier.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact rapide */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in-up">
              Des questions sur l'admission ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Appelez-nous</p>
                  <p className="text-white/80 text-sm">06 422 65 65</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Écrivez-nous</p>
                  <p className="text-white/80 text-sm">Institumoderneelohimschool@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}