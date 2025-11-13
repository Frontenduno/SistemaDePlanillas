'use client';

import React, { use } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Users, UserX, Plane, TrendingUp, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HRDashboard = () => {
  // Datos de ejemplo
  const trabajadoresNuevos = [
    { nombre: 'Luis', apellido: 'Pérez', imagen: null },
    { nombre: 'Carmen', apellido: 'Gutiérrez', imagen: null },
    { nombre: 'Alejandra', apellido: 'Espinoza', imagen: null },
    { nombre: 'Felipe', apellido: 'Torres', imagen: null }
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header con perfil */}
        <Card className="mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trabajadores nuevos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trabajadores nuevos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
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

            {/* Procesos */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-gray-800" />
                    </div>
                    <CardTitle className="text-lg">PROCESOS</CardTitle>
                  </div>
                  <Select defaultValue="jyp">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Seleccionar empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jyp">J&P PERIFÉRICOS S.A.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-end gap-2 mb-3">
                    <Button variant="outline" size="sm">Ver Historial</Button>
                    <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Ver Anteriores
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-red-500 rounded flex items-center justify-center">
                        <CalendarDays className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">Julio &apos;23</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  
                  <div className="border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-green-500 rounded flex items-center justify-center">
                        <CalendarDays className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">Agosto &apos;23</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Cumpleaños del Mes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cumpleaños del Mes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {cumpleanos.map((persona, idx) => (
                    <div key={idx} className="text-center">
                      <Avatar className="h-12 w-12 mx-auto mb-1">
                        <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                          {persona.nombre[0]}{persona.apellido[0]}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-xs font-medium">{persona.nombre}</p>
                      <p className="text-xs text-gray-500">{persona.apellido}</p>
                      <p className="text-xs text-gray-400">{persona.fecha}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Colaboradores */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  Colaboradores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trabajadores:</span>
                  <span className="font-semibold">114</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Trabajadores nuevos:</span>
                  <span className="font-semibold">31</span>
                </div>
              </CardContent>
            </Card>

            {/* Control de Asistencias */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <UserX className="h-5 w-5 text-white" />
                  </div>
                  Control de Asistencias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Dias no Trabajados:</span>
                  <span className="font-semibold">17 días</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Días Justificados:</span>
                  <span className="font-semibold">9 días</span>
                </div>
              </CardContent>
            </Card>

            {/* Vacaciones */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="h-10 w-10 bg-cyan-400 rounded-full flex items-center justify-center">
                    <Plane className="h-5 w-5 text-white" />
                  </div>
                  Vacaciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Días Tomados:</span>
                  <span className="font-semibold">17 días</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Días Pendientes:</span>
                  <span className="font-semibold">6 días</span>
                </div>
              </CardContent>
            </Card>

            {/* Gráficos */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Gráficos</CardTitle>
                <div className="flex gap-2 mt-3">
                  <Badge className="bg-blue-600 hover:bg-blue-700">Trabajadores</Badge>
                  <Badge variant="outline">Gastos</Badge>
                  <Badge variant="outline">Horas Extras</Badge>
                  <Badge variant="outline">Liquidaciones</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-right text-gray-500 mt-2">Tiempo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;