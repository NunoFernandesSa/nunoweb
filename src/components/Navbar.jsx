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
      // activeBox.current.style.top = `${lastActiveLink.offsetTop}px`;
      // activeBox.current.style.left = `${lastActiveLink.offsetLeft}px`;
      // activeBox.current.style.width = `${lastActiveLink.offsetWidth}px`;
      // activeBox.current.style.height = `${lastActiveLink.offsetHeight}px`;
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
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
