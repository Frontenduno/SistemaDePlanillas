import { ProcessPanel } from "../components/BottomSection/ProcessPanel";
import { GraphicPanel } from "../components/BottomSection/GraphicPanel";
import type { ProcesoItem, ChartDataPoint } from "@/lib/dashboard";

interface BottomSectionProps {
  procesos: ProcesoItem[];
  trabajadoresData: ChartDataPoint[];
  gastosData?: ChartDataPoint[];
  horasData?: ChartDataPoint[];
  liquidacionesData?: ChartDataPoint[];
}

export function BottomSection({
  procesos,
  trabajadoresData,
  gastosData,
  horasData,
  liquidacionesData,
}: BottomSectionProps) {
  return (
    <div className="grid grid-cols-2 row-start-2 row-end-3 gap-4">
      <div className="col-start-1 col-end-2">
        <ProcessPanel procesos={procesos} />
      </div>
      <div className="col-start-2 col-end-3">
        <GraphicPanel
          trabajadoresData={trabajadoresData}
          gastosData={gastosData}
          horasData={horasData}
          liquidacionesData={liquidacionesData}
        />
      </div>
    </div>
  );
}
