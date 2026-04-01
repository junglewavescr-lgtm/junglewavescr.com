"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    if (!form.get("nombre")) errs.nombre = "El nombre es obligatorio";
    const email = form.get("email") as string;
    if (!email) errs.email = "El correo es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Correo inválido";
    if (!form.get("mensaje")) errs.mensaje = "El mensaje es obligatorio";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-jungle-green/10 border border-jungle-green/20 rounded-xl p-8 text-center" role="alert">
        <svg className="w-12 h-12 text-jungle-green mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="font-heading font-semibold text-lg text-dark">
          ¡Mensaje enviado con éxito!
        </p>
        <p className="text-gray-600 mt-2">Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      <h2 className="font-heading text-2xl font-bold text-dark">Envíanos un Mensaje</h2>

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">
          Nombre Completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          autoComplete="name"
          placeholder="Tu nombre completo"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:border-transparent"
        />
        {errors.nombre && <p className="text-red-600 text-xs mt-1" aria-live="polite">{errors.nombre}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
          Correo Electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:border-transparent"
        />
        {errors.email && <p className="text-red-600 text-xs mt-1" aria-live="polite">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          autoComplete="tel"
          placeholder="+506 0000 0000"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-dark mb-1">
          Servicio de Interés
        </label>
        <select
          id="servicio"
          name="servicio"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:border-transparent"
        >
          <option value="">Seleccione un servicio</option>
          <option value="jardinería">Jardinería</option>
          <option value="piscinas">Mantenimiento de Piscinas</option>
          <option value="ambos">Ambos Servicios</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green focus:border-transparent resize-y"
        />
        {errors.mensaje && <p className="text-red-600 text-xs mt-1" aria-live="polite">{errors.mensaje}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-jungle-green hover:bg-jungle-green-light text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
