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

import { navLinks } from "../../../utils/navlinks";

export default function SideBar() {
  // const [darkMode, setDarkModen] = useState(true);

  return (
    <>
      <div className="sidebar">
        {/* <div className="my-6">
          {darkMode ? (
            <a
              href="#"
              className="cursor-pointer p-2 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                setDarkModen((prev) => !prev);
              }}
            >
              <span className="material-symbols-outlined">dark_mode</span>
            </a>
          ) : (
            <a
              href="#"
              className="cursor-pointer p-2 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                setDarkModen((prev) => !prev);
              }}
            >
              <span className="material-symbols-outlined">light_mode</span>
            </a>
          )}
        </div> */}

        <div className="flex flex-col items-center justify-center gap-3">
          {navLinks &&
            navLinks.map((link, index) => (
              <div key={`nav-link-${index}`} className="btn">
                <a href={link.href} className="">
                  <span className={link.icon}></span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
