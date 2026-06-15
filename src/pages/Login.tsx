import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import usersData from "../data/users.json";
import type { UsersData } from "../types/user";

const typedUsersData = usersData as UsersData;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const user = typedUsersData.users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    if (remember) {
      localStorage.setItem("payroll_user", JSON.stringify(user));
    } else {
      sessionStorage.setItem("payroll_user", JSON.stringify(user));
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      {/* Left Side: Image & Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional modern office environment"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIZ-ae_W3RwJubdCLYuTUhdmSFChtllo7UphhRbio-Y9mTDZow4_pIDcv4WlYVKqHyGzYOcLWU5XUgvqs8dZGiNh9tjiEXOVi5GkerMh6Q9th03JO6Cq9PVyTS1GkTUWOfzNSMZ2kdgR2brX4fvGh6AmuIExSEdzr9U4XrpXSrhQR6A5lpGwuNzjhXUbVDqeg06G5gCqI1H6NJj6mHGbmO6f9XL3jyq5VkLMEVXqb8enT61s2Us0RQBmPVlxjcehHWQxkYfX4A1Dw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary-container/70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 h-full text-on-primary w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center border border-outline-variant/30 backdrop-blur-sm">
              <span className="material-symbols-outlined text-on-primary">
                account_balance
              </span>
            </div>
            <span className="font-h2 text-h2 font-bold tracking-tight text-on-primary">
              Payroll Management
            </span>
          </div>

          <div className="max-w-md">
            <h1 className="font-h1 text-h1 text-on-primary mb-6 leading-tight">
              Gestión eficiente para empresas modernas.
            </h1>
            <p className="font-body-base text-body-base text-on-primary/80">
              Acceda a su panel de control para administrar nóminas,
              directorios de empleados y reportes de cumplimiento con
              precisión y seguridad.
            </p>
          </div>

          <div className="font-label-xs text-label-xs text-on-primary/60 uppercase tracking-wider">
            Enterprise Suite © 2024
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-surface-container-lowest">
        <div className="w-full max-w-[400px]">
          {/* Mobile Brand Header */}
          <div className="flex lg:hidden items-center gap-3 mb-10 justify-center">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary">
                account_balance
              </span>
            </div>
            <span className="font-h2 text-h2 font-bold text-primary">
              Payroll Management
            </span>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="font-h1 text-h1 text-on-surface mb-2">
              Bienvenido
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">
              Ingrese sus credenciales para acceder al sistema.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email / User Field */}
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface block"
                htmlFor="email"
              >
                Correo Electrónico o Usuario
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
                  mail
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-shadow"
                  id="email"
                  name="email"
                  placeholder="usuario@empresa.com"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="font-label-md text-label-md text-on-surface block"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <Link
                  className="font-body-sm text-body-sm text-primary-container hover:text-primary transition-colors"
                  to="/forgot-password"
                >
                  Olvidé mi contraseña
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
                  lock
                </span>
                <input
                  className="w-full pl-10 pr-10 py-2 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-shadow"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors flex items-center justify-center"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-error font-body-sm text-body-sm">{error}</p>
            )}

            {/* Remember Me */}
            <div className="flex items-center gap-2 pt-2">
              <input
                checked={remember}
                className="w-4 h-4 rounded-sm border-outline-variant text-primary-container focus:ring-primary-container/20 bg-surface cursor-pointer"
                id="remember"
                name="remember"
                type="checkbox"
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label
                className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"
                htmlFor="remember"
              >
                Mantener sesión iniciada
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-2.5 px-4 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 mt-8"
              type="submit"
            >
              Iniciar Sesión
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Footer Links / Help */}
          <div className="mt-12 pt-6 border-t border-outline-variant/30 text-center">
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-1 hover:text-primary-container transition-colors"
              to="/support"
            >
              <span className="material-symbols-outlined text-[16px]">
                support_agent
              </span>
              ¿Necesita ayuda? Contacte a soporte técnico
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}