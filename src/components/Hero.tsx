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
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {showLogo && (
            <Image
              src="/img/logo-negro.jpg"
              alt="Jungle Waves"
              width={110}
              height={110}
              className="mx-auto mb-6 rounded-lg"
            />
          )}

          <h1
            className={`font-heading font-extrabold text-white ${
              isShort ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"
            }`}
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.8), 0 8px 48px rgba(0,0,0,0.6)" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-5 text-lg md:text-xl font-medium text-white max-w-xl mx-auto"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 3px 16px rgba(0,0,0,0.8)" }}
            >
              {subtitle}
            </p>
          )}

          {(cta1 || cta2) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {cta1 && (
                <Link
                  href={cta1.href}
                  className="inline-block bg-white text-black hover:bg-gray-200 font-bold px-9 py-3 rounded-lg transition-colors"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                >
                  {cta1.label}
                </Link>
              )}
              {cta2 && (
                <Link
                  href={cta2.href}
                  className="inline-block font-bold px-9 py-3 rounded-lg transition-colors text-white hover:bg-white hover:text-black"
                  style={{
                    border: "2px solid #ffffff",
                    background: "rgba(0,0,0,0.45)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                  }}
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
