import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileText, Calendar, Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            className="h-12 w-auto"
          />
          <nav className="flex gap-4">
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
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-12 space-y-20">
        {/* Video Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Nossa Visão</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Vídeo de Campanha"
              allowFullScreen
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8">
          <h2 className="text-3xl font-bold">Sobre a Candidata</h2>
          <p className="text-gray-600 max-w-3xl">
            Conheça noso material:
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
          <h2 className="text-3xl font-bold">Compromissos</h2>
          <ol className="space-y-6 list-none pl-0">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                  {num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Compromisso {num}</h3>
                  <p className="text-gray-600">Descrição do Compromisso...</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Program Section */}
        <section id="program" className="space-y-8">
          <h2 className="text-3xl font-bold">Programa de Gestão</h2>
          <Card>
            <CardHeader className="pb-0">
              <Image
                src="/program-cover.jpg"
                alt="Capa do Programa"
                width={800}
                height={400}
                className="rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-medium">Conheça nosso programa completo:</h3>
              <Button asChild>
                <Link href="/documents/program.pdf" target="_blank">
                  Baixar PDF
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Schedule Timeline */}
        <section id="schedule" className="space-y-8">
          <h2 className="text-3xl font-bold">Agenda da Campanha</h2>
          <div className="relative pl-8 border-l-2 border-primary">
            {[
              { date: "2025-03-01", title: "Lançamento da Candidatura" },
              { date: "2025-03-15", title: "Encontro com a Comunidae" },
              { date: "2025-04-01", title: "Roda de Conversa" },
            ].map((event, index) => (
              <div key={index} className="relative mb-8 pl-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                <time className="text-sm text-gray-500">{event.date}</time>
                <h3 className="text-lg font-medium">{event.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Entre em contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contato@rosane2025.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="#">
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}