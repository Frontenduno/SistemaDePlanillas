"use client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface PersonalFormState {
  nombre: string;
  apellido: string;
  segundoApellido: string;
  tipoDocumento: string;
  numeroDocumento: string;
  genero: string;
  estadoCivil: string;
  nacionalidad: string;
  fechaNacimiento: string;
  email: string;
  direccion: string;
  telefono: string;
  nivelEducativo: string;
  profesion: string;
}

interface PersonalDataFormProps {
  form: PersonalFormState;
  onChange: (key: keyof PersonalFormState, value: string) => void;
  isValid: boolean;
  cargo: string;
  onCargoChange: (value: string) => void;
  onNext: () => void;
}

export function PersonalDataForm({ form, onChange, isValid, cargo, onCargoChange, onNext }: PersonalDataFormProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Nuevo Trabajador</h2>
      {/* Fila 1 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nombre" required>
          <Input value={form.nombre} onChange={e => onChange("nombre", e.target.value)} className="bg-white h-10" />
        </Field>
        <Field label="Apellido" required>
          <Input value={form.apellido} onChange={e => onChange("apellido", e.target.value)} className="bg-white h-10" />
        </Field>
        <Field label="Segundo Apellido" required>
          <Input value={form.segundoApellido} onChange={e => onChange("segundoApellido", e.target.value)} className="bg-white h-10" />
        </Field>
      </div>
      {/* Fila 2 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Tipo de Documento" required>
          <Select value={form.tipoDocumento} onValueChange={v => onChange("tipoDocumento", v)}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="DNI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dni">DNI</SelectItem>
              <SelectItem value="carnet">Carnet Extranjería</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="N° de Documento" required>
          <Input value={form.numeroDocumento} onChange={e => onChange("numeroDocumento", e.target.value)} className="bg-white h-10" />
        </Field>
        <div></div>
        <Field label="Género" required>
          <Select value={form.genero} onValueChange={v => onChange("genero", v)}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione Genero" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="femenino">Femenino</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 3 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nacionalidad" required>
          <Select value={form.nacionalidad} onValueChange={v => onChange("nacionalidad", v)}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Perú" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="peru">Perú</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Fecha de Nacimiento" required>
          <Input type="date" value={form.fechaNacimiento} onChange={e => onChange("fechaNacimiento", e.target.value)} className="bg-white h-10" />
        </Field>
        <div></div>
        <Field label="Estado Civil" required>
          <Select value={form.estadoCivil} onValueChange={v => onChange("estadoCivil", v)}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soltero">Soltero(a)</SelectItem>
              <SelectItem value="casado">Casado(a)</SelectItem>
              <SelectItem value="divorciado">Divorciado(a)</SelectItem>
              <SelectItem value="viudo">Viudo(a)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 4 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Email" required>
          <Input type="email" value={form.email} onChange={e => onChange("email", e.target.value)} className="bg-white h-10" />
        </Field>
        <Field label="Dirección" required>
          <Input value={form.direccion} onChange={e => onChange("direccion", e.target.value)} className="bg-white h-10" />
        </Field>
        <Field label="N° de Teléfono" required>
          <Input type="tel" value={form.telefono} onChange={e => onChange("telefono", e.target.value)} className="bg-white h-10" />
        </Field>
      </div>
      {/* Fila 5 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Field label="Nivel Educativo" required>
          <Input value={form.nivelEducativo} onChange={e => onChange("nivelEducativo", e.target.value)} className="bg-white h-10" />
        </Field>
        <Field label="Profesión" required>
          <Select value={form.profesion} onValueChange={v => onChange("profesion", v)}>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ingeniero">Ingeniero</SelectItem>
              <SelectItem value="contador">Contador</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      {/* Fila 6: Foto */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Foto
        </label>
        <div className="w-64">
          <Input 
            type="text" 
            placeholder="Insertar Imagen" 
            className="bg-white h-10 text-gray-400"
          />
        </div>
      </div>
      {/* Cargo */}
      <div className="mb-6">
        <label className="block text-base font-bold text-black mb-4">
          Cargo:
        </label>
        <div className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="empleador"
              checked={cargo === 'empleador'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Empleador</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="ejecutivo"
              checked={cargo === 'ejecutivo'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Ejecutivo</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="cargo" 
              value="obrero"
              checked={cargo === 'obrero'}
              onChange={e => onCargoChange(e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">Obrero</span>
          </label>
        </div>
      </div>
      {/* Botón */}
      <div className="flex justify-end mt-8">
        <Button
          disabled={!isValid}
          className={`px-12 h-10 text-white ${isValid ? "bg-cyan-500 hover:bg-cyan-600" : "bg-gray-300 cursor-not-allowed"}`}
          onClick={onNext}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
