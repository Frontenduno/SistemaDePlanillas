"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AsistenciasPage() {
  const router = useRouter();
  const [periodo, setPeriodo] = useState("Marzo");
  const [año, setAño] = useState("2022");
  const [categoria, setCategoria] = useState("Obrero");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">
        Asistencias (Tareo): J & P Perifericos
      </h1>

      {/* Card principal con filtros y leyenda */}
      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-[1fr_200px] gap-8">
          {/* Columna de filtros - lado izquierdo */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
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

          {/* Leyenda - lado derecho */}
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

      {/* Tabla de Asistencias */}
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
              {mockData.map((empleado) => (
                <tr key={empleado.codigo} className="border-t">
                  <td className="p-2">{empleado.codigo}</td>
                  <td className="p-2">{empleado.nombre}</td>
                  {empleado.asistencias.map((asistencia, index) => (
                    <td key={index} className="p-2">
                      <div
                        className={`
                        rounded-full px-3 py-1 text-center text-sm
                        ${
                          asistencia.estado === "asistió"
                            ? "bg-green-200"
                            : asistencia.estado === "tardanza"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        }
                      `}
                      >
                        8 horas
                      </div>
                    </td>
                  ))}
                  <td className="p-2">
                    <button
                      className="text-gray-600 hover:text-gray-800"
                      title="Editar asistencia"
                      aria-label="Editar asistencia"
                      onClick={() =>
                        router.push(
                          `/asistencias/edi?codigo=${empleado.codigo}`
                        )
                      }
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

// Datos de ejemplo
const mockData = [
  {
    codigo: "4236182",
    nombre: "Espinoza Alache Geraldin Alejandra",
    asistencias: [
      { estado: "asistió" },
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236183",
    nombre: "Carrasco Aguilar Jonathan Luis",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "no asistió" },
    ],
  },
  {
    codigo: "4236184",
    nombre: "Cruz Ramos Miguel Angel",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236185",
    nombre: "Dominguez Suarez Jean Jairo",
    asistencias: [
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236186",
    nombre: "Esteban Vilchez Michel Eduardo",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "no asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236187",
    nombre: "Fasando García Royer Raul",
    asistencias: [
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  {
    codigo: "4236188",
    nombre: "Guerrero García Ricky Jampier",
    asistencias: [
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "asistió" },
      { estado: "no asistió" },
    ],
  },
  {
    codigo: "4236189",
    nombre: "Ipanaque Alvarez Ruby Judith",
    asistencias: [
      { estado: "no asistió" },
      { estado: "asistió" },
      { estado: "tardanza" },
      { estado: "asistió" },
      { estado: "asistió" },
    ],
  },
  // Agrega más empleados aquí...
];
