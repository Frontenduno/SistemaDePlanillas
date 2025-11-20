"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RegistroLayoutProps {
  children: React.ReactNode;
}

export function RegistroLayout({ children }: RegistroLayoutProps) {
  return (
    <Card className="bg-[#F2F2F2] mb-6">
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-400px)]">
          <div className="p-8">{children}</div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
