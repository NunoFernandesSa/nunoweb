/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Styles css
 */
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container h-16 flex flex-wrap justify-between items-center px-3 md:px-20 text-xs mb-20 md:mb-0 mt-16">
      <div className="w-full md:w-auto">&copy; 2025 nunoweb</div>
      <div className="w-full md:w-auto"></div>
      <a href="" className="hover:text-hover">
        RGPD
      </a>
    </footer>
  );
}
