import { VacationData, MonthMap } from "../types"; // <--- Importación relativa

export const vacationDaysData: VacationData = {
  enero: [4, 5, 6, 25],
  febrero: [1, 2, 28],
  marzo: [15, 16],
  abril: [10, 20, 21],
  mayo: [1, 5],
  junio: [15, 16, 17, 18],
  julio: [28, 29],
  agosto: [],
  septiembre: [5],
  octubre: [31],
  noviembre: [1, 2],
  diciembre: [24, 25, 31],
};

export const monthNames: MonthMap = {
  enero: "Enero",
  febrero: "Febrero",
  marzo: "Marzo",
  abril: "Abril",
  mayo: "Mayo",
  junio: "Junio",
  julio: "Julio",
  agosto: "Agosto",
  septiembre: "Septiembre",
  octubre: "Octubre",
  noviembre: "Noviembre",
  diciembre: "Diciembre",
};
