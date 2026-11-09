import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InteractivePaperBackground from "./components/effects/InteractivePaperBackground";
export default function App() {
  return (
    <>
      <InteractivePaperBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
