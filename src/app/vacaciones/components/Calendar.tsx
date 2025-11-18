"use client";

import React, { useState } from "react";
// Importamos desde la carpeta hermana 'data'
import { vacationDaysData, monthNames } from "../data/vacationData";

// --- HELPERS (Sin cambios) ---
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const generateMonthCalendar = (
  year: number,
  monthIndex: number,
  vacations: number[]
) => {
  const daysInMonth = getDaysInMonth(year, monthIndex);
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return days.map((day, index) => {
    const isVacation = day !== null && vacations.includes(day);
    return (
      <div
        key={index}
        className={`
          h-8 w-8 flex items-center justify-center text-sm rounded
          ${day === null ? "invisible" : ""} 
          ${
            isVacation
              ? "bg-blue-600 text-white font-bold shadow-sm"
              : "text-gray-700"
          }
          ${
            day !== null && !isVacation
              ? "hover:bg-gray-200 cursor-pointer"
              : ""
          }
        `}
      >
        {day}
      </div>
    );
  });
};

// --- COMPONENTE PRINCIPAL ---
const Calendar = () => {
  // 1. Estado para lo que escribe el usuario (Input)
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 2. Estado para el filtro que realmente se aplica (Lógica)
  const [activeFilter, setActiveFilter] = useState<string>("");

  const currentYear = new Date().getFullYear();

  // Actualiza solo el texto del input mientras escribes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Esta función se ejecuta SOLO al dar clic en el botón
  const handleFilterClick = () => {
    setActiveFilter(searchTerm); // Pasamos el texto escrito al filtro activo
  };

  // Opcional: Permitir buscar al presionar "Enter"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterClick();
    }
  };

  // Filtramos usando 'activeFilter' en lugar de 'searchTerm'
  const filteredMonths = Object.keys(vacationDaysData).filter((monthKey) =>
    monthNames[monthKey].toLowerCase().includes(activeFilter.toLowerCase())
  );

  const weekDays = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-blue-700">
          Filtrar vacaciones del trabajador
        </h1>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex items-center w-full md:w-80">
            <input
              type="text"
              placeholder="Filtrar mes..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm} // Vinculado al texto temporal
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // (Opcional) Para que funcione el Enter
            />
          </div>
          <button
            onClick={handleFilterClick} // <--- Aquí ocurre la magia
            className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors"
          >
            Filtrar
          </button>
        </div>
      </div>

      {/* Grid de Meses (Usa filteredMonths que depende de activeFilter) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {filteredMonths.map((monthKey) => {
          const allMonthsKeys = Object.keys(monthNames);
          const monthIndex = allMonthsKeys.indexOf(monthKey);

          return (
            <div key={monthKey} className="flex flex-col">
              <h3 className="text-center font-bold text-gray-800 mb-4 text-lg">
                {monthNames[monthKey]}
              </h3>

              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-7 mb-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs text-gray-400 font-medium"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {generateMonthCalendar(
                    currentYear,
                    monthIndex,
                    vacationDaysData[monthKey] || []
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
