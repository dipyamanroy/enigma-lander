import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
