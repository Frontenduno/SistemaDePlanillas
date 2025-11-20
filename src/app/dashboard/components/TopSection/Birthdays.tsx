'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { Cumpleanos } from '@/lib/dashboard';
import { useState } from 'react';
import { BirthdaysModal } from '@/app/modal/BirthdaysModal';
import { Cake } from 'lucide-react';

interface BirthdaysProps {
  data: Cumpleanos[];
}

export function Birthdays({ data }: BirthdaysProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedData = data.slice(0, 6);
  const hasMore = data.length > 6;

  return (
    <>
      <Card className="h-full bg-[#DFDFDF] gap-3">
        <CardHeader className='gap-x-2'>
          <div className="flex items-center gap-x-2">
            <div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center">
              <Cake className="h-7 w-7 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold flex-1">
              CUMPLEAÑOS DEL MES
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-1">
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-x-20 gap-y-16">
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
