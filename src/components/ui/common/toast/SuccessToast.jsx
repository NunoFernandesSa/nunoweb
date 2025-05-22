/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * toast
 */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = () => {
  toast.success("Message envoyé avec succès!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
