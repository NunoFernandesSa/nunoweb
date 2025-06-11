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
    <div className="about__data about__data__shadow">
      <div className="about__content">
        <div className="about__text space-y-4">
          <p className="about__description leading-relaxed">
            As a passionate Web and Mobile Developer, I bring ideas to life
            through elegant code and intuitive design. With extensive experience
            crafting websites, web applications, and mobile apps, I thrive on
            creating seamless digital experiences.
          </p>

          <p className="about__description leading-relaxed">
            I&apos;m constantly immersed in emerging technologies and industry
            trends, pushing the boundaries of what&apos;s possible while honing
            my craft to perfection.
          </p>

          <p className="about__description leading-relaxed">
            Every project is an opportunity to create something extraordinary.
            My approach combines aesthetic excellence with robust functionality,
            ensuring solutions that are not just visually stunning, but truly
            user-centric.
          </p>
        </div>

        <div className="about__buttons__section mt-8">
          <a
            className="inline-flex items-center gap-2 hover:transform hover:scale-105 transition-transform"
            href="/pdf/CV-NunoF-Développeur-fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download my Curriculum Vitae"
          >
            <span>View My CV</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
