"use client";
import { EmpleadorForm } from './EmpleadorForm';
import { EjecutivoForm } from './EjecutivoForm';
import { ObreroForm } from './ObreroForm';
import { PRIMARY_COLOR } from '../constants';
import type { PersonalFormState } from './PersonalDataForm';

interface WorkDataFormProps {
  cargo: string;
  onBack: () => void;
  personalForm?: Partial<PersonalFormState>;
}

export function WorkDataForm({ cargo, onBack, personalForm }: WorkDataFormProps) {
  switch (cargo) {
    case 'empleador':
      return <EmpleadorForm onBack={onBack} personalForm={personalForm} cargo={cargo} />;
    case 'ejecutivo':
      return <EjecutivoForm onBack={onBack} cargo={cargo} />;
    case 'obrero':
      return <ObreroForm onBack={onBack} cargo={cargo} />;
    default:
      return (
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Datos de Trabajo</h2>
          <p className="text-gray-600">Seleccione un cargo en el paso anterior.</p>
        </div>
      );
  }
}
