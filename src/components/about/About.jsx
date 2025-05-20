/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Style css
 */
import "./about.css";

/**
 * images
 */
import profile_photo from "/profile_photo.png";

/**
 * Components
 */
import Button from "./../ui/common/button/Button";

export default function About() {
  return (
    <section id="about" className="about container section w-full h-screen">
      <h2 className="section__title">About me</h2>

      <div className="about__container grid">
        <img
          src={profile_photo}
          alt="Ma photo de profil"
          width={240}
          height={240}
          className="rounded-full p-2 border-4 mb-6 border-accent bg-primary"
        />

        <div className="about__data about__data__shadow grid">
          <div className="about__info">
            <p className="about__description">
              Je suis Nuno, développeur Web et mobile enthousiaste, avec une
              riche expérience dans la conception de sites Web, applications web
              et applications mobile. Je suis constamment à l’affût des
              dernières technologies et tendances du secteur, cherchant à
              améliorer continuellement mes compétences et à repousser les
              limites de la créativité. Mon objectif est de transformer des
              idées en réalités numériques, en veillant à ce que chaque projet
              soit esthétiquement agréable.
            </p>

            <Button classes={"btn"} btnText={"Dowload CV"} />
          </div>
        </div>
      </div>
    </section>
  );
}
