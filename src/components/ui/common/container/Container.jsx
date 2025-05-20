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
import "./container.css";

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}

// propTypes
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
