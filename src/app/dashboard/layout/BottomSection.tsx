import { ProcessPanel } from '../components/BottomSection/ProcessPanel';
import type { ProcesoItem } from '@/lib/dashboard';

interface BottomSectionProps {
  procesos: ProcesoItem[];
}

export function BottomSection({ procesos }: BottomSectionProps) {
  return (
    <div className="grid grid-cols-2 row-start-2 row-end-3">
      <div className="col-start-1 col-end-2">
        <ProcessPanel procesos={procesos} />
      </div>
    </div>
  );
}
