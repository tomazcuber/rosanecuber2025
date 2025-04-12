// components/campaign-promises.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const promises = [
  {
    title: "Estratégia Institucional e Governança",
    directives: [
      "Implantação e modernização dos processos de Estratégia Corporativa",
      "Fortalecer os mecanismos de governança institucional",
      "Aprimorar os processos decisórios"
    ]
  },
  {
    title: "Pessoas e Cultura Organizacional",
    directives: [
      "Atrair e reter talentos, e promover a capacitação contínua dos colaboradores",
      "Promover ações de equidade de raça e gênero",
      "Promover ambiente corporativo seguro e acolhedor",
      "Fortalecer a cultura de inovação e excelência"
    ]
  },
  {
    title: "Eficiência Operacional & Sustentabilidade",
    directives: [
      "Reestruturar a capacidade produtiva de Bio-Manguinhos e cadeia de suprimentos",
      "Aumentar a maturidade da Cultura de Qualidade em todas as vice diretorias",
      "Alinhar a cadeia produtiva para o atendimento das demandas pactuadas plurianualmente",
      "Reduzir o impacto ambiental das operações"
    ]
  },
  {
    title: "Inovação e Desenvolvimento Tecnológico",
    directives: [
      "Fortalecer a capacidade de inovação em pesquisa e desenvolvimento",
      "Acelerar o ciclo de desenvolvimento de novos produtos",
      "Estimular de forma contínua a inovação em processos",
      "Modernizar a infraestrutura tecnológica de P&D",
      "Desenvolver e incorporar novos produtos e serviços focados no atendimento as demandas de saúde pública, principalmente as não atendidas",
    ]
  },
  {
    title: "Infraestrutura",
    directives: [
      "Priorizar a colocação em operação dos empreendimentos em andamento",
      "Melhorar as condições atuais de infraestrutura para as áreas"
    ]
  },
  {
    title: "Relacionamento Institucional, Comunicação e Informação",
    directives: [
      "Fortalecer a presença de Bio-Manguinhos no Brasil e no mundo, promovendo transparência, engajamento e impacto social"
    ]
  },
];

export function CampaignPromises() {
  return (
    <section id="program" className="py-8 md:py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
        Conheça as Propostas da Campanha
      </h2>

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
        <div className="flex-1 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-[var(--button-purple)]">
            Eixos Temáticos
          </h2>

          <ol className="relative border-l-2 border-[var(--button-purple)] pl-8 space-y-8">
            {promises.map((promise, index) => (
              <li key={index} className="relative">
                <div className="ml-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-[var(--button-purple)]">
                    {promise.title}
                  </h3>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <ul className="list-disc space-y-2 pl-5">
                      {promise.directives.map((directive, dIndex) => (
                        <li
                          key={dIndex}
                          className="text-gray-600 text-sm md:text-base"
                        >
                          {directive}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
                  {/* Download Button */}
        <div className="mt-12 flex justify-center">
            <Button
              className="bg-[var(--button-purple)] text-white border-2 border-white rounded-lg hover:bg-purple-800 px-8 py-4 text-lg md:text-xl"
              asChild
            >
              <Link 
                href="/documents/Proposta para os 4 anos de Mandato_Rosane Cuber Guimarães.pdf" 
                target="_blank"
                className="font-semibold"
              >
                PROGRAMA COMPLETO
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}