import { EmpleadoResumen, EmpleadoTareo, ColaboradorDetalle } from "../types";

// Datos de 'pri/page.tsx'
export const empleadosResumen: EmpleadoResumen[] = [
  {
    codigo: "42015030",
    nombre: "Martínez Apolinario, Milagros Del Rocio",
    basico: 850.0,
    diasL: 30,
    diasT: 15,
    faltas: 0,
    hPerm: "1h",
    dPerm: 2,
    tardanza: "1h",
    hTrab: 120,
    he25: 1,
    he35: 1,
  },
  {
    codigo: "9943970",
    nombre: "Huaman Peralta, Manuel Carlos",
    basico: 1000.0,
    diasL: 30,
    diasT: 30,
    faltas: 0,
    hPerm: "1h",
    dPerm: 2,
    tardanza: "1h",
    hTrab: 240,
    he25: 1,
    he35: 1,
  },
  {
    codigo: "10513139",
    nombre: "Duran Tolentino, Alfonso",
    basico: 850.0,
    diasL: 30,
    diasT: 15,
    faltas: 0,
    hPerm: "0h",
    dPerm: 7,
    tardanza: "2h",
    hTrab: 240,
    he25: 2,
    he35: 1,
  },
  {
    codigo: "10771709",
    nombre: "Eguavel Ortiz, Dominga Enma",
    basico: 1000.0,
    diasL: 30,
    diasT: 15,
    faltas: 0,
    hPerm: "2h",
    dPerm: 3,
    tardanza: "4h",
    hTrab: 240,
    he25: 2,
    he35: 1,
  },
  {
    codigo: "28291453",
    nombre: "Acosta Jaime, Johnny",
    basico: 850.0,
    diasL: 30,
    diasT: 20,
    faltas: 0,
    hPerm: "3h",
    dPerm: 0,
    tardanza: "0h",
    hTrab: 232,
    he25: 2,
    he35: 1,
  },
];

// Datos de 'revi/page.tsx'
export const empleadosTareo: EmpleadoTareo[] = [
  {
    codigo: "4236182",
    nombre: "Espinoza Alache Geraldin Alejandra",
    asistencias: [
      { estado: "asistió" },
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236183",
    nombre: "Carrasco Aguilar Jonathan Luis",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "no asistió" },
    ],
  },
  {
    codigo: "4236184",
    nombre: "Cruz Ramos Miguel Angel",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236185",
    nombre: "Dominguez Suarez Jean Jairo",
    asistencias: [
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236186",
    nombre: "Esteban Vilchez Michel Eduardo",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "noasistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236187",
    nombre: "Fasando García Royer Raul",
    asistencias: [
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236188",
    nombre: "Guerrero García Ricky Jampier",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "no asistió" },
    ],
  },
  {
    codigo: "4236189",
    nombre: "Ipanaque Alvarez Ruby Judith",
    asistencias: [
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  // ... puedes agregar el resto si lo necesitas
];

// Datos de 'edi/page.tsx'
export const colaboradorDetalle: ColaboradorDetalle = {
  codigo: "4236182",
  nombreCompleto: "Espinoza Alache Alejandra Melissa",
  edad: "32 años",
  cargo: "Empleada",
  horasTotales: "48 horas",
  foto: "/path/to/photo.jpg",
};
