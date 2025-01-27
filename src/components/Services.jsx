/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

const services = {
  1: {
    title: "Développement Web",
    services: [
      "Création de solutions sur mesure pour des sites vitrines et des applications web complexes.",
      "Design intuitif, esthétique et architectures robustes pour des sites plaisants et fonctionnels.",
      "Sites performants et optimisés pour le référencement.",
      "Utilisation des dernières technologies et frameworks.",
    ],
  },

  2: {
    title: "Développement mobile",
    services: [
      "Développement d'applications hybrides pour smartphones et tablettes.",
      "Utilisation de frameworks comme React Native et Flutter pour des solutions sur mesure.",
      "Applications distinctives grâce à une attention particulière à l'ergonomie et au design.",
      "Utilisation des dernières technologies et frameworks.",
    ],
  },
};

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="headline-1 mb-8">Ce que je fais</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {/* --- dev web --- */}
          <div className="bg-zinc-900/50 p-6 md:p-12 rounded-2xl mt-3 mb-8 ring-2 ring-inset ring-zinc-50/10">
            <h3 className="headline-3 mb-6">{services[1]["title"]}</h3>
            <div className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
              <ul>
                {services[1]["services"].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[14px] md:text-[16px] mb-3 md:mb-6"
                  >
                    <span className="material-symbols-rounded text-emerald-400">
                      adjust
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- dev mobile --- */}
          <div className="bg-zinc-900/50 p-6 md:p-12 rounded-2xl mt-3 mb-8 ring-2 ring-inset ring-zinc-50/10">
            <h3 className="headline-3 mb-6">{services[2]["title"]}</h3>
            <div className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
              <ul>
                {services[2]["services"].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[14px] md:text-[16px] mb-3 md:mb-6"
                  >
                    <span className="material-symbols-rounded text-emerald-400">
                      adjust
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
