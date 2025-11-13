"use client";

import { useState } from "react";
import SummaryTab from "./SummaryTab";
import AssistanceTab from "./AssistanceTab";
import VacacionesTab from "./VacacionesTab";
import IngresosTab from "./IngresosTab";
import EgresosTab from "./EgresosTab";
import LiquidacionTab from "./LiquidacionTab";
import ContratoTab from "./ContratoTab";
import { mockLiquidacion } from "../mock/collaboratorData";
import { mockEgresos } from "../mock/collaboratorData";
import { mockIngresos } from "../mock/collaboratorData";
import { mockVacations } from "../mock/collaboratorData";
import { mockAssistance } from "../mock/collaboratorData";

export default function ProfileTabs() {
  const [active, setActive] = useState("Resumen");

  const tabs = [
    "Resumen",
    "Liquidación",
    "Asistencias",
    "Vacaciones",
    "Contrato",
    "Ingresos",
    "Egresos"
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
      {active === "Asistencias" && <AssistanceTab data={mockAssistance} />}
      {active === "Vacaciones" && <VacacionesTab data={mockVacations} />}
      {active === "Ingresos" && <IngresosTab data={mockIngresos} />}
      {active === "Egresos" && <EgresosTab data={mockEgresos} />}
      {active === "Liquidación" && <LiquidacionTab data={mockLiquidacion} />}
      {active === "Contrato" && <ContratoTab />}
    </div>
  );
}
