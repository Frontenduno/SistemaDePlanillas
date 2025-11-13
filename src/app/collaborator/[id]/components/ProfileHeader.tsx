"use client";
import { mockCollaborator } from "../mock/collaboratorData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfileHeader() {
  const col = mockCollaborator;

  return (
    <div className="bg-white shadow rounded-lg p-5 mb-4 flex justify-between items-start">
      {/* 🔹 Sección izquierda: avatar + información */}
      <div className="flex gap-6 w-full">
        {/* Avatar del colaborador */}
  <div className="shrink-0">
          <Avatar className="size-24 border">
            <AvatarImage src={col.foto} alt={col.nombre} />
            <AvatarFallback>{col.nombre.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Datos del colaborador */}
        <div className="flex flex-col flex-1 text-sm space-y-2">
          <div className="flex flex-wrap gap-x-6">
            <p>
              <strong>Tipo y número de documento:</strong> {col.documento}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong> {col.fechaNacimiento}
            </p>
            <p>
              <strong>País emisor documento:</strong> {col.paisEmisor}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6">
            <p>
              <strong>Apellidos y Nombres:</strong> {col.nombre}
            </p>
            <p>
              <strong>Sexo:</strong> {col.sexo}
            </p>
            <p>
              <strong>Estado civil:</strong> {col.estadoCivil}
            </p>
          </div>

          {/* Línea divisoria */}
          <hr className="my-2 border-gray-200" />

          {/* Campos de entrada */}
          <div className="grid grid-cols-3 gap-3 items-end">
            <div>
              <label className="text-xs font-semibold text-gray-600">
                Nacionalidad:
              </label>
              <Select defaultValue={col.nacionalidad}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Perú">Perú</SelectItem>
                  <SelectItem value="Chile">Chile</SelectItem>
                  <SelectItem value="Ecuador">Ecuador</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600">
                Teléfono:
              </label>
              <Input value={col.telefono} readOnly />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600">
                Dirección:
              </label>
              <Input value={col.direccion} readOnly />
            </div>
          </div>

          <div className="mt-2">
            <label className="text-xs font-semibold text-gray-600">
              Correo electrónico:
            </label>
            <Input value={col.correo} readOnly />
          </div>
        </div>
      </div>

      {/* 🔹 Botón de la derecha */}
      <Button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-xl text-white h-fit">
        Generar Boleta
      </Button>
    </div>
  );
}
