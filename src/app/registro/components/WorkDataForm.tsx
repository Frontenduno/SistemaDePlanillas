"use client";
import { EmpleadorForm } from "./EmpleadorForm";
import { EjecutivoForm } from "./EjecutivoForm";
import { ObreroForm } from "./ObreroForm";
// import { PRIMARY_COLOR } from "./constants"; // Ya no necesitas importar esto si usas la clase de Tailwind directa
import type { PersonalFormState } from "./PersonalDataForm";

interface WorkDataFormProps {
  cargo: string;
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
}

export function WorkDataForm({
  cargo,
  onBack,
  personalForm,
}: WorkDataFormProps) {
  switch (cargo) {
    case "empleador":
      return (
        <EmpleadorForm
          onBack={onBack}
          personalForm={personalForm}
          cargo={cargo}
        />
      );
    case "ejecutivo":
      return (
        <EjecutivoForm
          onBack={onBack}
          personalForm={personalForm}
          cargo={cargo}
        />
      );
    case "obrero":
      return (
        <ObreroForm onBack={onBack} personalForm={personalForm} cargo={cargo} />
      );
    default:
      return (
        <div>
          {/* CAMBIO AQUÍ: Usamos text-[#150AB4] en lugar de style={{ color: ... }} */}
          <h2 className="text-3xl font-bold mb-6 text-[#150AB4]">
            Datos de Trabajo
          </h2>
          <p className="text-gray-600">
            Seleccione un cargo en el paso anterior.
          </p>
        </div>
      );
  }
}
