/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({ href, target, label, icon, helperTitle, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        title={helperTitle}
        className={`btn btn-primary ${classes} `}
      >
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </button>
    );
  }
};

/**
 * Primary Button
 */
const ButtonOutline = ({ href, target, label, icon, helperTitle, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        title={helperTitle}
        className={`btn btn-outline ${classes} `}
      >
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </button>
    );
  }
};

/**
 * PropTypes ButtonPrimary
 */
ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  helperTitle: PropTypes.string,
  classes: PropTypes.string,
};

/**
 * PropTypes ButtonOutline
 */
ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  helperTitle: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
