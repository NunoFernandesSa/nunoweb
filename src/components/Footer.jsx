/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

import SocialBtn from "./SocialBtn";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

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

const rgpd = [
  {
    label: "Mentions légales",
    href: "",
  },
  {
    label: "Politique de confidentialité",
    href: "",
  },
];

function Footer() {
  return (
    <footer className="section mb-3">
      <div className="container">
        {/* copyrigth */}
        <div className="flex items-center justify-between text-zinc-400 border-t-[1px] border-zinc-400">
          <p className="text-sm">&copy; 2025 nunoweb</p>
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

        {/* --- RGPD --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {rgpd.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-zinc-400 hover:text-emerald-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
