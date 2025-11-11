'use client';

import React from 'react';
import { DashboardLayout } from './layout/DashboardLayout';
import dashboardData from '@/data/dashboard.json';
import type { ProcesoItem } from '@/lib/dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout
      usuario={dashboardData.usuario}
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