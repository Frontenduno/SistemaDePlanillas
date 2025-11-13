"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Trabajador } from "@/lib/dashboard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NewEmployeesProps {
  data: Trabajador[];
}

export function NewEmployees({ data }: NewEmployeesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const hasMultiplePages = totalPages > 1;

  const currentData = data.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <Card className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#DFDFDF]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Trabajadores nuevos
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex flex-row px-4 justify-between">
          {currentData.map((trabajador, idx) => (
            <div key={idx} className="text-center">
              <Avatar className="h-24 w-20 rounded-full mx-auto mb-2">
                <AvatarFallback className="bg-blue-100 text-blue-700">
                  {trabajador.nombre[0]}
                  {trabajador.apellido[0]}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg text-[#150AB4] leading-5">
                {trabajador.nombre}{" "}
                <span className="line-clamp-1">{trabajador.apellido}</span>
              </p>
            </div>
          ))}
        </div>

        {hasMultiplePages && (
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
