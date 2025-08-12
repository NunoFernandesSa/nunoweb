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
// import Testimonials from "./components/testimonials/Testimonials";
// import Blog from "./components/blog/Blog";
import SideBar from "./components/ui/common/sidebar/SideBar";
import Footer from "./components/ui/common/footer/Footer";

/**
 * Toast
 */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Canvas Cursor
 */
import CanvasCursor from "./components/CanvasCursor/CanvasCursor ";

/**
 * The App component serves as the main entry point for the application, rendering
 * the essential layout and components of the portfolio website. It incorporates
 * interactive elements such as the CanvasCursor for visual effects and ToastContainer
 * for notifications. The layout includes a sidebar, main content area with various
 * sections like Hero, About, Services, Portfolio, and Contact, as well as a Footer.
 */
export default function App() {
  return (
    <>
      <CanvasCursor />
      <ToastContainer />

      {/* rigth sidebar */}
      <SideBar />
      {/* main content */}

      <main className="md:w-[calc(100vw-90px)]">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        {/* <Blog /> */}
      </main>

      <Footer />
    </>
  );
}
