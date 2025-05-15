/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

function SocialBtn({ href, img }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={img}
        alt=""
        width={90}
        height={90}
        className="p-3 bg-zinc-800 hover:bg-zinc-700/50 transition-colors rounded-lg active:scale-95"
      />
    </a>
  );
}

SocialBtn.propTypes = {
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default SocialBtn;
