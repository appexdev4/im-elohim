import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Programmes", path: "/programs" },
  { name: "Inscription", path: "/admissions" },
  { name: "Actualités", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled
          ? "bg-white/95 backdrop-blur-md card-shadow"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl text-primary hover-scale"
          >
            <img
              src="/logo.jpg"
              alt="Institut Moderne Elohim School"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <span className="sr-only">Institut Moderne Elohim School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-smooth hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="hero-gradient text-white hover-lift">
              <Link to="/admissions">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-4 py-2 font-medium transition-smooth hover:bg-secondary",
                    location.pathname === item.path
                      ? "text-accent bg-secondary"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full hero-gradient text-white">
                  <Link to="/admissions">S'inscrire</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}