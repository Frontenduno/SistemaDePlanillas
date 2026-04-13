"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, FileText, CheckSquare, Clock, XCircle, User, CalendarDays } from "lucide-react";

// Datos simulados actualizados con texto de mensaje y rol
const SOLICITUDES_MOCK = [
  { id: "SOL-001", colab: "Pedro Lara", rol: "Operario", tipo: "Vacaciones", fechaSol: "15 Ene 2025", inicio: "20 Ene 2025", fin: "27 Ene 2025", estado: "Pendiente", texto: "Solicito mis vacaciones correspondientes al periodo 2024." },
  { id: "SOL-002", colab: "Luis Palacios", rol: "Recursos Humanos", tipo: "Permiso", fechaSol: "16 Ene 2025", inicio: "18 Ene 2025", fin: "18 Ene 2025", estado: "En Revisión", texto: "Texto sobre la solicitud. Solicito permiso por motivos de salud para asistir a una cita médica programada en horas de la mañana." },
  { id: "SOL-003", colab: "Pablo Sanches", rol: "Administrativo", tipo: "Licencia Médica", fechaSol: "14 Ene 2025", inicio: "17 Ene 2025", fin: "19 Ene 2025", estado: "Aprobada", texto: "Adjunto descanso médico emitido por la clínica." },
  { id: "SOL-004", colab: "Juan Sulca", rol: "Operario", tipo: "Adelanto de Sueldo", fechaSol: "13 Ene 2025", inicio: "-", fin: "-", estado: "Rechazada", texto: "Solicito un adelanto de sueldo por motivos familiares de urgencia." },
  { id: "SOL-005", colab: "Mario Lopez", rol: "Operario", tipo: "Cambio de Horario", fechaSol: "15 Ene 2025", inicio: "25 Ene 2025", fin: "-", estado: "Pendiente", texto: "Solicito cambio de turno a la noche por motivos de estudios." },
  { id: "SOL-006", colab: "Daniel Flores", rol: "Administrativo", tipo: "Vacaciones", fechaSol: "12 Ene 2025", inicio: "19 Ene 2025", fin: "02 Feb 2025", estado: "Aprobada", texto: "Solicitud de vacaciones programadas." },
];

