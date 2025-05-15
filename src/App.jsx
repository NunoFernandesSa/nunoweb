/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modulesI
 */
import { ReactLenis } from "lenis/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/common/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import LegalMentions from "./components/common/LegalMentions";

/**
 * Styles
 */
import "lenis/dist/lenis.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route path="mentions-legales/" element={<LegalMentions />} />
      </Routes>
    </Router>
  );
}

function MainContent() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Work />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
