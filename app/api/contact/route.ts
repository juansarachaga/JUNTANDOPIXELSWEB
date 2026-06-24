import { NextResponse } from "next/server";

const fallbackEmail = "juntandopixels@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  needs?: string[];
  timeline?: string;
  message?: string;
  subject?: string;
  body?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendWithResend({
  apiKey,
  fromEmail,
  toEmail,
  clientEmail,
  subject,
  details
}: {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
  clientEmail: string;
  subject: string;
  details: string;
}) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: clientEmail,
      subject,
      text: details
    })
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "No pudimos leer los datos del formulario." },
      { status: 400 }
    );
  }

  const name = clean(payload.name);
  const clientEmail = clean(payload.email);
  const message = clean(payload.message);
  const subject = clean(payload.subject) || `Consulta digital - ${name || "Nuevo proyecto"}`;
  const body = clean(payload.body);

  if (!name || !clientEmail || !message || !isEmail(clientEmail)) {
    return NextResponse.json(
      { ok: false, message: "Revisa nombre, email y detalle del proyecto." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || fallbackEmail;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Juntando Pixels <onboarding@resend.dev>";

  const details =
    body ||
    [
      "Hola Juntando Pixels, quiero consultar por un proyecto.",
      "",
      `Nombre: ${name}`,
      `Email: ${clientEmail}`,
      `Telefono / WhatsApp: ${clean(payload.phone) || "-"}`,
      `Tipo de proyecto: ${clean(payload.projectType) || "-"}`,
      `Necesidades: ${
        Array.isArray(payload.needs) && payload.needs.length
          ? payload.needs.map(clean).filter(Boolean).join(", ")
          : "-"
      }`,
      `Plazo ideal: ${clean(payload.timeline) || "-"}`,
      "",
      "Detalle del proyecto:",
      message
    ].join("\n");

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message:
          "No pudimos enviar la consulta automaticamente. Te dejamos el email armado como respaldo."
      },
      { status: 503 }
    );
  }

  const response = await sendWithResend({
    apiKey,
    fromEmail,
    toEmail,
    clientEmail,
    subject,
    details
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message:
          "No pudimos completar el envio directo. Podes usar el email armado como respaldo."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
