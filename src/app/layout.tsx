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
  title: "Jungle Waves | Jardinería y Mantenimiento de Piscinas",
  description:
    "Jungle Waves - Servicios profesionales de jardinería y mantenimiento de piscinas en Costa Rica. Transformamos tu espacio exterior.",
  openGraph: {
    title: "Jungle Waves | Jardinería y Mantenimiento de Piscinas",
    description:
      "Servicios profesionales de jardinería y mantenimiento de piscinas en Costa Rica.",
    type: "website",
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
