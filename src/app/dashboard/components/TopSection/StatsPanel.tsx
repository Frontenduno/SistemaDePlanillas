import { ColaboradoresCard } from '../StatsPanel/ColaboradoresCard';
import { AsistenciasCard } from '../StatsPanel/AsistenciasCard';
import { VacacionesCard } from '../StatsPanel/VacacionesCard';
import type { ColaboradoresStats, AsistenciasStats, VacacionesStats } from '@/lib/dashboard';

interface StatsPanelProps {
  colaboradores: ColaboradoresStats;
  asistencias: AsistenciasStats;
  vacaciones: VacacionesStats;
}

export function StatsPanel({ colaboradores, asistencias, vacaciones }: StatsPanelProps) {
  return (
    <div className="col-start-3 col-end-4 grid grid-rows-3 gap-2">
      <ColaboradoresCard data={colaboradores} />
      <AsistenciasCard data={asistencias} />
      <VacacionesCard data={vacaciones} />
    </div>
  );
}
