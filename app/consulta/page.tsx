import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import ContactForm from "../ContactForm";
import logo from "../../logoJuntandoPixels.png";

const email = "juntandopixels@gmail.com";

export const metadata: Metadata = {
  title: "Consulta de proyecto | Juntando Pixels",
  description:
    "Formulario de consulta para sitios web, tiendas online, sistemas y soluciones digitales de Juntando Pixels."
};

export default function ConsultaPage() {
  return (
    <main className="consultPage">
      <header className="consultHeader">
        <Link href="/" className="consultBrand" aria-label="Volver a Juntando Pixels">
          <Image src={logo} alt="Juntando Pixels" width={144} height={72} />
        </Link>
        <div className="consultHeaderActions">
          <Link className="button secondaryDark" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Volver
          </Link>
          <a className="button primary" href={`mailto:${email}`}>
            <Mail size={18} aria-hidden="true" />
            Email directo
          </a>
        </div>
      </header>

      <section className="consultHero">
        <div className="container consultGrid">
          <div className="consultCopy">
            <p className="sectionKicker">Consulta de proyecto</p>
            <h1>Contanos qué necesitás y armamos el próximo paso.</h1>
            <p>
              Este formulario sirve para ordenar la idea: tipo de web, tienda,
              contenido, fotos, identidad, hosting y cualquier necesidad técnica.
              Al finalizar queda armado un email listo para enviar a Juntando Pixels.
            </p>
            <div className="consultNotes">
              <span>Sitios institucionales</span>
              <span>Tiendas online</span>
              <span>Sistemas a medida</span>
              <span>Contenido y soporte</span>
            </div>
          </div>

          <ContactForm email={email} />
        </div>
      </section>
    </main>
  );
}
