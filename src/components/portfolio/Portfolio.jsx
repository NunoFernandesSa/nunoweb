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
import { works } from "../../utils/portfolio";

export default function Portfolio() {
  return (
    <section id="projects" className="container section section__size">
      <h2 className="section__title">Recent works</h2>

      <div className="section__subtitle">
        <p></p>
      </div>

      <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] mx-auto max-w-6xl justify-center">
        {works.map((item, index) => (
          <PortfolioCard
            key={index}
            link={item.link}
            imgLink={item.imageLink}
            title={item.title}
            description={item.description}
            tags={item.tag}
          />
        ))}
      </div>
    </section>
  );
}
//
