import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  variant: "full" | "short";
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  showLogo?: boolean;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  bgImage?: string;
}

export default function Hero({
  variant,
  title,
  subtitle,
  breadcrumb,
  showLogo,
  cta1,
  cta2,
  bgImage = "/img/poda-vista-mar.jpg",
}: HeroProps) {
  const isShort = variant === "short";

  return (
    <section
      className={`relative flex items-center justify-center text-white ${
        isShort ? "min-h-[300px] pt-16" : "min-h-screen"
      }`}
    >
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {showLogo && (
          <Image
            src="/img/logo-negro.jpg"
            alt="Jungle Waves"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-lg"
          />
        )}
        <h1
          className={`font-heading font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
            isShort ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">{subtitle}</p>
        )}

        {(cta1 || cta2) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {cta1 && (
              <Link
                href={cta1.href}
                className="inline-block bg-jungle-green hover:bg-jungle-green-light text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                {cta1.label}
              </Link>
            )}
            {cta2 && (
              <Link
                href={cta2.href}
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-dark font-semibold px-8 py-3 rounded-md transition-colors backdrop-blur-sm bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              >
                {cta2.label}
              </Link>
            )}
          </div>
        )}

        {breadcrumb && (
          <nav className="mt-4" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-300">
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
