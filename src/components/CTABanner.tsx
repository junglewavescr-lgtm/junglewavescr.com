import Link from "next/link";

interface CTABannerProps {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

export default function CTABanner({
  title = "Solicita Tu Presupuesto Gratis",
  text = "Contáctanos hoy y transforma tu espacio exterior",
  href = "/contacto",
  label = "Contáctanos Hoy",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-jungle-green-dark to-jungle-green py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-3 text-lg text-white/80">{text}</p>
        <Link
          href={href}
          className="inline-block mt-8 border-2 border-white text-white hover:bg-white hover:text-jungle-green-dark font-semibold px-8 py-3 rounded-md transition-colors"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
