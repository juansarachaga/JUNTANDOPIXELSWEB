import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juntando Pixels | Desarrollo web, eCommerce y soluciones digitales",
  description:
    "Creamos sitios web, tiendas online, soluciones digitales y contenido visual para empresas, comercios y profesionales. Desarrollo desde La Plata, Argentina.",
  keywords: [
    "Juntando Pixels",
    "desarrollo web",
    "eCommerce",
    "tiendas online",
    "software a medida",
    "diseño UI UX",
    "fotografía",
    "drones",
    "contenido audiovisual",
    "coworking creativo",
    "La Plata",
    "Juan Pablo Saráchaga"
  ],
  authors: [{ name: "Juan Pablo Saráchaga" }],
  creator: "Juan Pablo Saráchaga",
  openGraph: {
    title: "Juntando Pixels",
    description:
      "Desarrollo web, eCommerce, software y contenido digital.",
    type: "website",
    locale: "es_AR"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
