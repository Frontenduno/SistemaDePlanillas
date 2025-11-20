"use client";
import { EmpleadorForm } from './EmpleadorForm';
import { EjecutivoForm } from './EjecutivoForm';
import { ObreroForm } from './ObreroForm';

interface WorkDataFormProps {
  cargo: string;
  onBack: () => void;
}

export function WorkDataForm({ cargo, onBack }: WorkDataFormProps) {
  if (cargo === 'empleador') return <EmpleadorForm onBack={onBack} />;
  if (cargo === 'ejecutivo') return <EjecutivoForm onBack={onBack} />;
  if (cargo === 'obrero') return <ObreroForm onBack={onBack} />;
  
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Datos de Trabajo</h2>
      <p className="text-gray-600">Seleccione un cargo en el paso anterior.</p>
    </div>
  );
}
