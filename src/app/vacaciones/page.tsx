import Calendar from "./components/Calendar"; // <--- Importación relativa directa

export default function VacacionesPage() {
  return (
    <section className="w-full min-h-screen bg-gray-50 flex justify-center py-10">
      <Calendar />
    </section>
  );
}
