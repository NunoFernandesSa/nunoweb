/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

/**
 * Components
 */
import Navbar from "./common/Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto flex flex-col justify-between items-center px-6">
        {/* -- menu -- */}
        <div className="relative md:justify-self-center">
          {/* -- navbar -- */}
          <Navbar />
        </div>
        {/* --- end navbar -- */}
      </div>
      {/* -- end menu -- */}
    </header>
  );
}

export default Header;
