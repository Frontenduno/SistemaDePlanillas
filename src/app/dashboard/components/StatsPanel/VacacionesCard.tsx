"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import type { VacacionesStats } from "@/lib/dashboard";

interface VacacionesCardProps {
  data: VacacionesStats;
}

export function VacacionesCard({ data }: VacacionesCardProps) {
  const router = useRouter();

  return (
    <Card 
      onClick={() => router.push('/vacaciones')}
      className="row-start-3 row-end-4 bg-[#DFDFDF] cursor-pointer hover:bg-[#d1d1d1] hover:shadow-md transition-all duration-200"
    >
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-cyan-400 rounded-full flex items-center justify-center shrink-0">
            <Plane className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Vacaciones</h1>
            <div>
              <label className="text-gray-700 cursor-pointer">Dias Tomados: </label>
              <label className="font-medium cursor-pointer">{data.diasTomados} dias</label>
            </div>
            <div>
              <label className="text-gray-700 cursor-pointer">Dias Pendientes: </label>
              <label className="font-medium cursor-pointer">{data.diasPendientes} dias</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}