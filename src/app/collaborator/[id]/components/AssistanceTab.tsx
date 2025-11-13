"use client";

import React from "react";
import { Search } from "lucide-react";

interface AssistanceRecord {
  entryTime: string;
  exitTime: string;
  workedDays: number;
  laborDays: number;
}

export default function AssistanceTab({ data }: { data: AssistanceRecord[] }) {
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-sm p-4 overflow-x-auto">
      <table className="w-full border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-[#2A2D7C] text-white text-left text-sm">
            <th className="p-3">Tiempo de Entrada</th>
            <th className="p-3">Tiempo de Salida</th>
            <th className="p-3">Días Trabajados</th>
            <th className="p-3">Días Laborados</th>
            <th className="p-3 w-12"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`text-sm ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="p-3">{item.entryTime}</td>
              <td className="p-3">{item.exitTime}</td>
              <td className="p-3">{item.workedDays}</td>
              <td className="p-3">{item.laborDays}</td>
              <td className="p-3">
                <button className="p-1 border rounded-md hover:bg-gray-200 transition">
                  <Search size={16} className="text-blue-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
