import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-azul-deep text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-celeste text-azul-deep">CF</span>
            Centro de Formación
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Capacitación profesional en oficios técnicos y criminalística. Aprendé con
            instructores con experiencia real y certificate.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-celeste">Navegación</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/tecnica" className="hover:text-white">Cursos Técnicos</Link></li>
            <li><Link to="/criminalistica" className="hover:text-white">Criminalística</Link></li>
            <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-celeste">Contacto directo</h4>
          <p className="text-sm text-white/80 mb-4">
            Escribinos por WhatsApp y te asesoramos sin compromiso.
          </p>
          <WhatsAppButton message="¡Hola! Quiero información sobre los cursos.">
            +54 9 11 3927-7756
          </WhatsAppButton>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Centro de Formación en Técnica e Infraestructura · Todos los derechos reservados
      </div>
    </footer>
  );
}
