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
import "./skillsContainer.css";

export default function SkillsContainer({ key, icon, label, className }) {
  return (
    <div
      key={key}
      className={`bg-surface shadow-lg w-full sm:w-auto rounded-md flex justify-start items-center py-2 px-3 gap-2 ${className}`}
    >
      <img src={icon} className="skill__logo w-10 h-full" />
      <div className="skills__box">
        <h3 className="skills__subtitle">{label}</h3>
      </div>
    </div>
  );
}

SkillsContainer.propTypes = {
  key: PropTypes.number,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
