"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Suggestions() {
    return (
        <section id="suggestions" className="bg-[var(--suggestion-light-blue)] relative py-12 md:py-20 overflow-hidden">
            {/* Watermark Background */}
            <div className="watermark-animate absolute inset-0 z-0 opacity-20">
                <Image
                    src="selo_campanha.svg" // Add your watermark image to public/images/
                    alt="Watermark"
                    fill
                    className="object-cover"
                    style={{
                        transform: 'scale(1.4)', // Adjust scale as needed
                        mixBlendMode: 'multiply'
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
                    <div className="w-full max-w-2xl space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            Contribua com sua ideia para o futuro de Bio-Manguinhos
                        </h2>

                        <p className="text-white/90 md:text-lg mb-8">
                            Sua opinião é fundamental para construir um futuro melhor.
                            Compartilhe suas sugestões e faça parte desta transformação.
                        </p>
                    </div>

                    <div className="flex justify-center w-full">
                        <Button
                            className="bg-[var(--button-purple)] text-white text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-lg hover:bg-purple-800 transition-all transform hover:scale-105 w-full md:w-auto"
                            asChild
                        >
                            <Link
                                href="https://form.jotform.com/250784319037056"
                                target="_blank"
                                className="font-semibold"
                            >
                                ACESSAR FORMULÁRIO DE SUGESTÕES
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}