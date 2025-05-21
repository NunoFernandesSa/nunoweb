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
import "./socialButton.css";

export default function SocialButton({
  href,
  imgSource,
  alt,
  width,
  className,
}) {
  return (
    <a href={href} target="_blanc">
      <img src={imgSource} alt={alt} width={width} className={className} />
    </a>
  );
}
SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
