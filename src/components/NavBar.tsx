"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenu, HiSearch, HiCalendar, HiLogout } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Sidebar from "./Sidebar";

interface NavbarProps {
  children: React.ReactNode;
  userName?: string;
}

export default function Navbar({
  children,
  userName = "Francisco Alvarez",
}: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const currentDate = new Date();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Simular cierre de sesión
    // Aquí podrías limpiar tokens, cookies, localStorage, etc.
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      {/* Navbar fijado en top para que el Sidebar "pegado" mantenga la misma referencia al hacer scroll */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C02A3] text-white shadow-lg h-[60px]">
        <div className="flex items-center justify-between px-4 py-2 h-full">
          {/* Left Section - Menu, Date & Search */}
          <div className="flex items-center gap-10 flex-1">
            <div className="flex items-center gap-4 rounded-3xl bg-[#150AB4] px-3 py-1">
              <Button
                onClick={handleToggleSidebar}
                variant="ghost"
                size="icon"
                className="text-white cursor-pointer hover:bg-blue-600"
              >
                <HiMenu className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-2">
                <HiCalendar className="w-5 h-5" />
                <span className="text-sm font-medium px-2">
                  {month} {year}
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <HiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar colaboradores (Ctrl + B)"
                  className="w-full pl-10 pr-4 py-2 bg-white text-gray-800 placeholder:text-gray-400 placeholder:align-middle border-0 focus-visible:ring-2 focus-visible:ring-blue-400 rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* Right Section - User Info with Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">
                    {userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <span className="text-sm font-medium hidden sm:block">
                  {userName}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2" align="end">
              <div className="flex flex-col gap-1">
                <div className="px-2 py-1.5 text-sm font-medium text-gray-700 border-b mb-1">
                  {userName}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <HiLogout className="w-4 h-4" />
                  Cerrar Sesión
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>

      {/* Sidebar se posiciona con top igual a la altura del navbar (60px) */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content - altura calculada para ocupar el resto de la pantalla sin crear scroll en body */}
      <main
        className={`transition-all duration-300 pt-[60px] min-h-screen ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="h-[calc(100vh-60px)] overflow-y-auto">{children}</div>
      </main>
    </>
  );
}
