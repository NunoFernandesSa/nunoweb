/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from "lenis/react";

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Review from "./components/Review";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import NavbarSide from "./components/NavbarSide";

/**
 * Styles
 */
import "lenis/dist/lenis.css";

function App() {
  return (
    <>
      <ReactLenis root>
        <Header />

        {/* --- to do latter */}
        {/* <div className="fixed flex items-center justify-center right-0 z-50 h-screen me-6">
        <NavbarSide />
      </div> */}

        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Work />
          {/* TODO de-comment latter */}
          {/* <Review /> */}

          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
