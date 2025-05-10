/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

function Skills() {
  const skillItem = [
    {
      imgSrc: "/images/skills/figma.png",
      label: "Figma",
      desc: "Design & Prototypage",
    },
    {
      imgSrc: "/images/skills/css.png",
      label: "CSS",
      desc: "Styliser et mettre en forme",
    },
    {
      imgSrc: "/images/skills/tailwindcss.png",
      label: "TailwindCSS",
      desc: "Styliser et mettre en forme",
    },
    {
      imgSrc: "/images/skills/javascript.png",
      label: "JavaScript",
      desc: "Interactions & animations",
    },
    {
      imgSrc: "/images/skills/python.png",
      label: "Python",
      desc: "Serveur web",
    },
    {
      imgSrc: "/images/skills/django.png",
      label: "Django",
      desc: "Framework Back-end",
    },
    {
      imgSrc: "/images/skills/postgresql.png",
      label: "PostgreSQL",
      desc: "Base de données SQL",
    },
    {
      imgSrc: "/images/skills/mysql.png",
      label: "mySQL",
      desc: "Base de données",
    },
    {
      imgSrc: "/images/skills/react.png",
      label: "React",
      desc: "Bibliothèque front-end",
    },
    {
      imgSrc: "/images/skills/dart-logo-48.png",
      label: "Dart",
      desc: "Langage de programmation",
    },
    {
      imgSrc: "/images/skills/flutter-logo-48.png",
      label: "Flutter",
      desc: "Applications mobiles",
    },
  ];

  const titileSkils = "Outils et technologies essentiels que j'utilise";
  const subtitleSkils =
    "// Découvrez les puissants outils et technologies que j'utilise pour créer des sites Web et des applications exceptionnels et performants.";

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">{titileSkils}</h2>

        <p className="text-zinc-400 mt-3 mb-8">{subtitleSkils}</p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
