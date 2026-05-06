import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Centro de Formación Técnica y Criminalística" },
      { name: "description", content: "Contactanos por WhatsApp para inscribirte en los cursos de técnica y criminalística." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(80, "Máximo 80 caracteres"),
  email: z.string().trim().email("Email inválido").max(160, "Máximo 160 caracteres"),
  consulta: z.string().trim().min(5, "Contanos un poco más").max(800, "Máximo 800 caracteres"),
});

function ContactPage() {
  const [form, setForm] = useState({ nombre: "", email: "", consulta: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const { nombre, email, consulta } = result.data;
    const message = `¡Hola! Soy ${nombre} (${email}).\n\nConsulta: ${consulta}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-5xl px-4 md:px-8 py-20">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-azul">Estamos para ayudarte</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-azul-deep">Contactanos</h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Completá el formulario y te llevamos directo a WhatsApp con tu consulta lista para enviar.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-white border border-border p-8 shadow-sm space-y-5"
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              placeholder="Tu nombre y apellido"
              maxLength={80}
              autoComplete="name"
            />
            {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tucorreo@ejemplo.com"
              maxLength={160}
              autoComplete="email"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="consulta">Consulta</Label>
            <Textarea
              id="consulta"
              value={form.consulta}
              onChange={(e) => setForm({ ...form, consulta: e.target.value })}
              placeholder="Contanos qué curso te interesa o qué necesitás saber"
              maxLength={800}
              rows={5}
            />
            {errors.consulta && <p className="text-sm text-destructive">{errors.consulta}</p>}
          </div>

          <Button type="submit" className="w-full bg-gradient-wsp text-white hover:opacity-95">
            Enviar por WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Se abrirá WhatsApp con tu mensaje listo para enviar.
          </p>
        </form>

        <div className="rounded-3xl bg-azul-deep p-8 text-white">
          <h3 className="text-xl font-bold text-celeste">WhatsApp directo</h3>
          <p className="mt-2 text-white/85">+54 9 11 3927-7756</p>

          <h3 className="text-xl font-bold text-celeste mt-8">Horario de atención</h3>
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

          <div className="mt-8">
            <WhatsAppButton size="lg" message="¡Hola! Quiero información sobre los cursos.">
              Chatear ahora
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
