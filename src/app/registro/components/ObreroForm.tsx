"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ObreroFormProps {
  onBack: () => void;
}

export function ObreroForm({ onBack }: ObreroFormProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        Datos de Trabajo - Obrero
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Área de Trabajo<span className="text-red-500">*</span>
          </label>
          <Input className="bg-white h-10" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Turno<span className="text-red-500">*</span>
          </label>
          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manana">Mañana</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noche">Noche</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salario por Hora<span className="text-red-500">*</span>
          </label>
          <Input type="number" className="bg-white h-10" />
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
