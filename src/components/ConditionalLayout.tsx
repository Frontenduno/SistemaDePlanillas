'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Si estamos en la página de login (o en la raíz que ahora renderiza login), solo renderizar children
  if (!pathname) return <>{children}</>;

  if (pathname === '/' || pathname.startsWith('/login')) {
    return <>{children}</>;
  }

  // Para todas las demás páginas, mostrar NavBar y Sidebar
  return <Navbar>{children}</Navbar>;
}
