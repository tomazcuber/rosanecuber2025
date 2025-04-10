"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
    return (
        <section id="about" className="bg-[var(--about-teal)] py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex flex-row items-center gap-8 md:gap-12">
                    <div className="w-1/3 relative aspect-square min-w-[150px]">
                        <Image
                            src="/about-image.jpg"
                            alt="Sobre a Campanha"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="flex-1 space-y-4 md:space-y-6 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold">Sobre a candidata:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <Button
                                className="bg-[var(--button-purple)] text-white border-2 border-white rounded-lg hover:bg-purple-800 mt-2"
                                asChild
                            >
                                <Link className="font-medium text-white" href="/documents/apresentação.pdf" target="_blank">
                                    Carta de apresentação
                                </Link>
                            </Button>

                            <Button
                                className="bg-[var(--button-purple)] text-white border-2 border-white rounded-lg hover:bg-purple-800 mt-2"
                                asChild
                            >
                                <Link href="/documents/memorial.pdf" target="_blank">
                                    Memorial
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}