"use client";
import { Card, CardContent } from "@/components/ui/card";

interface RegistroLayoutProps {
  children: React.ReactNode;
}

export function RegistroLayout({ children }: RegistroLayoutProps) {
  return (
    <Card className="bg-[#F2F2F2] mb-6">
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
}
