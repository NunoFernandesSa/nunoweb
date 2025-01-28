/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import WorkCard from "./WorkCard";

/**
 * variables
 * @param {string} imgSrc - Image source
 *
 */
const portfolioSubTitle =
  "// Explorez une sélection de projets qui illustrent mon travail et mon expertise en développement.";

function Work() {
  const works = [
    {
      imgSrc: "/images/works/gracoeiro.png",
      title: "www.gracoeiro.com",
      subtitle:
        "Dans le cadre de ce projet, j'ai développé et optimisé le site web www.Gracoeiro.com pour une experte en recouvrement de créances amiables et contentieux.",
      tags: ["PHP", "Wordpress", "Javascript", "Développement web"],
      projectLink: "https://gracoeiro.com/",
    },
    {
      imgSrc: "/images/works/joaocerqueirapereira.png",
      title: "www.joaocerqueirapereira.com",
      subtitle:
        "Dans ce projet, de refonte du site web www.joaocerqueirapereira.com l'objectif principal était de créer une plateforme professionnelle et intuitive, mettant en valeur les services de l'entreprise.",
      tags: ["CMS", "PHP", "Wordpress", "Javascript", "Développement web"],
      projectLink: "https://joaocerqueirapereira.com/",
    },
    {
      imgSrc: "/images/works/snake.png",
      title: "Snake (jouable uniquement sur PC)",
      subtitle:
        "J'ai créé le fameux mini-jeu du Snake en JavaScript Vanilla. Interface simple, mais addictif, qui démontre mes compétences en développement web.",
      tags: ["HTML", "CSS", "Javascript", "Développement web"],
      projectLink: "https://nunofds.github.io/gamesnake/",
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2">Mon portfolio</h2>
        <p className="text-zinc-400 mt-3 mb-8">{portfolioSubTitle}</p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, subtitle }, key) => (
            <WorkCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              subtitle={subtitle}
              tags={tags}
              projectLink={projectLink}
              helperTitle={"voir le site " + title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
