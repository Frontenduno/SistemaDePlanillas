"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { UserX } from "lucide-react";
import type { AsistenciasStats } from "@/lib/dashboard";

interface AsistenciasCardProps {
  data: AsistenciasStats;
}

export function AsistenciasCard({ data }: AsistenciasCardProps) {
  const router = useRouter();

  return (
    <Card 
      onClick={() => router.push('/asistencias')}
      className="row-start-2 row-end-3 bg-[#DFDFDF] cursor-pointer hover:bg-[#d1d1d1] hover:shadow-md transition-all duration-200"
    >
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
            <UserX className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Control de Asistencias</h1>
            <div>
              <label className="text-gray-700 cursor-pointer">Dias no Trabajados: </label>
              <label className="font-medium cursor-pointer">{data.diasNoTrabajados} dias</label>
            </div>
            <div>
              <label className="text-gray-700 cursor-pointer">Dias Justificados: </label>
              <label className="font-medium cursor-pointer">{data.diasJustificados} dias</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}