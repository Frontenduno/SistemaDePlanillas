"use client";
import { User, Briefcase } from "lucide-react";

interface RegistroHeaderProps {
  step: 1 | 2;
}

export function RegistroHeader({ step }: RegistroHeaderProps) {
  return (
    <div className="mb-6 py-8">
      <div className="flex items-center max-w-3xl mx-auto">
        {/* Paso 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white transition-colors" style={{ backgroundColor: step >= 1 ? '#150AB4' : undefined }}>
            <User className="w-10 h-10" />
          </div>
          <div className="mt-3 text-center">
            <p className={`text-sm font-bold ${step >= 1 ? "text-[#150AB4]" : "text-gray-700"}`}>
              <span className=" line-clamp-1">Datos </span>Personales
            </p>
          </div>
        </div>
        {/* Línea */}
        <div className="flex-1 h-1.5 bg-gray-400 self-start mt-10">
          <div
            className={`h-full transition-all duration-300 ${
              step === 2 ? "w-full" : "w-0"
            }`}
            style={{ backgroundColor: step === 2 ? '#150AB4' : undefined }}
          />
        </div>
        {/* Paso 2 */}
        <div className="flex flex-col items-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${
              step === 2 ? "text-white" : "text-white bg-gray-400"
            }`}
            style={ step === 2 ? { backgroundColor: '#150AB4' } : undefined }
          >
            <Briefcase className="w-10 h-10" />
          </div>
          <div className="mt-3 text-center">
            <p className={`text-sm font-bold ${step === 2 ? "text-[#150AB4]" : "text-gray-500"}`}>
              <span className=" line-clamp-1">Datos </span>Trabajo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
