/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * node modules
 */
// import { useState } from "react";

/**
 * Style css
 */
import "./sidebar.css";

import { navLinks } from "../../../../utils/navlinks";

export default function SideBar() {
  // const [darkMode, setDarkModen] = useState(true);

  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar__box">
          {navLinks &&
            navLinks.map((link, index) => (
              <ul key={`nav-link-${index}`} className="">
                <li className="">
                  <a
                    href={link.href}
                    className={`sidebar__nav__link ${
                      link.isActive && "active"
                    }`}
                    title={link.label}
                  >
                    <span className={link.icon}></span>
                  </a>
                </li>
              </ul>
            ))}
        </nav>
      </aside>
    </>
  );
}
