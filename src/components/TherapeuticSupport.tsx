import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Clock, Users } from "lucide-react";

const TherapeuticSupport = () => {
  return (
    <section className="py-24 px-6 bg-gradient-therapeutic relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse-soft delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 animate-float">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Acompanhamento Terapêutico
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Seu bem-estar emocional é nossa prioridade. Acesse suporte psicológico profissional 
            sempre que precisar, em um ambiente seguro e sigiloso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Shield className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">100% Sigiloso</h3>
            <p className="text-white/80 text-sm">Suas conversas são totalmente confidenciais e protegidas</p>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Clock className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Disponível 24/7</h3>
            <p className="text-white/80 text-sm">Suporte sempre que você precisar, sem pressa ou pressão</p>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Users className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Psicólogos Voluntários</h3>
            <p className="text-white/80 text-sm">Profissionais dedicados e especializados em apoio jovem</p>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Heart className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Cuidado Humanizado</h3>
            <p className="text-white/80 text-sm">Abordagem acolhedora focada no seu crescimento</p>
          </Card>
        </div>
        
        <div className="text-center">
          <Button className="btn-therapeutic text-lg px-12 py-6 shadow-lg">
            Conversar com um Psicólogo
          </Button>
          
          <p className="text-white/70 mt-4 text-sm">
            Seu bem-estar emocional é fundamental para sua jornada de crescimento
          </p>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticSupport;