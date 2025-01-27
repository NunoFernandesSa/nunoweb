/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Environment variables
 */

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const serviceId = import.meta.env.VITE_EMAILJS_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_EMAILJS_TEMPLATE_ID;
  const publickey = import.meta.env.VITE_EMAILJS_EMAILJS_USER_ID;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(serviceId, templateId, e.target, publickey).then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Échec de l'envoi du message, veuillez réessayer plus tard.");
        }
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
        <div className="md:grid md:items-center md:gap-4">
          {/* --- name --- */}
          <div className="mb-4">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
              placeholder="John Doe"
              className="text-field"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          {/* --- email --- */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="johndoe@exemple.com"
              className="text-field"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* --- message --- */}
          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Bonjour ... !"
              className="text-field resize-y min-h-32 max-h-80"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          {/* --- button --- */}
          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
