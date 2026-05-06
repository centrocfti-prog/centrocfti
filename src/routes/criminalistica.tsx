import { createFileRoute } from "@tanstack/react-router";
import { CourseCard } from "@/components/CourseCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageHeader } from "./tecnica";

export const Route = createFileRoute("/criminalistica")({
  head: () => ({
    meta: [
      { title: "Cursos de Criminalística: Ciberdelitos, Dactiloscopia y Evidencias" },
      { name: "description", content: "Formate en criminalística: ciberdelitos contra niños y adolescentes, dactiloscopia y manejo de evidencias." },
    ],
  }),
  component: CrimiPage,
});

const courses = [
  {
    title: "Ciberdelitos contra niños y adolescentes",
    description: "Detección, prevención e investigación de delitos digitales que afectan a menores.",
    bullets: ["Grooming y sextorsión", "Análisis de redes sociales", "Preservación de evidencia digital", "Marco legal vigente"],
    duration: "3 meses",
    icon: <Shield />,
  },
  {
    title: "Dactiloscopia",
    description: "Técnica de identificación a través de huellas dactilares. Una de las disciplinas más sólidas de la criminalística.",
    bullets: ["Tipologías y puntos característicos", "Revelado de huellas latentes", "Cotejo y peritaje", "Práctica de laboratorio"],
    duration: "4 meses",
    icon: <Finger />,
  },
  {
    title: "Manejo de evidencias",
    description: "Cadena de custodia, recolección y preservación de evidencia en la escena del crimen.",
    bullets: ["Protección de la escena", "Embalaje y rotulado", "Cadena de custodia", "Documentación pericial"],
    duration: "2 meses",
    icon: <Bag />,
  },
];

function CrimiPage() {
  return (
    <div>
      <PageHeader
        kicker="Criminalística"
        title="Formate en disciplinas de alto impacto"
        description="Cursos profesionales orientados a la investigación criminal moderna, con docentes especializados."
        accent="fluo"
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} accent="crimi" />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-crimi text-azul-deep p-10 md:p-14 text-center shadow-fluo">
          <h2 className="text-3xl md:text-4xl font-bold">¿Querés especializarte?</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-80">
            Te asesoramos en el plan de estudios ideal según tu objetivo profesional.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton size="lg" message="¡Hola! Quiero información sobre los cursos de criminalística.">
              Hablar con un asesor
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function Shield() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>; }
function Finger() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M12 11v3a3 3 0 003 3M8 8a4 4 0 018 0v6M5 11a7 7 0 0114 0v3M9 21a4 4 0 01-2-3"/></svg>; }
function Bag() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V5a3 3 0 016 0v3"/></svg>; }
