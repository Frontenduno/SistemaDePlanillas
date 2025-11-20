"use client";

import { useState, useMemo } from "react";
import {
  RegistroHeader,
  RegistroLayout,
  PersonalDataForm,
  WorkDataForm,
  BackButton,
} from "./";

export default function RegistroPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [cargo, setCargo] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    segundoApellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    genero: "",
    estadoCivil: "",
    nacionalidad: "",
    fechaNacimiento: "",
    email: "",
    direccion: "",
    telefono: "",
    nivelEducativo: "",
    profesion: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Validación simple: todos los campos requeridos llenos y email con '@'
  const isValid = useMemo(() => {
    const requiredKeys: (keyof typeof form)[] = [
      "nombre",
      "apellido",
      "segundoApellido",
      "tipoDocumento",
      "numeroDocumento",
      "genero",
      "estadoCivil",
      "nacionalidad",
      "fechaNacimiento",
      "email",
      "direccion",
      "telefono",
      "nivelEducativo",
      "profesion",
    ];
    for (const k of requiredKeys) {
      if (!form[k].trim()) return false;
    }
    if (!form.email.includes("@")) return false;
    return true;
  }, [form]);

  return (
    <div className="min-h-screen bg-white p-2">
      <div className="w-full px-4">
        <RegistroHeader step={currentStep} />
        <RegistroLayout>
          {currentStep === 1 ? (
            <PersonalDataForm
              form={form}
              onChange={handleChange}
              isValid={isValid}
              cargo={cargo}
              onCargoChange={setCargo}
              onNext={() => isValid && setCurrentStep(2)}
            />
          ) : (
            <WorkDataForm cargo={cargo} onBack={() => setCurrentStep(1)} />
          )}
        </RegistroLayout>
        <BackButton step={currentStep} onBack={() => setCurrentStep(1)} />
      </div>
    </div>
  );
}
