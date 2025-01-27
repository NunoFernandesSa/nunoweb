/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // --- date and hours ---
  const date = new Date();
  const localDate = date.toLocaleDateString();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // --- end date and hours ---

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex flex-col justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* --- LOGO --- */}
        <div className="hidden md:flex md:flex-col gap-3 md:gap-0 items-center md:items-start">
          <a href="/" className="logo">
            <span className="text-2xl font-bold text-white flex items-end">
              NunoF.
            </span>
          </a>

          <div className="flex items-center gap-1.5 text-sm text-gray-400 tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Disponible
          </div>
        </div>
        {/* --- END LOGO --- */}

        {/* -- menu -- */}
        <div className="relative md:justify-self-center">
          {/* -- navbar -- */}
          <Navbar navOpen={navOpen} />
        </div>
        {/* --- end menu -- */}

        {/* --- DATE --- */}
        <div className="hidden md:flex flex-col justify-end text-end text-zinc-400">
          <span>{localDate}</span>
          <span>
            {hours}h:{minutes}min
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
