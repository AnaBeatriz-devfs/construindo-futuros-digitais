import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Laptop, 
  PiggyBank, 
  GraduationCap, 
  Briefcase,
  ArrowRight 
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Autoconhecimento e Projeto de Vida",
    description: "Descubra seus talentos, valores e sonhos através de ferramentas interativas de autoconhecimento.",
    icon: Heart,
    color: "bg-gradient-to-br from-therapeutic to-therapeutic-light",
    features: ["Diário Digital", "Testes de Personalidade", "Mapa de Metas", "Reflexões Guiadas"]
  },
  {
    id: 2,
    title: "Soft Skills",
    description: "Desenvolva habilidades socioemocionais essenciais para o sucesso pessoal e profissional.",
    icon: Users,
    color: "bg-gradient-to-br from-primary to-primary-light",
    features: ["Simulações em RV", "Oratória", "Inteligência Emocional", "Trabalho em Equipe"]
  },
  {
    id: 3,
    title: "Hard Skills",
    description: "Domine ferramentas tecnológicas e habilidades técnicas demandadas pelo mercado.",
    icon: Laptop,
    color: "bg-gradient-to-br from-secondary to-secondary-light",
    features: ["Pacote Office", "Simulador de Projetos", "Portfólio Digital", "Certificações"]
  },
  {
    id: 4,
    title: "Educação Financeira",
    description: "Aprenda a gerenciar suas finanças e construir um futuro próspero e independente.",
    icon: PiggyBank,
    color: "bg-gradient-to-br from-accent to-yellow-400",
    features: ["Calculadoras Interativas", "Vídeos Animados", "Workshops Gamificados", "Planejamento"]
  },
  {
    id: 5,
    title: "Suporte para Vestibular",
    description: "Prepare-se para o ensino superior com materiais de estudo e orientação personalizada.",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-blue-500 to-blue-400",
    features: ["Banco de Universidades", "Aulas em Vídeo", "Fórum de Dúvidas", "Simulados"]
  },
  {
    id: 6,
    title: "Empregabilidade",
    description: "Conecte-se com oportunidades de trabalho e prepare-se para entrevistas de emprego.",
    icon: Briefcase,
    color: "bg-gradient-to-br from-purple-500 to-purple-400",
    features: ["Criação de Currículo", "LinkedIn", "Simulação de Entrevistas", "Conexão com Empresas"]
  }
];

const ModulesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Suas Ilhas de <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Navegue pelo nosso universo digital de aprendizado. Cada módulo é uma jornada única 
            de crescimento pessoal e profissional, pensada especialmente para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={module.id} 
              className={`card-module group cursor-pointer transform-gpu ${
                index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in delay-200'
              }`}
            >
              <div className={`${module.color} p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {module.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {module.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Explorar Módulo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;