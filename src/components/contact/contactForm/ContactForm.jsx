/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * node modules
 */
import { useRef } from "react";

/**
 * formik & yup
 */
import { useFormik } from "formik";

/**
 * Form validators
 */
import { validationSchema } from "../../../validators/validatorContactForm";

/**
 * emailjs
 */
import emailjs from "@emailjs/browser";

/**
 * toast
 */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * env
 */
import { email_js } from "../../../utils/emailjs";

/**
 * Style css
 */
import "./contactForm.css";

export default function ContactForm() {
  const form = useRef();

  // Initialisation de EmailJS
  emailjs.init(email_js.PUBLIC_KEY);

  // Initialisation de Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log("Form data:", values);
        await emailjs.sendForm(
          email_js.SERVICE_ID,
          email_js.TEMPLATE_ID,
          form.current,
          email_js.PUBLIC_KEY
        );
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        toast.error("⚠️ An error has occurred. Please try again later!", error);
        console.error("EmailJS Error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="">
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="contact-form relative"
      >
        <div className="form-group">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={formik.touched.name && formik.errors.name ? "error" : ""}
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
  );
}
