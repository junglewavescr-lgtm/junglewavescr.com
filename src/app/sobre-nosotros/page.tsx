import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Más de 10 años en Uvita",
  description: "Conoce a Jungle Waves CR: equipo profesional con más de 10 años transformando jardines y piscinas en Uvita, Costa Ballena y la Zona Sur de Costa Rica.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros | Jungle Waves CR",
    description: "Más de 10 años transformando espacios exteriores en Uvita, Costa Rica.",
    url: "https://www.junglewavescr.com/sobre-nosotros",
  },
};

export default function SobreNosotros() {
  return (
    <>
      <Hero
        variant="short"
        title="Sobre Nosotros"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sobre Nosotros" },
        ]}
        bgImage="/img/jardinero-flores.jpg"
      />

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/img/uniforme-junglewaves.jpg"
              alt="Trabajador de Jungle Waves con uniforme oficial"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-dark">Nuestra Historia</h2>
            <div className="space-y-4 mt-6 text-gray-600 leading-relaxed">
              {about.history.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-dark">
            Misión, Visión y Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-jungle-green/10 text-jungle-green rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark">Misión</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{about.mission}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pool-blue/10 text-pool-blue rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark">Visión</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{about.vision}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-dark">Valores</h3>
              <ul className="text-gray-600 mt-3 text-sm space-y-1">
                {about.values.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {[
          { src: "/img/riego-pergola.jpg", alt: "Riego profesional de plantas", label: "Dedicación" },
          { src: "/img/muro-verde.jpg", alt: "Instalación de muro verde", label: "Innovación" },
          { src: "/img/poda-vista-mar.jpg", alt: "Trabajo con vista al océano", label: "Excelencia" },
        ].map((item) => (
          <div key={item.label} className="relative h-64 md:h-80 group overflow-hidden">
            <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <Image
          src="/img/jardinero-soplador.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { number: "+500", label: "Proyectos Completados" },
            { number: "+10", label: "Años de Experiencia" },
            { number: "+300", label: "Clientes Satisfechos" },
            { number: "100%", label: "Compromiso" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl md:text-5xl font-bold">{stat.number}</p>
              <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
