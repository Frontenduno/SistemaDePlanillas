import { z } from "zod";

// Schema para familiar en asignación familiar
export const familiarSchema = z.object({
  dni: z.string().min(1, "DNI requerido"),
  nombre: z.string().min(1, "Nombre requerido"),
  apellidoP: z.string().min(1, "Apellido paterno requerido"),
  apellidoM: z.string().min(1, "Apellido materno requerido"),
});

export type FamiliarSchemaType = z.infer<typeof familiarSchema>;

// Función para validar array de familiares
export const validateFamiliares = (
  familiares: FamiliarSchemaType[]
): boolean => {
  return familiares.every(
    (f) =>
      f.dni.trim() !== "" &&
      f.nombre.trim() !== "" &&
      f.apellidoP.trim() !== "" &&
      f.apellidoM.trim() !== ""
  );
};

// Personal data form schema
export const personalSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  apellido: z.string().min(1, "Apellido requerido"),
  segundoApellido: z.string().min(1, "Segundo apellido requerido"),
  tipoDocumento: z.string().min(1, "Tipo de documento requerido"),
  numeroDocumento: z.string().min(1, "Número de documento requerido"),
  genero: z.string().min(1, "Género requerido"),
  estadoCivil: z.string().min(1, "Estado civil requerido"),
  nacionalidad: z.string().min(1, "Nacionalidad requerida"),
  fechaNacimiento: z
    .string()
    // Anotamos explícitamente el tipo del parámetro para evitar `noImplicitAny`
    .refine((v: string) => v && !isNaN(Date.parse(v)), "Fecha inválida"),
  email: z.string().email("Email inválido"),
  direccion: z.string().min(1, "Dirección requerida"),
  telefono: z.string().min(6, "Teléfono inválido"),
  nivelEducativo: z.string().min(1, "Nivel educativo requerido"),
  profesion: z.string().min(1, "Profesión requerida"),
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
  sede: z.string().min(1, "Sede requerida"),
  area: z.string().min(1, "Área requerida"),
  turno: z.string().min(1, "Turno requerido"),
  tipoContrato: z.string().min(1, "Contrato requerido"),
  tipoPago: z.string().min(1, "Tipo de pago requerido"),
  ocupacion: z.string().min(1, "Ocupación requerida"),
  jornadaLaboral: z.string().min(1, "Jornada requerida"),
  jefeInmediato: z.string().min(1, "Jefe requerido"),
  horarioLaboralInicio: z.string().min(1, "Inicio requerido"),
  horarioLaboralFin: z.string().min(1, "Fin requerido"),
  diasLaborales: z.string().min(1, "Días laborales requerido"),
  // `sueldo` llega como string; indicar tipo en el refine para evitar `any`
  sueldo: z
    .string()
    .refine((v: string) => !!v && Number(v) > 0, "Sueldo inválido"),
  formaPago: z.string().min(1, "Forma de pago requerida"),
  banco: z.string().min(1, "Banco requerido"),
  numeroCuenta: z.string().min(1, "Cuenta requerida"),
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

// Ejecutivo form schema
export const ejecutivoSchema = z.object({
  nombre: z.string().optional(),
  apellidoPaterno: z.string().optional(),
  apellidoMaterno: z.string().optional(),
  numeroDocumento: z.string().optional(),
  tipoDocumento: z.string().optional(),
  fechaVinculacion: z.string().optional(),
  fechaRetiro: z.string().optional(),
  puesto: z.string().min(1, "Puesto requerido"),
  departamento: z.string().min(1, "Departamento requerido"),
  nivelJerarquico: z.string().min(1, "Nivel jerárquico requerido"),
  supervisorDirecto: z.string().min(1, "Supervisor requerido"),
  proyectosEstrategicos: z.string().min(1, "Proyectos estratégicos requerido"),
  jornadaLaboral: z.string().min(1, "Jornada laboral requerida"),
  terminoContrato: z.string().min(1, "Término de contrato requerido"),
  tipoContrato: z.string().min(1, "Tipo de contrato requerido"),
  banco: z.string().min(1, "Banco requerido"),
  numeroCuenta: z.string().min(1, "Número de cuenta requerido"),
  afiliacion: z.string().min(1, "Afiliación requerida"),
  regimenPensionario: z.string().min(1, "Régimen pensionario requerido"),
  cuspp: z.string().min(1, "CUSPP requerido"),
});
export type EjecutivoSchemaType = z.infer<typeof ejecutivoSchema>;

// Obrero form schema
export const obreroSchema = z.object({
  nombre: z.string().optional(),
  apellidoPaterno: z.string().optional(),
  apellidoMaterno: z.string().optional(),
  numeroDocumento: z.string().optional(),
  tipoDocumento: z.string().optional(),
  fechaVinculacion: z.string().optional(),
  fechaRetiro: z.string().optional(),
  puesto: z.string().min(1, "Puesto requerido"),
  turno: z.string().min(1, "Turno requerido"),
  supervisor: z.string().min(1, "Supervisor requerido"),
  proyectosAsignado: z.string().min(1, "Proyectos asignado requerido"),
  clasificacionRiesgos: z.string().min(1, "Clasificación de riesgos requerida"),
  tipoContrato: z.string().min(1, "Tipo de contrato requerido"),
  sueldo: z.string().min(1, "Sueldo requerido"),
  banco: z.string().min(1, "Banco requerido"),
  numeroCuenta: z.string().min(1, "Número de cuenta requerido"),
  afiliacion: z.string().min(1, "Afiliación requerida"),
  regimenPensionario: z.string().min(1, "Régimen pensionario requerido"),
  cuspp: z.string().min(1, "CUSPP requerido"),
});
export type ObreroSchemaType = z.infer<typeof obreroSchema>;
