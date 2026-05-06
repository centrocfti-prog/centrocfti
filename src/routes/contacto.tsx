import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Centro de Formación Técnica y Criminalística" },
      { name: "description", content: "Contactanos por WhatsApp para inscribirte en los cursos de técnica y criminalística." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-8 py-20">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-azul">Estamos para ayudarte</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-azul-deep">Contactanos</h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          La forma más rápida de inscribirte o consultar es por WhatsApp. Te respondemos en minutos.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <a
          href={whatsappLink("¡Hola! Quiero información sobre los cursos.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl bg-gradient-wsp p-8 text-white shadow-fluo hover:-translate-y-1 transition-all"
        >
          <div className="text-sm uppercase tracking-wider opacity-80">WhatsApp</div>
          <div className="mt-2 text-3xl font-bold">+54 9 11 3927-7756</div>
          <p className="mt-3 opacity-90">Toca para abrir el chat y comenzar tu inscripción.</p>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold">
            Abrir WhatsApp <span className="group-hover:translate-x-1 transition">→</span>
          </span>
        </a>

        <div className="rounded-3xl bg-azul-deep p-8 text-white">
          <h3 className="text-xl font-bold text-celeste">Horario de atención</h3>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>Lunes a Viernes · 9:00 a 20:00 hs</li>
            <li>Sábados · 10:00 a 14:00 hs</li>
          </ul>
          <h3 className="text-xl font-bold text-celeste mt-8">Modalidades</h3>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>· Cursos presenciales</li>
            <li>· Comisiones reducidas</li>
            <li>· Certificación al finalizar</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <WhatsAppButton size="lg" message="¡Hola! Quiero inscribirme en un curso.">
          Inscribirme ahora
        </WhatsAppButton>
      </div>
    </section>
  );
}
