"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartDataPoint } from "@/lib/dashboard";
import { useState, useMemo } from "react";

interface GraphicPanelProps {
  trabajadoresData?: ChartDataPoint[];
  gastosData?: ChartDataPoint[];
  horasData?: ChartDataPoint[];
  liquidacionesData?: ChartDataPoint[];
  title?: string;
}

type ChartType = "trabajadores" | "gastos" | "horas" | "liquidaciones";

export function GraphicPanel({
  trabajadoresData = [],
  gastosData = [],
  horasData = [],
  liquidacionesData = [],
  title = "Gráficos",
}: GraphicPanelProps) {
  const [activeChart, setActiveChart] = useState<ChartType>("trabajadores");

  // Configuración dinámica por tipo de gráfico
  const chartConfig = useMemo(() => {
    const configs = {
      trabajadores: {
        label: "Trabajadores",
        dataKey: "value",
        color: "#3b82f6",
        data: trabajadoresData,
      },
      gastos: {
        label: "Gastos ($)",
        dataKey: "value",
        color: "#ef4444",
        data: gastosData,
      },
      horas: {
        label: "Horas Extras",
        dataKey: "value",
        color: "#f59e0b",
        data: horasData,
      },
      liquidaciones: {
        label: "Liquidaciones",
        dataKey: "value",
        color: "#10b981",
        data: liquidacionesData,
      },
    };
    return configs[activeChart];
  }, [activeChart, trabajadoresData, gastosData, horasData, liquidacionesData]);

  return (
    <Card className="h-full bg-[#DFDFDF]">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            size="sm"
            variant={activeChart === "trabajadores" ? "default" : "outline"}
            onClick={() => setActiveChart("trabajadores")}
            className={
              activeChart === "trabajadores"
                ? "bg-blue-600 hover:bg-blue-700"
                : ""
            }
          >
            Trabajadores
          </Button>
          <Button
            size="sm"
            variant={activeChart === "gastos" ? "default" : "outline"}
            onClick={() => setActiveChart("gastos")}
            className={
              activeChart === "gastos" ? "bg-blue-600 hover:bg-blue-700" : ""
            }
          >
            Gastos
          </Button>
          <Button
            size="sm"
            variant={activeChart === "horas" ? "default" : "outline"}
            onClick={() => setActiveChart("horas")}
            className={
              activeChart === "horas" ? "bg-blue-600 hover:bg-blue-700" : ""
            }
          >
            Horas Extras
          </Button>
          <Button
            size="sm"
            variant={activeChart === "liquidaciones" ? "default" : "outline"}
            onClick={() => setActiveChart("liquidaciones")}
            className={
              activeChart === "liquidaciones"
                ? "bg-blue-600 hover:bg-blue-700"
                : ""
            }
          >
            Liquidaciones
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-10rem)]">
        <div className="mb-2">
          <p className="text-sm font-medium text-gray-700">
            {chartConfig.label}
          </p>
        </div>
        <div className="h-[calc(100%-4rem)] recharts-theme">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={chartConfig.dataKey}
                stroke={chartConfig.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-right text-gray-500 mt-2">Tiempo</p>
      </CardContent>
    </Card>
  );
}
