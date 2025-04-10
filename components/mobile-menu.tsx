"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full h-auto rounded-none border-t-0 border-x-0 pb-4 pt-4 px-4">
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className="w-full justify-center text-lg" asChild>
            <Link href="#about">Conheça a Candidata</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-center text-lg" asChild>
            <Link href="#program">Programa</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-center text-lg" asChild>
            <Link href="#schedule">Agenda</Link>
          </Button>
          <Button
            className="w-full justify-center text-lg bg-[var(--button-purple)] text-white hover:bg-purple-800"
            asChild
          >
            <Link href="#suggestions">
              Sugerir Ideias
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}