export interface EmpleadoResumen {
  codigo: string;
  nombre: string;
  basico: number;
  diasL: number;
  diasT: number;
  faltas: number;
  hPerm: string;
  dPerm: number;
  tardanza: string;
  hTrab: number;
  he25: number;
  he35: number;
}

export interface Asistencia {
  estado: string;
}

export interface EmpleadoTareo {
  codigo: string;
  nombre: string;
  asistencias: Asistencia[];
}

export interface ColaboradorDetalle {
  codigo: string;
  nombreCompleto: string;
  edad: string;
  cargo: string;
  horasTotales: string;
  foto: string;
}
