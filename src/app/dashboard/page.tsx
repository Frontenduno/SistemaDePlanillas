// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { DashboardLayout } from "./layout/DashboardLayout";
import dashboardData from "@/data/dashboard.json";
import type { ProcesoItem } from "@/lib/dashboard";

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(localStorage.getItem('userRole') || 'hr');
  }, []);

  // Modificamos el usuario dinámicamente según el rol
  const usuarioModificado = {
    ...dashboardData.usuario,
    puesto: role === 'contador' ? 'Contador General' : 'Recursos Humanos'
  };

  // No renderizar hasta saber el rol (evita parpadeos de hidratación)
  if (!role) return null;

  return (
    <DashboardLayout
      usuario={usuarioModificado}
      trabajadoresNuevos={dashboardData.trabajadoresNuevos}
      cumpleanos={dashboardData.cumpleanos}
      colaboradores={dashboardData.colaboradores}
      asistencias={dashboardData.asistencias}
      vacaciones={dashboardData.vacaciones}
      procesos={dashboardData.procesos as ProcesoItem[]}
      trabajadoresData={dashboardData.trabajadoresData}
      gastosData={dashboardData.gastosData}
      horasData={dashboardData.horasData}
      liquidacionesData={dashboardData.liquidacionesData}
    />
  );
}