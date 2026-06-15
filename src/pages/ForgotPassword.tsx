import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import usersData from "../data/users.json";
import type { UsersData } from "../types/user";

const typedUsersData = usersData as UsersData;

type Status = "idle" | "success" | "error";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = typedUsersData.users.find((u) => u.email === email);

    if (user) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gradient-to-br from-surface-bright via-surface to-primary-container/5 text-on-background min-h-screen flex items-center justify-center p-container-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xl shadow-primary-container/5 overflow-hidden flex flex-col z-10">
        <div className="p-8 pb-6 border-b border-outline-variant/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary-container/10 border border-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary-container">
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
              key
            </span>
          </div>
          <h1 className="font-h2 text-h2 text-on-surface mb-2">
            ¿Olvidaste tu contraseña?
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant">
            Ingresa tu correo electrónico y te enviaremos instrucciones para
            restablecerla.
          </p>
        </div>

        <div className="p-8 pt-6 flex-1">
          {status === "success" ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary-container/10 border border-primary-container/10 rounded-full flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                  mark_email_read
                </span>
              </div>
              <p className="font-body-base text-body-base text-on-surface-variant break-words">
                Si el correo <span className="font-semibold text-on-surface break-all">{email}</span> está
                registrado, recibirás un mensaje con las instrucciones para
                restablecer tu contraseña.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface block"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className="material-symbols-outlined text-outline text-opacity-70"
                      style={{ fontSize: "20px" }}
                    >
                      mail
                    </span>
                  </div>
                  <input
                    className="w-full pl-10 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg font-body-base text-body-base text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all duration-200"
                    id="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-error font-body-sm text-body-sm">
                  No encontramos una cuenta con ese correo electrónico.
                </p>
              )}

              <div className="pt-2">
                <button
                  className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary font-label-md text-label-md py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Enviar Instrucciones
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="p-6 bg-surface-container-low border-t border-outline-variant/30 text-center">
          <Link
            className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors inline-flex items-center gap-1"
            to="/login"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              arrow_back
            </span>
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
}