import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Trabajador } from '@/lib/dashboard';

interface NewEmployeesProps {
  data: Trabajador[];
}

export function NewEmployees({ data }: NewEmployeesProps) {
  return (
    <Card className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#DFDFDF]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Trabajadores nuevos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row px-4 justify-between">
          {data.map((trabajador, idx) => (
            <div key={idx} className="text-center">
              <Avatar className="h-24 w-20 rounded-[50%] mx-auto mb-2">
                <AvatarFallback className="bg-blue-100 text-blue-700">
                  {trabajador.nombre[0]}{trabajador.apellido[0]}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg text-[#150AB4] leading-5">
                {trabajador.nombre}{' '}
                <span className="line-clamp-1">{trabajador.apellido}</span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
