'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { Cumpleanos } from '@/lib/dashboard';
import { useState } from 'react';
import { BirthdaysModal } from '@/app/modal/BirthdaysModal';

interface BirthdaysProps {
  data: Cumpleanos[];
}

export function Birthdays({ data }: BirthdaysProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedData = data.slice(0, 6);
  const hasMore = data.length > 6;

  return (
    <>
      <Card className="h-full bg-[#DFDFDF]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Cumpleaños del Mes
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-16">
              {displayedData.map((persona, idx) => (
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
          </div>
          {hasMore && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Ver más
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <BirthdaysModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={data}
      />
    </>
  );
}
