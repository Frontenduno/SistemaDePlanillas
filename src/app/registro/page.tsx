'use client';

import { useState } from 'react';
import { RegistroHeader, RegistroLayout, PersonalDataForm, WorkDataForm, BackButton } from './';

export default function RegistroPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [cargo, setCargo] = useState('');

  const [form, setForm] = useState({ nombre: '', apellido: '', segundoApellido: '', tipoDocumento: '', numeroDocumento: '', genero: '', estadoCivil: '', nacionalidad: '', fechaNacimiento: '', email: '', direccion: '', telefono: '', nivelEducativo: '', profesion: '' });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };


  return (
    <div className="bg-white p-2">
      <div className="w-full px-4">
        <RegistroHeader step={currentStep} />
        <RegistroLayout>
          {currentStep === 1 ? (
            <PersonalDataForm
              form={form}
              onChange={handleChange}
              cargo={cargo}
              onCargoChange={setCargo}
              onNext={() => setCurrentStep(2)}
            />
          ) : (
            <WorkDataForm cargo={cargo} onBack={() => setCurrentStep(1)} personalForm={form} />
          )}
        </RegistroLayout>
        <BackButton step={currentStep} onBack={() => setCurrentStep(1)} />
      </div>
    </div>
  );
}
