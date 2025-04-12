"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function About() {
    return (
        <section id="about" className="bg-[var(--about-teal)] py-12 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Image Container - Full width on mobile */}
                    <div className="w-full md:w-1/3 mx-auto max-w-[300px] md:max-w-none">
                        <div className="relative aspect-square">
                            <Image
                                src="/carteirafuncional.png"
                                alt="Sobre a Campanha"
                                fill
                                className="object-contain rounded-lg shadow-lg"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                    </div>

                    {/* Text Content - Full width on mobile */}
                    <div className="w-full md:flex-1 space-y-6 md:space-y-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                            Sobre a candidata:
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <Button
                                className="w-full bg-[var(--button-purple)] text-white border-2 border-white rounded-lg hover:bg-purple-800 py-8 md:py-4 text-sm md:text-base"
                                asChild
                            >
                                <Link href="/documents/Carta de Apresentação_Rosane Cuber.pdf" target="_blank">
                                    <span className="md:hidden">Carta de<br />Apresentação</span>
                                    <span className="hidden md:inline">Carta de Apresentação</span>
                                </Link>
                            </Button>
                            <Button
                                className="w-full bg-[var(--button-purple)] text-white border-2 border-white rounded-lg hover:bg-purple-800 py-4 text-sm md:text-base"
                                asChild
                            >
                                <Link href="/documents/Memorial_Rosane Cuber.pdf" target="_blank">
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