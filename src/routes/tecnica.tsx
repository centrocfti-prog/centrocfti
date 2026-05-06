import { createFileRoute } from "@tanstack/react-router";
import { CourseCard } from "@/components/CourseCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/tecnica")({
  head: () => ({
    meta: [
      { title: "Cursos Técnicos: Electricidad, Aires y Refrigeración" },
      { name: "description", content: "Cursos prácticos de electricidad, planos, aires acondicionados, aire automotor y heladeras. Inscribite por WhatsApp." },
    ],
  }),
  component: TecnicaPage,
});

const courses = [
  {
    title: "Electricidad domiciliaria e industrial",
    description: "Aprendé a instalar, medir y reparar instalaciones eléctricas con seguridad.",
    bullets: ["Tableros y circuitos", "Mediciones y herramientas", "Normativa vigente", "Práctica con paneles reales"],
    duration: "4 meses",
    icon: <Bolt />,
  },
  {
    title: "Manejo e interpretación de planos",
    description: "Leé y dibujá planos eléctricos, civiles y de instalaciones como un profesional.",
    bullets: ["Simbología técnica", "Escalas y cotas", "AutoCAD básico", "Planos eléctricos y sanitarios"],
    duration: "2 meses",
    icon: <Plans />,
  },
  {
    title: "Reparación de aires acondicionados",
    description: "Instalación, mantenimiento y reparación de equipos split y centrales.",
    bullets: ["Carga de gas", "Detección de fallas", "Instalación split", "Mantenimiento preventivo"],
    duration: "3 meses",
    icon: <Snow />,
  },
  {
    title: "Aire acondicionado automotor",
    description: "Especializate en climatización vehicular: un oficio con altísima demanda.",
    bullets: ["Sistemas R134a y R1234yf", "Compresores y evaporadores", "Diagnóstico con scanner", "Sellado y carga"],
    duration: "2 meses",
    icon: <Car />,
  },
  {
    title: "Heladeras familiares y comerciales",
    description: "Reparación integral de equipos de frío domésticos y comerciales.",
    bullets: ["Ciclo de refrigeración", "Soldadura y cañerías", "Cambio de compresor", "Cámaras y exhibidoras"],
    duration: "3 meses",
    icon: <Fridge />,
  },
];

function TecnicaPage() {
  return (
    <div>
      <PageHeader
        kicker="Técnica e Infraestructura"
        title="Cursos técnicos con salida laboral"
        description="Formación intensiva con prácticas reales en taller. Aprendé un oficio rentable y trabajá por tu cuenta o en empresas."
        accent="rojo"
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} accent="tecnica" />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-tecnica text-white p-10 md:p-14 text-center shadow-rojo">
          <h2 className="text-3xl md:text-4xl font-bold">Reservá tu cupo hoy</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Los cursos tienen cupos limitados para garantizar la práctica de cada alumno.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton size="lg" variant="ghost" message="¡Hola! Quiero más información sobre los cursos técnicos.">
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PageHeader({
  kicker, title, description, accent,
}: { kicker: string; title: string; description: string; accent: "rojo" | "fluo" }) {
  return (
    <section className={`relative overflow-hidden ${accent === "rojo" ? "bg-gradient-tecnica" : "bg-gradient-crimi"} ${accent === "fluo" ? "text-azul-deep" : "text-white"}`}>
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${accent === "fluo" ? "bg-azul-deep/10 text-azul-deep" : "bg-white/15 backdrop-blur"}`}>
          {kicker}
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        <p className={`mt-4 max-w-2xl text-lg ${accent === "fluo" ? "text-azul-deep/80" : "text-white/85"}`}>{description}</p>
      </div>
    </section>
  );
}

/* Icons */
function Bolt() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z"/></svg>; }
function Plans() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>; }
function Snow() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>; }
function Car() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M5 17h14M3 17V11l3-6h12l3 6v6M7 17v2M17 17v2"/><circle cx="7" cy="14" r="1.5"/><circle cx="17" cy="14" r="1.5"/></svg>; }
function Fridge() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14M9 6v2M9 14v3"/></svg>; }
