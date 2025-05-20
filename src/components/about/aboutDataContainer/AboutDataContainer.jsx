/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./aboutDataContainer.css";

/**
 * Components
 */
import Button from "./../../ui/common/button/Button";

export default function AboutDataContainer() {
  return (
    <div className="about__data about__data__shadow grid">
      <p className="about__description">
        Je suis Nuno, développeur Web et mobile enthousiaste, avec une riche
        expérience dans la conception de sites Web, applications web et
        applications mobile. Je suis constamment à l’affût des dernières
        technologies et tendances du secteur, cherchant à améliorer
        continuellement mes compétences et à repousser les limites de la
        créativité. Mon objectif est de transformer des idées en réalités
        numériques, en veillant à ce que chaque projet soit esthétiquement
        agréable.
      </p>

      <div className="about__buttons__section">
        <div className="">
          <Button classes={"btn"} btnText={"Dowload CV"} />
        </div>
        <div className="flex gap-3">
          <Button classes={"btn"} btnText={""} />
          <Button classes={"btn"} btnText={""} />
        </div>
      </div>
    </div>
  );
}
