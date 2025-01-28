/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

const aboutText1 =
  "Je suis Nuno, développeur Web et mobile enthousiaste basé à Paris, avec une riche expérience dans la conception de sites Web, applications web et applications mobile.";

const aboutText2 =
  "Je suis constamment à l’affût des dernières technologies et tendances du secteur, cherchant à améliorer continuellement mes compétences et à repousser les limites de la créativité. Mon objectif est de transformer des idées en réalités numériques, en veillant à ce que chaque projet soit esthétiquement agréable.";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-900/50 p-6 md:p-12 rounded-2xl">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            {aboutText1} {aboutText2}
          </p>

          <div className="flex items-center justify-start gap-6 p-3 rounded-lg">
            <a
              href="https://www.linkedin.com/in/nunofernandesdesa"
              target="_blank"
              rel="noopener noreferrer"
              title="Lien vers LinkedIn"
            >
              <img
                src="/images/social/linkedin.png"
                alt=""
                width={90}
                height={90}
                className="p-3 bg-zinc-800 hover:bg-zinc-700/50 transition-colors rounded-lg active:scale-95"
              />
            </a>
            <a
              href="https://www.malt.fr/profile/nunofernandes"
              target="_blank"
              rel="noopener noreferrer"
              title="Lien vers Malt"
            >
              <img
                src="/images/social/malt.png"
                alt=""
                width={90}
                height={90}
                className="p-3 bg-zinc-800 hover:bg-zinc-700/50 transition-colors rounded-lg active:scale-95"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
