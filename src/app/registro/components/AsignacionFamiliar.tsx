"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Familiar = { dni: string; nombre: string; apellidoP: string; apellidoM: string };

interface Props {
  asignacionFamiliar: boolean;
  setAsignacionFamiliar: (v: boolean) => void;
  familiares: Familiar[];
  addFamiliar: () => void;
  updateFamiliar: (index: number, key: keyof Familiar, value: string) => void;
  removeFamiliar: (index: number) => void;
}

export default function AsignacionFamiliar({ asignacionFamiliar, setAsignacionFamiliar, familiares, addFamiliar, updateFamiliar, removeFamiliar }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3 gap-2">
        <label className="text-sm font-medium text-gray-700">Asignación Familiar</label>
        <Checkbox checked={asignacionFamiliar} onCheckedChange={(v) => setAsignacionFamiliar(Boolean(v))} className="w-4 h-4 mr-2" />
      </div>

      <div className="space-y-2">
          {familiares.map((f, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">DNI*</label>
                <Input className={`bg-white h-10 w-full ${!asignacionFamiliar ? 'opacity-50' : ''}`} value={f.dni} disabled={!asignacionFamiliar} onChange={(e) => updateFamiliar(idx, 'dni', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre*</label>
                <Input className={`bg-white h-10 w-full ${!asignacionFamiliar ? 'opacity-50' : ''}`} value={f.nombre} disabled={!asignacionFamiliar} onChange={(e) => updateFamiliar(idx, 'nombre', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apellido Paterno*</label>
                <Input className={`bg-white h-10 w-full ${!asignacionFamiliar ? 'opacity-50' : ''}`} value={f.apellidoP} disabled={!asignacionFamiliar} onChange={(e) => updateFamiliar(idx, 'apellidoP', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apellido Materno*</label>
                <Input className={`bg-white h-10 w-full ${!asignacionFamiliar ? 'opacity-50' : ''}`} value={f.apellidoM} disabled={!asignacionFamiliar} onChange={(e) => updateFamiliar(idx, 'apellidoM', e.target.value)} />
              </div>
            </div>
          ))}

          <div className="flex gap-2 mt-2">
            <div className="flex items-center">
            <Button
              size="sm"
              onClick={addFamiliar}
              className={`w-8 h-8 flex items-center justify-center text-lg leading-none rounded-md ${!asignacionFamiliar ? 'opacity-50 cursor-not-allowed bg-[#D9D9D9]' : 'bg-[#342ABF] hover:bg-[#2e24a8] text-white'}`}
              disabled={!asignacionFamiliar}
            >
              +
            </Button>
          </div>
            <div className="flex items-center">
              <Button
                size="sm"
                onClick={() => familiares.length > 1 && removeFamiliar(familiares.length - 1)}
                className={`w-8 h-8 flex items-center justify-center text-lg leading-none rounded-md ${!asignacionFamiliar || familiares.length <= 1 ? 'opacity-50 cursor-not-allowed bg-[#D9D9D9]' : 'bg-[#342ABF] hover:bg-[#2e24a8] text-white'}`}
                disabled={!asignacionFamiliar || familiares.length <= 1}
              >
                x
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}
