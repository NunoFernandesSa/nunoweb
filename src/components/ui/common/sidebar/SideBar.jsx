/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./sidebar.css";

import { navLinks } from "../../../../utils/navlinks";

export default function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar__box">
          {navLinks &&
            navLinks.map((link, index) => (
              <ul key={`nav-link-${index}`}>
                <li>
                  <a
                    href={link.href}
                    className={`sidebar__nav__link ${
                      link.isActive && "active"
                    }`}
                    title={link.label}
                    onClick={(e) => {
                      const links = document.querySelectorAll(
                        ".sidebar__nav__link"
                      );
                      links.forEach((link) => link.classList.remove("active"));
                      e.currentTarget.classList.add("active");
                    }}
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
