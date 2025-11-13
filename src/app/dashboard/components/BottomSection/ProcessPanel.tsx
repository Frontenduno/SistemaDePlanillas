import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Lock, LockOpen, ArrowRight } from 'lucide-react';
import type { ProcesoItem } from '@/lib/dashboard';
import { CardProcesos } from './CardProcesos';

interface ProcessPanelProps {
  procesos: ProcesoItem[];
}

export function ProcessPanel({ procesos }: ProcessPanelProps) {
  const getIconColor = (color: 'red' | 'green' | 'blue') => {
    switch (color) {
      case 'red':
        return 'bg-red-500';
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="h-full bg-[#DFDFDF]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-[#C3D007] rounded-full flex items-center justify-center">
              <ArrowRight className="h-7 w-7 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">PROCESOS</CardTitle>
          </div>
          <Select defaultValue="jyp">
            <SelectTrigger className="w-80 border-0 border-b-2 border-black rounded-none text-2xl font-bold">
              <SelectValue placeholder="Seleccionar empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jyp">J&P PERIFÉRICOS S.A.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-end gap-2 mb-3">
            <Button variant="outline" size="sm">
              Ver Historial
            </Button>
            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
              Ver Anteriores
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="">
            {procesos.map((proceso) => (
              <AccordionItem key={proceso.id} value={proceso.id}>
                <AccordionTrigger className="border-0 border-b-2 border-black rounded-none px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-6 w-6 ${getIconColor(proceso.icono)} rounded flex items-center justify-center`}
                    >
                      {proceso.icono === 'red' ? (
                        <Lock className="h-4 w-4 text-white" />
                      ) : (
                        <LockOpen className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="font-bold text-[#150AB4] text-lg ">{proceso.mes}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2">
                  <CardProcesos />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}
