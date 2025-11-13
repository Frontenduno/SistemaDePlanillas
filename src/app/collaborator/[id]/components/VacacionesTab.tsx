"use client";

import React from "react";
import { Check } from "lucide-react";

interface VacationRecord {
  startDate: string;
  endDate: string;
  days: string;
  type: string;
  approved: boolean;
  approvedBy: string;
}

interface VacacionesTabProps {
  data: VacationRecord[];
}

export default function VacacionesTab({ data }: VacacionesTabProps) {
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-sm p-4">
      {/* Barra azul título */}
      <div className="bg-[#2A2D7C] text-white font-medium px-4 py-3 rounded-t-md">
        vacaciones acumuladas
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto border border-gray-200 rounded-b-md">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">fecha inicio</th>
              <th className="p-3 text-left">fecha termino</th>
              <th className="p-3 text-left">numeros dias</th>
              <th className="p-3 text-left">tipo</th>
              <th className="p-3 text-left">estado</th>
              <th className="p-3 text-left">aprobada por</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item: VacationRecord, index: number) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-3">{item.startDate}</td>
                <td className="p-3">{item.endDate}</td>
                <td className="p-3">{item.days}</td>
                <td className="p-3">{item.type}</td>

                <td className="p-3">
                  {item.approved && (
                    <Check size={18} className="text-black" strokeWidth={3} />
                  )}
                </td>

                <td className="p-3 text-gray-500">{item.approvedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