export default function SolicitudesPage() {
  const [search, setSearch] = useState("");
  // Estado para manejar el modal
  const [selectedSolicitud, setSelectedSolicitud] = useState<typeof SOLICITUDES_MOCK[0] | null>(null);

  // Función auxiliar para los colores de las etiquetas de estado
  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-100 text-yellow-700";
      case "En Revisión":
        return "bg-blue-200 text-blue-800";
      case "Aprobada":
        return "bg-green-200 text-green-800";
      case "Rechazada":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 w-full font-sans relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER Y TARJETAS DE MÉTRICAS */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h1 className="text-4xl font-bold text-[#150AB4]">Solicitudes</h1>

          <div className="flex flex-wrap gap-4">
            {/* Tarjeta 1: Total */}
            <div className="border border-blue-600 rounded-lg p-3 w-44 bg-[#f8faff] flex flex-col items-center relative">
              <div className="flex justify-between w-full items-center mb-2">
                <span className="text-sm font-bold text-gray-800">Total de Solicitudes</span>
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="border border-blue-600 rounded-full w-24 text-center bg-white font-bold text-blue-700">0</div>
            </div>

            {/* Tarjeta 2: Aprobadas */}
            <div className="border border-green-500 rounded-lg p-3 w-40 bg-[#f8fcf9] flex flex-col items-center relative">
              <div className="flex justify-between w-full items-center mb-2">
                <span className="text-sm font-bold text-gray-800">Aprobadas</span>
                <CheckSquare className="w-4 h-4 text-green-500" />
              </div>
              <div className="border border-green-500 rounded-full w-20 text-center bg-white font-bold text-green-600">0</div>
            </div>

            {/* Tarjeta 3: Pendientes */}
            <div className="border border-yellow-400 rounded-lg p-3 w-40 bg-[#fffdf8] flex flex-col items-center relative">
              <div className="flex justify-between w-full items-center mb-2">
                <span className="text-sm font-bold text-gray-800">Pendientes</span>
                <Clock className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="border border-yellow-400 rounded-full w-20 text-center bg-white font-bold text-yellow-500">0</div>
            </div>

            {/* Tarjeta 4: Rechazadas */}
            <div className="border border-red-500 rounded-lg p-3 w-40 bg-[#fff9f9] flex flex-col items-center relative">
              <div className="flex justify-between w-full items-center mb-2">
                <span className="text-sm font-bold text-gray-800">Rechazadas</span>
                <XCircle className="w-4 h-4 text-red-500" />
              </div>
              <div className="border border-red-500 rounded-full w-20 text-center bg-white font-bold text-red-500">0</div>
            </div>
          </div>
        </div>

        {/* BARRA DE BÚSQUEDA Y BOTÓN */}
        <div className="flex gap-6 items-center">
          <div className="bg-[#e5e7eb] flex-1 p-4 rounded-xl shadow-inner flex items-center">
            <div className="relative w-full max-w-3xl">
              <Input
                placeholder="Buscar solicitud..."
                className="pl-4 pr-10 rounded-md bg-white border-0 h-10 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
            </div>
          </div>
          
          <Button
            variant="outline"
            className="border-blue-300 text-black bg-[#f4f7fb] hover:bg-blue-50 h-14 px-6 rounded-lg font-bold"
          >
            Solicitudes Recientes
          </Button>
        </div>

        {/* TABLA DE SOLICITUDES */}
        <div className="bg-white rounded-t-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#342ABF] text-white">
                <tr>
                  <th className="p-4 w-12 text-center rounded-tl-2xl">
                    <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#342ABF]" />
                  </th>
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Colaborador</th>
                  <th className="p-4 font-semibold">Tipo de Solicitud</th>
                  <th className="p-4 font-semibold">Fecha de Solicitud</th>
                  <th className="p-4 font-semibold">Fecha de inicio</th>
                  <th className="p-4 font-semibold">Fecha fin</th>
                  <th className="p-4 font-semibold">Estado</th>
                  <th className="p-4 font-semibold text-center rounded-tr-2xl">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {SOLICITUDES_MOCK.map((solicitud, idx) => (
                  <tr
                    key={solicitud.id}
                    className={`border-b last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="p-4 text-center">
                      <Checkbox />
                    </td>
                    <td className="p-4 font-medium">{solicitud.id}</td>
                    <td className="p-4">{solicitud.colab}</td>
                    <td className="p-4">{solicitud.tipo}</td>
                    <td className="p-4">{solicitud.fechaSol}</td>
                    <td className="p-4">{solicitud.inicio}</td>
                    <td className="p-4">{solicitud.fin}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(solicitud.estado)}`}>
                        {solicitud.estado}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="bg-red-600 text-white text-[10px] px-3 py-1 rounded hover:bg-red-700 transition-colors">
                          Eliminar
                        </button>
                        <button 
                          onClick={() => setSelectedSolicitud(solicitud)}
                          className="bg-[#a5c6ff] text-blue-900 text-[10px] px-4 py-1 rounded hover:bg-blue-300 transition-colors"
                        >
                          Ver
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL / DETALLE DE SOLICITUD */}
      {selectedSolicitud && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-[#f0f2f5] rounded-xl shadow-2xl w-full max-w-2xl relative border border-gray-300">
            
            {/* Botón Cerrar (X) */}
            <button 
              onClick={() => setSelectedSolicitud(null)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-0.5 shadow-md hover:scale-105 transition-transform"
            >
              <XCircle className="w-8 h-8 text-red-600 fill-white" />
            </button>

            <div className="p-8">
              {/* Info del usuario y fecha */}
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-black text-white p-4 rounded-full">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-black leading-tight">{selectedSolicitud.colab}</h2>
                  <p className="text-xs text-gray-700 font-medium">{selectedSolicitud.rol}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800 ml-4 font-medium">
                  <CalendarDays className="w-5 h-5" />
                  {/* Fecha de la captura */}
                  21 - 03 - 2025 
                </div>
              </div>

              {/* Caja de texto del mensaje */}
              <div className="border border-gray-400 bg-transparent rounded-lg p-5 min-h-[120px] mb-8 text-sm text-gray-800">
                {selectedSolicitud.texto}
              </div>

              {/* Botones de acción */}
              <div className="flex justify-center gap-8">
                <Button 
                  onClick={() => setSelectedSolicitud(null)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold w-36 py-5 shadow-md"
                >
                  Rechazar
                </Button>
                <Button 
                  onClick={() => setSelectedSolicitud(null)}
                  className="bg-[#1864ff] hover:bg-blue-700 text-white font-bold w-36 py-5 shadow-md"
                >
                  Aprobar
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}