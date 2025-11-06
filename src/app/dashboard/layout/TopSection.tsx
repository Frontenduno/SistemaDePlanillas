import { UserCard } from '../components/TopSection/UserCard';
import { NewEmployees } from '../components/TopSection/NewEmployees';
import { Birthdays } from '../components/TopSection/Birthdays';
import { StatsPanel } from '../components/TopSection/StatsPanel';
import type {
  Usuario,
  Trabajador,
  Cumpleanos,
  ColaboradoresStats,
  AsistenciasStats,
  VacacionesStats
} from '@/lib/dashboard';

interface TopSectionProps {
  usuario: Usuario;
  trabajadoresNuevos: Trabajador[];
  cumpleanos: Cumpleanos[];
  colaboradores: ColaboradoresStats;
  asistencias: AsistenciasStats;
  vacaciones: VacacionesStats;
}

export function TopSection({
  usuario,
  trabajadoresNuevos,
  cumpleanos,
  colaboradores,
  asistencias,
  vacaciones
}: TopSectionProps) {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-3 gap-2 h-[40%]">
      <div className="col-start-1 col-end-2 grid grid-rows-2 grid-col-1 gap-4">
        <UserCard data={usuario} />
        <NewEmployees data={trabajadoresNuevos} />
      </div>

      <div className="col-start-2 col-end-3">
        <Birthdays data={cumpleanos} />
      </div>

      <StatsPanel
        colaboradores={colaboradores}
        asistencias={asistencias}
        vacaciones={vacaciones}
      />
    </div>
  );
}
