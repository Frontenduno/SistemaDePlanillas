"use client";

import { useState } from "react";
// Importamos nuestros 3 componentes
import RevisionAsistencia from "./components/RevisionAsistencia";
import AsistenciasTareo from "./components/AsistenciasTareo";
import EdicionColaborador from "./components/EdicionColaborador";

// Tipo para controlar en qué pantalla estamos
type Vista = "RESUMEN" | "TAREO" | "EDICION";

export default function AsistenciasPage() {
  // Estado de la vista actual
  const [vista, setVista] = useState<Vista>("RESUMEN");

  // Estado para saber a quién estamos editando
  const [codigoEdicion, setCodigoEdicion] = useState<string | null>(null);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* VISTA 1: TABLA RESUMEN (Antes 'pri') */}
      {vista === "RESUMEN" && (
        <RevisionAsistencia onNavigateToRevi={() => setVista("TAREO")} />
      )}

      {/* VISTA 2: TAREO (Antes 'revi') */}
      {vista === "TAREO" && (
        <AsistenciasTareo
          onBack={() => setVista("RESUMEN")}
          onEdit={(codigo) => {
            setCodigoEdicion(codigo);
            setVista("EDICION");
          }}
        />
      )}

      {/* VISTA 3: EDICIÓN (Antes 'edi') */}
      {vista === "EDICION" && (
        <EdicionColaborador
          codigo={codigoEdicion}
          onBack={() => setVista("TAREO")}
        />
      )}
    </main>
  );
}
