"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft } from "lucide-react";

// Mock de datos para la tabla basado en tu imagen
const EMPLEADOS_MOCK = [
  { id: 1, iniciales: "JR", colorBg: "bg-blue-100", colorText: "text-blue-500", nombre: "Juan Rodrigez", dni: "45678912", cargo: "Gerente de Ventas", sueldoBase: "S/ 4,500", bonos: "+ S/ 800", total: "S/ 5,300" },
  { id: 2, iniciales: "MG", colorBg: "bg-orange-100", colorText: "text-orange-500", nombre: "María García", dni: "78945612", cargo: "Contadora", sueldoBase: "S/ 3,800", bonos: "+ S/ 500", total: "S/ 4,300" },
  { id: 3, iniciales: "CP", colorBg: "bg-green-100", colorText: "text-green-500", nombre: "Carlos Pérez", dni: "12345678", cargo: "Técnico TI", sueldoBase: "S/ 2,800", bonos: "+ S/ 300", total: "S/ 3,100" },
  { id: 4, iniciales: "AL", colorBg: "bg-red-100", colorText: "text-red-500", nombre: "Ana López", dni: "98765432", cargo: "Asistente Admin", sueldoBase: "S/ 1,500", bonos: "-", total: "S/ 1,500" },
];

export default function SueldosPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filtro simple por nombre o DNI
  const filteredEmpleados = EMPLEADOS_MOCK.filter(
    (emp) =>
      emp.nombre.toLowerCase().includes(search.toLowerCase()) ||
      emp.dni.includes(search)
  );

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#150AB4] mb-6">Sueldos</h1>
        
        {/* Botón Volver */}
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="mb-8 border-gray-300 text-gray-800 font-bold px-6 shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </Button>

        {/* Tarjetas KPI con diseño tipo "hoja" (bordes asimétricos) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1: Total Nómina */}
          <div className="bg-[#e0fcf2] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#c2f7e4]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Total Nómina del Mes</h3>
            <p className="text-4xl font-bold text-[#34d399] mb-1">48</p>
            <p className="text-xs font-semibold text-[#10b981]">↑ 2 nuevos este mes</p>
          </div>

          {/* Card 2: Total en Sueldos */}
          <div className="bg-[#e8fce8] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#c1f7c1]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Total en Sueldos</h3>
            <p className="text-3xl font-bold text-[#4ade80] mb-1">S/ 124,500</p>
            <p className="text-xs font-semibold text-[#22c55e]">Mes actual</p>
          </div>

          {/* Card 3: Aportes */}
          <div className="bg-[#f0f4ff] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#d6e0ff]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Aportes</h3>
            <p className="text-3xl font-bold text-[#818cf8] mb-1">S/ 2,594</p>
            <p className="text-xs font-semibold text-[#6366f1]">Por empleado</p>
          </div>

          {/* Card 4: Estado de Pago */}
          <div className="bg-[#fffee6] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#fef08a]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Estado de Pago</h3>
            <p className="text-3xl font-bold text-[#facc15] mb-1">100%</p>
            <p className="text-xs font-semibold text-[#eab308]">✓ Todos Pagados</p>
          </div>

        </div>

        {/* Sección Tabla */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Lista de empleados</h2>
        
        {/* Buscador */}
        <div className="relative w-full max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2" />
          <Input
            placeholder="Buscar por nombre o DNI..."
            className="pl-10 rounded-md border-gray-200 shadow-sm h-10 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#3b36b5] text-white">
                <tr>
                  <th className="p-4 font-semibold rounded-tl-xl w-64">Empleado</th>
                  <th className="p-4 font-semibold">DNI</th>
                  <th className="p-4 font-semibold">Cargo</th>
                  <th className="p-4 font-semibold">Sueldo base</th>
                  <th className="p-4 font-semibold">Bonos</th>
                  <th className="p-4 font-semibold rounded-tr-xl">Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmpleados.map((emp, idx) => (
                  <tr
                    key={emp.id}
                    className={`border-b border-gray-100 last:border-0 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-100/70"
                    }`}
                  >
                    <td className="p-4 font-medium text-gray-800 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${emp.colorBg} ${emp.colorText}`}>
                        {emp.iniciales}
                      </div>
                      {emp.nombre}
                    </td>
                    <td className="p-4 font-semibold text-gray-800">{emp.dni}</td>
                    <td className="p-4 font-semibold text-gray-800">{emp.cargo}</td>
                    <td className="p-4 font-semibold text-gray-800">{emp.sueldoBase}</td>
                    <td className="p-4 font-semibold text-gray-800">{emp.bonos}</td>
                    <td className="p-4 font-semibold text-gray-800">{emp.total}</td>
                  </tr>
                ))}
                {filteredEmpleados.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No se encontraron empleados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}