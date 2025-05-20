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
      className="h-[100vh] w-full flex flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col flex-wrap p-6 lg:p-0 text-center">
        <div className="">
          <img
            src={profile_photo}
            alt="Ma photo de profil"
            width={240}
            height={240}
            className="rounded-full p-2 border-4 border-dashed mb-6 border-firstColor"
          />
        </div>

        <HeaderSocials />

        <h2 className="hero__my__name">Nuno Fernandes</h2>
        {/* <h1 className="hero__title">Développeur Full Stack</h1> */}
        <h1 className="hero__title">Développeur Full Stack</h1>
        <h3 className="hero__subtitle">
          Développement d&apos;applications innovantes et flexibles pour
          répondre aux besoins de demain.
        </h3>

        <Button classes={"btn mt-3"} href={"#contact"} btnText={"Hire me"} />
      </div>
    </section>
  );
}
