/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./about.css";

/**
 * images
 */
import profile_photo from "/profile_photo.png";

/**
 * Components
 */
import SkillsContainer from "./skills/SkillsContainer";
import AboutDataContainer from "./aboutDataContainer/AboutDataContainer";

/**
 * Data
 */
import { skills } from "./../../utils/skills";

export default function About() {
  return (
    <section id="about" className="container section section__size">
      {/* ===== title ===== */}
      <h2 className="section__title text-center md:text-start">About me</h2>

      {/* ===== Image ===== */}
      <div className="about__container">
        <img
          src={profile_photo}
          alt="Ma photo de profil"
          width={240}
          height={240}
          className="rounded-full p-2 border-4 border-accent bg-primary mx-auto hidden md:block"
        />
        <AboutDataContainer />
      </div>

      {/* ===== Skills ===== */}
      <div className="skills__data my-16">
        <h3 className="my-6 text-center md:text-start">
          Outils et technoqlogies essentiels que j&apos;utilise
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
          {skills.map((skill, index) => {
            return (
              <SkillsContainer
                key={index}
                icon={skill.icon}
                label={skill.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
