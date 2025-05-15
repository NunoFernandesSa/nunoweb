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
import SideBar from "./components/common/sidebar/SideBar";

/**
 * Styles
 */

export default function App() {
  return (
    <>
      {/* main content */}
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      {/* rigth sidebar */}
      <aside>
        <SideBar />
      </aside>
    </>
  );
}
