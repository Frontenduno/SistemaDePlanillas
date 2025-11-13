"use client";

import React from "react";

interface Egreso {
  concepto: string;
  fecha: string;
  importe: number;
}

interface EgresosTabProps {
  data: Egreso[];
}

export default function EgresosTab({ data }: EgresosTabProps) {
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-sm p-4">

      {/* Header morado */}
      <div className="bg-[#3f3d8a] text-white font-semibold px-4 py-3 rounded-t-md flex">
        <div className="w-1/3">Concepto</div>
        <div className="w-1/3">Fecha</div>
        <div className="w-1/3">Importe (S/.)</div>
      </div>

      {/* Tabla */}
      <div className="border border-gray-300 rounded-b-md overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex text-sm ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div className="w-1/3 p-3">{item.concepto}</div>
            <div className="w-1/3 p-3">{item.fecha}</div>
            <div className="w-1/3 p-3 font-semibold text-red-600">
              S/. {item.importe.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Botón agregar */}
      <div className="flex justify-end mt-4">
        <button className="bg-[#3f3d8a] text-white px-5 py-2 rounded-lg hover:bg-[#2c2a6a] transition">
          + Agregar egresos
        </button>
      </div>
    </div>
  );
}
