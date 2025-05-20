/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import ServiceCard from "./card/ServiceCard";
import "./Services.css";

/**
 * Data
 */
import { services } from "../../utils/services";

export default function Services() {
  return (
    <section
      id="services"
      className="section container section__size flex flex-col justify-center"
    >
      <h2 className="section__title">What I Do</h2>

      <div className="services__container">
        {services &&
          services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
      </div>
    </section>
  );
}
