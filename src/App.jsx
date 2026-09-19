import Navbar from "./components/Navbar.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import CVSection from "./components/CVSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
