"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/DatePicker";
import { Field } from "./common/Field";
import { PRIMARY_COLOR } from "../constants";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalSchema, PersonalSchemaType } from '../validation';

export interface PersonalFormState {
  nombre: string;
  apellido: string;
  segundoApellido: string;
  tipoDocumento: string;
  numeroDocumento: string;
  genero: string;
  estadoCivil: string;
  nacionalidad: string;
  fechaNacimiento: string;
  email: string;
  direccion: string;
  telefono: string;
  nivelEducativo: string;
  profesion: string;
}

interface PersonalDataFormProps {
  form: PersonalFormState;
  onChange: (key: keyof PersonalFormState, value: string) => void;
  cargo: string;
  onCargoChange: (value: string) => void;
  onNext: () => void;
}

export function PersonalDataForm({ form, onChange, cargo, onCargoChange, onNext }: PersonalDataFormProps) {
  const { register, setValue, formState: { errors, isValid }, watch } = useForm<PersonalSchemaType>({
    resolver: zodResolver(personalSchema),
    mode: 'onChange',
    defaultValues: form
  });

  // Propagate internal RHF values to parent state so step 2 can consume them
  const values = watch();
  useEffect(() => {
    for (const [k, v] of Object.entries(values)) {
      const nextVal = (v as string) || '';
      const key = k as keyof PersonalFormState;
      if (form[key] !== nextVal) {
        onChange(key, nextVal);
      }
    }
  }, [values, form, onChange]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8" style={{color: PRIMARY_COLOR}}>Nuevo Trabajador</h2>
      {/* Fila 1 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nombre" required error={errors.nombre?.message}>
          <Input className="bg-white h-10" {...register('nombre')} />
        </Field>
        <Field label="Apellido" required error={errors.apellido?.message}>
          <Input className="bg-white h-10" {...register('apellido')} />
        </Field>
        <Field label="Segundo Apellido" required error={errors.segundoApellido?.message}>
          <Input className="bg-white h-10" {...register('segundoApellido')} />
        </Field>
      </div>
      {/* Fila 2 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Tipo de Documento" required error={errors.tipoDocumento?.message}>
          <Select value={values.tipoDocumento} onValueChange={v => setValue('tipoDocumento', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="DNI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dni">DNI</SelectItem>
              <SelectItem value="carnet">Carnet Extranjería</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="N° de Documento" required error={errors.numeroDocumento?.message}>
          <Input className="bg-white h-10" {...register('numeroDocumento')} />
        </Field>
        <div></div>
        <Field label="Género" required error={errors.genero?.message}>
          <Select value={values.genero} onValueChange={v => setValue('genero', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione Genero" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="femenino">Femenino</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 3 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nacionalidad" required error={errors.nacionalidad?.message}>
          <Select value={values.nacionalidad} onValueChange={v => setValue('nacionalidad', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Perú" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="peru">Perú</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Fecha de Nacimiento" required error={errors.fechaNacimiento?.message}>
          <DatePicker
            value={values.fechaNacimiento || null}
            onChange={(iso) => setValue('fechaNacimiento', iso || '', { shouldValidate: true })}
          />
        </Field>
        <div></div>
        <Field label="Estado Civil" required error={errors.estadoCivil?.message}>
          <Select value={values.estadoCivil} onValueChange={v => setValue('estadoCivil', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soltero">Soltero(a)</SelectItem>
              <SelectItem value="casado">Casado(a)</SelectItem>
              <SelectItem value="divorciado">Divorciado(a)</SelectItem>
              <SelectItem value="viudo">Viudo(a)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 4 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Email" required error={errors.email?.message}>
          <Input type="email" className="bg-white h-10" {...register('email')} />
        </Field>
        <Field label="Dirección" required error={errors.direccion?.message}>
          <Input className="bg-white h-10" {...register('direccion')} />
        </Field>
        <Field label="N° de Teléfono" required error={errors.telefono?.message}>
          <Input type="tel" className="bg-white h-10" {...register('telefono')} />
        </Field>
      </div>
      {/* Fila 5 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nivel Educativo" required error={errors.nivelEducativo?.message}>
          <Input className="bg-white h-10" {...register('nivelEducativo')} />
        </Field>
        <Field label="Profesión" required error={errors.profesion?.message}>
          <Select value={values.profesion} onValueChange={v => setValue('profesion', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ingeniero">Ingeniero</SelectItem>
              <SelectItem value="contador">Contador</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 6: Foto */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Foto
        </label>
        <div className="w-64">
          <Input 
            type="text" 
            placeholder="Insertar Imagen" 
            className="bg-white h-10 text-gray-400"
          />
        </div>
      </div>
      {/* Cargo */}
      <div className="mb-6">
        <label className="block text-base font-bold text-black mb-4">
          Cargo:
        </label>
        <div className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="empleador"
              checked={cargo === 'empleador'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Empleador</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="ejecutivo"
              checked={cargo === 'ejecutivo'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Ejecutivo</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="obrero"
              checked={cargo === 'obrero'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Obrero</span>
          </label>
        </div>
      </div>
      {/* Botón */}
      <div className="flex justify-end mt-8">
        <Button
          disabled={!isValid}
          className={`px-12 h-10 text-white ${isValid ? "bg-[#150AB4] hover:bg-[#0F088A]" : "bg-gray-300 cursor-not-allowed"}`}
          onClick={onNext}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
