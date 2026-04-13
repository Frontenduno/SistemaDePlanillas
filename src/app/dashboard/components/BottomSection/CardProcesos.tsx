"use client";

import { useRouter } from "next/navigation";
import { MoreVertical, DollarSign, FileText, ShieldCheck } from "lucide-react";

interface Proceso {
  id: string;
  titulo: string;
  actualizado: boolean;
  icono: React.ElementType;
  href?: string; // Propiedad opcional para la ruta
}

const procesos: Proceso[] = [
  // Añadimos el href a Sueldos
  { id: "1", titulo: "Sueldos", actualizado: true, icono: DollarSign, href: "/dashboard/sueldos" },
  { id: "2", titulo: "Remuneraciones", actualizado: false, icono: FileText, href: "/dashboard/remuneraciones" },
  { id: "3", titulo: "Aportes", actualizado: false, icono: FileText, href: "/dashboard/aportes" },
  { id: "4", titulo: "Reportes", actualizado: false, icono: ShieldCheck, href: "/dashboard/reportes" },
];

export function CardProcesos() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-3 overflow-x-auto custom-scrollbar pb-2">
        {procesos.map((proceso) => (
          <div
            key={proceso.id}
            onClick={() => proceso.href && router.push(proceso.href)}
            className={`flex items-center gap-3 bg-white p-2.5 rounded-lg border border-gray-300 shadow-sm min-w-[190px] shrink-0 border-l-[6px] transition-all duration-200 ${
              proceso.actualizado ? "border-l-[#2563eb]" : "border-l-[#eab308]"
            } ${proceso.href ? "cursor-pointer hover:shadow-md hover:bg-gray-50" : ""}`}
          >
            {/* Círculo con Icono */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                proceso.actualizado ? "bg-[#2563eb]" : "bg-[#facc15]"
              }`}
            >
              <proceso.icono className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>

            {/* Textos */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-bold text-gray-900 leading-tight">
                {proceso.titulo}
              </span>
              <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                {proceso.actualizado ? "Actualizado" : "Desactualizado"}
              </span>
            </div>

            {/* Tres Puntos */}
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}