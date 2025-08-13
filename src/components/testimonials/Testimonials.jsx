/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * style css
 */
import "./Testimonials.css";

/**
 * data
 */
import { testimonials } from "../../utils/Testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section__size section container">
      <h2 className="section__title">Testimonials</h2>

      <p className="section__subtitle">
        Don’t just take my word for it. Here’s what others say about working
        with me.
      </p>

      <div className="testimonials__container">
        {testimonials.map(({ id, avatar, title, subtitle, comment }) => (
          <div key={id} className="testimonials__content">
            <p className="comment">{`" ${comment} "`}</p>
            <div className="testimonial__author">
              <img src={avatar} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="testomonial__title">{title}</h3>
                <span className="testomonial__subtitle">{subtitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
