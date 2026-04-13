"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft } from "lucide-react";

// Mock de datos para la tabla basado en tu imagen
const REMUNERACIONES_MOCK = [
  { 
    id: 1, iniciales: "JR", colorBg: "bg-blue-100", colorText: "text-blue-500", nombre: "Juan Rodrigez", 
    concepto: "Bono por desempeño", tipo: "BONO", tipoStyle: "bg-blue-100 text-blue-500", 
    monto: "S/ 1,200", fecha: "15/08/2025", estado: "Pendiente" 
  },
  { 
    id: 2, iniciales: "MG", colorBg: "bg-orange-100", colorText: "text-orange-500", nombre: "María García", 
    concepto: "Horas extras", tipo: "H.EXTRAS", tipoStyle: "bg-yellow-100 text-yellow-600", 
    monto: "S/ 450", fecha: "12/08/2025", estado: "Aprobada" 
  },
  { 
    id: 3, iniciales: "CP", colorBg: "bg-green-100", colorText: "text-green-500", nombre: "Carlos Pérez", 
    concepto: "Comisión por ventas", tipo: "COMISIÓN", tipoStyle: "bg-purple-100 text-purple-600", 
    monto: "S/ 2,100", fecha: "14/08/2025", estado: "Pendiente" 
  },
  { 
    id: 4, iniciales: "AL", colorBg: "bg-red-100", colorText: "text-red-500", nombre: "Ana López", 
    concepto: "Bono de productividad", tipo: "BONO", tipoStyle: "bg-blue-100 text-blue-500", 
    monto: "S/ 600", fecha: "10/08/2025", estado: "Aprobada" 
  },
];

export default function RemuneracionesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filtro simple por nombre o concepto
  const filteredEmpleados = REMUNERACIONES_MOCK.filter(
    (emp) =>
      emp.nombre.toLowerCase().includes(search.toLowerCase()) ||
      emp.concepto.toLowerCase().includes(search.toLowerCase())
  );

  // Helper para el color de estado
  const getEstadoColor = (estado: string) => {
    if (estado === "Pendiente") return "bg-[#fcebb6] text-[#c4921f]";
    if (estado === "Aprobada") return "bg-[#c4f092] text-[#5b9e65]";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#150AB4] mb-6">Remuneraciones</h1>
        
        {/* Botón Volver */}
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="mb-8 border-gray-300 text-gray-800 font-bold px-6 shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Volver
        </Button>

        {/* Tarjetas KPI con diseño tipo "hoja" */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1 */}
          <div className="bg-[#e0fcf2] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#c2f7e4]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Total Concepto</h3>
            <p className="text-4xl font-bold text-[#34d399] mb-1">156</p>
            <p className="text-xs font-semibold text-[#10b981]">12 por actualizar</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e8fce8] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#c1f7c1]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Monto Total</h3>
            <p className="text-3xl font-bold text-[#4ade80] mb-1">S/ 86,340</p>
            <p className="text-xs font-semibold text-[#22c55e]">Conceptos adicionales</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f0f4ff] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#d6e0ff]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Empleados con Bonos</h3>
            <p className="text-3xl font-bold text-[#818cf8] mb-1">35 / 48</p>
            <p className="text-xs font-semibold text-[#6366f1]">72.9% del personal</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fffee6] p-6 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl shadow-sm border border-[#fef08a]">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Última actualización</h3>
            <p className="text-3xl font-bold text-[#facc15] mb-1">15 Ago 2025</p>
            <p className="text-xs font-semibold text-[#eab308]">Hace 2 días</p>
          </div>

        </div>

        {/* Sección Tabla */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Detalle de Remuneraciones</h2>
        
        {/* Buscador */}
        <div className="relative w-full max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2" />
          <Input
            placeholder="Buscar empleo o concepto..."
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
                  <th className="p-4 font-semibold">Concepto</th>
                  <th className="p-4 font-semibold">Tipo</th>
                  <th className="p-4 font-semibold">Monto</th>
                  <th className="p-4 font-semibold">Fecha</th>
                  <th className="p-4 font-semibold rounded-tr-xl">Estado</th>
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
                    <td className="p-4 font-semibold text-gray-800">{emp.concepto}</td>
                    
                    {/* Badge Tipo (Bono, H.Extra, etc.) */}
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wide ${emp.tipoStyle}`}>
                        {emp.tipo}
                      </span>
                    </td>
                    
                    <td className="p-4 font-semibold text-gray-800">{emp.monto}</td>
                    <td className="p-4 font-semibold text-gray-800">{emp.fecha}</td>
                    
                    {/* Badge Estado (Pendiente, Aprobada) */}
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded text-[11px] font-bold tracking-wide ${getEstadoColor(emp.estado)}`}>
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