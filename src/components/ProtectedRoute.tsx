import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user =
    localStorage.getItem("payroll_user") ||
    sessionStorage.getItem("payroll_user");

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return <>{children}</>;
}