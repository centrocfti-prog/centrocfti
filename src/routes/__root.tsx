import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-azul-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-azul-deep px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">No pudimos cargar esta página</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Hubo un problema. Probá nuevamente o volvé al inicio.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-azul-deep px-5 py-2.5 text-sm font-semibold text-white"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold">
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Centro de Formación en Técnica e Infraestructura | Cursos Técnicos y Criminalística" },
      { name: "description", content: "Cursos profesionales de electricidad, refrigeración, planos, ciberdelitos, dactiloscopia y más. Inscribite por WhatsApp." },
      { property: "og:title", content: "Centro de Formación en Técnica e Infraestructura | Cursos Técnicos y Criminalística" },
      { property: "og:description", content: "Cursos profesionales de electricidad, refrigeración, planos, ciberdelitos, dactiloscopia y más. Inscribite por WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Centro de Formación en Técnica e Infraestructura | Cursos Técnicos y Criminalística" },
      { name: "twitter:description", content: "Cursos profesionales de electricidad, refrigeración, planos, ciberdelitos, dactiloscopia y más. Inscribite por WhatsApp." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66e6c657-2250-4027-b255-c52ec69397a0/id-preview-b83e9b74--366d89ec-156a-47b4-b883-c3d72c2b62df.lovable.app-1778161610681.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66e6c657-2250-4027-b255-c52ec69397a0/id-preview-b83e9b74--366d89ec-156a-47b4-b883-c3d72c2b62df.lovable.app-1778161610681.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}
