"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, XCircle } from "lucide-react";

// Datos iniciales
const INITIAL_MOCK = [
  { id: "SOL-001", colab: "Pedro Lara", tipo: "Vacaciones", fechaSol: "15 Ene 2025", inicio: "20 Ene 2025", fin: "27 Ene 2025", estado: "Pendiente" },
  { id: "SOL-002", colab: "Luis Palacios", tipo: "Permiso", fechaSol: "16 Ene 2025", inicio: "18 Ene 2025", fin: "18 Ene 2025", estado: "En Revisión" },
  { id: "SOL-003", colab: "Pablo Sanches", tipo: "Licencia Médica", fechaSol: "14 Ene 2025", inicio: "17 Ene 2025", fin: "19 Ene 2025", estado: "Aprobada" },
  { id: "SOL-004", colab: "Juan Sulca", tipo: "Adelanto de Sueldo", fechaSol: "13 Ene 2025", inicio: "-", fin: "-", estado: "Rechazada" },
  { id: "SOL-005", colab: "Mario Lopez", tipo: "Cambio de Horario", fechaSol: "15 Ene 2025", inicio: "25 Ene 2025", fin: "-", estado: "Pendiente" },
  { id: "SOL-006", colab: "Daniel Flores", tipo: "Vacaciones", fechaSol: "12 Ene 2025", inicio: "19 Ene 2025", fin: "02 Feb 2025", estado: "Aprobada" },
];

