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

export default function Button({ classes, href, btnText, title }) {
  return (
    <a className={classes} href={href} title={title}>
      {btnText}
    </a>
  );
}

// propTypes
Button.propTypes = {
  classes: PropTypes.string,
  btnText: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};
