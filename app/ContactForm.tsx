"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clipboard, Mail, Send } from "lucide-react";

type ContactFormProps = {
  email: string;
};

type MailDraft = {
  subject: string;
  body: string;
  href: string;
};

const projectTypes = [
  "Sitio institucional",
  "Tienda online / eCommerce",
  "Landing page",
  "Sistema a medida",
  "Rediseño o mejoras",
  "Todavía no lo tengo definido"
];

const needs = [
  "Tienda online",
  "Iconografía o identidad visual",
  "Fotos propias",
  "Fotografía profesional",
  "Videos o drones",
  "Textos para la web",
  "Dominio / hosting",
  "Mantenimiento"
];

export default function ContactForm({ email }: ContactFormProps) {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [draft, setDraft] = useState<MailDraft | null>(null);
  const [copied, setCopied] = useState(false);

  function toggleNeed(need: string) {
    setSelectedNeeds((current) =>
      current.includes(need)
        ? current.filter((item) => item !== need)
        : [...current, need]
    );
  }

  async function copyDraft() {
    if (!draft) {
      return;
    }

    await navigator.clipboard.writeText(draft.body);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const clientEmail = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Consulta web - ${name || "Nuevo proyecto"}`;
    const body = [
      "Hola Juntando Pixels, quiero consultar por un proyecto.",
      "",
      `Nombre: ${name || "-"}`,
      `Email: ${clientEmail || "-"}`,
      `Teléfono / WhatsApp: ${phone || "-"}`,
      `Tipo de web: ${projectType || "-"}`,
      `Necesidades: ${selectedNeeds.length ? selectedNeeds.join(", ") : "-"}`,
      `Plazo ideal: ${timeline || "-"}`,
      "",
      "Detalle del proyecto:",
      message || "-",
      "",
      "Enviado desde el formulario de juntandopixels."
    ].join("\n");

    const href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setDraft({ subject, body, href });
    setCopied(false);
    window.location.href = href;
  }

  return (
    <form className="projectForm" id="formulario" onSubmit={handleSubmit}>
      <div className="formHeader">
        <div>
          <span>Consulta guiada</span>
          <h3>Contanos qué necesitás construir</h3>
        </div>
        <Mail size={24} aria-hidden="true" />
      </div>
      <p className="formIntro">
        Completá estos datos y te dejamos el email armado. Si el navegador no abre
        tu correo, vas a poder copiar la consulta con un toque.
      </p>

      <div className="formGrid">
        <label>
          <span>Nombre</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Tipo de web</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Seleccionar
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset>
        <legend>Qué necesitás sumar</legend>
        <div className="needGrid">
          {needs.map((need) => (
            <label className="checkOption" key={need}>
              <input
                type="checkbox"
                checked={selectedNeeds.includes(need)}
                onChange={() => toggleNeed(need)}
              />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Plazo ideal</span>
        <input name="timeline" type="text" placeholder="Ej: este mes, 30 días, sin apuro" />
      </label>

      <label>
        <span>Contanos un poco más</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Objetivo del sitio, páginas necesarias, referencias, si ya tenés logo/fotos, formas de pago, envíos, integraciones..."
          required
        />
      </label>

      <div className="formActions">
        <button className="button primary" type="submit">
          Armar consulta
          <Send size={18} aria-hidden="true" />
        </button>
        <a className="button secondaryDark" href={`mailto:${email}`}>
          {email}
          <Mail size={18} aria-hidden="true" />
        </a>
      </div>

      {draft ? (
        <div className="formResult" aria-live="polite">
          <div className="formResultHeader">
            <CheckCircle2 size={20} aria-hidden="true" />
            <div>
              <strong>Consulta lista para enviar</strong>
              <span>Si no se abrió tu correo, copiá el mensaje y mandalo a {email}.</span>
            </div>
          </div>
          <textarea readOnly value={draft.body} rows={8} aria-label="Consulta generada" />
          <div className="draftActions">
            <a className="button primary" href={draft.href}>
              Abrir email
              <Mail size={18} aria-hidden="true" />
            </a>
            <button className="button secondaryDark" type="button" onClick={copyDraft}>
              {copied ? "Copiado" : "Copiar consulta"}
              <Clipboard size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
