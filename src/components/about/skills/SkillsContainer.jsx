/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * node modules
 */
import PropTypes from "prop-types";

/**
 * The SkillsContainer component renders a container for a single skill, which
 * includes a skill logo and the skill name. It is used in the About section of
 * the website.
 *
 * @param {string} icon - The URL of the skill's logo.
 * @param {string} label - The name of the skill.
 * @param {string} className - The CSS class name to add to the container. This
 * can be used to add additional styling to the container.
 *
 * @returns {JSX.Element} A JSX element representing the SkillsContainer
 * component.
 */
export default function SkillsContainer({ icon, label, className }) {
  return (
    <div
      className={`bg-surface shadow-lg w-full rounded-md flex justify-center items-center py-2 px-3 gap-3 ${className} italic`}
    >
      <img
        src={icon}
        className="w-10 h-full"
        title={label}
        alt={label}
        loading="lazy"
      />
    </div>
  );
}

SkillsContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
