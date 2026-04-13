import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Lock, Unlock, ArrowRight, CalendarDays } from "lucide-react";
import type { ProcesoItem } from "@/lib/dashboard";
import { CardProcesos } from "./CardProcesos";

interface ProcessPanelProps {
  procesos: ProcesoItem[];
}

export function ProcessPanel({ procesos }: ProcessPanelProps) {
  const getIconColor = (color: "red" | "green" | "blue") => {
    switch (color) {
      case "red":
        return "bg-red-500";
      case "green":
        return "bg-[#22c55e]";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    // Aplicamos el fondo gris igual que en GraphicPanel y redondeamos los bordes
    <Card className="h-full bg-[#DFDFDF] border-0 rounded-2xl shadow-sm">
      <CardHeader className="pb-2 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#c4d600] rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <ArrowRight className="h-6 w-6 text-white" strokeWidth={3} />
            </div>
            <CardTitle className="text-2xl font-extrabold tracking-tight">PROCESOS</CardTitle>
          </div>
          
          <Select defaultValue="jyp">
            <SelectTrigger className="w-auto min-w-[220px] border-0 border-b border-black rounded-none text-xl font-bold bg-transparent shadow-none px-0 focus:ring-0">
              <SelectValue placeholder="Seleccionar empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jyp" className="font-semibold">J&P PERIFERICOS S.A.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="px-6 pb-6">
        <div className="space-y-2">
          {/* Botones superiores alineados a la derecha */}
          <div className="flex justify-end gap-3 mt-2 mb-6">
            <Button 
              variant="outline" 
              className="border-blue-800 text-blue-800 bg-transparent hover:bg-blue-100 font-bold px-5"
            >
              Ver Historial
            </Button>
            <Button
              className="bg-[#1a14b8] hover:bg-[#110d8a] text-white font-bold px-5"
            >
              Ver Anteriores
            </Button>
          </div>

          {/* Acordeón de Meses */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
            defaultValue="item-2" // Abre Agosto por defecto
          >
            {procesos.map((proceso) => (
              <AccordionItem 
                key={proceso.id} 
                value={proceso.id} 
                className="border-b border-gray-400 pb-2"
              >
                <AccordionTrigger className="hover:no-underline py-3 px-1">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-9 w-10 ${getIconColor(proceso.icono)} rounded-md flex items-center justify-center shadow-sm`}
                      >
                        {proceso.icono === "red" ? (
                          <Lock className="h-5 w-5 text-white" />
                        ) : (
                          <Unlock className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <span className="font-bold text-[#1a14b8] text-xl">
                        {proceso.mes}
                      </span>
                    </div>

                    {/* Barra de progreso para Agosto */}
                    {proceso.mes.includes("Agosto") && (
                      <div className="hidden sm:flex flex-col items-start gap-1 ml-auto mr-8">
                        <span className="text-[10px] text-gray-500 font-semibold leading-none">Progreso General</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2.5 bg-gray-300 rounded-full overflow-hidden">
                            <div className="bg-[#22c55e] w-1/4 h-full" />
                          </div>
                          <span className="text-[#22c55e] font-bold text-xs">25%</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium leading-none mt-0.5">
                          <CalendarDays className="w-3 h-3 text-red-500" />
                          01/07/2025 - 31/07/2025
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-1 py-4">
                  <CardProcesos />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}