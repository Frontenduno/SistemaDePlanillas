"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RevisionAsistencia from "./components/RevisionAsistencia";

export default function AsistenciasPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentRole = localStorage.getItem("userRole") || "hr";
    
    // Si es contador, lo enviamos directamente a la ruta de Tareo
    if (currentRole === "contador") {
      router.push("/asistencias/tareo");
    } else {
      // Si es Recursos Humanos, le permitimos ver esta página de resumen
      setMounted(true);
    }
  }, [router]);

  if (!mounted) return null;

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <RevisionAsistencia />
    </main>
  );
}