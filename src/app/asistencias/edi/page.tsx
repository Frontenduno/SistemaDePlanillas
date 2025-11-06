"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function EdicionColaborador() {
  const router = useRouter();
  const [filtros, setFiltros] = useState({
    codigo: "",
    nombres: "",
    apellidos: "",
    periodo: "Marzo",
    año: "2022",
    categoria: "Obrero",
  });

  // Datos de ejemplo del colaborador
  const colaborador = {
    codigo: "4236182",
    nombreCompleto: "Espinoza Alache Alejandra Melissa",
    edad: "32 años",
    cargo: "Empleada",
    horasTotales: "48 horas",
    foto: "/path/to/photo.jpg", // Reemplazar con la ruta correcta de la foto
  };

  // Horarios por defecto
  const horarioInicial = {
    entrada: "8:00 am",
    salida: "6:00 pm",
    extras: "00:00 pm",
  };

  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">
        Asistencias (Tareo): J & P Perifericos
      </h1>

      {/* Card principal con filtros y leyenda */}
      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-[1fr_200px] gap-8">
          {/* Columna de filtros - lado izquierdo */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            <div>
              <label className="block text-sm mb-1">Código:</label>
              <Input
                type="text"
                placeholder="Código"
                className="bg-white"
                value={filtros.codigo}
                onChange={(e) =>
                  setFiltros({ ...filtros, codigo: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Nombres:</label>
              <Input
                type="text"
                placeholder="Nombres"
                className="bg-white"
                value={filtros.nombres}
                onChange={(e) =>
                  setFiltros({ ...filtros, nombres: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Apellidos:</label>
              <Input
                type="text"
                placeholder="Apellidos"
                className="bg-white"
                value={filtros.apellidos}
                onChange={(e) =>
                  setFiltros({ ...filtros, apellidos: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Periodo:</label>
              <Select
                value={filtros.periodo}
                onValueChange={(value) =>
                  setFiltros({ ...filtros, periodo: value })
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Marzo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Marzo">Marzo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm mb-1">Año:</label>
              <Select
                value={filtros.año}
                onValueChange={(value) =>
                  setFiltros({ ...filtros, año: value })
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="2022" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm mb-1">
                Categoría ocupacional:
              </label>
              <Select
                value={filtros.categoria}
                onValueChange={(value) =>
                  setFiltros({ ...filtros, categoria: value })
                }
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Obrero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Obrero">Obrero</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Leyenda - lado derecho */}
          <div className="border rounded-md p-2 bg-white h-fit">
            <div className="border-b pb-2 mb-2">
              <div className="text-center font-medium">Leyenda</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-200"></div>
                <span className="text-sm">Si asistió</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-200"></div>
                <span className="text-sm">Tardanza</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-200"></div>
                <span className="text-sm">No asistió</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Información del Colaborador */}
      <Card className="p-6 bg-gray-50">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Edición de colaborador(a)
        </h2>
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <Image
              src={colaborador.foto}
              alt="Foto del colaborador"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </Avatar>
          <div className="flex-1 grid grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Código
              </label>
              <p className="font-medium">{colaborador.codigo}</p>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-500">
                Nombre y Apellidos
              </label>
              <p className="font-medium">{colaborador.nombreCompleto}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Edad
              </label>
              <p className="font-medium">{colaborador.edad}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Cargo Ocupacional
              </label>
              <p className="font-medium">{colaborador.cargo}</p>
            </div>
            <div className="col-span-5">
              <label className="block text-sm font-medium text-gray-500">
                Horas totales
              </label>
              <p className="font-medium">{colaborador.horasTotales}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Horarios Semanales */}
      <Card className="p-6 bg-gray-50">
        <div className="grid grid-cols-8 gap-4">
          <div className="font-medium">
            <div className="h-12"></div>
            <div className="h-12 flex items-center">Hora de ingreso</div>
            <div className="h-12 flex items-center">Hora de salida</div>
            <div className="h-12 flex items-center">Horas extras</div>
          </div>

          {diasSemana.map((dia) => (
            <div key={dia} className="text-center">
              <div className="h-12 flex items-center justify-center font-medium">
                {dia}
              </div>
              <div className="h-12 flex items-center justify-center bg-blue-100 rounded mb-2">
                {horarioInicial.entrada}
              </div>
              <div className="h-12 flex items-center justify-center bg-blue-100 rounded mb-2">
                {horarioInicial.salida}
              </div>
              <div className="h-12 flex items-center justify-center bg-blue-100 rounded">
                {horarioInicial.extras}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => router.push("/asistencias/revi")}
          >
            Guardar
          </Button>
        </div>
      </Card>
    </div>
  );
}
