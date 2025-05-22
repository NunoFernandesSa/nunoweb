/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * formik & yup
 */
import { useFormik } from "formik";

/**
 * Validators
 */
import { validationSchema } from "../../validators/validatorContactForm";

/**
 * Style css
 */
import "./Contact.css";

export default function Contact() {
  // Initialisation de Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Ici vous pouvez ajouter votre logique d'envoi
      console.log("Données du formulaire:", values);

      // Simulation d'envoi asynchrone
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 1000);
    },
  });

  return (
    <section id="contact" className="section__size section container">
      <h2 className="section__title">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">Get in touch</div>
        <div className="">
          <form onSubmit={formik.handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={
                  formik.touched.name && formik.errors.name ? "error" : ""
                }
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-message">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="doe@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email ? "error" : ""
                }
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Hello...!"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={
                  formik.touched.message && formik.errors.message ? "error" : ""
                }
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="error-message">{formik.errors.message}</div>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
              className={`submit-btn ${
                formik.isSubmitting || !formik.isValid || !formik.dirty
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {formik.isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
