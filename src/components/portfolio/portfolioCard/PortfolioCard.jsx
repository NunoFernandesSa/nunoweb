/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Style css
 */
import "./portfolio.css";

export default function PortfolioCard({ link, imgLink, title, description }) {
  return (
    <a href={link} target="_blank">
      <div className="portfolio__card">
        <figure className="portfolio__figure">
          <img src={imgLink} alt="" />
        </figure>

        <div className="portfolio__text__container">
          <h2 className="portfolio__title">{title}</h2>
          <p className="text-sm mb-3">{description}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="portfolio__tags"></span>
          </div>
        </div>
      </div>
    </a>
  );
}

PortfolioCard.propTypes = {
  link: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
