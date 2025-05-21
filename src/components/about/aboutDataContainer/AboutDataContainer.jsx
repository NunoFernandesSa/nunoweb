/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./aboutDataContainer.css";

export default function AboutDataContainer() {
  return (
    <div className="about__data about__data__shadow grid">
      <p className="about__description">
        I’m Nuno, a passionate Web and Mobile Developer with extensive
        experience in designing websites, web applications, and mobile apps. I’m
        constantly exploring the latest technologies and industry trends,
        striving to enhance my skills and push the boundaries of creativity. My
        goal is to turn ideas into digital realities, ensuring every project is
        visually appealing, functional, and user-centric.
      </p>

      <div className="about__buttons__section">
        <a
          className="btn"
          href="/pdf/CV-NunoF-Développeur-fullstack.pdf"
          target="_blank"
        >
          Dowload CV
        </a>

        <div className="flex gap-3">
          <a className="btn" href="" target="_blank"></a>
          <a className="btn" href="" target="_blank"></a>
        </div>
      </div>
    </div>
  );
}
