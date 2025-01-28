/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

function WorkCard({
  imgSrc,
  title,
  tags,
  projectLink,
  subtitle,
  helperTitle,
  classes,
}) {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-700 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-auto rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex sm:ms-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1 mb-3 text-sm text-zinc-200">{title}</h3>
            <p className="text-sm mb-3 text-zinc-400">{subtitle}</p>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="h-6 grid items-center text-sm text-zinc-400 bg-zinc-50/5 px-3 rounded-lg"
                >
                  {"#" + label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          title={helperTitle}
          className="absolute inset-0"
        ></a>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  helperTitle: PropTypes.string,
  classes: PropTypes.string,
};

export default WorkCard;
