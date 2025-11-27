"use client";

import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";

interface DatePickerProps {
  value?: string | null; // ISO date string 'YYYY-MM-DD'
  onChange?: (isoDate: string | null) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

// Parsea 'YYYY-MM-DD' sin problemas de timezone
function parseLocalDate(isoString: string): Date {
  const [year, month, day] = isoString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Formatea una fecha a 'YYYY-MM-DD' sin problemas de timezone
function toISOLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function DatePicker({ value, onChange, placeholder = 'Seleccionar fecha', className = '', disabled = false }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const parsed = React.useMemo(() => (value ? parseLocalDate(value) : undefined), [value]);

  function formatDate(d?: Date) {
    if (!d) return "";
    return d.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
  }

  const [display, setDisplay] = React.useState<string>(formatDate(parsed));

  React.useEffect(() => {
    setDisplay(formatDate(parsed));
  }, [parsed]);

  return (
    <div className="relative">
      <Input
        value={display}
        placeholder={placeholder}
        readOnly
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`bg-white h-10 w-full pr-10 ${className}`}
        disabled={disabled}
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="absolute top-1/2 right-2 -translate-y-1/2 size-6 p-1"
            onClick={() => setOpen((v) => !v)}
            disabled={disabled}
          >
            <CalendarIcon className="size-4" />
            <span className="sr-only">Seleccionar fecha</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" sideOffset={10}>
          <Calendar
            mode="single"
            selected={parsed}
            captionLayout="dropdown"
            onSelect={(date) => {
              if (!date) return;
              setOpen(false);
              const iso = toISOLocalDate(date);
              setDisplay(formatDate(date));
              onChange?.(iso);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
