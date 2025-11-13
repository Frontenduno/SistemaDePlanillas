"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Link from "next/link";

// Mock de colaboradores (constante a nivel de módulo para evitar que cambie en cada render)
const MOCK_DATA = [
  {
    id: 1,
    nombre: "Pedro Iara",
    dni: "734982389",
    cargo: "Operario",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Luis Palacios",
    dni: "734982389",
    cargo: "Operario",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Inactivo",
  },
  {
    id: 3,
    nombre: "Pablo Sanches",
    dni: "734982389",
    cargo: "Administrativo",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Activo",
  },
  {
    id: 4,
    nombre: "Juan Sulca",
    dni: "734982389",
    cargo: "Operario",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Inactivo",
  },
  {
    id: 5,
    nombre: "Mario Lopez",
    dni: "734982389",
    cargo: "Operario",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Activo",
  },
  {
    id: 6,
    nombre: "Daniel Flores",
    dni: "734982389",
    cargo: "Administrativo",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Inactivo",
  },
  {
    id: 7,
    nombre: "Carlos Rojas",
    dni: "734982389",
    cargo: "Operario",
    inicio: "04 May 2023",
    fin: "04 Feb 2024",
    estado: "Activo",
  },
];

export default function CollaboratorPage() {
  // Usar la constante a nivel de módulo (MOCK_DATA) directamente

  const [search, setSearch] = useState("");
  const [filterCargo, setFilterCargo] = useState<string | null>(null);
  const [filterEstado, setFilterEstado] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filtros y búsqueda
  const filteredData = useMemo(() => {
    return MOCK_DATA.filter(
      (item) =>
        item.nombre.toLowerCase().includes(search.toLowerCase()) &&
        (!filterCargo || item.cargo === filterCargo) &&
        (!filterEstado || item.estado === filterEstado)
    );
  }, [search, filterCargo, filterEstado]);

  // Paginación
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = () => {};

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Título */}
      <h1 className="text-4xl font-bold text-blue-700">Colaboradores</h1>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Buscar */}
        <div className="relative w-full max-w-md">
          <Input
            placeholder="Buscar Colaborador"
            className="pl-10 rounded-3xl bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2" />
        </div>

        {/* Select Cargo */}
        <Select
          onValueChange={(value) =>
            setFilterCargo(value === "Todos" ? null : value)
          }
        >
          <SelectTrigger className="w-40 bg-white">
            <SelectValue placeholder="Cargo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Operario">Operario</SelectItem>
            <SelectItem value="Administrativo">Administrativo</SelectItem>
          </SelectContent>
        </Select>

        {/* Select Estado */}
        <Select
          onValueChange={(value) =>
            setFilterEstado(value === "Todos" ? null : value)
          }
        >
          <SelectTrigger className="w-40 bg-white">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Activo">Activo</SelectItem>
            <SelectItem value="Inactivo">Inactivo</SelectItem>
          </SelectContent>
        </Select>

        {/* Botón principal */}
        <Button className="bg-blue-700 hover:bg-blue-800 rounded-3xl px-6">
          Generar Boleta
        </Button>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-sm">
            <tr>
              <th className="p-3">
                <Checkbox onCheckedChange={handleSelectAll} />
              </th>
              <th className="p-3">ID</th>
              <th className="p-3">Nombre y apellido</th>
              <th className="p-3">DNI</th>
              <th className="p-3">Inicio Contrato</th>
              <th className="p-3">Inicio de Fin</th>
              <th className="p-3">Estado</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <Checkbox />
                </td>
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.nombre}</td>
                <td className="p-3">{item.dni}</td>
                <td className="p-3">{item.inicio}</td>
                <td className="p-3">{item.fin}</td>
                <td className="p-3">
                  <Badge
                    className={
                      item.estado === "Activo"
                        ? "bg-green-300 text-green-900"
                        : "bg-red-300 text-red-900"
                    }
                  >
                    {item.estado}
                  </Badge>
                </td>
                <td className="p-3">
                  <Link href={`/collaborator/${item.id}`}>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Ver colaborador"
                      title="Ver colaborador"
                      className="border-blue-700 text-blue-700 hover:bg-blue-100"
                    >
                      🔍
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center text-sm px-2">
        <span>
          del 1 al {filteredData.length} de {filteredData.length} resultados
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ◀
          </Button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              className={currentPage === i + 1 ? "bg-blue-700 text-white" : ""}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            ▶
          </Button>
        </div>
      </div>
    </div>
  );
}
