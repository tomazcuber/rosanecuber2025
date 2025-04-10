// components/campaign-promises.tsx
"use client";

import Image from "next/image";

export function CampaignPromises() {
  return (
    <section className="px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex gap-8 md:gap-12 items-stretch">
        {/* SVG Container */}
        <div className="w-1/3 hidden md:block relative min-h-[400px] overflow-hidden">
          <Image
            src="/arvore_cinza.svg" // Replace with your SVG path
            alt="Ilustração de compromissos"
            fill
            className="object-left-bottom scale-125"
          />
        </div>

        {/* Promises List */}
        <div className="py-16 md:py-24 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--button-purple)]">Compromissos</h2>
          <ol className="relative border-l-2 border-[var(--button-purple)] pl-8 space-y-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="relative">
                {/* Number Circle */}
                <div className="absolute w-6 h-6 -left-[13px] bg-[var(--button-purple)] rounded-full flex items-center justify-center text-white font-bold">
                  {num}
                </div>
                
                {/* Content */}
                <div className="ml-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Compromisso {num}
                  </h3>
                  <p className="text-gray-600">
                    Descrição detalhada do compromisso aqui. Texto exemplo que explica os objetivos e metas desta proposta específica.
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}