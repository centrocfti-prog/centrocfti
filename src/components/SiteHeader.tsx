import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import logoCfti from "@/assets/logo-cfti.webp";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/tecnica", label: "Cursos Técnicos" },
  { to: "/criminalistica", label: "Criminalística" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-azul-deep">
          <img src={logoCfti} alt="C.F.T.I - Centro de Formación de Técnica e Infraestructura" className="h-11 w-11 object-contain" />
          <span className="hidden sm:inline text-base leading-tight">
            C.F.T.I<br />
            <span className="text-xs font-medium text-muted-foreground">Técnica & Criminalística</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-azul-deep hover:bg-celeste/30 transition-colors"
              activeProps={{ className: "bg-azul-deep text-white hover:bg-azul-deep" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" message="¡Hola! Quiero información sobre los cursos.">
            Inscribirme
          </WhatsAppButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-md hover:bg-celeste/30"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg font-medium text-azul-deep hover:bg-celeste/30"
                activeProps={{ className: "bg-azul-deep text-white" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <WhatsAppButton size="md" message="¡Hola! Quiero información sobre los cursos." className="mt-2">
              Inscribirme por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
