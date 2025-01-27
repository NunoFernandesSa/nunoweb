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
    "// Pour toute demande de renseignements, n'hésitez pas à me contacter.";

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="headline-1">Me Contacter</h2>
        <p className="text-zinc-400 mt-3 mb-8">{subtitle}</p>

        <div className="max-w-md mx-auto ring-2 ring-inset bg-zinc-700 ring-zinc-50/10 rounded-lg p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
