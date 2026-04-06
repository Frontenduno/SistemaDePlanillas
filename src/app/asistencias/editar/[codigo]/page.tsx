// src/app/asistencias/editar/[codigo]/page.tsx
import EdicionColaborador from "../../components/EdicionColaborador"; // <-- Cambio aquí
import { use } from "react";

export default function EditarPage({ params }: { params: Promise<{ codigo: string }> }) {
  const resolvedParams = use(params);

  return (
    <main className="w-full min-h-screen bg-white">
      <EdicionColaborador codigo={resolvedParams.codigo} />
    </main>
  );
}