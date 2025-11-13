"use client";

import React from "react";
import { FileText } from "lucide-react";

interface LiquidacionRecord {
  mes: string;
  sueldoBruto: string;
  sueldoLiquido: string;
  aporte: string;
  horasExtras: string;
}

interface LiquidacionTabProps {
  data: LiquidacionRecord[];
}

export default function LiquidacionTab({ data }: LiquidacionTabProps) {
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-sm p-4">
      {/* Header morado */}
      <div className="bg-[#3f3d8a] text-white font-semibold px-4 py-3 rounded-t-md grid grid-cols-6">
        <div></div>
        <div>Mes</div>
        <div>Sueldo Bruto</div>
        <div>Sueldo Líquido</div>
        <div>Aporte</div>
        <div>Horas Extras</div>
      </div>

      {/* Tabla */}
      <div className="border border-gray-300 rounded-b-md overflow-hidden text-sm">
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-6 items-center ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {/* Checkbox */}
            <div className="p-3 flex justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
            </div>

            <div className="p-3">{item.mes}</div>
            <div className="p-3">{item.sueldoBruto}</div>
            <div className="p-3">{item.sueldoLiquido}</div>
            <div className="p-3">{item.aporte}</div>
            <div className="p-3 flex justify-between">
              {item.horasExtras}

              {/* Ícono documento */}
              <button
                className="p-1 border rounded-md hover:bg-gray-200 transition"
                aria-label="Ver documento"
                title="Ver documento"
              >
                <FileText size={16} className="text-blue-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
