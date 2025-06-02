/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Styles css
 */
import "./Footer.css";

import { useState } from "react";
import { Modal } from "./../modal/Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="container h-16 flex flex-wrap justify-between items-center px-3 md:px-20 text-xs mb-20 md:mb-0 mt-16">
      <div className="w-full md:w-auto">
        &copy; 2025 nunoweb | All rights reserved.
      </div>
      <div className="w-full md:w-auto"></div>
      <button
        className="hover:text-hover italic relative"
        onClick={() => setIsOpen(true)}
      >
        Legal notices
      </button>

      {/* ===== RGPD Modal ===== */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Legal Notices"
        ></Modal>
      )}
    </footer>
  );
}
