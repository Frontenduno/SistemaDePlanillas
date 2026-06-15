import { Link, useLocation } from "react-router-dom";

type StatusType = "construction" | "not-found";

interface StatusVariant {
  icon: string;
  title: string;
  description: string;
}

const VARIANTS: Record<StatusType, StatusVariant> = {
  construction: {
    icon: "construction",
    title: "Página en construcción",
    description:
      "Estamos trabajando para que esta sección esté disponible muy pronto. Vuelve más tarde.",
  },
  "not-found": {
    icon: "error",
    title: "Página no encontrada",
    description:
      "La página que buscas no existe o fue movida. Verifica la dirección o vuelve al inicio.",
  },
};

interface StatusPageProps {
  type?: StatusType;
}

export default function StatusPage({ type = "not-found" }: StatusPageProps) {
  const location = useLocation();
  const variant = VARIANTS[type] ?? VARIANTS["not-found"];

  return (
    <div className="bg-gradient-to-br from-surface-bright via-surface to-primary-container/5 text-on-background min-h-screen flex items-center justify-center p-container-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xl shadow-primary-container/5 overflow-hidden flex flex-col items-center text-center p-10 z-10">
        <div className="w-14 h-14 bg-primary-container/10 border border-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary-container">
          <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
            {variant.icon}
          </span>
        </div>

        <h1 className="font-h1 text-h1 text-on-surface mb-2">
          {variant.title}
        </h1>

        <p className="font-body-base text-body-base text-on-surface-variant mb-2">
          {variant.description}
        </p>

        {type === "not-found" && (
          <p className="font-label-xs text-label-xs text-on-surface-variant mb-6 break-all max-w-full">
            Ruta solicitada: {location.pathname}
          </p>
        )}

        <Link
          className="mt-4 inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md py-2.5 px-6 rounded-lg transition-colors duration-200"
          to="/login"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}