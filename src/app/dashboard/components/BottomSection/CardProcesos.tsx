import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MoreVertical,
  DollarSign,
  FileText,
  PiggyBank,
  BarChart3,
} from "lucide-react";

interface Proceso {
  id: string;
  titulo: string;
  actualizado: boolean;
  icono: React.ElementType;
}

const procesos: Proceso[] = [
  { id: "1", titulo: "Sueldos", actualizado: true, icono: DollarSign },
  { id: "2", titulo: "Remuneraciones", actualizado: false, icono: FileText },
  { id: "3", titulo: "Aportes", actualizado: true, icono: PiggyBank },
  { id: "4", titulo: "Reportes", actualizado: false, icono: BarChart3 },
];

export function CardProcesos() {
  return (
    <div className="relative">
      {/* Contenedor con scrollbar arriba */}
      <div
        className="flex gap-2 overflow-x-auto pt-2.5 pb-2 px-2 bg-gray-100 rounded custom-scrollbar-top"
        dir="rtl"
      >
        <div className="flex gap-2" dir="ltr">
          {procesos.map((proceso) => (
            <Card
              key={proceso.id}
              className="bg-white relative overflow-hidden shrink-0 w-52 py-3"
            >
              {/* Borde izquierdo */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  proceso.actualizado ? "bg-blue-500" : "bg-yellow-500"
                }`}
              />

              {/* Contenido */}
              <div className="flex items-center justify-between px-1 py-0.5 pl-2.5">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {/* Icono */}
                  <div
                    className={`p-1.5 rounded-full ${
                      proceso.actualizado ? "bg-blue-100" : "bg-yellow-100"
                    }`}
                  >
                    <proceso.icono
                      className={`h-5 w-5 ${
                        proceso.actualizado
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    />
                  </div>

                  {/* Texto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate leading-tight">
                      {proceso.titulo}
                    </h3>
                    <p
                      className={`text-xs leading-tight ${
                        proceso.actualizado
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {proceso.actualizado ? "Actualizado" : "Desactualizado"}
                    </p>
                  </div>
                </div>

                {/* Botón de tres puntos */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 shrink-0"
                >
                  <MoreVertical className="h-3.5 w-3.5 text-gray-500" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Estilos personalizados para el scrollbar */}
      <style jsx>{`
        .custom-scrollbar-top::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar-top::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .custom-scrollbar-top::-webkit-scrollbar-thumb {
          background: #22c55e;
          border-radius: 10px;
        }

        .custom-scrollbar-top::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }

        .custom-scrollbar-top::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
    </div>
  );
}
