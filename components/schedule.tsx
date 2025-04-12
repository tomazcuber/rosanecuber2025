// components/schedule.tsx
"use client";

import { ScheduleTimeline } from "./schedule-timeline";

const campaignEvents = [
    {
        date: "2025-04-10",
        events: [
            {
                startTime: "15:00",
                endTime: "16:30",
                title: "Lançamento da Campanha no no auditório do CAVIF"
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
]

const electoralCalendar = [
    {
        "date": "2025-05-12",
        "events": [
            {
                "startTime": "08:00",
                "endTime": "17:00",
                "title": "Votação on-line (período de 48 horas)"
            }
        ]
    },
    {
        "date": "2025-05-13",
        "events": [
            {
                "title": "Apuração dos Votos"
            }
        ]
    },
    {
        "date": "2025-05-14",
        "events": [
            {
                "title": "Recebimento e avaliação dos pedidos de impugnação das eleições"
            }
        ]
    },
    {
        "date": "2025-05-15",
        "events": [
            {
                "title": "Resposta aos pedidos de impugnação das eleições"
            },
            {
                "title": "Encaminhamento do resultado da eleição à Direção de Bio-Manguinhos"
            },
            {
                "title": "Homologação pelo Conselho Deliberativo de Bio-Manguinhos do resultado da eleição"
            },
            {
                "title": "Encaminhamento da Lista Tríplice à Presidência da Fiocruz"
            }
        ]
    }
]

export function Schedule() {
    return (
        <section id="schedule" className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">Agenda da Campanha</h2>

            {/* First Timeline */}
            <ScheduleTimeline
                events={campaignEvents}
                color="primary"
                title="Eventos de Campanha"
            />

            {/* Second Timeline */}
            <ScheduleTimeline
                events={electoralCalendar}
                color="primary"
                title="Calendário Eleitoral"
            />
        </section>
    );
}