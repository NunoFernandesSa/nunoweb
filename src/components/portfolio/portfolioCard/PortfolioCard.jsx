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

export default function PortfolioCard({
  link,
  imgLink,
  title,
  description,
  tags,
}) {
  return (
    <a href={link} target="_blank" title={"Go to web site " + title}>
      <div className="portfolio__card relative">
        <figure className="portfolio__figure">
          <img src={imgLink} alt={title} />
        </figure>

        <div className="portfolio__text__container">
          <h2 className="portfolio__title">{title}</h2>
          <p className="text-sm mb-3">{description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="portfolio__tags">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

PortfolioCard.propTypes = {
  link: PropTypes.string,
  imgLink: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
