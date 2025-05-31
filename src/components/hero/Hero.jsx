/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import Button from "../ui/common/button/Button";
import HeaderSocials from "./headerSocials/HeaderSocials";

/**
 * Style css
 */
import "./hero.css";

/**
 * images
 */
import profile_photo from "/profile_photo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[80vh] flex flex-wrap justify-center items-center gap-0 md:gap-10"
    >
      <div className="flex justify-center items-center flex-col p-6 lg:p-0 text-center">
        <img
          src={profile_photo}
          alt="Ma photo de profil"
          width={300}
          height={300}
          className="rounded-3xl p-2 border-4 border-dashed mb-6 border-secondary"
        />
        <HeaderSocials />
      </div>

      <div className="px-3 md:px-6 text-center md:text-start">
        <h2 className="hero__my__name">Nuno Fernandes</h2>
        <h1 className="hero__title text-2xl md:text-3xl">
          Full Stack Developer
        </h1>
        <h2 className="hero__subtitle">🚀 Full Stack, Full Impact</h2>
        <h3 className="hero__text">
          Building future-ready applications with innovation and flexibility at
          their core.
        </h3>

        <Button
          classes={"btn mt-3 relative"}
          href={"#contact"}
          btnText={"Hire me"}
        />
      </div>
    </section>
  );
}
