// src/components/Sidebar.tsx
"use client";

import { useEffect, useState } from "react";
import { MdDashboard, MdPeople, MdDescription, MdEmail, MdChatBubbleOutline } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaCalendarCheck, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Namdhinggo } from "next/font/google";
import { cn } from "@/lib/utils";

const namdhinggo = Namdhinggo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  // Leer el rol almacenado al montar el componente (para evitar errores de hidratación)
  useEffect(() => {
    setRole(localStorage.getItem('userRole') || 'hr');
  }, []);

  // Configuramos qué roles pueden ver cada ítem
  const ALL_MENU_ITEMS = [
    { icon: MdDashboard, label: 'Panel de control', href: '/dashboard', roles: ['hr', 'contador'] },
    { icon: MdPeople, label: 'Colaboradores', href: '/collaborator', roles: ['hr', 'contador'] },
    { icon: MdDescription, label: 'Registro Personal', href: '/registro', roles: ['hr'] },
    { icon: FaLocationArrow, label: 'Vacaciones', href: '/vacaciones', roles: ['hr'] },
    { icon: FaCalendarCheck, label: 'Ctrl. de asistencias', href: '/asistencias', roles: ['hr', 'contador'] },
    { icon: PiBagSimpleFill, label: 'Empresas', href: '/empresas', roles: ['hr'] },
    { icon: MdEmail, label: 'Mensaje', href: '/mensajes', roles: ['hr'] },
    { icon: MdChatBubbleOutline, label: 'Envío de Solicitudes', href: '/envio-solicitudes', roles: ['hr'] },
  ];

  // Filtramos la lista según el rol activo
  const visibleItems = ALL_MENU_ITEMS.filter(item => 
    role ? item.roles.includes(role) : item.roles.includes('hr')
  );

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          initial={{ x: -256, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -256, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
          className="fixed left-0 top-[60px] h-[calc(100vh-60px)] w-64 bg-[#150AB4] text-white z-40 flex flex-col"
        >
          <div className=" flex flex-col justify-center w-full pt-4">
            <p className={`text-center text-5xl font-bold ${namdhinggo.className}`}>J&P</p>
            <p className={`text-center text-xl ${namdhinggo.className}`}>Perifericos</p>
          </div>
          
          {/* Ocultamos el menú hasta que sepamos el rol para que no parpadee */}
          {role && (
            <nav className="flex-1 py-6">
              <ul className="space-y-2 px-2">
                {visibleItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-700 hover:text-white"
                        )}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="font-medium"
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}