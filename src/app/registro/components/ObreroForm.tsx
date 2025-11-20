"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PRIMARY_COLOR } from "../constants";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { obreroSchema, ObreroSchemaType } from '../validation';
import { Field } from './common/Field';

interface ObreroFormProps {
  onBack: () => void;
  cargo?: string;
}

export function ObreroForm({ onBack, cargo }: ObreroFormProps) {
  const { register, setValue, watch, handleSubmit, formState: { errors, isValid } } = useForm<ObreroSchemaType>({
    resolver: zodResolver(obreroSchema),
    mode: 'onChange',
    defaultValues: { areaTrabajo: '', turno: '', salarioHora: '' }
  });

  const values = watch();
  const onSubmit = (data: ObreroSchemaType) => {
    console.log('Obrero submit', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>Datos de Trabajo - Obrero</h2>
        <Button type="button" onClick={onBack} className="h-10 px-5 bg-gray-500 text-white hover:bg-gray-600">Volver</Button>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Área de Trabajo" required error={errors.areaTrabajo?.message}>
          <Input className="bg-white h-10" {...register('areaTrabajo')} />
        </Field>
        <Field label="Turno" required error={errors.turno?.message}>
          <Select value={values.turno} onValueChange={v => setValue('turno', v, { shouldValidate: true })}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manana">Mañana</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noche">Noche</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Salario por Hora" required error={errors.salarioHora?.message}>
          <Input type="number" className="bg-white h-10" {...register('salarioHora')} />
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
