import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Missão */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Construindo o Amanhã</h3>
                <p className="text-sm text-white/70">Formando Talentos, Mudando Destinos</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Acreditamos no potencial transformador da educação e no poder dos jovens de mudarem o mundo. 
              Nossa plataforma é um espaço seguro de crescimento, aprendizado e esperança.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#modulos" className="text-white/70 hover:text-white transition-colors">Módulos</a></li>
              <li><a href="#terapia" className="text-white/70 hover:text-white transition-colors">Suporte Terapêutico</a></li>
              <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="text-white/70 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#parcerias" className="text-white/70 hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">contato@construindoamanha.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70">(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-white/70">São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Construindo o Amanhã. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;