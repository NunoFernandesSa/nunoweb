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
      className="w-full min-h-screen overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Full Stack
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                Developer
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              As a freelance developer, I design and build tailored web and
              mobile applications. Whether working directly with clients or
              collaborating with tech and design professionals, I deliver
              high-quality, customized solutions to meet your needs.
            </p>

            <p className="text-xl text-gray-200 font-semibold">
              Do you have an idea? I can turn it into a product.
            </p>

            <Button
              classes="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              href="#contact"
              btnText="Let's Connect"
              title="Contact button"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img
                src={profile_photo}
                alt="Profile photo"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white/10 shadow-2xl mx-auto object-cover"
              />
              <p className="text-center text-textPrimary font-sm italic my-1">
                Nuno Fernandes
              </p>
              <HeaderSocials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
