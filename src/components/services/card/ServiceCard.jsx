/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * node modules
 */
import PropTypes from "prop-types";

/**
 * Style css
 */
import "./serviceCard.css";

export default function ServiceCard({ id, image, title, description }) {
  return (
    <div className="service__card" key={id}>
      <img src={image} alt={title} />
      <div className="flex flex-col gap-6">
        <h2 className="service__title">{title}</h2>
        <p className="service__description">{description}</p>
      </div>
    </div>
  );
}

// propTypes
ServiceCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
