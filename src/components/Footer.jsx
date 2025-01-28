/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

import SocialBtn from "./SocialBtn";
import { Link } from "react-router-dom";

const socials = [
  {
    img: "/images/social/linkedin.png",
    href: "https://www.linkedin.com/in/nunofernandesdesa",
  },
  {
    img: "/images/social/malt.png",
    href: "https://www.malt.fr/profile/nunofernandes",
  },
];

function Footer() {
  return (
    <footer className="section mb-3">
      <div className="container">
        {/* copyrigth */}
        <div className="flex items-center justify-between text-zinc-400 border-t-[1px] border-zinc-400">
          <p className="text-sm">&copy; 2025 nunoF.</p>
          <div className="flex flex-wrap gap-3 my-2">
            {/* --- socials --- */}
            <div className="flex items-center justify-end">
              <div className="flex gap-2">
                {socials.map((item, index) => (
                  <SocialBtn href={item.href} img={item.img} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* mentions legales */}
        <div className="text-center text-zinc-400">
          <Link
            to="/mentions-legales"
            className="text-xs hover:underline hover:text-emerald-400"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
