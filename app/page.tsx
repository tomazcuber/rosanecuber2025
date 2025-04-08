import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FileText, Mail, Phone, Facebook, Twitter, Linkedin, Youtube, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

export default function CampaignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/campaign-logo.png"
            alt="Rosane Cuber 2025"
            width={150}
            height={50}
            className="h-8 md:h-12 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#about">Conheça a Candidata</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#program">Programa</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#schedule">Agenda</Link>
            </Button>
          </nav>


          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-20">
        {/* Video Section */}
        {/* <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Nossa Visão</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Vídeo de Campanha"
              allowFullScreen
            />
          </div>
        </section> */}

        {/* About Section */}
        <section id="about" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Sobre a Candidata</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl">
            Conheça nosso material:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <FileText className="text-primary" />
                <div>
                  <h3 className="font-medium">Carta de Apresentação</h3>
                  <Button variant="link" className="h-auto p-0" asChild>
                    <Link href={`/documents/apresentação.pdf`} target="_blank">
                      Baixar PDF
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <FileText className="text-primary" />
                <div>
                  <h3 className="font-medium">Outro documento</h3>
                  <Button variant="link" className="h-auto p-0" asChild>
                    <Link href={`/documents/paper.pdf`} target="_blank">
                      Baixar PDF
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Campaign Promises */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Compromissos</h2>
          <ol className="space-y-4 md:space-y-6 list-none pl-0">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex gap-3 md:gap-4 items-start">
                <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-white text-sm md:text-base font-bold">
                  {num}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-medium">Compromisso {num}</h3>
                  <p className="text-sm md:text-base text-gray-600">Descrição do Compromisso...</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Program Section */}
        <section id="program" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Programa de Gestão</h2>
          <Card>
            <CardHeader className="pb-0 p-2 md:p-4">
              <Image
                src="/program-cover.jpg"
                alt="Capa do Programa"
                width={800}
                height={400}
                className="rounded-t-lg w-full h-auto"
              />
            </CardHeader>
            <CardContent className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-base md:text-xl font-medium text-center md:text-left">
                Conheça nosso programa completo:
              </h3>
              <Button asChild className="w-full md:w-auto">
                <Link href="/documents/program.pdf" target="_blank">
                  Baixar PDF
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Schedule Timeline */}
        <section id="schedule" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Agenda da Campanha</h2>
          <div className="relative pl-6 md:pl-8 border-l-2 border-primary">
            {[
              {
                date: "2025-04-10",
                events: [
                  {
                    startTime: "15:00",
                    endTime: "16:30",
                    title: "Lançamento da Campanha no Trenzinho"
                  }
                ]
              },
              {
                date: "2025-05-09",
                events: [
                  {
                    startTime: "18:00",
                    title: "Fim do período eleitoral"
                  }
                ]
              },
            ].map((day, index) => {
              const [year, month, dayStr] = day.date.split('-');
              const date = new Date(
                parseInt(year),
                parseInt(month) - 1,
                parseInt(dayStr)
              );

              return (
                <div key={index} className="relative mb-8 pl-4 md:pl-6">
                  <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[7px] md:-left-[9px] top-1" />

                  <div className="text-lg md:text-xl font-bold text-primary mb-3">
                    {date.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      timeZone: 'America/Sao_Paulo'
                    })}
                  </div>

                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex gap-3">
                        <div className="w-24 md:w-32 text-sm md:text-base text-primary font-medium">
                          <div className="flex flex-col md:flex-row gap-1">
                            <time dateTime={event.startTime}>
                              {new Date(`2000-01-01T${event.startTime}`).toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                              })}
                            </time>
                            {event.endTime && (
                              <>
                                <span className="inline">–</span>
                                <time dateTime={event.endTime}>
                                  {new Date(`2000-01-01T${event.endTime}`).toLocaleTimeString('pt-BR', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                  })}
                                </time>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 border-l-2 border-gray-200 pl-3">
                          <h3 className="text-base md:text-lg font-medium text-gray-800">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Apoie nossa Campanha</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold">Dados Bancários</h3>
                <p className="text-muted-foreground">
                  Sua contribuição ajuda a fortalecer nossa campanha
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Dados Bancários:</p>
                  <div className="space-y-1 text-sm">
                    <p>Banco: 260 - Nu Pagamentos S.A. – Instituição de Pagamento</p>
                    {/* <p>Favorecido: Comitê Rosane Cuber 2025</p>
                    <p>CNPJ: 12.345.678/0001-90</p> */}
                    <p className="font-bold">Agência: 0001</p>
                    <p className="font-bold">Conta Corrente: 962623324-3</p>
                  </div>
                </div>
                {/* <p className="text-xs text-muted-foreground">
                  * Doações de pessoas jurídicas devem seguir a legislação eleitoral
                </p> */}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold">Doação via Pix</h3>
                <div className="aspect-square max-w-[300px] mx-auto bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/pix-qrcode.png"
                    alt="QR Code PIX"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Escaneie o QR Code usando seu aplicativo de banco
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Entre em contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">contato@rosane2025.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">+55 41 98765-4321</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <Button variant="outline" size="icon" className="w-10 h-10" asChild>
                <Link href="#">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10" asChild>
                <Link href="#">
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10" asChild>
                <Link href="#">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10" asChild>
                <Link href="#">
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}