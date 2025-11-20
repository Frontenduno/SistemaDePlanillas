"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface EjecutivoFormProps {
  onBack: () => void;
}

export function EjecutivoForm({ onBack }: EjecutivoFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    numeroDocumento: "",
    fechaVinculacion: "",
    fechaRetiro: "",
    sede: "",
    area: "",
    turno: "",
    tipoContrato: "",
    tipoPago: "",
    ocupacion: "",
    jornadaLaboral: "",
    jefeInmediato: "",
    horarioLaboralInicio: "",
    horarioLaboralFin: "",
    diasLaborales: "",
    sueldo: "",
    formaPago: "",
    banco: "",
    numeroCuenta: "",
    fondoPensionario: "",
    tipoAfp: "",
    seguroVida: "",
    horasExtras: "",
    cuspp: "",
    bonificacionesCorporativas: "",
    cts: "",
    gratificacion: false,
  });

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Datos del Trabajador</h2>

      {/* Row 1: Nombre, Apellido Paterno, Apellido Materno (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value={formData.nombre} onChange={(e) => handleInputChange("nombre", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Apellido Paterno</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value={formData.apellidoPaterno} onChange={(e) => handleInputChange("apellidoPaterno", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Apellido Materno</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value={formData.apellidoMaterno} onChange={(e) => handleInputChange("apellidoMaterno", e.target.value)} />
        </div>
      </div>

      {/* Row 2: Tipo de Documento (col 1), N° de Documento (col 2), Cargo (col 4) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Documento*</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value="DNI" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">N° de Documento*</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value={formData.numeroDocumento} onChange={(e) => handleInputChange("numeroDocumento", e.target.value)} />
        </div>
        <div></div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
          <Input className="bg-gray-200 h-10 w-full" disabled value="Empleado" readOnly />
        </div>
      </div>

      {/* Row 3: Fecha de Vinculación (col 1), Fecha de Retiro (col 2) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Vinculación*</label>
          <Input type="date" className="bg-white h-10 w-full" value={formData.fechaVinculacion} onChange={(e) => handleInputChange("fechaVinculacion", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Retiro</label>
          <Input type="date" className="bg-white h-10 w-full" value={formData.fechaRetiro} onChange={(e) => handleInputChange("fechaRetiro", e.target.value)} />
        </div>
      </div>

      {/* Row 4: Sede, Área, Turno (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sede*</label>
          <Input className="bg-white h-10 w-full" value={formData.sede} onChange={(e) => handleInputChange("sede", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Área*</label>
          <Input className="bg-white h-10 w-full" value={formData.area} onChange={(e) => handleInputChange("area", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Turno*</label>
          <Select value={formData.turno} onValueChange={(value) => handleInputChange("turno", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Turno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mañana">Mañana</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noche">Noche</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 5: Tipo de Contrato (col 1), Tipo de Pago (col 2) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Contrato*</label>
          <Select value={formData.tipoContrato} onValueChange={(value) => handleInputChange("tipoContrato", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indefinido">Indefinido</SelectItem>
              <SelectItem value="temporal">Temporal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Pago*</label>
          <Select value={formData.tipoPago} onValueChange={(value) => handleInputChange("tipoPago", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensual">Mensual</SelectItem>
              <SelectItem value="quincenal">Quincenal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 6: Ocupación, Jornada Laboral, Jefe Inmediato (cols 1-3) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ocupación*</label>
          <Select value={formData.ocupacion} onValueChange={(value) => handleInputChange("ocupacion", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Ocupación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="administrativo">Administrativo</SelectItem>
              <SelectItem value="operativo">Operativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Jornada Laboral*</label>
          <Select value={formData.jornadaLaboral} onValueChange={(value) => handleInputChange("jornadaLaboral", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jornada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completa">Completa</SelectItem>
              <SelectItem value="parcial">Parcial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Jefe Inmediato*</label>
          <Select value={formData.jefeInmediato} onValueChange={(value) => handleInputChange("jefeInmediato", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione Jefe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jefe1">Jefe 1</SelectItem>
              <SelectItem value="jefe2">Jefe 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 7: Horario Laboral (Inicio y Fin), Días Laborales, Sueldo */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Horario Laboral*</label>
          <div className="flex gap-2">
            <Input 
              type="time" 
              className="bg-white h-10 w-full" 
              value={formData.horarioLaboralInicio} 
              onChange={(e) => handleInputChange("horarioLaboralInicio", e.target.value)} 
              placeholder="8:00 AM"
            />
            <span className="flex items-center">hasta</span>
            <Input 
              type="time" 
              className="bg-white h-10 w-full" 
              value={formData.horarioLaboralFin} 
              onChange={(e) => handleInputChange("horarioLaboralFin", e.target.value)} 
              placeholder="6:00 PM"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Días Laborales*</label>
          <Select value={formData.diasLaborales} onValueChange={(value) => handleInputChange("diasLaborales", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Lunes - Viernes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lunes-viernes">Lunes - Viernes</SelectItem>
              <SelectItem value="lunes-sabado">Lunes - Sábado</SelectItem>
              <SelectItem value="lunes-domingo">Lunes - Domingo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sueldo*</label>
          <Input 
            type="number" 
            className="bg-white h-10 w-full" 
            value={formData.sueldo} 
            onChange={(e) => handleInputChange("sueldo", e.target.value)} 
            placeholder="1200"
          />
        </div>
      </div>

      {/* Row 8: Forma de Pago */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Forma de Pago*</label>
          <Select value={formData.formaPago} onValueChange={(value) => handleInputChange("formaPago", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Depósito Bancario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deposito">Depósito Bancario</SelectItem>
              <SelectItem value="efectivo">Efectivo</SelectItem>
              <SelectItem value="cheque">Cheque</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Row 9: Banco, N° de Cuenta, Fondo Pensionario, Tipo de AFP */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Banco*</label>
          <Input
            className="bg-white h-10 w-full"
            value={formData.banco}
            onChange={(e) => handleInputChange("banco", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">N° de Cuenta*</label>
          <Input
            className="bg-white h-10 w-full"
            value={formData.numeroCuenta}
            onChange={(e) => handleInputChange("numeroCuenta", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fondo Pensionario*</label>
          <Select value={formData.fondoPensionario} onValueChange={(value) => handleInputChange("fondoPensionario", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="afp">AFP</SelectItem>
              <SelectItem value="onp">ONP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de AFP*</label>
          <Input
            className="bg-white h-10 w-full"
            value={formData.tipoAfp}
            onChange={(e) => handleInputChange("tipoAfp", e.target.value)}
          />
        </div>
      </div>

      {/* Row 10: Seguro, Horas Extras, (empty), CUSPP */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Seguro*</label>
          <Select value={formData.seguroVida} onValueChange={(value) => handleInputChange("seguroVida", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Horas Extras*</label>
          <Select value={formData.horasExtras} onValueChange={(value) => handleInputChange("horasExtras", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div></div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CUSPP*</label>
          <Input
            className="bg-white h-10 w-full"
            value={formData.cuspp}
            onChange={(e) => handleInputChange("cuspp", e.target.value)}
          />
        </div>
      </div>

      {/* Row 11: Bonificaciones Corporativas, CTS, Gratificación (label + checkbox centered) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bonificaciones Corporativas*</label>
          <Select value={formData.bonificacionesCorporativas} onValueChange={(value) => handleInputChange("bonificacionesCorporativas", value)}>
            <SelectTrigger className="bg-white h-10 w-full">
              <SelectValue placeholder="Antigüedad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="antiguedad">Antigüedad</SelectItem>
              <SelectItem value="desempeño">Desempeño</SelectItem>
              <SelectItem value="ninguna">Ninguna</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CTS*</label>
          <Input
            className="bg-white h-10 w-full"
            value={formData.cts}
            onChange={(e) => handleInputChange("cts", e.target.value)}
          />
        </div>
          <div>
            <div className="h-10 flex items-end pl-2">
              <label className="text-sm font-medium text-gray-700 mr-2">Gratificación*</label>
              <Checkbox
                className="w-4 h-4 rounded-none"
                checked={Boolean(formData.gratificacion)}
                onCheckedChange={(checked) => handleInputChange("gratificacion", Boolean(checked))}
              />
            </div>
          </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button className="px-12 h-10 text-white bg-cyan-500 hover:bg-cyan-600">
          Guardar
        </Button>
      </div>
    </div>
  );
}