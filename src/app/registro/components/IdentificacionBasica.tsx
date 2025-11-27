"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/DatePicker";

interface Props {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  numeroDocumento: string;
  tipoDocumento: string;
  fechaVinculacion: string;
  fechaRetiro: string;
  cargo?: string;
  onChange: (field: string, value: string) => void;
}

export default function IdentificacionBasica({
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  numeroDocumento,
  tipoDocumento,
  fechaVinculacion,
  fechaRetiro,
  cargo,
  onChange,
}: Props) {
  const tipoDocumentoLabel =
    tipoDocumento === "carnet"
      ? "Carnet Extranjeria"
      : tipoDocumento === "dni"
      ? "DNI"
      : tipoDocumento;
  const cargoLabel =
    cargo === "empleador"
      ? "Empleador"
      : cargo === "ejecutivo"
      ? "Ejecutivo"
      : cargo === "obrero"
      ? "Obrero"
      : "No seleccionado";

  // DatePicker handles its own display state; parent receives ISO strings via onChange

  return (
    <>
      {/* Row 1: Nombre, Apellido Paterno, Apellido Materno (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <Input className="bg-gray-200 h-10 w-full" value={nombre} disabled />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apellido Paterno
          </label>
          <Input
            className="bg-gray-200 h-10 w-full"
            value={apellidoPaterno}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apellido Materno
          </label>
          <Input
            className="bg-gray-200 h-10 w-full"
            value={apellidoMaterno}
            disabled
          />
        </div>
      </div>

      {/* Row 2: Tipo de Documento (col 1), N° de Documento (col 2), Cargo (col 4) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Documento*
          </label>
          <Input
            className="bg-gray-200 h-10 w-full"
            value={tipoDocumentoLabel}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            N° de Documento*
          </label>
          <Input
            className="bg-gray-200 h-10 w-full"
            value={numeroDocumento}
            disabled
          />
        </div>
        <div></div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cargo
          </label>
          <Input
            className="bg-gray-200 h-10 w-full"
            value={cargoLabel}
            disabled
          />
        </div>
      </div>

      {/* Row 3: Fecha de Vinculación (col 1), Fecha de Retiro (col 2) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha de Vinculación*
          </label>
          <div className="relative">
            <DatePicker
              value={fechaVinculacion || null}
              onChange={(iso) => onChange("fechaVinculacion", iso || "")}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha de Retiro
          </label>
          <div className="relative">
            <DatePicker
              value={fechaRetiro || null}
              onChange={(iso) => onChange("fechaRetiro", iso || "")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
