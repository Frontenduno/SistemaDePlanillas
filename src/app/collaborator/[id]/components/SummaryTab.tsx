'use client';
import { mockCollaborator } from "../mock/collaboratorData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function SummaryTab() {
  const col = mockCollaborator;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* 🔹 Columna Izquierda - Datos laborales y establecimiento */}
      <div className="col-span-2 flex flex-col gap-6">

        {/* Datos laborales */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-3">Datos laborales</h3>

          <div className="grid grid-cols-3 gap-x-4 gap-y-3 text-sm items-center">
            <label className="font-medium">Periodo laboral:</label>
            <Input value={col.periodoInicio} readOnly className="col-span-1" />
            <div></div>

            <label className="font-medium">Fecha de fin (dd/mm/aaaa):</label>
            <Input value={col.periodoFin || ""} readOnly className="col-span-1" />
            <div></div>

            <label className="font-medium">Tipo de trabajador:</label>
            <Select defaultValue={col.tipoTrabajador}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="OBRERO">OBRERO</SelectItem>
                <SelectItem value="ADMIN">ADMIN</SelectItem>
              </SelectContent>
            </Select>
            <div></div>

            <label className="font-medium">Régimen laboral:</label>
            <Input value={col.regimenLaboral} readOnly />
            <div></div>

            <label className="font-medium">Categoría ocupacional:</label>
            <Input value={col.categoriaOcupacional} readOnly />
            <div></div>

            <label className="font-medium">Ocupación:</label>
            <div className="col-span-2 grid grid-cols-3 gap-2">
              <div>
                <span className="text-xs text-gray-500 font-semibold block">Código</span>
                <Input value={col.ocupacionCodigo} readOnly />
              </div>
              <div className="col-span-2">
                <span className="text-xs text-gray-500 font-semibold block">Nombre</span>
                <Input value={col.ocupacionNombre} readOnly />
              </div>
            </div>

            <label className="font-medium">Tipo de contrato:</label>
            <Input value={col.tipoContrato} readOnly />
            <div></div>

            <label className="font-medium">Tipo de pago y periodicidad:</label>
            <div className="col-span-2 grid grid-cols-2 gap-2">
              <Input value={col.tipoPago} readOnly />
              <Select defaultValue={col.periodicidadPago}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MENSUAL">MENSUAL</SelectItem>
                  <SelectItem value="QUINCENAL">QUINCENAL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <label className="font-medium">Monto de remuneración básica inicial:</label>
            <Input value={col.remuneracion} readOnly />
            <div></div>
          </div>
        </div>

        {/* Establecimiento */}
        <div className="bg-white rounded-lg shadow p-4 text-sm">
          <h3 className="text-lg font-semibold mb-3">Establecimiento donde labora</h3>

          {/* Selector principal */}
          <Select defaultValue="20480908342 - J & P Periféricos">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20480908342 - J & P Periféricos">
                20480908342 - J & P Periféricos
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Cod. local y Local */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div>
              <label className="text-xs font-semibold text-gray-600">Cod. local</label>
              <Input value="0001" readOnly />
            </div>
            <div className="col-span-2">
              <label className="text-xs font-semibold text-gray-600">Local</label>
              <div className="flex items-center gap-2">
                <Input value="Av. Alameda 3023" readOnly />
                <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">
                  Detalle
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-1">Tipo: OF.ADMINIST</p>
            </div>
          </div>

          {/* Jornada laboral */}
          <div className="border-t border-gray-200 mt-4 pt-3 space-y-1">
            <p className="font-semibold text-sm mb-2">Jornada laboral:</p>
            <label className="flex items-center gap-2">
              <Checkbox defaultChecked /> Jornada de trabajo máximo
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Jornada atípica o acumulativa
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Trabajo de horario nocturno
            </label>
          </div>

          {/* Situación especial */}
          <div className="mt-4">
            <label className="font-semibold">Situación especial:</label>
            <Select defaultValue="NINGUNA">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NINGUNA">NINGUNA</SelectItem>
                <SelectItem value="PRACTICANTE">PRACTICANTE</SelectItem>
                <SelectItem value="CONVENIO">CONVENIO</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Persona con discapacidad */}
          <div className="mt-3 border-t border-gray-200 pt-3">
            <label className="font-semibold block mb-1">¿Persona con discapacidad?</label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-1">
                <input type="radio" name="discapacidad" /> <span>Si</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="discapacidad" defaultChecked /> <span>No</span>
              </label>
            </div>
          </div>

          {/* Sindicalizado */}
          <div className="mt-3">
            <label className="font-semibold block mb-1">¿Sindicalizado?</label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-1">
                <input type="radio" name="sindicalizado" /> <span>Si</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="sindicalizado" defaultChecked /> <span>No</span>
              </label>
            </div>
          </div>

          {/* Situación */}
          <div className="mt-3">
            <label className="font-semibold block mb-1">Situación:</label>
            <Input value="Activo" readOnly className="bg-gray-50" />
          </div>
        </div>
      </div>

      {/* 🔹 Columna Derecha — Gráficos */}
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold mb-2">Días no trabajados</h3>
          <div className="h-40 flex items-center justify-center text-gray-400 border border-dashed rounded-md">
            (Gráfico aquí)
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold mb-2">Horas extras</h3>
          <div className="h-40 flex items-center justify-center text-gray-400 border border-dashed rounded-md">
            (Gráfico aquí)
          </div>
        </div>
      </div>
    </div>
  );
}