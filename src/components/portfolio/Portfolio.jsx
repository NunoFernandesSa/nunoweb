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
    <section id="portfolio" className="container section section__size">
      <h2 className="section__title">Recent works</h2>

      <p className="section__subtitle">
        Explore my recent work. Transforming ideas into powerful technical
        solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mx-auto max-w-6xl justify-center">
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
