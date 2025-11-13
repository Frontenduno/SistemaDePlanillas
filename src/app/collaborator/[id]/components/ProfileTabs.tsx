"use client";
import { useState } from "react";
import SummaryTab from "./SummaryTab";

export default function ProfileTabs() {
  const [active, setActive] = useState("Resumen");

  const tabs = [
    "Resumen",
    "Liquidación",
    "Asistencias",
    "Vacaciones",
    "Contrato",
    "Ingresos",
    "Egresos",
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Tabs */}
      <div className="flex gap-6 border-b pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-1 ${
              active === tab
                ? "border-b-2 border-blue-700 text-blue-700 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      {active === "Resumen" && <SummaryTab />}
    </div>
  );
}
