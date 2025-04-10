"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white w-full">
      {/* Main Hero Content */}
      <div className="w-full flex flex-row items-end justify-between h-[180px] md:h-[500px] gap-2 md:gap-4 px-4">
        {/* Candidate Photo */}
        <div className="w-1/3 flex items-end h-full max-h-[120px] md:max-h-none">
          <div className="relative aspect-[3/4] w-full max-w-[100px] md:max-w-xs mx-auto">
            <Image
              src="/rosane_photo.png"
              alt="Rosane Cuber"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-1/3 flex flex-col items-center justify-center h-full space-y-1 md:space-y-4">
          <div className="inline-block">
            <h1 className="bg-primary text-white text-xs md:text-2xl lg:text-4xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg whitespace-nowrap">
              Rosane Cuber
            </h1>
          </div>
          <h2 className="text-[0.6rem] md:text-xl lg:text-3xl font-medium text-gray-600 text-center leading-tight mt-1 md:mt-0">
            Diretora de Bio
            <br />
            2025 - 2029
          </h2>
        </div>

        {/* SVG Container */}
        <div className="w-1/3 relative h-full overflow-hidden">
          <div className="absolute bottom-0 left-[25%] md:left-[20%] w-[150%] md:w-[140%] h-full">
            <Image
              src="/arvore_cor.svg"
              alt="Colorful tree with people"
              fill
              className="object-contain object-left-bottom scale-90 md:scale-100"
              priority
            />
          </div>
        </div>
      </div>

      {/* Full-width Slogan Banner */}
      <div className="w-full bg-primary text-white py-4 px-2 md:py-12 md:px-6">
        <div className="w-full text-center">
          <p className="text-xs md:text-3xl lg:text-3xl font-bold leading-tight">
            Trabalho digno e participativo = Resultados que transformam
          </p>
        </div>
      </div>
    </section>
  );
}