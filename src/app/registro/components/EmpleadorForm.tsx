
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Field } from "./common/Field";
import { PRIMARY_COLOR } from "../constants";
import type { PersonalFormState } from './PersonalDataForm';
import AsignacionFamiliar, { type Familiar } from "./AsignacionFamiliar";
import IdentificacionBasica from "./IdentificacionBasica";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { empleadorSchema, EmpleadorSchemaType, validateFamiliares } from '../validation';

interface EmpleadorFormProps {
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
  cargo?: string;
}

export function EmpleadorForm({ onBack, personalForm, cargo }: EmpleadorFormProps) {
  const { register, setValue, watch, formState: { errors, isValid }, handleSubmit } = useForm<EmpleadorSchemaType>({
    resolver: zodResolver(empleadorSchema),
    mode: 'onChange',
    defaultValues: {
      nombre: personalForm?.nombre || '',
      apellidoPaterno: personalForm?.apellido || '',
      apellidoMaterno: personalForm?.segundoApellido || '',
      numeroDocumento: personalForm?.numeroDocumento || '',
      tipoDocumento: personalForm?.tipoDocumento || 'dni',
      fechaVinculacion: '',
      fechaRetiro: '',
      sede: '',
      area: '',
      turno: '',
      tipoContrato: '',
      tipoPago: '',
      ocupacion: '',
      jornadaLaboral: '',
      jefeInmediato: '',
      horarioLaboralInicio: '',
      horarioLaboralFin: '',
      diasLaborales: '',
      sueldo: '',
      formaPago: '',
      banco: '',
      numeroCuenta: '',
      fondoPensionario: '',
      tipoAfp: '',
      seguroVida: '',
      horasExtras: '',
      cuspp: '',
      bonificacionesCorporativas: '',
      cts: '',
      gratificacion: false,
    }
  });

  const values = watch();
  const [asignacionFamiliar, setAsignacionFamiliar] = useState(false);
  const [familiares, setFamiliares] = useState<Familiar[]>([
    { dni: "", nombre: "", apellidoP: "", apellidoM: "" },
  ]);

  const addFamiliar = () => setFamiliares(prev => [...prev, { dni: '', nombre: '', apellidoP: '', apellidoM: '' }]);
  const updateFamiliar = (index: number, key: keyof Familiar, value: string) => {
    setFamiliares(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };
  const removeFamiliar = (index: number) => setFamiliares(prev => prev.filter((_, i) => i !== index));

  // Validar familiares cuando asignación familiar está activa
  const familiaresValidos = !asignacionFamiliar || validateFamiliares(familiares);
  const canSubmit = isValid && familiaresValidos;

  const onSubmit = (data: EmpleadorSchemaType) => {
    // Merge familiares info (not in schema) and log; real impl could POST
    const payload = { ...data, asignacionFamiliar, familiares };
    console.log('Empleador submit', payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{color: PRIMARY_COLOR}}>Datos del Trabajador</h2>
      </div>

        <IdentificacionBasica
          nombre={values.nombre || ''}
          apellidoPaterno={values.apellidoPaterno || ''}
          apellidoMaterno={values.apellidoMaterno || ''}
          numeroDocumento={values.numeroDocumento || ''}
          tipoDocumento={values.tipoDocumento || "dni"}
          fechaVinculacion={values.fechaVinculacion || ''}
          fechaRetiro={values.fechaRetiro || ''}
          cargo={cargo}
          onChange={(field, value) => setValue(field as keyof EmpleadorSchemaType, value, { shouldValidate: true })}
        />

      {/* Row 4: Sede, Área, Turno (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Sede" required error={errors.sede?.message}>
          <Input className="bg-white h-10 w-full" {...register('sede')} />
        </Field>
        <Field label="Área" required error={errors.area?.message}>
          <Input className="bg-white h-10 w-full" {...register('area')} />
        </Field>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Turno*</label>
          <Select value={values.turno} onValueChange={(value) => setValue('turno', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Turno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mañana">Mañana</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noche">Noche</SelectItem>
            </SelectContent>
          </Select>
          {errors.turno && <p className="mt-1 text-xs text-red-600">{errors.turno.message}</p>}
        </div>
      </div>

      {/* Row 5: Tipo de Contrato (col 1), Tipo de Pago (col 2) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Tipo de Contrato" required error={errors.tipoContrato?.message}>
          <Select value={values.tipoContrato} onValueChange={(value) => setValue('tipoContrato', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indefinido">Indefinido</SelectItem>
              <SelectItem value="temporal">Temporal</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Tipo de Pago" required error={errors.tipoPago?.message}>
          <Select value={values.tipoPago} onValueChange={(value) => setValue('tipoPago', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensual">Mensual</SelectItem>
              <SelectItem value="quincenal">Quincenal</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row 6: Ocupación, Jornada Laboral, Jefe Inmediato (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Ocupación" required error={errors.ocupacion?.message}>
          <Select value={values.ocupacion} onValueChange={(value) => setValue('ocupacion', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Ocupación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="administrativo">Administrativo</SelectItem>
              <SelectItem value="operativo">Operativo</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Jornada Laboral" required error={errors.jornadaLaboral?.message}>
          <Select value={values.jornadaLaboral} onValueChange={(value) => setValue('jornadaLaboral', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jornada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completa">Completa</SelectItem>
              <SelectItem value="parcial">Parcial</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Jefe Inmediato" required error={errors.jefeInmediato?.message}>
          <Select value={values.jefeInmediato} onValueChange={(value) => setValue('jefeInmediato', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jefe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jefe1">Jefe 1</SelectItem>
              <SelectItem value="jefe2">Jefe 2</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row 7: Horario Laboral (Inicio y Fin), Días Laborales, Sueldo */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Horario Laboral*</label>
          <div className="flex gap-2">
            <Input 
              type="time" 
              className="bg-white h-10 w-full" 
              {...register('horarioLaboralInicio')} 
              placeholder="08:00"
            />
            <span className="flex items-center">hasta</span>
            <Input 
              type="time" 
              className="bg-white h-10 w-full" 
              {...register('horarioLaboralFin')} 
              placeholder="18:00"
            />
          </div>
          {(errors.horarioLaboralInicio || errors.horarioLaboralFin) && (
            <p className="mt-1 text-xs text-red-600">{errors.horarioLaboralInicio?.message || errors.horarioLaboralFin?.message}</p>
          )}
        </div>
        <Field label="Días Laborales" required error={errors.diasLaborales?.message}>
          <Select value={values.diasLaborales} onValueChange={(value) => setValue('diasLaborales', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Lunes - Viernes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lunes-viernes">Lunes - Viernes</SelectItem>
              <SelectItem value="lunes-sabado">Lunes - Sábado</SelectItem>
              <SelectItem value="lunes-domingo">Lunes - Domingo</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Sueldo" required error={errors.sueldo?.message}>
          <Input 
            type="number" 
            className="bg-white h-10 w-full" 
            {...register('sueldo')} 
            placeholder="1200"
          />
        </Field>
      </div>

      {/* Row 8: Forma de Pago */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Forma de Pago" required error={errors.formaPago?.message}>
          <Select value={values.formaPago} onValueChange={(value) => setValue('formaPago', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Depósito Bancario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deposito">Depósito Bancario</SelectItem>
              <SelectItem value="efectivo">Efectivo</SelectItem>
              <SelectItem value="cheque">Cheque</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Row 9: Banco, N° de Cuenta, Fondo Pensionario, Tipo de AFP */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Banco" required error={errors.banco?.message}>
          <Input className="bg-white h-10 w-full" {...register('banco')} />
        </Field>
        <Field label="N° de Cuenta" required error={errors.numeroCuenta?.message}>
          <Input className="bg-white h-10 w-full" {...register('numeroCuenta')} />
        </Field>
        <Field label="Fondo Pensionario">
          <Select value={values.fondoPensionario} onValueChange={(value) => setValue('fondoPensionario', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="afp">AFP</SelectItem>
              <SelectItem value="onp">ONP</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Tipo de AFP">
          <Input className="bg-white h-10 w-full" {...register('tipoAfp')} />
        </Field>
      </div>

      {/* Row 10: Seguro, Horas Extras, (empty), CUSPP */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Seguro">
          <Select value={values.seguroVida} onValueChange={(value) => setValue('seguroVida', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Horas Extras">
          <Select value={values.horasExtras} onValueChange={(value) => setValue('horasExtras', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <div></div>
        <Field label="CUSPP">
          <Input className="bg-white h-10 w-full" {...register('cuspp')} />
        </Field>
      </div>

      {/* Row 11: Bonificaciones Corporativas, CTS, Gratificación (label + checkbox centered) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Bonificaciones Corporativas">
          <Select value={values.bonificacionesCorporativas} onValueChange={(value) => setValue('bonificacionesCorporativas', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Antigüedad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="antiguedad">Antigüedad</SelectItem>
              <SelectItem value="desempeño">Desempeño</SelectItem>
              <SelectItem value="ninguna">Ninguna</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="CTS">
          <Input className="bg-white h-10 w-full" {...register('cts')} />
        </Field>
        <div>
          <div className="h-full flex items-end justify-start pl-4">
            <label className="text-sm font-medium text-gray-700 mr-2">Gratificación*</label>
            <Checkbox
              className="w-4 h-4 mr-2"
              checked={Boolean(values.gratificacion)}
              onCheckedChange={(checked) => setValue('gratificacion', Boolean(checked), { shouldValidate: true })}
            />
          </div>
        </div>
      </div>

      <AsignacionFamiliar
        asignacionFamiliar={asignacionFamiliar}
        setAsignacionFamiliar={setAsignacionFamiliar}
        familiares={familiares}
        addFamiliar={addFamiliar}
        updateFamiliar={updateFamiliar}
        removeFamiliar={removeFamiliar}
        showErrors={asignacionFamiliar && !familiaresValidos}
      />

      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          disabled={!canSubmit}
          className={`px-12 h-10 text-white ${canSubmit ? "bg-[#150AB4] hover:bg-[#0F088A]" : "bg-gray-300 cursor-not-allowed"}`}
        >
          Registrar
        </Button>
      </div>
    </form>
  );
}

