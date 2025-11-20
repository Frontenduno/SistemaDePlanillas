"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  step: 1 | 2;
  onBack: () => void;
}

export function BackButton({ step, onBack }: BackButtonProps) {
  return (
    <div className="flex justify-end mt-6">
      <Button
        size= "icon-lg"
        aria-label="Regresar al paso anterior"
        disabled={step === 1}
        className={`h-20 w-20 p-0 rounded-full shadow-lg text-white transition-colors ${
          step === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#150AB4] hover:bg-[#0f008f]"
        }`}
        onClick={() => step === 2 && onBack()}
      >
        <ArrowLeft className={`${step === 1 ? "opacity-60" : ""}`} strokeWidth={3} />
      </Button>
    </div>
  );
}
