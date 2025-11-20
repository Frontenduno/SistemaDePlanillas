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

export default function DatePicker({ value, onChange, placeholder = 'Seleccionar fecha', className = '', disabled = false }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const parsed = React.useMemo(() => (value ? new Date(value) : undefined), [value]);

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
              const iso = date.toISOString().split('T')[0];
              setDisplay(formatDate(date));
              onChange?.(iso);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
