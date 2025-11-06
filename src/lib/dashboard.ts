export interface Trabajador {
  nombre: string;
  apellido: string;
  imagen: string | null;
}

export interface Cumpleanos {
  nombre: string;
  apellido: string;
  fecha: string;
  imagen: string | null;
}

export interface Usuario {
  nombre: string;
  apellido: string;
  puesto: string;
  fechaNacimiento: string;
  edad: number;
  imagen: string | null;
}

export interface ColaboradoresStats {
  trabajadores: number;
  trabajadoresNuevos: number;
}

export interface AsistenciasStats {
  diasNoTrabajados: number;
  diasJustificados: number;
}

export interface VacacionesStats {
  diasTomados: number;
  diasPendientes: number;
}

export interface ProcesoItem {
  id: string;
  mes: string;
  icono: 'red' | 'green' | 'blue';
  contenido?: {
    tipo: 'asistencias';
    diasNoTrabajados: number;
    diasJustificados: number;
  }[];
}

export interface ChartDataPoint {
  mes: string;
  value: number;
}
