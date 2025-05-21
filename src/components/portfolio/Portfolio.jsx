/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./portfolio.css";
import PortfolioCard from "./portfolioCard/PortfolioCard";

/**
 * data
 */
import { portfolio } from "../../utils/portfolio";

export default function Portfolio() {
  return (
    <section id="projects" className="container section section__size">
      <h2 className="section__title">Recent works</h2>
      <p className="text-textPrimary mb-6">
        Explorez une sélection de projets qui illustrent mon travail et mon
        expertise en développement.
      </p>

      <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {portfolio.map((item) => {
          <PortfolioCard
            key={item.title}
            link={item.link}
            imgLink={item.imageLink}
            title={item.title}
            description={item.description}
          />;
        })}
      </div>
    </section>
  );
}
//
