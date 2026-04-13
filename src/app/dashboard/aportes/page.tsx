"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ArrowDownToLine } from "lucide-react";

// Mock de datos para la tabla basado en tu imagen
const APORTES_MOCK = [
  { 
    id: 1, iniciales: "JR", colorBg: "bg-blue-100", colorText: "text-blue-500", nombre: "Juan Rodrigez", 
    sueldoBase: "S/ 1,300", essalud: "+ S/ 800", afp: "+ S/ 800", total: "S/ 5,300", estado: "Calculado" 
  },
  { 
    id: 2, iniciales: "MG", colorBg: "bg-orange-100", colorText: "text-orange-500", nombre: "María García", 
    sueldoBase: "S/ 1,300", essalud: "+ S/ 500", afp: "+ S/ 800", total: "S/ 4,300", estado: "Calculado" 
  },
  { 
    id: 3, iniciales: "CP", colorBg: "bg-green-100", colorText: "text-green-500", nombre: "Carlos Pérez", 
    sueldoBase: "S/ 1,800", essalud: "+ S/ 300", afp: "+ S/ 800", total: "S/ 3,100", estado: "Calculado" 
  },
  { 
    id: 4, iniciales: "AL", colorBg: "bg-red-100", colorText: "text-red-500", nombre: "Ana López", 
    sueldoBase: "S/ 1,500", essalud: "-", afp: "-", total: "S/ 1,500", estado: "Pendiente" 
  },
];

export default function AportesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filtro simple por nombre
  const filteredEmpleados = APORTES_MOCK.filter(
    (emp) => emp.nombre.toLowerCase().includes(search.toLowerCase())
  );

  // Helper para el color de estado (basado en la imagen, son colores sólidos)
  const getEstadoColor = (estado: string) => {
    if (estado === "Calculado") return "bg-[#16a34a] text-white"; // Verde
    if (estado === "Pendiente") return "bg-[#f59e0b] text-white"; // Naranja/Amarillo
    return "bg-gray-400 text-white";
  };

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#150AB4] mb-6">Aportes</h1>
        
        {/* Botón Volver */}
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="mb-8 border-gray-300 text-gray-800 font-bold px-6 shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </Button>

        {/* Tarjetas KPI con píldora superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1: Total aportes */}
          <div className="bg-[#e6f0ff] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#cce0ff] relative">
            <div className="w-20 h-2 bg-[#1d4ed8] rounded-full mb-4"></div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">Total de aportes</h3>
            <p className="text-3xl font-bold text-[#2563eb] mb-1">S/ 100.00</p>
          </div>

          {/* Card 2: EsSalud */}
          <div className="bg-[#e8fce8] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#c1f7c1] relative">
            <div className="w-20 h-2 bg-[#22c55e] rounded-full mb-4"></div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">EsSalud</h3>
            <p className="text-3xl font-bold text-[#4ade80] mb-1">S/ 124,500</p>
            <p className="text-xs font-semibold text-[#22c55e]">Mes actual</p>
          </div>

          {/* Card 3: AFP/ONP */}
          <div className="bg-[#ffffe6] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#fef08a] relative">
            <div className="w-20 h-2 bg-[#eab308] rounded-full mb-4"></div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">AFP/ONP</h3>
            <p className="text-3xl font-bold text-[#facc15] mb-1">S/ 2,594</p>
            <p className="text-xs font-semibold text-[#eab308]">Por empleado</p>
          </div>

          {/* Card 4: SCTR */}
          <div className="bg-[#fff9e6] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#ffedd5] relative">
            <div className="w-20 h-2 bg-[#dc2626] rounded-full mb-4"></div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">SCTR</h3>
            <p className="text-3xl font-bold text-[#ef4444] mb-1">100%</p>
            <p className="text-xs font-semibold text-[#dc2626]">✓ Todos Pagados</p>
          </div>

        </div>

        {/* Sección Tabla */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Lista de empleados</h2>
        
        {/* Buscador y Exportar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2" />
            <Input
              placeholder="Buscar por nombre o DNI..."
              className="pl-10 rounded-md border-gray-200 shadow-sm h-10 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="text-gray-600 border-gray-300 font-medium">
            <ArrowDownToLine className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#3b36b5] text-white">
                <tr>
                  <th className="p-4 font-semibold rounded-tl-xl w-64">Empleado</th>
                  <th className="p-4 font-semibold text-center">Sueldo base</th>
                  <th className="p-4 font-semibold text-center">EsSalud</th>
                  <th className="p-4 font-semibold text-center">AFP</th>
                  <th className="p-4 font-semibold text-center">Total Aporte</th>
                  <th className="p-4 font-semibold rounded-tr-xl text-center">Estado</th>
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
                    <td className="p-4 font-semibold text-gray-800 text-center">{emp.sueldoBase}</td>
                    <td className="p-4 font-semibold text-gray-800 text-center">{emp.essalud}</td>
                    <td className="p-4 font-semibold text-gray-800 text-center">{emp.afp}</td>
                    <td className="p-4 font-semibold text-gray-800 text-center">{emp.total}</td>
                    
                    {/* Badge Estado (Calculado, Pendiente) */}
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded text-[10px] tracking-wide ${getEstadoColor(emp.estado)}`}>
                        {emp.estado}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredEmpleados.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No se encontraron registros.
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