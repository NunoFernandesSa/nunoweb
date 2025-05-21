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
        <div className="section__subtitle">
          <p>
            I expertly wield cutting-edge technologies to build high-performance
            solutions across the full development lifecycle.
          </p>
          <p>
            By continuously adopting the latest industry innovations, I create
            scalable systems ready for future challenges.
          </p>
        </div>
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
