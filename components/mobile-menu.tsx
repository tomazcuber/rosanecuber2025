"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-4 pt-6">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="#about">Conheça a Candidata</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="#program">Programa</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="#schedule">Agenda</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}