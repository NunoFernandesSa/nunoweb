/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { ButtonPrimary, ButtonOutline } from "./common/Button";

function Hero() {
  // --- titles ---
  const heroTitle = "Développeur Full Stack";
  const heroSubtitle =
    "Développement d'applications innovantes et flexibles pour répondre aux besoins de demain.";

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div>
          <div className="flex items-center gap-3">
            <figure className="profile-img-box block lg:hidden w-[96px] h-[96px] rounded-lg">
              <img
                src="/profile_photo.png"
                alt="Ma photo de profil"
                className="img-cover"
              />
            </figure>
            {/* --- LOGO --- */}
            <div className="md:hidden flex flex-col items-center md:items-start">
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
          </div>

          <div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-4 mb-8">
              {heroTitle}
            </h2>

            <h2 className="headline-2 max-w-[15ch] lg:max-w-[25ch] mt-4 mb-8">
              {heroSubtitle}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <ButtonPrimary
              href={"/pdf/mon_cv_.pdf"}
              primary={true}
              label={"Télécharger CV"}
              icon={"download"}
              target={"_blank"}
              helperTitle={"Télécharger mon CV"}
            />

            <ButtonOutline
              href={"#contact"}
              label={"Contactez-moi"}
              icon="message"
              helperTitle={"Contactez-moi"}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figcaption className="w-full max-w-[480px] mx-auto rounded-[40px] bg-zinc-900/50 overflow-hidden">
            <img
              src="/profile_photo.png"
              alt="Ma phpto de profil"
              className="w-full"
              width={456}
              height={800}
            />
          </figcaption>
        </div>
      </div>
    </section>
  );
}

export default Hero;
