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
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "Person", link: "#about", className: "nav-link" },
    { label: "design_services", link: "#services", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Email", link: "#contact", className: "nav-link" },
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
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className + " material-symbols-rounded"}
          key={key}
          ref={(el) => (navLinks.current[key] = el)}
          onClick={activeCurrentLink}
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
