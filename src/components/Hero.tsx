import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Jovens aprendendo e crescendo juntos"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/60"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float delay-1000 opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-therapeutic/20 rounded-full animate-float delay-2000 opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Construindo o
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6 animate-fade-in">
            Amanhã
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">
          Formando Talentos, Mudando Destinos
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Uma plataforma digital socioeducacional criada especialmente para jovens em transição para a vida adulta. 
          Aqui você encontra educação, empregabilidade e apoio emocional em um ambiente acolhedor e inspirador.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <Button className="btn-hero text-lg px-10 py-6">
            Começar Jornada
          </Button>
          <Button className="btn-hero text-lg px-8 py-6">
            Conhecer Módulos
          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-white/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">6</div>
            <div className="text-sm">Módulos de Crescimento</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm">Gratuito</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;