/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillsContainer from "./skills/SkillsContainer";
import AboutDataContainer from "./aboutDataContainer/AboutDataContainer";

/**
 * Data
 */
import { skills } from "./../../utils/skills";

/**
 * The About component renders the About Me section of the website, which
 * includes a brief description of the developer, their skills, and a link to
 * their contact information.
 *
 * @returns {JSX.Element} A JSX element representing the About Me section
 */
export default function About() {
  return (
    <section
      id="about"
      className="container min-h-screen flex items-center py-16"
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-8 w-full">
          <h2 className="section__title">About Me</h2>
          <div className="about__container">
            <AboutDataContainer />
          </div>
        </div>

        <div className="space-y-10">
          <div className="prose prose-lg">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I expertly wield cutting-edge technologies to build
              high-performance solutions across the full development lifecycle.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              By continuously adopting the latest industry innovations, I create
              scalable systems ready for future challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <SkillsContainer icon={skill.icon} label={skill.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
