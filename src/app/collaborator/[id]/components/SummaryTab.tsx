'use client';
import { mockCollaborator } from "../mock/collaboratorData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function SummaryTab() {
  const col = mockCollaborator;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* 🔹 Columna Izquierda - Formularios */}
      <div className="col-span-2 space-y-4">
        
        {/* Sección: Datos laborales */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3">Datos laborales</h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <label>
              Período laboral:
              <Input value={col.periodoInicio} />
            </label>
            <label>
              Fin:
              <Input value={col.periodoFin} placeholder="--" />
            </label>

            <label className="col-span-2">
              Tipo de trabajador:
              <Select defaultValue={col.tipoTrabajador}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="OBRERO">OBRERO</SelectItem>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>
        </div>

        {/* Sección: Establecimiento */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3">Establecimiento donde labora</h3>

          <Input className="mb-3" value="J & P Periféricos" />

          {/* Jornada laboral */}
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <Checkbox defaultChecked />
              Jornada de trabajo máximo
            </label>
            <label className="flex items-center gap-2">
              <Checkbox />
              Jornada atípica o acumulativa
            </label>
            <label className="flex items-center gap-2">
              <Checkbox />
              Trabajo de horario nocturno
            </label>
          </div>
        </div>
      </div>

      {/* 🔹 Columna Derecha — Gráficos placeholder */}
      <div className="space-y-4">
        <div className="bg-white h-48 rounded-lg shadow"></div>
        <div className="bg-white h-48 rounded-lg shadow"></div>
      </div>

    </div>
  );
}
