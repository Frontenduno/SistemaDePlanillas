"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface EmpleadorFormProps {
  onBack: () => void;
}

export function EmpleadorForm({ onBack }: EmpleadorFormProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Datos de Trabajo - Empleador</h2>
      
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
          <Input className="bg-white h-10" />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button className="px-12 h-10 text-white bg-cyan-500 hover:bg-cyan-600">
          Guardar
        </Button>
      </div>
    </div>
  );
}
