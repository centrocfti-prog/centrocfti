import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroTecnica from "@/assets/hero-tecnica.jpg";
import heroCrimi from "@/assets/hero-crimi.jpg";
import logoCfti from "@/assets/logo-cfti.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro de Formación Técnica y Criminalística | Cursos con salida laboral" },
      { name: "description", content: "Capacitate en oficios técnicos y criminalística con instructores expertos. Inscribite hoy por WhatsApp." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--celeste) 0, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-celeste/30 backdrop-blur border border-white/20 text-white uppercase tracking-wider">
              Inscripciones abiertas 2026
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Aprendé un <span className="text-celeste">oficio</span> que cambia tu futuro
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Cursos prácticos de <strong>técnica</strong> e <strong>infraestructura</strong> y de
              <strong> criminalística</strong>. Instructores con experiencia real, certificación y
              salida laboral.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" message="¡Hola! Quiero información sobre los cursos disponibles.">
                Hablar por WhatsApp
              </WhatsAppButton>
              <Link
                to="/tecnica"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition"
              >
                Ver cursos →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <Stat n="+15" l="Cursos disponibles" />
              <Stat n="+1.500" l="Alumnos formados" />
              <Stat n="100%" l="Práctica real" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-celeste/20 blur-2xl rounded-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src={heroTecnica}
                alt="Instructor técnico trabajando en aire acondicionado"
                className="rounded-2xl shadow-glow animate-float object-cover h-64 w-full"
                width={640} height={640}
              />
              <img
                src={heroCrimi}
                alt="Análisis dactiloscópico en laboratorio criminalístico"
                className="rounded-2xl shadow-fluo object-cover h-64 w-full mt-10 animate-float"
                style={{ animationDelay: "1.2s" }}
                width={640} height={640}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TWO TRACKS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-azul">Dos áreas de formación</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-azul-deep">
            Elegí el camino que mejor se adapta a vos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Capacitación intensiva, práctica y con docentes que trabajan en el rubro.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <TrackCard
            kind="tecnica"
            title="Técnica e Infraestructura"
            description="Electricidad, planos, refrigeración y climatización vehicular. Oficios con alta demanda."
            tags={["Electricidad", "Planos", "Aires acondicionados", "Aire automotor", "Heladeras"]}
            to="/tecnica"
          />
          <TrackCard
            kind="crimi"
            title="Criminalística"
            description="Investigación, evidencia y delitos digitales. Formate en disciplinas de alto impacto social."
            tags={["Ciberdelitos contra niños y adolescentes", "Dactiloscopia", "Manejo de evidencias"]}
            to="/criminalistica"
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-azul-deep text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Práctica real", d: "Trabajás con equipos reales desde la primera clase.", c: "bg-celeste" },
              { t: "Certificación", d: "Obtené tu certificado al finalizar cada curso.", c: "bg-azul" },
              { t: "Instructores expertos", d: "Profesionales en actividad en el rubro.", c: "bg-gradient-tecnica" },
              { t: "Salida laboral", d: "Te orientamos para que empieces a trabajar rápido.", c: "bg-gradient-crimi" },
            ].map((f) => (
              <div key={f.t} className="bg-white rounded-2xl p-6 shadow-card-soft border border-border">
                <div className={`h-10 w-10 rounded-lg mb-4 ${f.c}`} />
                <h3 className="font-bold text-azul-deep">{f.t}</h3>
                <p className="text-sm mt-2 text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 md:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-10 md:p-14 text-center shadow-glow">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-celeste/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amarillo/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">¿Estás listo para empezar?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Escribinos por WhatsApp y te contamos los cursos, horarios y formas de pago.
            </p>
            <div className="mt-7 flex justify-center">
              <WhatsAppButton size="lg" message="¡Hola! Quiero inscribirme en un curso.">
                Inscribirme ahora
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-celeste">{n}</div>
      <div className="text-xs uppercase tracking-wider text-white/70">{l}</div>
    </div>
  );
}

function TrackCard({
  kind, title, description, tags, to,
}: { kind: "tecnica" | "crimi"; title: string; description: string; tags: string[]; to: "/tecnica" | "/criminalistica" }) {
  const isTec = kind === "tecnica";
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-3xl p-8 md:p-10 text-white transition-all duration-300 hover:-translate-y-2 ${
        isTec ? "bg-gradient-tecnica shadow-rojo" : "bg-gradient-crimi shadow-fluo"
      } ${!isTec ? "text-azul-deep" : ""}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
      <h3 className="relative text-2xl md:text-3xl font-bold">{title}</h3>
      <p className={`relative mt-3 ${isTec ? "text-white/85" : "text-azul-deep/80"}`}>{description}</p>
      <ul className="relative mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${isTec ? "bg-white/15 border border-white/20" : "bg-azul-deep/10 border border-azul-deep/20"}`}>
            {t}
          </li>
        ))}
      </ul>
      <div className="relative mt-7 inline-flex items-center gap-2 font-semibold">
        Ver cursos <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
