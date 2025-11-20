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
        type="button"
        size="icon"
        aria-label="Regresar al paso anterior"
        disabled={step === 1}
        className={`h-14 w-14 rounded-full shadow-lg text-white transition-colors ${
          step === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-700"
        }`}
        onClick={() => step === 2 && onBack()}
      >
        <ArrowLeft className={`w-6 h-6 ${step === 1 ? "opacity-60" : ""}`} />
      </Button>
    </div>
  );
}
