import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junglewavescr.com"),
  title: {
    default: "Jardinería y Mantenimiento de Piscinas en Uvita | Jungle Waves CR",
    template: "%s | Jungle Waves CR",
  },
  description:
    "Servicios profesionales de jardinería, mantenimiento de piscinas, riego y muros verdes en Uvita, Costa Ballena y Zona Sur de Costa Rica. Más de 10 años de experiencia. Presupuesto gratis.",
  keywords: [
    "jardinería Uvita",
    "mantenimiento de piscinas Uvita",
    "jardinero Costa Ballena",
    "jardinería Costa Rica",
    "riego automático Uvita",
    "muros verdes Costa Rica",
    "Zona Sur Costa Rica",
    "Ojochal jardinería",
    "Dominical jardinería",
  ],
  authors: [{ name: "Jungle Waves CR" }],
  creator: "Jungle Waves CR",
  publisher: "Jungle Waves CR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jardinería y Mantenimiento de Piscinas en Uvita | Jungle Waves CR",
    description:
      "Servicios profesionales de jardinería, mantenimiento de piscinas, riego y muros verdes en Uvita, Costa Ballena y Zona Sur de Costa Rica.",
    url: "https://www.junglewavescr.com",
    siteName: "Jungle Waves CR",
    images: [
      {
        url: "/img/poda-vista-mar.jpg",
        width: 1200,
        height: 630,
        alt: "Jungle Waves CR - Jardinería profesional con vista al mar en Uvita, Costa Rica",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinería y Mantenimiento de Piscinas en Uvita | Jungle Waves CR",
    description:
      "Servicios profesionales de jardinería y piscinas en Uvita, Costa Ballena. Más de 10 años de experiencia.",
    images: ["/img/poda-vista-mar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Ir al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
