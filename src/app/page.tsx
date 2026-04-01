import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import CTABanner from "@/components/CTABanner";
import { hero } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero
        variant="full"
        title={hero.title}
        subtitle={hero.subtitle}
        showLogo
        cta1={hero.cta1}
        cta2={hero.cta2}
        bgImage="/img/poda-vista-mar.jpg"
      />

      {/* Jardinería Feature */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/img/jardinero-soplador.jpg"
              alt="Jardinero profesional realizando mantenimiento de jardín"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-jungle-green font-semibold text-sm uppercase tracking-wider">
              Jardinería Profesional
            </span>
            <div className="w-12 h-0.5 bg-jungle-green mt-2 mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Jardines que Inspiran
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Cada jardín es una obra de arte. Nuestro equipo de expertos transforma espacios
              exteriores en refugios naturales, combinando diseño paisajístico de vanguardia con
              técnicas sostenibles que respetan el medio ambiente.
            </p>
            <Link
              href="/servicios#jardinería"
              className="inline-block mt-6 bg-jungle-green hover:bg-jungle-green-light text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Descubrir Más
            </Link>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-dark">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mt-3 mb-12">
            Soluciones integrales para tu espacio exterior
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: "/img/riego-pergola.jpg",
                alt: "Riego profesional de plantas en pérgola",
                title: "Riego Especializado",
                text: "Sistemas de riego inteligentes que mantienen tus plantas hidratadas y saludables durante todo el año.",
              },
              {
                src: "/img/jardinero-flores.jpg",
                alt: "Cuidado de flores tropicales",
                title: "Cuidado Floral",
                text: "Selección, siembra y mantenimiento de flores tropicales que transforman tu jardín en un paraíso.",
              },
              {
                src: "/img/muro-verde.jpg",
                alt: "Instalación de muro verde tropical",
                title: "Muros Verdes",
                text: "Diseño e instalación de jardines verticales que aportan vida y frescura a cualquier espacio.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image src={card.src} alt={card.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-dark">{card.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{card.text}</p>
                  <Link
                    href="/servicios#jardinería"
                    className="inline-flex items-center gap-1 text-jungle-green font-medium text-sm mt-4 hover:gap-2 transition-all"
                  >
                    Ver más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piscinas Feature */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-pool-blue-light font-semibold text-sm uppercase tracking-wider">
            Mantenimiento de Piscinas
          </span>
          <div className="w-12 h-0.5 bg-pool-blue mx-auto mt-2 mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Piscinas Cristalinas</h2>
          <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Tu piscina merece un cuidado excepcional. Ofrecemos mantenimiento integral que garantiza
            agua cristalina, equipos en óptimo funcionamiento y un entorno impecable durante todo el
            año.
          </p>
          <Link
            href="/servicios#piscinas"
            className="inline-block mt-8 bg-pool-blue hover:bg-pool-blue-light text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Descubrir Más
          </Link>
        </div>
      </section>

      {/* Image Band */}
      <section className="relative h-64 md:h-80">
        <Image
          src="/img/poda-vista-mar.jpg"
          alt="Mantenimiento de jardín con vista al océano"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-heading text-xl md:text-2xl italic">
              &ldquo;Transformamos espacios ordinarios en experiencias extraordinarias&rdquo;
            </p>
            <span className="block mt-3 text-sm text-gray-300">— Jungle Waves</span>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <CTABanner />
    </>
  );
}
