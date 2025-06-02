export default function ModalContent() {
  return (
    <div className="space-y-4">
      {/* Content */}
      <section>
        <h3 className="font-semibold">Website Publisher</h3>
        <p>Name : Fernandes Nuno</p>
        <p>Adress : Rue Pierre Curie, 78370 Plaisir</p>
        <p>Phone : +33 7 71 80 29 21</p>
        <p>E-mail : n.fernandes.contact@gmail.com</p>
      </section>

      <section>
        <h3>Hosting Provider</h3>
        <p>Name : Netlify, Inc.</p>
        <p>Website: www.netlify.com</p>
      </section>

      <section>
        <h3>Intellectual Property</h3>
        <p>
          All content on this site (texts, images, logos, code, etc.) is the
          exclusive property of Nuno Fernandes, unless stated otherwise.
          Unauthorized reproduction, modification, or commercial use is strictly
          prohibited.
        </p>
      </section>

      <section>
        <h3>Personal Data</h3>
        <p>
          This site does not collect personal data without explicit consent.
          Information provided via contact forms (name, email, message) is used
          solely to respond to inquiries and is never shared with third parties.
        </p>
      </section>

      <section>
        <h3>Cookies</h3>
        <p>
          This site uses no tracking or advertising cookies. Any technical
          cookies (essential for functionality) do not store identifiable
          information.
        </p>
      </section>

      <section>
        <h3>Liability</h3>
        <p>
          While I strive to ensure accuracy, I cannot guarantee the completeness
          of the content. To report an error, please contact me via the email
          above.
        </p>
      </section>

      <section>
        <h3>External Links</h3>
        <p>
          Links to third-party sites do not imply endorsement. I am not
          responsible for their content or privacy practices.
        </p>
      </section>

      <section>
        <h3>Governing Law</h3>
        <p>
          This site is governed by French law. Any disputes fall under the
          jurisdiction of Versailles (Yvelines, France).
        </p>
      </section>
    </div>
  );
}
