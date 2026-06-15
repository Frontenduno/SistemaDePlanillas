import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Support from "./pages/Support";
import StatusPage from "./pages/StatusPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route element={<Login />} path="/login" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<Support />} path="/support" />

        <Route
          element={
            <ProtectedRoute>
              <StatusPage type="construction" />
            </ProtectedRoute>
          }
          path="/dashboard"
        />

        <Route element={<StatusPage type="not-found" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}