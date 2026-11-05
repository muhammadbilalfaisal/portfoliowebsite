import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Capabilities from "./components/Capabilities";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/effects/CustomCursor";
import InteractivePaperBackground from "./components/effects/InteractivePaperBackground";
import Marquee from "./components/Marquee";
import { MousePositionProvider } from "./hooks/useMousePosition";
export default function App() {
  return (
    <MousePositionProvider>
      <InteractivePaperBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Marquee />
        <Work />
        <Process />
        <Capabilities />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </MousePositionProvider>
  );
}
