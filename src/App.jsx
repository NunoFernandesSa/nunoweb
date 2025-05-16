/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import SideBar from "./components/common/sidebar/SideBar";

/**
 * Styles
 */

export default function App() {
  return (
    <>
      {/* main content */}
      <main className="relative w-[calc(100%-64px)]">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      {/* rigth sidebar */}
      <aside className="fixed bottom-0 right-0 w-full h-16 flex justify-center items-center bg-red-500">
        <SideBar />
      </aside>
    </>
  );
}
