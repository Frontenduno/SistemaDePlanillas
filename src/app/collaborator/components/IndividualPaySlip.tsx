// src/app/collaborator/components/IndividualPaySlip.tsx
"use client";

import { Namdhinggo } from "next/font/google";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const namdhinggo = Namdhinggo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface IndividualPaySlipProps {
  collaboratorId: string; // Se usará para datos dinámicos en el futuro
}

// Datos estáticos basados en la imagen para esta fase
const boletaData = {
  empresa: "J&P PERIFERICOS S.A.C.",
  title: "BOLETA INDIVIDUAL DE PAGO",
  periodo: "01/01/2025 AL 31/01/2025",
  colaborador: {
    dni: "45678912",
    nombre: "Juan Rodrigez",
    cargo: "Gerente de Ventas",
    fechaIngreso: new Date(2018, 5, 10), // 10 de junio de 2018
    contrato: "Determinado",
    afiliacion: "AFP Integra",
  },
  diasLaborados: 30,
  diasNoLaborados: 0,
  ingresos: [
    { concepto: "Sueldo Base", monto: 4500.00 },
    { concepto: "Asignación Familiar", monto: 102.50 },
    { concepto: "Bono por Desempeño", monto: 800.00 },
  ],
  descuentos: [
    { concepto: "Sistema Privado de Pensiones (AFP)", monto: 673.20 },
    { concepto: "Impuesto a la Renta (5ta Categoria)", monto: 200.00 },
  ],
};

export default function IndividualPaySlip({ collaboratorId }: IndividualPaySlipProps) {
  // Aquí usarías collaboratorId para obtener datos dinámicos. Por ahora, usamos boletaData.

  const totalIngresos = boletaData.ingresos.reduce((sum, item) => sum + item.monto, 0);
  const totalDescuentos = boletaData.descuentos.reduce((sum, item) => sum + item.monto, 0);
  const netoAPagar = totalIngresos - totalDescuentos;

  const formatDate = (date: Date) => {
    return format(date, "dd/MM/yyyy");
  };

  return (
    <div className="bg-white p-12 w-[1122px] font-sans border border-black max-w-full">
      {/* Cabecera */}
      <div className="flex justify-between items-center border-b-2 border-black pb-6 mb-8 gap-12">
        <div className="shrink-0">
          <h1 className={`text-6xl font-extrabold text-[#1a14b8] ${namdhinggo.className}`}>J&P</h1>
          <p className="text-xl font-medium tracking-wide">PERIFERICOS S.A.C.</p>
        </div>
        <div className="text-center flex-1">
          <h2 className={`text-4xl font-bold border-2 border-black px-8 py-3 rounded-xl inline-block ${namdhinggo.className}`}>{boletaData.title}</h2>
          <p className="mt-2 font-semibold text-lg">DEL: <span className="font-normal">{boletaData.periodo}</span></p>
        </div>
        <div className="w-24"></div> {/* Espacio para el logo */}
      </div>

      {/* Sección I: Datos Generales */}
      <div className="border border-black rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">I. DATOS GENERALES</h3>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-lg">
          <p><span className="font-semibold text-gray-800">N° DNI:</span> {boletaData.colaborador.dni}</p>
          <p><span className="font-semibold text-gray-800">Nombre y Apellido:</span> {boletaData.colaborador.nombre}</p>
          <p><span className="font-semibold text-gray-800">Cargo:</span> {boletaData.colaborador.cargo}</p>
          <p><span className="font-semibold text-gray-800">Fecha de Ingreso:</span> {formatDate(boletaData.colaborador.fechaIngreso)}</p>
          <p><span className="font-semibold text-gray-800">Tipo de Contrato:</span> {boletaData.colaborador.contrato}</p>
          <p><span className="font-semibold text-gray-800">Afiliación a Pensiones:</span> {boletaData.colaborador.afiliacion}</p>
        </div>
      </div>

      {/* Días Laborados Section */}
      <div className="border border-black rounded-lg p-6 mb-8">
        <div className="grid grid-cols-2 gap-12 text-center">
          <p><span className="font-bold text-xl text-gray-900">DÍAS LABORADOS:</span> <span className="text-2xl font-medium">{boletaData.diasLaborados}</span></p>
          <p><span className="font-bold text-xl text-gray-900">DÍAS NO LABORADOS / SUBSIDIADOS:</span> <span className="text-2xl font-medium">{boletaData.diasNoLaborados}</span></p>
        </div>
      </div>

      {/* Detalles Sección */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* II. Ingresos Table */}
        <div className="border border-black rounded-lg overflow-hidden h-full">
          <Table>
            <TableHeader className="bg-black text-white">
              <TableRow>
                <TableHead className="font-semibold text-white text-lg">II. INGRESOS</TableHead>
                <TableHead className="text-right font-semibold text-white text-lg pr-6">MONTO (S/)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {boletaData.ingresos.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100/70"}>
                  <TableCell className="pl-6 font-medium text-gray-800">{item.concepto}</TableCell>
                  <TableCell className="text-right font-semibold text-gray-900 pr-6 text-lg">{item.monto.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* III. Descuentos Table */}
        <div className="border border-black rounded-lg overflow-hidden h-full">
          <Table>
            <TableHeader className="bg-black text-white">
              <TableRow>
                <TableHead className="font-semibold text-white text-lg pl-6">III. DESCUENTOS</TableHead>
                <TableHead className="text-right font-semibold text-white text-lg pr-6">MONTO (S/)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {boletaData.descuentos.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100/70"}>
                  <TableCell className="pl-6 font-medium text-gray-800">{item.concepto}</TableCell>
                  <TableCell className="text-right font-semibold text-gray-900 pr-6 text-lg">{item.monto.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Resumen Sección */}
      <div className="border border-black rounded-lg p-6 mb-8 bg-[#eef2f6]">
        <h3 className="text-xl font-bold mb-4">RESUMEN</h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="border-r border-black pr-6">
            <p className="font-semibold text-gray-700 text-lg mb-1">Total Ingresos</p>
            <p className="text-4xl font-extrabold text-[#34d399]">S/ {totalIngresos.toFixed(2)}</p>
          </div>
          <div className="border-r border-black pr-6">
            <p className="font-semibold text-gray-700 text-lg mb-1">Total Descuentos</p>
            <p className="text-4xl font-extrabold text-[#facc15]">S/ {totalDescuentos.toFixed(2)}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-lg mb-1">Neto a Pagar</p>
            <p className="text-4xl font-extrabold text-[#2563eb]">S/ {netoAPagar.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Pie de Página / Sección de Firmas */}
      <div className="flex flex-col items-center mt-12 gap-10">
        <h4 className="text-xl font-bold self-start">RECIBÍ CONFORME</h4>
        <div className="w-full flex justify-between gap-16 px-6">
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="w-64 h-24 border-2 border-dashed border-gray-400 flex items-end justify-center rounded-lg bg-gray-50 p-2">
              <p className="text-sm text-gray-400">HUELLA DIGITAL (ÍNDICE DERECHO)</p>
            </div>
          </div>
          <div className="flex-1 text-center mt-12">
            <div className="border-t-2 border-black w-72 mx-auto mb-2"></div>
            <p className="font-semibold text-xl text-gray-800">{boletaData.colaborador.nombre}</p>
            <p className="text-gray-600">Trabajador(a)</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg bg-gray-50 p-2">
              <p className="text-sm text-gray-400">FIRMA DEL EMPLEADOR</p>
            </div>
            <p className="font-semibold text-lg text-gray-800">EMPLEADOR</p>
          </div>
        </div>
      </div>

    </div>
  );
}