import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://juntandopixels.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Desarrollo web en La Plata, Buenos Aires | Juntando Pixels",
  description:
    "Desarrollo web, programacion, tiendas online y soluciones digitales en La Plata, Buenos Aires. Creamos sitios rapidos, profesionales y listos para crecer.",
  keywords: [
    "Juntando Pixels",
    "JuntandoPixels",
    "juntando pixels",
    "juntando pixeles",
    "desarrollo web La Plata",
    "desarrollo web la plata buenos aires",
    "programacion La Plata Buenos Aires",
    "programacion la plata buenos aires",
    "programador web La Plata",
    "desarrollador web La Plata",
    "paginas web La Plata",
    "sitios web La Plata",
    "desarrollo web",
    "programacion",
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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Juntando Pixels | Desarrollo web en La Plata, Buenos Aires",
    description:
      "Desarrollo web, programacion, eCommerce y soluciones digitales para empresas y profesionales de La Plata, Buenos Aires.",
    url: siteUrl,
    siteName: "Juntando Pixels",
    type: "website",
    locale: "es_AR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
