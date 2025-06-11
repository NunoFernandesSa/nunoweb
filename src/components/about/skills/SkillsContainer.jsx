/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * node modules
 */
import PropTypes from "prop-types";

export default function SkillsContainer({ icon, label, className }) {
  return (
    <div
      className={`bg-surface shadow-lg w-full rounded-md flex justify-start items-center py-2 px-3 ${className}`}
    >
      <img src={icon} className="w-10 h-full" />

      <h3 className="text-primary">{label}</h3>
    </div>
  );
}

SkillsContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
