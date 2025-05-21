/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import SideBar from "./components/ui/common/sidebar/SideBar";
import Logo from "./components/ui/common/logo/logo";
import Footer from "./components/ui/common/footer/Footer";

/**
 * Styles
 */

export default function App() {
  return (
    <>
      {/* rigth sidebar */}
      <SideBar />
      {/* main content */}
      <span>
        <Logo />
      </span>
      <main className="md:w-[calc(100vw-90px)]">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Blog />
      </main>

      <Footer />
    </>
  );
}
