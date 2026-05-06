import { WhatsAppButton } from "./WhatsAppButton";

interface Props {
  title: string;
  description: string;
  bullets: string[];
  duration?: string;
  icon: React.ReactNode;
  accent: "tecnica" | "crimi";
}

export function CourseCard({ title, description, bullets, duration, icon, accent }: Props) {
  const isTecnica = accent === "tecnica";
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white border border-border shadow-card-soft hover:-translate-y-1 transition-all duration-300">
      <div className={`h-2 w-full ${isTecnica ? "bg-gradient-tecnica" : "bg-gradient-crimi"}`} />
      <div className="p-6 md:p-7">
        <div
          className={`inline-grid h-14 w-14 place-items-center rounded-xl mb-4 ${
            isTecnica ? "bg-gradient-tecnica text-white shadow-rojo" : "bg-gradient-crimi text-azul-deep shadow-fluo"
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-azul-deep">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <ul className="mt-4 space-y-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className={`mt-1 h-2 w-2 rounded-full ${isTecnica ? "bg-rojo" : "bg-verde-fluo"}`} />
              <span className="text-azul-deep/80">{b}</span>
            </li>
          ))}
        </ul>

        {duration && (
          <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
            Duración: <span className="font-semibold text-azul-deep">{duration}</span>
          </p>
        )}

        <div className="mt-6">
          <WhatsAppButton
            size="sm"
            variant={isTecnica ? "rojo" : "fluo"}
            message={`¡Hola! Me interesa el curso de ${title}. ¿Me podés dar más información?`}
          >
            Quiero inscribirme
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
