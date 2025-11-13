"use client";

import React from "react";

export default function ContratoTab() {
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-sm p-6 space-y-6 text-sm">

      {/* ================================
          DATOS CONTRATO
      ================================= */}
      <div>
        <h2 className="font-semibold text-gray-900 mb-3">Datos contrato</h2>

        <div className="grid grid-cols-3 gap-4">

          {/* Banco */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Banco:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>BCP</option>
            </select>
          </div>

          {/* Horas por semana */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Horas Establecida : por Semana</label>
            <input
              type="number"
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="48"
            />
          </div>

          {/* Tipo de pago */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Tipo de Pago:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Mensual</option>
            </select>
          </div>

          {/* Cuenta */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Cuenta:</label>
            <input
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="00343997734567"
            />
          </div>

          {/* Sueldo */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Sueldo:</label>
            <input
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="S/. 1,200.00"
            />
          </div>
        </div>
      </div>

      {/* ================================
          BENEFICIOS ADICIONALES
      ================================= */}
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="font-semibold text-gray-900 mb-4">Beneficios Adicionales</h2>

        <div className="grid grid-cols-2 gap-4">

          {/* Seguro de salud */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Seguro de salud</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Seguro publico</option>
            </select>
          </div>

          {/* Fondo de pensión */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Fondo de pensión:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>ONP</option>
            </select>
          </div>

          {/* Tipo de AFP */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Tipo de AFP:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Ninguna...</option>
            </select>
          </div>

          {/* CUSPP */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">CUSPP:</label>
            <input
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="671421RGGEC9"
            />
          </div>

          {/* Beneficios corporativos */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Beneficios corporativos:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Descuentos en productos</option>
            </select>
          </div>

          {/* Bonos */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Bonos o incentivos:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Bono por productividad</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================================
          CONDICIONES DEL CONTRATO
      ================================= */}
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <h2 className="font-semibold text-gray-900 mb-4">Condiciones del Contrato</h2>

        <div className="grid grid-cols-2 gap-4">

          {/* Tipo de contrato */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Tipo de contrato :</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Fijo</option>
            </select>
          </div>

          {/* Periodo de pruebas */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Periodo de pruebas:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>No</option>
            </select>
          </div>

          {/* Modalidad de trabajo */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Modalidad de trabajo:</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Presencial</option>
            </select>
          </div>

          {/* Movilidad */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Movilidad :</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Si</option>
            </select>
          </div>

          {/* Aporte no remunerativo */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Aporte no Remunerativo :</label>
            <select className="border border-gray-300 rounded p-2 bg-white">
              <option>Otros:...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
