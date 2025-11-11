'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { Cumpleanos } from '@/lib/dashboard';
import { X } from 'lucide-react';

interface BirthdaysModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Cumpleanos[];
}

export function BirthdaysModal({ isOpen, onClose, data }: BirthdaysModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[80vh]">
        <Card className="bg-white">
          <CardHeader className="relative">
            <CardTitle className="text-2xl font-bold text-center">
              Todos los Cumpleaños del Mes
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-3 gap-8 p-4">
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
                  <p className="text-md text-gray-500">{persona.fecha}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
