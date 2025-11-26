"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PRIMARY_COLOR } from "../constants";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ejecutivoSchema, EjecutivoSchemaType, validateFamiliares } from '../validation';
import { Field } from './common/Field';
import type { PersonalFormState } from './PersonalDataForm';
import IdentificacionBasica from "./IdentificacionBasica";
import AsignacionFamiliar, { type Familiar } from "./AsignacionFamiliar";

interface EjecutivoFormProps {
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
  cargo?: string;
}

export function EjecutivoForm({ onBack, personalForm, cargo }: EjecutivoFormProps) {
  const { register, setValue, watch, handleSubmit, formState: { errors, isValid } } = useForm<EjecutivoSchemaType>({
    resolver: zodResolver(ejecutivoSchema),
    mode: 'onChange',
    defaultValues: {
      nombre: personalForm?.nombre || '',
      apellidoPaterno: personalForm?.apellido || '',
      apellidoMaterno: personalForm?.segundoApellido || '',
      numeroDocumento: personalForm?.numeroDocumento || '',
      tipoDocumento: personalForm?.tipoDocumento || 'dni',
      fechaVinculacion: '',
      fechaRetiro: '',
      puesto: '',
      departamento: '',
      nivelJerarquico: '',
      supervisorDirecto: '',
      proyectosEstrategicos: '',
      jornadaLaboral: '',
      terminoContrato: '',
      tipoContrato: '',
      banco: '',
      numeroCuenta: '',
      afiliacion: '',
      regimenPensionario: '',
      cuspp: '',
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

  const onSubmit = (data: EjecutivoSchemaType) => {
    const payload = { ...data, asignacionFamiliar, familiares };
    console.log('Ejecutivo submit', payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>Datos del Trabajador</h2>
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
        onChange={(field, value) => setValue(field as keyof EjecutivoSchemaType, value, { shouldValidate: true })}
      />

      {/* Row: Puesto, Departamento, Nivel Jerárquico */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Puesto" required error={errors.puesto?.message}>
          <Input className="bg-white h-10 w-full" {...register('puesto')} />
        </Field>
        <Field label="Departamento" required error={errors.departamento?.message}>
          <Input className="bg-white h-10 w-full" {...register('departamento')} />
        </Field>
        <Field label="Nivel Jerárquico" required error={errors.nivelJerarquico?.message}>
          <Select value={values.nivelJerarquico} onValueChange={(value) => setValue('nivelJerarquico', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jerarquía" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="director">Director</SelectItem>
              <SelectItem value="gerente">Gerente</SelectItem>
              <SelectItem value="jefe">Jefe</SelectItem>
              <SelectItem value="coordinador">Coordinador</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row: Supervisor Directo, Proyectos Estratégicos, Jornada Laboral */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Supervisor Directo" required error={errors.supervisorDirecto?.message}>
          <Input className="bg-white h-10 w-full" {...register('supervisorDirecto')} />
        </Field>
        <Field label="Proyectos Estratégicos" required error={errors.proyectosEstrategicos?.message}>
          <Input className="bg-white h-10 w-full" {...register('proyectosEstrategicos')} />
        </Field>
        <Field label="Jornada Laboral" required error={errors.jornadaLaboral?.message}>
          <Select value={values.jornadaLaboral} onValueChange={(value) => setValue('jornadaLaboral', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jornada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completa">Tiempo Completo</SelectItem>
              <SelectItem value="parcial">Tiempo Parcial</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row: Término del Contrato, Tipo de Contrato */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Término del Contrato" required error={errors.terminoContrato?.message}>
          <Select value={values.terminoContrato} onValueChange={(value) => setValue('terminoContrato', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione el Término" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indefinido">Indefinido</SelectItem>
              <SelectItem value="fijo">Plazo Fijo</SelectItem>
              <SelectItem value="proyecto">Por Proyecto</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Tipo de Contrato" required error={errors.tipoContrato?.message}>
          <Select value={values.tipoContrato} onValueChange={(value) => setValue('tipoContrato', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tiempo_completo">Tiempo Completo</SelectItem>
              <SelectItem value="tiempo_parcial">Tiempo Parcial</SelectItem>
              <SelectItem value="honorarios">Honorarios</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row: Banco, N° de Cuenta */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Banco" required error={errors.banco?.message}>
          <Input className="bg-white h-10 w-full" {...register('banco')} />
        </Field>
        <Field label="N° de Cuenta" required error={errors.numeroCuenta?.message}>
          <Input className="bg-white h-10 w-full" {...register('numeroCuenta')} />
        </Field>
      </div>

      {/* Row: Afiliación, Régimen Pensionario, CUSPP */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Afiliación" required error={errors.afiliacion?.message}>
          <Input className="bg-white h-10 w-full" {...register('afiliacion')} />
        </Field>
        <Field label="Régimen Pensionario" required error={errors.regimenPensionario?.message}>
          <Input className="bg-white h-10 w-full" {...register('regimenPensionario')} />
        </Field>
        <Field label="CUSPP" required error={errors.cuspp?.message}>
          <Input className="bg-white h-10 w-full" {...register('cuspp')} />
        </Field>
      </div>

      {/* Asignación Familiar */}
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
        <Button type="submit" disabled={!canSubmit} className={`px-12 h-10 text-white ${canSubmit ? 'bg-[#150AB4] hover:bg-[#0F088A]' : 'bg-gray-300 cursor-not-allowed'}`}>
          Registrar
        </Button>
      </div>
    </form>
  );
}