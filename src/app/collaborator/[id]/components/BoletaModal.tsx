// src/app/collaborator/[id]/components/BoletaModal.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import IndividualPaySlip from "./IndividualPaySlip";
import { X } from "lucide-react";

export default function BoletaModal({ collaboratorId }: { collaboratorId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 hover:bg-blue-800 px-6 py-6 rounded-xl text-white h-fit font-semibold shadow-sm">
          Generar Boleta
        </Button>
      </DialogTrigger>
      
      {/* AQUÍ ESTÁ LA CORRECCIÓN: sm:max-w-[1200px] */}
      <DialogContent className="sm:max-w-[1200px] max-w-[1200px] w-[95vw] h-[95vh] overflow-auto p-0 border-0 bg-transparent shadow-none">
        <DialogHeader className="hidden">
          <DialogTitle>Boleta de Pago Individual</DialogTitle>
        </DialogHeader>
        
        <DialogClose asChild>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 bg-white/70 rounded-full z-50 transition-all">
            <X className="w-7 h-7" />
          </button>
        </DialogClose>

        {/* Añadimos min-w-fit para asegurarnos de que la boleta no se encoja */}
        <div className="flex justify-center py-10 px-4 min-w-fit">
          <IndividualPaySlip collaboratorId={collaboratorId} />
        </div>
      </DialogContent>
    </Dialog>
  );
}