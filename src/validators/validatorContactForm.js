import * as Yup from "yup";

// Schéma de validation avec Yup
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(10, "The message must contain at least 10 characters")
    .required("Required"),
});
