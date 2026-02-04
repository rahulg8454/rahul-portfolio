import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import FloatingBackdrop from "@/components/FloatingBackdrop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackdrop />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;