export default function EnvioSolicitudesPage() {
  // Estados para la tabla
  const [solicitudes, setSolicitudes] = useState(INITIAL_MOCK);
  const [search, setSearch] = useState("");
  const [estadoFilter, setEstadoFilter] = useState<string>("all");

  // Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    colab: "",
    tipo: "",
    fechaSol: "",
    inicio: "",
    fin: "",
    descripcion: "",
  });

  // Autocompletar la "Fecha de Solicitud" con la fecha de hoy al abrir el modal
  useEffect(() => {
    if (isModalOpen) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      setFormData(prev => ({ ...prev, fechaSol: `${yyyy}-${mm}-${dd}` }));
    }
  }, [isModalOpen]);

  // Función para dar color a los estados
  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case "Pendiente":
        return "bg-[#fcebb6] text-[#c4921f]";
      case "En Revisión":
        return "bg-[#cbf4f9] text-[#4eb0c7]";
      case "Aprobada":
        return "bg-[#c4f092] text-[#5b9e65]";
      case "Rechazada":
        return "bg-[#fca5a5] text-[#d9534f]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Función para formatear las fechas de YYYY-MM-DD a "DD Mes YYYY"
  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "-";
    const [year, month, day] = dateString.split("-");
    if (!year || !month || !day) return "-";
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    return `${day} ${meses[parseInt(month, 10) - 1]} ${year}`;
  };

  // Filtrado de la tabla
  const filteredSolicitudes = solicitudes.filter((sol) => {
    const matchesSearch = sol.colab.toLowerCase().includes(search.toLowerCase()) || sol.id.toLowerCase().includes(search.toLowerCase());
    const matchesEstado = estadoFilter === "all" || sol.estado === estadoFilter;
    return matchesSearch && matchesEstado;
  });

  // Función para manejar el envío
  const handleEnviarSolicitud = () => {
    if (!formData.colab || !formData.tipo || !formData.fechaSol) return;

    // Generar un nuevo ID correlativo
    const newIdNum = solicitudes.length + 1;
    const newId = `SOL-${newIdNum.toString().padStart(3, "0")}`;

    const nuevaSolicitud = {
      id: newId,
      colab: formData.colab,
      tipo: formData.tipo,
      fechaSol: formatDisplayDate(formData.fechaSol),
      inicio: formatDisplayDate(formData.inicio),
      fin: formatDisplayDate(formData.fin),
      estado: "Pendiente",
    };

    setSolicitudes([nuevaSolicitud, ...solicitudes]);
    
    // Limpiar y cerrar
    setFormData({ colab: "", tipo: "", fechaSol: "", inicio: "", fin: "", descripcion: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 w-full font-sans relative">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold text-[#150AB4]">
            Envió de Solicitudes
          </h1>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4b45d6] hover:bg-[#3b36b5] text-white px-6 py-5 rounded-md font-medium text-md flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Nueva Solicitud
          </Button>
        </div>

        {/* BUSCADOR Y FILTROS */}
        <div className="bg-[#e5e7eb] p-4 rounded-xl shadow-inner flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full max-w-3xl">
            <Input
              placeholder="Buscar solicitud..."
              className="pl-4 pr-10 rounded-md bg-white border-0 h-10 w-full shadow-sm text-gray-600 placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
          </div>
          
          <div className="w-full md:w-56">
            <Select value={estadoFilter} onValueChange={setEstadoFilter}>
              <SelectTrigger className="bg-white border-0 h-10 shadow-sm text-gray-700 font-medium">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="Pendiente">Pendiente</SelectItem>
                <SelectItem value="En Revisión">En Revisión</SelectItem>
                <SelectItem value="Aprobada">Aprobada</SelectItem>
                <SelectItem value="Rechazada">Rechazada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* TABLA DE SOLICITUDES */}
        <div className="bg-white rounded-t-2xl shadow-sm overflow-hidden border border-gray-200 mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#4b45d6] text-white">
                <tr>
                  <th className="p-4 w-12 text-center rounded-tl-2xl">
                    <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#4b45d6]" />
                  </th>
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Colaborador</th>
                  <th className="p-4 font-semibold">Tipo de Solicitud</th>
                  <th className="p-4 font-semibold">Fecha de Solicitud</th>
                  <th className="p-4 font-semibold">Fecha de inicio</th>
                  <th className="p-4 font-semibold">Fecha fin</th>
                  <th className="p-4 font-semibold rounded-tr-2xl">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredSolicitudes.map((solicitud, idx) => (
                  <tr
                    key={solicitud.id}
                    className={`border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-[#f4f5f7]"}`}
                  >
                    <td className="p-4 text-center">
                      <Checkbox className="border-gray-400" />
                    </td>
                    <td className="p-4 font-medium text-gray-700">{solicitud.id}</td>
                    <td className="p-4 text-gray-800">{solicitud.colab}</td>
                    <td className="p-4 text-gray-800">{solicitud.tipo}</td>
                    <td className="p-4 text-gray-800">{solicitud.fechaSol}</td>
                    <td className="p-4 text-gray-800">{solicitud.inicio}</td>
                    <td className="p-4 text-gray-800">{solicitud.fin}</td>
                    <td className="p-4">
                      <span className={`px-4 py-1 rounded-full text-[11px] font-bold tracking-wide ${getBadgeColor(solicitud.estado)}`}>
                        {solicitud.estado}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredSolicitudes.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-gray-500">
                      No se encontraron solicitudes.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* MODAL: Nueva Solicitud */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[#f4f5f7] rounded-xl shadow-2xl w-full max-w-3xl relative overflow-hidden border border-gray-300">
            
            {/* Header del Modal */}
            <div className="bg-[#f4f5f7] px-8 py-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-[#150AB4]">Nueva Solicitud</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="hover:scale-110 transition-transform"
              >
                <XCircle className="w-8 h-8 text-white fill-red-600" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8 space-y-6 bg-[#f4f5f7]">
              
              {/* FILA 1: Colaborador y Tipo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Colaborador <span className="text-red-500">*</span></label>
                  <Select onValueChange={(val) => setFormData({ ...formData, colab: val })} value={formData.colab}>
                    <SelectTrigger className="w-full bg-white border-gray-300 h-11 shadow-sm">
                      <SelectValue placeholder="Seleccionar colaborador..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pedro Lara">Pedro Lara</SelectItem>
                      <SelectItem value="Luis Palacios">Luis Palacios</SelectItem>
                      <SelectItem value="Pablo Sanches">Pablo Sanches</SelectItem>
                      <SelectItem value="Juan Sulca">Juan Sulca</SelectItem>
                      <SelectItem value="Mario Lopez">Mario Lopez</SelectItem>
                      <SelectItem value="Daniel Flores">Daniel Flores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Tipo de Solicitud <span className="text-red-500">*</span></label>
                  <Select onValueChange={(val) => setFormData({ ...formData, tipo: val })} value={formData.tipo}>
                    <SelectTrigger className="w-full bg-white border-gray-300 h-11 shadow-sm">
                      <SelectValue placeholder="Seleccionar tipo..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vacaciones">Vacaciones</SelectItem>
                      <SelectItem value="Permiso">Permiso</SelectItem>
                      <SelectItem value="Licencia Médica">Licencia Médica</SelectItem>
                      <SelectItem value="Adelanto de Sueldo">Adelanto de Sueldo</SelectItem>
                      <SelectItem value="Cambio de Horario">Cambio de Horario</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* FILA 2: Fechas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Fecha de Solicitud <span className="text-red-500">*</span></label>
                  <Input 
                    type="date" 
                    className="bg-white h-11"
                    value={formData.fechaSol}
                    onChange={(e) => setFormData({ ...formData, fechaSol: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Fecha de inicio</label>
                  <Input 
                    type="date" 
                    className="bg-white h-11"
                    value={formData.inicio}
                    onChange={(e) => setFormData({ ...formData, inicio: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Fecha fin</label>
                  <Input 
                    type="date" 
                    className="bg-white h-11"
                    value={formData.fin}
                    onChange={(e) => setFormData({ ...formData, fin: e.target.value })}
                  />
                </div>
              </div>

              {/* FILA 3: Descripción */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Descripción (Opcional):</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-4 min-h-[100px] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm text-gray-700 placeholder:text-gray-500 resize-none"
                  placeholder="Ingrese detalles adicionales o motivos de la solicitud..."
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                />
              </div>

              {/* Botón de Enviar */}
              <div className="pt-2 flex justify-end">
                <Button 
                  onClick={handleEnviarSolicitud}
                  disabled={!formData.colab || !formData.tipo || !formData.fechaSol}
                  className="bg-[#4b45d6] hover:bg-[#3b36b5] text-white px-8 py-5 rounded-md font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Agregar Solicitud
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}