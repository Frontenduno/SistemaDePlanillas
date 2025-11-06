'use client';

import { TopSection } from './TopSection';
import { BottomSection } from './BottomSection';
import type {
  Usuario,
  Trabajador,
  Cumpleanos,
  ColaboradoresStats,
  AsistenciasStats,
  VacacionesStats,
  ProcesoItem
} from '@/lib/dashboard';

interface DashboardLayoutProps {
  usuario: Usuario;
  trabajadoresNuevos: Trabajador[];
  cumpleanos: Cumpleanos[];
  colaboradores: ColaboradoresStats;
  asistencias: AsistenciasStats;
  vacaciones: VacacionesStats;
  procesos: ProcesoItem[];
}

export function DashboardLayout({
  usuario,
  trabajadoresNuevos,
  cumpleanos,
  colaboradores,
  asistencias,
  vacaciones,
  procesos
}: DashboardLayoutProps) {
  return (
    <div className="grid grid-rows-2 gap-4 p-6">
      <TopSection
        usuario={usuario}
        trabajadoresNuevos={trabajadoresNuevos}
        cumpleanos={cumpleanos}
        colaboradores={colaboradores}
        asistencias={asistencias}
        vacaciones={vacaciones}
      />
      <BottomSection procesos={procesos} />
    </div>
  );
}
