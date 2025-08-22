import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Construindo o Amanhã</span>
              <span className="text-xs text-muted-foreground -mt-1">Formando Talentos, Mudando Destinos</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#modulos" className="text-foreground hover:text-primary transition-colors font-medium">
              Módulos
            </a>
            <a href="#terapia" className="text-foreground hover:text-primary transition-colors font-medium">
              Suporte Terapêutico
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nós
            </a>
            <Button className="bg-gradient-primary text-white hover:opacity-90">
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a 
                href="#modulos" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Módulos
              </a>
              <a 
                href="#terapia" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Suporte Terapêutico
              </a>
              <a 
                href="#sobre" 
                className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </a>
              <Button className="bg-gradient-primary text-white hover:opacity-90 mt-4">
                Entrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;