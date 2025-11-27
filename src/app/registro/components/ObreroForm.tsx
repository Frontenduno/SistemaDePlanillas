"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PRIMARY_COLOR } from "../constants";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { obreroSchema, ObreroSchemaType, validateFamiliares } from '../validation';
import { Field } from './common/Field';
import type { PersonalFormState } from './PersonalDataForm';
import IdentificacionBasica from "./IdentificacionBasica";
import AsignacionFamiliar, { type Familiar } from "./AsignacionFamiliar";

interface ObreroFormProps {
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
  cargo?: string;
}

export function ObreroForm({ onBack, personalForm, cargo }: ObreroFormProps) {
  const { register, setValue, watch, handleSubmit, formState: { errors, isValid } } = useForm<ObreroSchemaType>({
    resolver: zodResolver(obreroSchema),
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
      turno: '',
      supervisor: '',
      proyectosAsignado: '',
      clasificacionRiesgos: '',
      tipoContrato: '',
      sueldo: '',
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

  const onSubmit = (data: ObreroSchemaType) => {
    const payload = { ...data, asignacionFamiliar, familiares };
    console.log('Obrero submit', payload);
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
        onChange={(field, value) => setValue(field as keyof ObreroSchemaType, value, { shouldValidate: true })}
      />

      {/* Row: Puesto, Turno */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Puesto" required error={errors.puesto?.message}>
          <Input className="bg-white h-10 w-full" {...register('puesto')} />
        </Field>
        <Field label="Turno" required error={errors.turno?.message}>
          <Select value={values.turno} onValueChange={(value) => setValue('turno', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Turno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manana">Mañana</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noche">Noche</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row: Supervisor, Proyectos Asignado, Clasificación de Riesgos */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Supervisor" required error={errors.supervisor?.message}>
          <Input className="bg-white h-10 w-full" {...register('supervisor')} />
        </Field>
        <Field label="Proyectos Asignado" required error={errors.proyectosAsignado?.message}>
          <Input className="bg-white h-10 w-full" {...register('proyectosAsignado')} />
        </Field>
        <Field label="Clasificación de Riesgos" required error={errors.clasificacionRiesgos?.message}>
          <Select value={values.clasificacionRiesgos} onValueChange={(value) => setValue('clasificacionRiesgos', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Clasificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bajo">Bajo</SelectItem>
              <SelectItem value="medio">Medio</SelectItem>
              <SelectItem value="alto">Alto</SelectItem>
              <SelectItem value="muy_alto">Muy Alto</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Row: Tipo de Contrato, Sueldo */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Field label="Tipo de Contrato" required error={errors.tipoContrato?.message}>
          <Select value={values.tipoContrato} onValueChange={(value) => setValue('tipoContrato', value, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indefinido">Indefinido</SelectItem>
              <SelectItem value="temporal">Temporal</SelectItem>
              <SelectItem value="por_obra">Por Obra</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Sueldo" required error={errors.sueldo?.message}>
          <Input className="bg-white h-10 w-full" {...register('sueldo')} />
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
