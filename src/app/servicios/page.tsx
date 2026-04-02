import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { metadata as meta, gardenServices, poolServices } from "@/content/site";

export const metadata: Metadata = {
  title: meta.servicios.title,
  description: meta.servicios.description,
};

export default function Servicios() {
  return (
    <>
      <Hero
        variant="short"
        title="Nuestros Servicios"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios" },
        ]}
        bgImage="/img/jardinero-soplador.jpg"
      />

      {/* Jardinería */}
      <section className="py-20" id="jardinería">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/img/jardinero-soplador.jpg"
              alt="Jardinero profesional realizando mantenimiento"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="w-12 h-1 bg-jungle-green mb-4" />
            <h2 className="font-heading text-3xl font-bold text-dark">
              Servicios de Jardinería
            </h2>
            <p className="text-gray-600 mt-3 mb-8 leading-relaxed">
              Transformamos espacios verdes con soluciones personalizadas que combinan estética,
              funcionalidad y sostenibilidad. Nuestro equipo de expertos se encarga de cada detalle
              para que disfrutes de un jardín impecable durante todo el año.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {gardenServices.map((s) => (
                <ServiceCard key={s.title} {...s} color="green" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Piscinas */}
      <section className="py-20 bg-gray-bg" id="piscinas">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="w-12 h-1 bg-pool-blue mb-4" />
            <h2 className="font-heading text-3xl font-bold text-dark">
              Mantenimiento de Piscinas
            </h2>
            <p className="text-gray-600 mt-3 mb-8 leading-relaxed">
              Mantenemos tu piscina en perfectas condiciones durante todo el año con un servicio
              integral que garantiza agua cristalina, equipos en óptimo funcionamiento y la máxima
              seguridad para tu familia.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {poolServices.map((s) => (
                <ServiceCard key={s.title} {...s} color="blue" />
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/img/poda-piscina.jpg"
              alt="Mantenimiento de setos junto a piscina"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-dark">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-center text-gray-600 mt-3 mb-12">
            Un enfoque sistemático para garantizar resultados excepcionales
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Consulta Gratuita",
              "Evaluación del Espacio",
              "Presupuesto Detallado",
              "Ejecución del Trabajo",
              "Seguimiento",
            ].map((step, i) => (
              <div key={step} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-jungle-green text-white flex items-center justify-center font-heading font-bold text-lg flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-dark text-sm">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
