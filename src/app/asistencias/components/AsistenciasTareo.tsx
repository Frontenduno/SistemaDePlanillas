"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { empleadosTareo } from "../data/asistenciasData";
import { Edit2 } from "lucide-react"; 

export default function AsistenciasTareo() {
  const router = useRouter();
  const [periodo, setPeriodo] = useState("Marzo");
  const [año, setAño] = useState("2022");
  const [categoria, setCategoria] = useState("Obrero");
  
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(localStorage.getItem("userRole") || "hr");
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* HEADER DINÁMICO */}
      <div className="flex justify-between items-center border-b pb-4">
        {role === "contador" ? (
          <>
            <h1 className="text-4xl font-normal text-blue-800">
              Control de Asistencias
            </h1>
            <Select defaultValue="jyp">
              <SelectTrigger className="w-64 bg-blue-100/50 text-blue-900 border-none font-medium text-lg h-12">
                <SelectValue placeholder="Seleccione empresa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jyp">J&P Perifericos S.A.C.</SelectItem>
              </SelectContent>
            </Select>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-blue-900">
              Asistencias (Tareo): J & P Perifericos
            </h1>
            <Button variant="outline" onClick={() => router.push('/asistencias')}>
              Volver al Listado
            </Button>
          </>
        )}
      </div>

      {/* CAJA GRIS DE FILTROS Y LEYENDA */}
      <Card className="p-6 bg-[#E5E5E5] border-none shadow-inner rounded-xl">
        <div className="grid grid-cols-[1fr_200px] gap-8">
          
          <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold w-20 text-right">Código:</label>
              <Input type="text" placeholder="Código" className="bg-white h-8 rounded-full px-4" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold w-20 text-right">Nombres:</label>
              <Input type="text" placeholder="Nombres" className="bg-white h-8 rounded-full px-4" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold w-20 text-right">Apellidos:</label>
              <Input type="text" placeholder="Apellidos" className="bg-white h-8 rounded-full px-4" />
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold w-20 text-right">Periodo:</label>
              <Select value={periodo} onValueChange={setPeriodo}>
                <SelectTrigger className="bg-white h-8 rounded-full px-4">
                  <SelectValue placeholder="Marzo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Marzo">Marzo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold w-20 text-right">Año:</label>
              <Select value={año} onValueChange={setAño}>
                <SelectTrigger className="bg-white h-8 rounded-full px-4">
                  <SelectValue placeholder="2022" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <label className="text-sm font-semibold whitespace-nowrap w-[150px] text-right mr-2">
                Categoría ocupacional:
              </label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="bg-white h-8 w-full rounded-full px-4">
                  <SelectValue placeholder="Obrero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Obrero">Obrero</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border border-gray-400 bg-white overflow-hidden h-fit">
            <div className="border-b border-gray-400 bg-white p-1">
              <div className="text-center font-serif text-sm">Leyenda</div>
            </div>
            <div className="p-0">
              <div className="flex items-center gap-3 border-b border-gray-400 p-2">
                <div className="w-8 h-3 rounded-sm bg-[#c4f092]"></div>
                <span className="text-xs font-serif">Si asistió</span>
              </div>
              <div className="flex items-center gap-3 border-b border-gray-400 p-2">
                <div className="w-8 h-3 rounded-sm bg-[#fde047]"></div>
                <span className="text-xs font-serif">Tardanza</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <div className="w-8 h-3 rounded-sm bg-[#fca5a5]"></div>
                <span className="text-xs font-serif">No asistió</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* TABLA DE TAREO */}
      <Card className="p-0 overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="border-b text-gray-700 bg-white">
                <th className="p-4 font-normal border-r border-gray-300">Código</th>
                <th className="p-4 font-normal border-r border-gray-300">Nombre y Apellidos</th>
                <th className="p-3 font-normal bg-[#5B63EE] text-white rounded-t-2xl mx-1 border-x-4 border-white">Lunes</th>
                <th className="p-3 font-normal bg-[#5B63EE] text-white rounded-t-2xl mx-1 border-x-4 border-white">Martes</th>
                <th className="p-3 font-normal bg-[#5B63EE] text-white rounded-t-2xl mx-1 border-x-4 border-white">Miercoles</th>
                <th className="p-3 font-normal bg-[#5B63EE] text-white rounded-t-2xl mx-1 border-x-4 border-white">Jueves</th>
                <th className="p-3 font-normal bg-[#5B63EE] text-white rounded-t-2xl mx-1 border-x-4 border-white">Viernes</th>
                <th className="p-3 bg-white w-10"></th>
              </tr>
            </thead>
            <tbody>
              {empleadosTareo.map((empleado, idx) => (
                <tr key={empleado.codigo} className={idx !== empleadosTareo.length - 1 ? "border-b border-gray-200 bg-white" : "bg-white"}>
                  <td className="p-4 border-r border-gray-300">{empleado.codigo}</td>
                  <td className="p-4 border-r border-gray-300 text-left">{empleado.nombre}</td>
                  {empleado.asistencias.map((asistencia, index) => (
                    <td key={index} className="p-2 border-x-4 border-white">
                      <div
                        className={`rounded-2xl px-2 py-2 text-center text-gray-700 font-medium w-[90px] mx-auto
                        ${
                          asistencia.estado === "asistió"
                            ? "bg-[#c4f092]"
                            : asistencia.estado === "tardanza"
                            ? "bg-[#fde047]"
                            : "bg-[#fca5a5]"
                        }`}
                      >
                        8 horas
                      </div>
                    </td>
                  ))}
                  <td className="p-2">
                    <button
                      className="text-gray-500 hover:text-gray-800 p-2"
                      title="Editar asistencia"
                      onClick={() => router.push(`/asistencias/editar/${empleado.codigo}`)}
                    >
                      <Edit2 className="w-5 h-5 fill-current" />
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