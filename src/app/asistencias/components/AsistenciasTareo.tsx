"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Agregado para el botón de volver
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { empleadosTareo } from "../data/asistenciasData";

interface Props {
  onBack: () => void; // Volver al listado
  onEdit: (codigo: string) => void; // Ir a editar
}

export default function AsistenciasTareo({ onBack, onEdit }: Props) {
  const [periodo, setPeriodo] = useState("Marzo");
  const [año, setAño] = useState("2022");
  const [categoria, setCategoria] = useState("Obrero");

  return (
    <div className="p-6 space-y-6">
      {/* Header con Botón de Volver */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">
          Asistencias (Tareo): J & P Perifericos
        </h1>
        <Button variant="outline" onClick={onBack}>
          Volver al Listado
        </Button>
      </div>

      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-[1fr_200px] gap-8">
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {/* Filtros originales */}
            <div>
              <label className="block text-sm mb-1">Código:</label>
              <Input type="text" placeholder="Código" className="bg-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Nombres:</label>
              <Input type="text" placeholder="Nombres" className="bg-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Apellidos:</label>
              <Input type="text" placeholder="Apellidos" className="bg-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Periodo:</label>
              <Select value={periodo} onValueChange={setPeriodo}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Marzo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Marzo">Marzo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm mb-1">Año:</label>
              <Select value={año} onValueChange={setAño}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="2022" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm mb-1">
                Categoría ocupacional:
              </label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Obrero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Obrero">Obrero</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border rounded-md p-2 bg-white h-fit">
            <div className="border-b pb-2 mb-2">
              <div className="text-center font-medium">Leyenda</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-200"></div>
                <span className="text-sm">Si asistió</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-200"></div>
                <span className="text-sm">Tardanza</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-200"></div>
                <span className="text-sm">No asistió</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-2">Código</th>
                <th className="p-2">Nombre y Apellidos</th>
                <th className="p-2 text-center">Lunes</th>
                <th className="p-2 text-center">Martes</th>
                <th className="p-2 text-center">Miercoles</th>
                <th className="p-2 text-center">Jueves</th>
                <th className="p-2 text-center">Viernes</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {empleadosTareo.map((empleado) => (
                <tr key={empleado.codigo} className="border-t">
                  <td className="p-2">{empleado.codigo}</td>
                  <td className="p-2">{empleado.nombre}</td>
                  {empleado.asistencias.map((asistencia, index) => (
                    <td key={index} className="p-2">
                      <div
                        className={`rounded-full px-3 py-1 text-center text-sm 
                        ${
                          asistencia.estado === "asistió"
                            ? "bg-green-200"
                            : asistencia.estado === "tardanza"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        }`}
                      >
                        8 horas
                      </div>
                    </td>
                  ))}
                  <td className="p-2">
                    {/* AQUÍ EL CAMBIO: Usamos onEdit en lugar de router.push */}
                    <button
                      className="text-gray-600 hover:text-gray-800"
                      title="Editar asistencia"
                      onClick={() => onEdit(empleado.codigo)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
