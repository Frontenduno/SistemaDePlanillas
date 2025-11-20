'use client';

import { MdDashboard, MdPeople, MdDescription } from 'react-icons/md';
import { PiBagSimpleFill } from "react-icons/pi";
import { FaCalendarCheck, FaLocationArrow } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Namdhinggo } from 'next/font/google';
import { cn } from '@/lib/utils';

const namdhinggo = Namdhinggo({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { icon: MdDashboard, label: 'Panel de Control', href: '/dashboard' },
    { icon: MdPeople, label: 'Colaboradores', href: '/collaborator' },
    { icon: MdDescription, label: 'Registro Personal', href: '/registro' },
    { icon: FaLocationArrow, label: 'Vacaciones', href: '/vacaciones' },
    { icon: FaCalendarCheck, label: 'Ctrl. de Asistencias', href: '/asistencias' },
    { icon: PiBagSimpleFill, label: 'Empresas', href: '/empresas' },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          initial={{ x: -256, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -256, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          className="fixed left-0 top-[60px] h-[calc(100vh-60px)] w-64 bg-[#150AB4] text-white z-40 flex flex-col"
        >
        {/* Menu Items */}
        <div className=" flex flex-col justify-center w-full pt-4">
          <p className={`text-center text-5xl font-bold ${namdhinggo.className}`}>J&P</p>
          <p className={`text-center text-xl ${namdhinggo.className}`}>Perifericos</p>
        </div>
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-2">
            {menuItems.map((item, index) => {
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
                      'flex items-center gap-3 px-3 py-3 rounded-lg transition-colors',
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
