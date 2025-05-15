/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

import { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

function Navbar({ navOpen }) {
  const navLinks = useRef([]);
  const activeBox = useRef();

  const navItems = [
    {
      label: "Home",
      link: "#home",
      helperTitle: "Accueil",
      className: "nav-link active",
    },
    {
      label: "Person",
      link: "#about",
      helperTitle: "A Propos",
      className: "nav-link",
    },
    {
      label: "design_services",
      link: "#services",
      helperTitle: "Services",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      helperTitle: "Portfolio",
      className: "nav-link",
    },
    {
      label: "Email",
      link: "#contact",
      helperTitle: "Contact",
      className: "nav-link",
    },
  ];

  const initActiveBox = useCallback(() => {
    const lastActiveLink = navLinks.current.find(
      (link) => link && link.classList.contains("active")
    );
    if (lastActiveLink) {
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, [initActiveBox]);

  useEffect(initActiveBox, [initActiveBox]);

  const activeCurrentLink = useCallback((e) => {
    const lastActiveLink = navLinks.current.find(
      (link) => link && link.classList.contains("active")
    );
    lastActiveLink?.classList.remove("active");
    e.target.classList.add("active");

    activeBox.current.style.top = `${e.target.offsetTop}px`;
    activeBox.current.style.left = `${e.target.offsetLeft}px`;
    activeBox.current.style.width = `${e.target.offsetWidth}px`;
    activeBox.current.style.height = `${e.target.offsetHeight}px`;
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, helperTitle, className }, key) => (
        <a
          href={link}
          className={className + " material-symbols-rounded"}
          key={key}
          ref={(el) => (navLinks.current[key] = el)}
          onClick={activeCurrentLink}
          title={helperTitle}
        >
          {label}
        </a>
      ))}
      {/* --- ligth/dark mode button --- */}
      <div className="flex flex-col justify-end text-end text-zinc-400">
        <span className="text-xs">
          <button
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Toggle theme"
            onClick={() => {
              //TODO: add dark mode functionality
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-zinc-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </span>
      </div>
      {/* --- END ligth/dark mode button --- */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
