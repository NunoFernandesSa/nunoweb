/**
 * @copyright 2025 nunoweb
 * @license Apache-2.0
 */

/**
 * Styles
 */

function LegalMentions() {
  return (
    <section className="section mb-12 text-zinc-300">
      <div className="container">
        <div className="my-6">
          <a
            href="/"
            className="text-zinc-300 hover:text-emerald-400 flex items-center justify-start gap-1"
          >
            <span className="material-symbols-rounded">arrow_back</span>
            retour accueil
          </a>
        </div>

        <h1 className="headline-2">Mentions Légales</h1>

        <section className="my-6">
          <h2 className="headline-3">Éditeur du site</h2>
          <p className="ms-4">
            Nom et prénom : Fernandes Nuno
            <br />
            Adresse : Rue Pierre Curie, 78370 Plaisir
            <br />
            Téléphone : +33 7 71 80 29 21
            <br />
            E-mail : n.fernandes.contact@gmail.com
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Hébergeur du site</h2>
          <p className="ms-4">
            Nom de l&apos;hébergeur : Netlify
            <br />
            Site web :{" "}
            <a href="https://www.netlify.com" target="_blank">
              www.netlify.com
            </a>
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Propriété intellectuelle</h2>
          <p className="ms-4">
            Le contenu de ce site (textes, images, logos, code, etc.) est la
            propriété de Nuno Fernandes sauf mention contraire. Toute
            reproduction, distribution ou utilisation sans autorisation écrite
            est interdite.
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Données personnelles</h2>
          <p className="ms-4">
            Ce site ne collecte aucune donnée personnelle sans votre
            consentement. Si vous utilisez un formulaire de contact, les
            informations fournies (nom, e-mail, message) sont uniquement
            utilisées pour répondre à votre demande et ne sont pas partagées
            avec des tiers.
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Cookies</h2>
          <p className="ms-4">
            Ce site n&apos;utilise pas de cookies à des fins de suivi ou de
            publicité. Si des cookies techniques sont utilisés (par exemple pour
            le fonctionnement du site), ils ne stockent aucune information
            personnelle.
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Responsabilité</h2>
          <p className="ms-4">
            Je m&apos;efforce de fournir des informations exactes et à jour sur
            ce site, mais je ne peux pas garantir l&apos;exactitude ou
            l&apos;exhaustivité du contenu. En cas d&apos;erreur, je vous invite
            à me contacter pour que je puisse corriger.
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Liens externes</h2>
          <p className="ms-4">
            Ce site peut contenir des liens vers des sites tiers. Je ne suis pas
            responsable du contenu ou des pratiques de confidentialité de ces
            sites.
          </p>
        </section>

        <section className="my-6">
          <h2 className="headline-3">Droit applicable</h2>
          <p>
            Ce site est régi par le droit français. En cas de litige, les
            tribunaux compétents seront ceux des Yvelines.
          </p>
        </section>
      </div>
    </section>
  );
}

export default LegalMentions;
