import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import type { Usuario } from '@/lib/dashboard';

interface UserCardProps {
  data: Usuario;
}

export function UserCard({ data }: UserCardProps) {
  const iniciales = `${data.nombre[0]}${data.apellido[0]}`;

  return (
    <Card className="col-start-1 col-end-2 row-start-1 row-end-2 bg-[#DFDFDF] py-0">
      <CardContent className="h-full flex items-center justify-center px-4">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="w-36 h-44 rounded-[50%]">
            <AvatarFallback className="bg-gray-300 text-gray-700 text-xl">
              {iniciales}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              {data.nombre} {data.apellido}
            </h1>
            <p className="text-gray-600">{data.puesto}</p>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <CalendarDays className="h-4 w-4" />
              <span>{data.fechaNacimiento}</span>
            </div>
            <span className="text-sm text-gray-500">{data.edad} años</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
