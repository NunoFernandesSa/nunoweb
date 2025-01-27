/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import ContactForm from "./ContactForm";

function Contact() {
  const subtitle =
    "// Contactez-moi dès maintenant pour discuter de votre projet";

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="headline-1">Me Contacter</h2>
        <p className="text-zinc-400 mt-3 mb-8">{subtitle}</p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          <div className=""></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
