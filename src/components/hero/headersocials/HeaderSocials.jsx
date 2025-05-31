/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Components
 */
import SocialButton from "./../../ui/common/socialButton/SocialButton";

/**
 * Style css
 */
import "./headersocials.css";

/**
 * Data
 */
import { social } from "./../../../utils/social";

/**
 * React
 */

export default function HeaderSocials() {
  return (
    <>
      <ul className="center__on__row gap-6">
        {social.map((social, socialIndex) => (
          <li key={socialIndex}>
            <SocialButton
              href={social.href}
              imgSource={social.imgSource}
              alt={"Go to " + social.alt}
              title={"Go to " + social.alt}
              width={86}
              className={"social__logo__button relative"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
