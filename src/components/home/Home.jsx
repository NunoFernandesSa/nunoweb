/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */

/**
 * Style css
 */
import "./home.css";

export default function Home() {
  return (
    <section className="w-full h-screen flex bg-slate-600">
      <div className="bg-red-300 w-[50%]">left</div>
      <div
        className="bg-blue-300 w-[50%]
      "
      >
        right
      </div>
    </section>
  );
}
