/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
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
      className="h-[100vh] w-full flex flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col flex-wrap p-6 lg:p-0 text-center">
        <img
          src={profile_photo}
          alt="Ma photo de profil"
          width={240}
          height={240}
          className="rounded-full p-2 border-4 border-dashed mb-6 border-firstColor"
        />

        <HeaderSocials />

        <h2 className="font-bold text-titleColor text-2xl mb-6 mt-6">
          Nuno Fernandes
        </h2>
        <h1 className="font-bold text-titleColor text-4xl mb-6">
          Développeur Full Stack
        </h1>
        <h3 className="hero__subtitle mb-3 text-textCcolor">
          Développement d&apos;applications innovantes et flexibles pour
          répondre aux besoins de demain.
        </h3>

        <a className="btn mt-6" href="#contact">
          Hire me
        </a>
      </div>
    </section>
  );
}
