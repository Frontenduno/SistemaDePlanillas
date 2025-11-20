"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PRIMARY_COLOR } from "../constants";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ejecutivoSchema, EjecutivoSchemaType } from '../validation';
import { Field } from './common/Field';

interface EjecutivoFormProps {
  onBack: () => void;
  cargo?: string;
}

export function EjecutivoForm({ onBack, cargo }: EjecutivoFormProps) {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<EjecutivoSchemaType>({
    resolver: zodResolver(ejecutivoSchema),
    mode: 'onChange',
    defaultValues: { empresa: '', ruc: '', cargo: '' }
  });

  const onSubmit = (data: EjecutivoSchemaType) => {
    console.log('Ejecutivo submit', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>Datos de Trabajo - Ejecutivo</h2>
        <Button type="button" onClick={onBack} className="h-10 px-5 bg-gray-500 text-white hover:bg-gray-600">Volver</Button>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Empresa" required error={errors.empresa?.message}>
          <Input className="bg-white h-10" {...register('empresa')} />
        </Field>
        <Field label="RUC" required error={errors.ruc?.message}>
          <Input className="bg-white h-10" {...register('ruc')} />
        </Field>
        <Field label="Cargo" required error={errors.cargo?.message}>
          <Input className="bg-white h-10" {...register('cargo')} />
        </Field>
      </div>
      <div className="flex justify-end mt-8">
        <Button type="submit" disabled={!isValid} className={`px-12 h-10 text-white ${isValid ? 'bg-[#150AB4] hover:bg-[#0F088A]' : 'bg-gray-300 cursor-not-allowed'}`}>
          Guardar
        </Button>
      </div>
    </form>
  );
}