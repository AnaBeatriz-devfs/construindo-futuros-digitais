import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModulesSection from "@/components/ModulesSection";
import TherapeuticSupport from "@/components/TherapeuticSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="modulos">
          <ModulesSection />
        </section>
        <section id="terapia">
          <TherapeuticSupport />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;