import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import type { ColaboradoresStats } from '@/lib/dashboard';

interface ColaboradoresCardProps {
  data: ColaboradoresStats;
}

export function ColaboradoresCard({ data }: ColaboradoresCardProps) {
  return (
    <Card className="row-start-1 row-end-2 bg-[#DFDFDF]">
      <CardContent className="h-full flex items-center px-4">
        <div className="flex flex-row items-center gap-6">
          <div className="h-28 w-28 bg-cyan-500 rounded-full flex items-center justify-center">
            <Users className="h-16 w-16 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Colaboradores</h1>
            <div>
              <label>Trabajadores: </label>
              <label>{data.trabajadores}</label>
            </div>
            <div>
              <label>Trabajadores nuevos: </label>
              <label>{data.trabajadoresNuevos}</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
