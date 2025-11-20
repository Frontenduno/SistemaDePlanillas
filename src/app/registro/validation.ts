import { z } from 'zod';

// Personal data form schema
export const personalSchema = z.object({
  nombre: z.string().min(1, 'Nombre requerido'),
  apellido: z.string().min(1, 'Apellido requerido'),
  segundoApellido: z.string().min(1, 'Segundo apellido requerido'),
  tipoDocumento: z.string().min(1, 'Tipo de documento requerido'),
  numeroDocumento: z.string().min(1, 'Número de documento requerido'),
  genero: z.string().min(1, 'Género requerido'),
  estadoCivil: z.string().min(1, 'Estado civil requerido'),
  nacionalidad: z.string().min(1, 'Nacionalidad requerida'),
  fechaNacimiento: z.string().refine(v => v && !isNaN(Date.parse(v)), 'Fecha inválida'),
  email: z.string().email('Email inválido'),
  direccion: z.string().min(1, 'Dirección requerida'),
  telefono: z.string().min(6, 'Teléfono inválido'),
  nivelEducativo: z.string().min(1, 'Nivel educativo requerido'),
  profesion: z.string().min(1, 'Profesión requerida'),
});

export type PersonalSchemaType = z.infer<typeof personalSchema>;

// Empleador (work) form schema - initial version
export const empleadorSchema = z.object({
  nombre: z.string().optional(),
  apellidoPaterno: z.string().optional(),
  apellidoMaterno: z.string().optional(),
  numeroDocumento: z.string().optional(),
  tipoDocumento: z.string().optional(),
  fechaVinculacion: z.string().optional(),
  fechaRetiro: z.string().optional(),
  sede: z.string().min(1, 'Sede requerida'),
  area: z.string().min(1, 'Área requerida'),
  turno: z.string().min(1, 'Turno requerido'),
  tipoContrato: z.string().min(1, 'Contrato requerido'),
  tipoPago: z.string().min(1, 'Tipo de pago requerido'),
  ocupacion: z.string().min(1, 'Ocupación requerida'),
  jornadaLaboral: z.string().min(1, 'Jornada requerida'),
  jefeInmediato: z.string().min(1, 'Jefe requerido'),
  horarioLaboralInicio: z.string().min(1, 'Inicio requerido'),
  horarioLaboralFin: z.string().min(1, 'Fin requerido'),
  diasLaborales: z.string().min(1, 'Días laborales requerido'),
  sueldo: z.string().refine(v => !!v && Number(v) > 0, 'Sueldo inválido'),
  formaPago: z.string().min(1, 'Forma de pago requerida'),
  banco: z.string().min(1, 'Banco requerido'),
  numeroCuenta: z.string().min(1, 'Cuenta requerida'),
  fondoPensionario: z.string().optional(),
  tipoAfp: z.string().optional(),
  seguroVida: z.string().optional(),
  horasExtras: z.string().optional(),
  cuspp: z.string().optional(),
  bonificacionesCorporativas: z.string().optional(),
  cts: z.string().optional(),
  gratificacion: z.boolean().optional(),
});

export type EmpleadorSchemaType = z.infer<typeof empleadorSchema>;

// Ejecutivo form schema (simplified sample fields)
export const ejecutivoSchema = z.object({
  empresa: z.string().min(1, 'Empresa requerida'),
  ruc: z.string().min(1, 'RUC requerido'),
  cargo: z.string().min(1, 'Cargo requerido'),
});
export type EjecutivoSchemaType = z.infer<typeof ejecutivoSchema>;

// Obrero form schema
export const obreroSchema = z.object({
  areaTrabajo: z.string().min(1, 'Área requerida'),
  turno: z.string().min(1, 'Turno requerido'),
  salarioHora: z.string().refine(v => !!v && Number(v) > 0, 'Salario inválido'),
});
export type ObreroSchemaType = z.infer<typeof obreroSchema>;
