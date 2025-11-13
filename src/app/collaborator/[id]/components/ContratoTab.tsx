"use client";

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
            <label htmlFor="banco" className="font-medium mb-1">
              Banco:
            </label>
            <select
              id="banco"
              name="banco"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="BCP">BCP</option>
            </select>
          </div>

          {/* Horas por semana */}
          <div className="flex flex-col">
            <label htmlFor="horas_semana" className="font-medium mb-1">
              Horas establecidas por semana
            </label>
            <input
              id="horas_semana"
              name="horas_semana"
              type="number"
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue={48}
              min={0}
            />
          </div>

          {/* Tipo de pago */}
          <div className="flex flex-col">
            <label htmlFor="tipo_pago" className="font-medium mb-1">
              Tipo de Pago:
            </label>
            <select
              id="tipo_pago"
              name="tipo_pago"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="mensual">Mensual</option>
            </select>
          </div>

          {/* Cuenta */}
          <div className="flex flex-col">
            <label htmlFor="cuenta" className="font-medium mb-1">
              Cuenta:
            </label>
            <input
              id="cuenta"
              name="cuenta"
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="00343997734567"
            />
          </div>

          {/* Sueldo */}
          <div className="flex flex-col">
            <label htmlFor="sueldo" className="font-medium mb-1">
              Sueldo:
            </label>
            <input
              id="sueldo"
              name="sueldo"
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
        <h2 className="font-semibold text-gray-900 mb-4">
          Beneficios Adicionales
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Seguro de salud */}
          <div className="flex flex-col">
            <label htmlFor="seguro_salud" className="font-medium mb-1">
              Seguro de salud
            </label>
            <select
              id="seguro_salud"
              name="seguro_salud"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="publico">Seguro público</option>
            </select>
          </div>

          {/* Fondo de pensión */}
          <div className="flex flex-col">
            <label htmlFor="fondo_pension" className="font-medium mb-1">
              Fondo de pensión:
            </label>
            <select
              id="fondo_pension"
              name="fondo_pension"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="onp">ONP</option>
            </select>
          </div>

          {/* Tipo de AFP */}
          <div className="flex flex-col">
            <label htmlFor="tipo_afp" className="font-medium mb-1">
              Tipo de AFP:
            </label>
            <select
              id="tipo_afp"
              name="tipo_afp"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="ninguna">Ninguna...</option>
            </select>
          </div>

          {/* CUSPP */}
          <div className="flex flex-col">
            <label htmlFor="cuspp" className="font-medium mb-1">
              CUSPP:
            </label>
            <input
              id="cuspp"
              name="cuspp"
              className="border border-gray-300 rounded p-2 bg-white"
              defaultValue="671421RGGEC9"
            />
          </div>

          {/* Beneficios corporativos */}
          <div className="flex flex-col">
            <label
              htmlFor="beneficios_corporativos"
              className="font-medium mb-1"
            >
              Beneficios corporativos:
            </label>
            <select
              id="beneficios_corporativos"
              name="beneficios_corporativos"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="descuentos">Descuentos en productos</option>
            </select>
          </div>

          {/* Bonos */}
          <div className="flex flex-col">
            <label htmlFor="bonos" className="font-medium mb-1">
              Bonos o incentivos:
            </label>
            <select
              id="bonos"
              name="bonos"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="productividad">Bono por productividad</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================================
          CONDICIONES DEL CONTRATO
      ================================= */}
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <h2 className="font-semibold text-gray-900 mb-4">
          Condiciones del Contrato
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Tipo de contrato */}
          <div className="flex flex-col">
            <label htmlFor="tipo_contrato" className="font-medium mb-1">
              Tipo de contrato :
            </label>
            <select
              id="tipo_contrato"
              name="tipo_contrato"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="fijo">Fijo</option>
            </select>
          </div>

          {/* Periodo de pruebas */}
          <div className="flex flex-col">
            <label htmlFor="periodo_pruebas" className="font-medium mb-1">
              Periodo de pruebas:
            </label>
            <select
              id="periodo_pruebas"
              name="periodo_pruebas"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="no">No</option>
            </select>
          </div>

          {/* Modalidad de trabajo */}
          <div className="flex flex-col">
            <label htmlFor="modalidad_trabajo" className="font-medium mb-1">
              Modalidad de trabajo:
            </label>
            <select
              id="modalidad_trabajo"
              name="modalidad_trabajo"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="presencial">Presencial</option>
            </select>
          </div>

          {/* Movilidad */}
          <div className="flex flex-col">
            <label htmlFor="movilidad" className="font-medium mb-1">
              Movilidad :
            </label>
            <select
              id="movilidad"
              name="movilidad"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="si">Si</option>
            </select>
          </div>

          {/* Aporte no remunerativo */}
          <div className="flex flex-col">
            <label htmlFor="aporte_no_rem" className="font-medium mb-1">
              Aporte no Remunerativo :
            </label>
            <select
              id="aporte_no_rem"
              name="aporte_no_rem"
              className="border border-gray-300 rounded p-2 bg-white"
            >
              <option value="otros">Otros:...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
