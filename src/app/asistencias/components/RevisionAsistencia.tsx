"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { empleadosResumen } from "../data/asistenciasData";

export default function RevisionAsistencia() {
  const router = useRouter();

  const [filtros, setFiltros] = useState({
    empresa: "Fábrica XYZ S.A.C.",
    periodo: "Marzo",
    anio: "2040",
    categoria: "Obrero",
    periodicidad: "Semanal",
    dias: 30,
  });

  return (
    <div className="flex flex-col h-screen p-2 space-y-2">
      {/* PANEL SUPERIOR DE FILTROS */}
      <div className="bg-gray-100 border rounded-xl p-2 text-xs shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-1">
          <div className="flex items-center gap-2">
            <label className="font-semibold">Periodo:</label>
            <Select defaultValue={filtros.periodo}>
              <SelectTrigger className="h-8 w-28">
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Marzo">Marzo</SelectItem>
                <SelectItem value="Abril">Abril</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Año activo:</label>
            <Select defaultValue={filtros.anio}>
              <SelectTrigger className="h-8 w-24">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2040">2040</SelectItem>
                <SelectItem value="2041">2041</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold whitespace-nowrap">
              Categoría Ocupacional:
            </label>
            <Select defaultValue={filtros.categoria}>
              <SelectTrigger className="h-8 w-32">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Obrero">Obrero</SelectItem>
                <SelectItem value="Empleado">Empleado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Periodicidad:</label>
            <Select defaultValue={filtros.periodicidad}>
              <SelectTrigger className="h-8 w-28">
                <SelectValue placeholder="Periodicidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Semanal">Semanal</SelectItem>
                <SelectItem value="Mensual">Mensual</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative flex items-center justify-between text-gray-600 text-sm my-3">
          <div className="absolute inset-x-0 top-1/2 border-t border-gray-400"></div>
          <span className="bg-gray-100 px-2 font-medium z-10">
            Filtros básicos
          </span>
          <span className="bg-gray-100 px-2 italic text-xs z-10">
            Modificación
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="font-semibold w-16">Código:</label>
            <Input placeholder="Código" className="h-8 w-full bg-white" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold w-16">Nombre:</label>
            <Input placeholder="Nombre" className="h-8 w-full bg-white" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold whitespace-nowrap">
              Días Trabajados:
            </label>
            <Input
              type="number"
              value={filtros.dias}
              className="h-8 w-16 text-center"
              readOnly
            />
            <Button className="bg-blue-800 hover:bg-blue-900 text-white h-8 px-4 text-xs">
              Aplicar
            </Button>
          </div>
          <div></div>
          <div className="flex justify-end">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white h-8 px-4 text-xs">
              Guardar
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="font-semibold text-sm">Empresa:</label>
        <Select defaultValue={filtros.empresa}>
          <SelectTrigger className="h-8 w-72 bg-white">
            <SelectValue placeholder="Seleccione empresa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fábrica XYZ S.A.C.">
              Fábrica XYZ S.A.C.
            </SelectItem>
            <SelectItem value="Industrias del Sur S.A.">
              Industrias del Sur S.A.
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-xl overflow-hidden flex-1 overflow-y-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-white text-gray-700">
            <tr>
              <th
                colSpan={4}
                className="border p-2 text-center bg-white font-semibold"
              >
                Datos básicos
              </th>
              <th
                colSpan={6}
                className="border p-2 text-center bg-white font-semibold"
              >
                Control de asistencia
              </th>
              <th
                colSpan={2}
                className="border p-2 text-center bg-white font-semibold"
              >
                Horas extras
              </th>
            </tr>
            <tr>
              <th className="border p-2">Código</th>
              <th className="border p-2">Apellidos y Nombres</th>
              <th className="border p-2">Básico</th>
              <th className="border p-2">Días L.</th>
              <th className="border p-2">Días T.</th>
              <th className="border p-2">Faltas</th>
              <th className="border p-2">H. Permiso</th>
              <th className="border p-2">D. Permiso</th>
              <th className="border p-2">Tardanza</th>
              <th className="border p-2">H. Trabajadas</th>
              <th className="border p-2">H.E. 25%</th>
              <th className="border p-2">H.E. 35%</th>
            </tr>
          </thead>
          <tbody>
            {empleadosResumen.map((e, i) => (
              <tr key={i} className="text-center hover:bg-gray-50">
                <td className="border p-2">{e.codigo}</td>
                <td className="border p-2 text-left">{e.nombre}</td>
                <td className="border p-2">{e.basico.toFixed(2)}</td>
                <td className="border p-2">{e.diasL}</td>
                <td className="border p-2">{e.diasT}</td>
                <td className="border p-2">{e.faltas}</td>
                <td className="border p-2">{e.hPerm}</td>
                <td className="border p-2">{e.dPerm}</td>
                <td className="border p-2">{e.tardanza}</td>
                <td className="border p-2">{e.hTrab}</td>
                <td className="border p-2">{e.he25}</td>
                <td className="border p-2">{e.he35}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
        <span className="text-sm text-gray-500">
          del 1 al 10 de 20 resultados
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            {"<"}
          </Button>
          <Button variant="secondary" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            {">"}
          </Button>
        </div>
        
        {/* Aquí está el cambio hacia el uso del router.push de Next.js */}
        <Button 
          className="bg-blue-700 text-white hover:bg-blue-800" 
          onClick={() => router.push('/asistencias/tareo')}
        >
          Revisión de Asistencias
        </Button>
      </div>
    </div>
  );
}