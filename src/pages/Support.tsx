import { Link } from "react-router-dom";

interface SupportChannel {
  icon: string;
  title: string;
  description: string;
  hint: string;
}

const channels: SupportChannel[] = [
  {
    icon: "mail",
    title: "Correo electrónico",
    description: "soporte@payrollmanagement.com",
    hint: "Respuesta en menos de 24 horas hábiles.",
  },
  {
    icon: "call",
    title: "Teléfono",
    description: "+51 (01) 234-5678",
    hint: "Lunes a viernes, 9:00 a.m. - 6:00 p.m.",
  },
  {
    icon: "chat",
    title: "Chat en vivo",
    description: "Disponible desde el panel principal",
    hint: "Una vez iniciada la sesión podrás chatear con un agente.",
  },
];

export default function Support() {
  return (
    <div className="bg-gradient-to-br from-surface-bright via-surface to-primary-container/5 text-on-background min-h-screen flex items-center justify-center p-container-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="relative w-full max-w-2xl bg-surface-container-lowest border border-outline-variant/60 rounded-xl shadow-xl shadow-primary-container/5 overflow-hidden flex flex-col z-10">
        <div className="p-8 pb-6 border-b border-outline-variant/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary-container/10 border border-primary-container/10 rounded-full flex items-center justify-center mb-4 text-primary-container">
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
              support_agent
            </span>
          </div>
          <h1 className="font-h2 text-h2 text-on-surface mb-2">
            Centro de soporte
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant max-w-md">
            ¿Tienes problemas para acceder a tu cuenta? Elige el canal que
            prefieras y nuestro equipo te ayudará lo antes posible.
          </p>
        </div>

        <div className="p-8 pt-6 flex-1 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-surface border border-outline-variant/60 rounded-lg p-5 flex flex-col items-center text-center gap-2"
            >
              <span className="material-symbols-outlined text-primary-container text-[28px]">
                {channel.icon}
              </span>
              <h3 className="font-h3 text-h3 text-on-surface">
                {channel.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface break-all">
                {channel.description}
              </p>
              <p className="font-label-xs text-label-xs text-on-surface-variant">
                {channel.hint}
              </p>
            </div>
          ))}
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