/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * components
 */
import ContactForm from "./contactForm/ContactForm";

/**
 * Style css
 */
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section__size section container">
      <h2 className="section__title">Get in touch !</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col justify-start items-start gap-3 mb-8 md:mb-0">
          <div className="">
            <h3 className="text-h2FontSize mt-6">
              Got a question or a project in mind? Let’s talk !
            </h3>
            <p className="text-gray-300">
              Don&apos;t like forms? Send me an email.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-2 italic text-textPrimary relative">
            <a
              href="mailto::n.fernandes.contact@gmail.com"
              className="hover:text-accent transition-all ease-in-out duration-300"
            >
              n.fernandes.contact@gmail.com
            </a>
            <a
              href="tel:+33771802921"
              className="hover:text-accent transition-all ease-in-out duration-300"
            >
              +33 7 71 80 29 21
            </a>
          </div>
          <img
            src="/images/logo-white.png"
            alt="Mon Logo"
            width={200}
            className="rounded-lg mx-auto md:mx-0"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
