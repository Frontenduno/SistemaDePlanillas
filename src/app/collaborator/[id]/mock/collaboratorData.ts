export const mockCollaborator = {
  id: 1,
  nombre: "Pedro Iara",
  documento: "L.E / DNI - 374832423",
  fechaNacimiento: "30/07/1982",
  sexo: "Masculino",
  estadoCivil: "Soltero",
  paisEmisor: "Perú",
  nacionalidad: "Perú",
  telefono: "974832423",
  correo: "pedrolara12@gmail.com",
  direccion: "Lima - San Juan de Lurigancho",
  foto: "https://randomuser.me/api/portraits/men/32.jpg",

  // Laborales
  periodoInicio: "01/10/2025",
  periodoFin: "",
  tipoTrabajador: "OBRERO",
  regimenLaboral: "CONSTRUCCION CIVIL",
  categoriaOcupacional: "OBRERO",
  ocupacionCodigo: "314010",
  ocupacionNombre: "TECNICO MECANICO",
  tipoContrato: "POR NECES DEL MERCADO",
  tipoPago: "EFECTIVO",
  periodicidadPago: "MENSUAL",
  remuneracion: "1200.00",
};

// -------------------------------------------------------------
// NUEVO: Mock de asistencia
// -------------------------------------------------------------
export const mockAssistance = [
  {
    entryTime: "8:00 a.m.",
    exitTime: "6:00 p.m.",
    workedDays: 6,
    laborDays: 6,
  },
  {
    entryTime: "8:00 a.m.",
    exitTime: "6:00 p.m.",
    workedDays: 6,
    laborDays: 4,
  },
  {
    entryTime: "8:00 a.m.",
    exitTime: "6:00 p.m.",
    workedDays: 6,
    laborDays: 6,
  },
  {
    entryTime: "8:00 a.m.",
    exitTime: "6:00 p.m.",
    workedDays: 6,
    laborDays: 6,
  },
  {
    entryTime: "8:00 a.m.",
    exitTime: "6:00 p.m.",
    workedDays: 6,
    laborDays: 6,
  },
];

// -------------------------------------------------------------
// NUEVO: Mock de vacaciones
// -------------------------------------------------------------
export const mockVacations = [
  {
    startDate: "21-02-2025",
    endDate: "21-03-2025",
    days: "20 días",
    type: "Legales",
    approved: true,
    approvedBy: "hurtado, felipe",
  },
  {
    startDate: "21-02-2025",
    endDate: "21-03-2025",
    days: "20 días",
    type: "Adelanto",
    approved: true,
    approvedBy: "pedro, martin",
  },
];

// -------------------------------------------------------------
// NUEVO: Mock de Ingresos
// -------------------------------------------------------------
export const mockIngresos = [
  {
    concepto: "Bono por productividad",
    fecha: "12/09/2025",
    importe: 100.0,
  },
  {
    concepto: "Comisión especial",
    fecha: "12/09/2025",
    importe: 50.0,
  },
];

// -------------------------------------------------------------
// NUEVO: Mock de Egresos
// -------------------------------------------------------------
export const mockEgresos = [
  {
    concepto: "Faltas",
    fecha: "12/09/2025",
    importe: 100.0,
  },
  {
    concepto: "AFP",
    fecha: "12/09/2025",
    importe: 50.0,
  },
];

// -------------------------------------------------------------
// NUEVO: Mock de Liquidacion
// -------------------------------------------------------------
export const mockLiquidacion = [
  {
    mes: "2025-01",
    sueldoBruto: "S/.1,200.00",
    sueldoLiquido: "S/.1,304.00",
    aporte: "S/. 350.00",
    horasExtras: "05.hr",
  },
  {
    mes: "2025-02",
    sueldoBruto: "S/.",
    sueldoLiquido: "S/.",
    aporte: "S/.",
    horasExtras: "00.hr",
  },
  {
    mes: "2025-03",
    sueldoBruto: "S/.",
    sueldoLiquido: "S/.",
    aporte: "S/.",
    horasExtras: "00.hr",
  },
  {
    mes: "2025-01",
    sueldoBruto: "S/.",
    sueldoLiquido: "S/.",
    aporte: "S/.",
    horasExtras: "00.hr",
  },
  {
    mes: "2025-01",
    sueldoBruto: "S/.",
    sueldoLiquido: "S/.",
    aporte: "S/.",
    horasExtras: "00.hr",
  },
];
