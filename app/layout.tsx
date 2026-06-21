import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://juntandopixels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Aplicaciones y desarrollo web en La Plata | Juntando Pixels",
  description:
    "Desarrollo de aplicaciones, productos digitales personalizados, sitios web y tiendas online en La Plata, Buenos Aires.",
  keywords: [
    "Juntando Pixels",
    "JuntandoPixels",
    "juntando pixels",
    "juntando pixeles",
    "desarrollo web La Plata",
    "aplicaciones web La Plata",
    "desarrollo de aplicaciones La Plata",
    "productos digitales personalizados",
    "productos digitales a medida",
    "software personalizado La Plata",
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
    "aplicaciones a medida",
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
      "Juntando Pixels | Aplicaciones y desarrollo web en La Plata",
    description:
      "Desarrollo de aplicaciones, productos digitales personalizados, eCommerce y sitios web para empresas y profesionales.",
    url: siteUrl,
    siteName: "Juntando Pixels",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Juntando Pixels - Aplicaciones, desarrollo web y productos digitales"
      }
    ],
    type: "website",
    locale: "es_AR"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Juntando Pixels | Aplicaciones y desarrollo web en La Plata",
    description:
      "Desarrollo de aplicaciones, productos digitales personalizados, eCommerce y sitios web para empresas y profesionales.",
    images: ["/opengraph-image.png"]
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
