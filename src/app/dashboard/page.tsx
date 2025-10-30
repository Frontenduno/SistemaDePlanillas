'use client';

import React, { use } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Users, UserX, Plane, TrendingUp, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { div, h1 } from 'framer-motion/client';

const trabajadoresNuevos = [
    { nombre: 'Luis', apellido: 'Pérez', imagen: null },
    { nombre: 'Carmen', apellido: 'Gutiérrez', imagen: null },
    { nombre: 'Alejandra', apellido: 'Espinoza', imagen: null }
  ];

  const cumpleanos = [
    { nombre: 'Luis', apellido: 'Bravo', fecha: 'Sábado 21', imagen: null },
    { nombre: 'Carmen', apellido: 'Gutiérrez', fecha: 'Domingo 22', imagen: null },
    { nombre: 'Alejandra', apellido: 'Espinoza', fecha: 'Domingo 22', imagen: null },
    { nombre: 'Felipe', apellido: 'Ruiz', fecha: 'Domingo 21', imagen: null },
    { nombre: 'Luis', apellido: 'Pérez', fecha: 'Domingo 21', imagen: null },
    { nombre: 'Carmen', apellido: 'Gutiérrez', fecha: 'Domingo 21', imagen: null }
  ];

  const chartData = [
    { mes: 'Abr', value: 20 },
    { mes: 'May', value: 45 },
    { mes: 'Jun', value: 25 },
    { mes: 'Jul', value: 35 },
    { mes: 'Ago', value: 55 },
    { mes: 'Sep', value: 48 },
    { mes: 'Oct', value: 42 }
  ];

export default function Dashboard() {
  return (
    <div className=" grid grid-cols-1 grid-rows-2 gap-4 p-6">
      <div className=" col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-3 gap-2">
        <div className='col-start-1 col-end-2 grid grid-rows-2 grid-col-1 gap-4'>
          <Card className="col-start-1 col-end-2 row-start-1 row-end-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-gray-300 text-gray-700 text-xl">FA</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold">Francisco Álvarez Ruiz</h1>
                  <p className="text-gray-600">Recursos Humanos</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4" />
                    <span>21 - 03 - 2025</span>
                    <span className="ml-2">34 años</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-start-1 col-end-2 row-start-2 row-end-3">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Trabajadores nuevos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row px-4 justify-between">
                {trabajadoresNuevos.map((trabajador, idx) => (
                  <div key={idx} className="text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {trabajador.nombre[0]}{trabajador.apellido[0]}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">{trabajador.nombre}</p>
                    <p className="text-xs text-gray-500">{trabajador.apellido}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  )
}