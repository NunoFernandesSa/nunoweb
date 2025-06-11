/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

import { useState } from "react";
import { Modal } from "./../modal/Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="container h-16 flex flex-wrap justify-between items-center px-3 md:px-20 text-xs mb-20 md:mb-0 mt-16 text-textPrimary border-t-[1px]">
      <div className="w-full md:w-auto">
        &copy; 2025 nunoweb | All rights reserved.
      </div>
      <div className="w-full md:w-auto"></div>
      <button
        className="hover:text-accent italic relative"
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
