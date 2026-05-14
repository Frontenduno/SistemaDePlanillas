"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { PersonalFormState } from "./PersonalDataForm";

interface EmpleadorFormProps {
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
  cargo?: string;
}

export function EmpleadorForm({
  onBack,
  // Eliminamos personalForm de aquí para que no se declare como variable sin usar
  cargo,
}: EmpleadorFormProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        Datos de Trabajo - Empleador
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Empresa<span className="text-red-500">*</span>
          </label>
          <Input className="bg-white h-10" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            RUC<span className="text-red-500">*</span>
          </label>
          <Input className="bg-white h-10" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cargo<span className="text-red-500">*</span>
          </label>
          {/* Utilizamos la prop 'cargo' para inicializar el valor */}
          <Input className="bg-white h-10" defaultValue={cargo || ""} />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Volver
        </Button>
        <Button className="px-12 h-10 text-white bg-cyan-500 hover:bg-cyan-600">
          Guardar
        </Button>
      </div>
    </div>
  );
}