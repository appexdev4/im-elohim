import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="Institut Moderne Elohim School" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
              <span className="font-bold text-xl">Institut Moderne Elohim School</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Excellence en éducation depuis 2014. Nous formons les leaders de demain avec passion et dévouement.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Avenue de l'Éducation, Ville, 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  06 422 65 65
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Institumoderneelohimschool@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Restez informé de nos actualités et événements.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="success-gradient text-white hover-lift">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Institut Moderne Elohim School. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}