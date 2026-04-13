"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import type { ColaboradoresStats } from "@/lib/dashboard";

interface ColaboradoresCardProps {
  data: ColaboradoresStats;
}

export function ColaboradoresCard({ data }: ColaboradoresCardProps) {
  const router = useRouter();

  return (
    <Card 
      onClick={() => router.push('/collaborator')}
      className="row-start-1 row-end-2 bg-[#DFDFDF] cursor-pointer hover:bg-[#d1d1d1] hover:shadow-md transition-all duration-200"
    >
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-cyan-500 rounded-full flex items-center justify-center shrink-0">
            <Users className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Colaboradores</h1>
            <div>
              <label className="text-gray-700 cursor-pointer">Trabajadores: </label>
              <label className="font-medium cursor-pointer">{data.trabajadores}</label>
            </div>
            <div>
              <label className="text-gray-700 cursor-pointer">Trabajadores nuevos: </label>
              <label className="font-medium cursor-pointer">{data.trabajadoresNuevos}</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}