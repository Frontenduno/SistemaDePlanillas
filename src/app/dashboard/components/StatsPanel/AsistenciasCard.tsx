import { Card, CardContent } from "@/components/ui/card";
import { UserX } from "lucide-react";
import type { AsistenciasStats } from "@/lib/dashboard";

interface AsistenciasCardProps {
  data: AsistenciasStats;
}

export function AsistenciasCard({ data }: AsistenciasCardProps) {
  return (
    <Card className="row-start-2 row-end-3 bg-[#DFDFDF]">
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-orange-500 rounded-full flex items-center justify-center">
            <UserX className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Control de Asistencias</h1>
            <div>
              <label>Dias no Trabajados: </label>
              <label>{data.diasNoTrabajados} dias</label>
            </div>
            <div>
              <label>Dias Justificados: </label>
              <label>{data.diasJustificados} dias</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
