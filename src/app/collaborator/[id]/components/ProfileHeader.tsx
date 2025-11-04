'use client';
import { mockCollaborator } from "../mock/collaboratorData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProfileHeader() {
  const col = mockCollaborator;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 flex justify-between items-center">
      <div className="flex gap-6">

        <div className="space-y-1 text-sm">
          <p>
            <strong>Tipo y número de documento:</strong> {col.documento}
          </p>
          <p>
            <strong>Apellidos y Nombres:</strong> {col.nombre}
          </p>
          <p>
            <strong>Fecha de nacimiento:</strong> {col.fechaNacimiento}
          </p>
          <p>
            <strong>Sexo:</strong> {col.sexo} &nbsp;&nbsp;
            <strong>Estado civil:</strong> {col.estadoCivil}
          </p>
          <p>
            <strong>País emisor documento:</strong> {col.paisEmisor} &nbsp;&nbsp;
            <strong>Nacionalidad:</strong> {col.nacionalidad}
          </p>
          <p>
            <strong>Teléfono:</strong> {col.telefono} &nbsp;&nbsp;
            <strong>Correo electrónico:</strong> {col.correo}
          </p>
          <p>
            <strong>Dirección:</strong> {col.direccion}
          </p>
        </div>
      </div>

      <Button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-xl text-white">
        Generar Boleta
      </Button>
    </div>
  );
}
