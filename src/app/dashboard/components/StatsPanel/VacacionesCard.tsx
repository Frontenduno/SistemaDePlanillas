import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import type { VacacionesStats } from "@/lib/dashboard";

interface VacacionesCardProps {
  data: VacacionesStats;
}

export function VacacionesCard({ data }: VacacionesCardProps) {
  return (
    <Card className="row-start-3 row-end-4 bg-[#DFDFDF]">
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-cyan-400 rounded-full flex items-center justify-center">
            <Plane className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Vacaciones</h1>
            <div>
              <label>Dias Tomados: </label>
              <label>{data.diasTomados} dias</label>
            </div>
            <div>
              <label>Dias Pendientes: </label>
              <label>{data.diasPendientes} dias</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
