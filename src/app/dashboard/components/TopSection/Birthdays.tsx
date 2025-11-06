import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Cumpleanos } from '@/lib/dashboard';

interface BirthdaysProps {
  data: Cumpleanos[];
}

export function Birthdays({ data }: BirthdaysProps) {
  return (
    <Card className="h-full bg-[#DFDFDF]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Cumpleaños del Mes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-full">
        <div className="grid grid-cols-3 gap-16">
          {data.map((persona, idx) => (
            <div key={idx} className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-1">
                <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                  {persona.nombre[0]}{persona.apellido[0]}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium text-[#150AB4] leading-5">
                {persona.nombre}{' '}
                <span className="line-clamp-1">{persona.apellido}</span>
              </p>
              <p className="text-md text-black-500">{persona.fecha}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
