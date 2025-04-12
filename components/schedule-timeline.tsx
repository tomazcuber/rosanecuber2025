// components/schedule-timeline.tsx
"use client";

interface ScheduleItem {
  date: string;
  events: Array<{
    title: string;
    startTime?: string;
    endTime?: string;
  }>;
}

interface ScheduleTimelineProps {
  events: ScheduleItem[];
  color?: string;
  title?: string;
}

export function ScheduleTimeline({ events, color = "primary", title }: ScheduleTimelineProps) {
  return (
    <div className={`relative pl-6 md:pl-8 border-l-2 border-${color}`}>
      {title && <h3 className="text-xl font-bold mb-8 text-${color}">{title}</h3>}
      {events.map((day, index) => {
        const [year, month, dayStr] = day.date.split('-');

        return (
          <div key={index} className="relative mb-8 pl-4 md:pl-6">
            <div className={`absolute w-3 h-3 md:w-4 md:h-4 bg-${color} rounded-full -left-[7px] md:-left-[9px] top-1`} />
            
            <div className={`text-lg md:text-xl font-bold text-${color} mb-3`}>
              {`${dayStr}/${month}/${year}`}
            </div>

            <div className="space-y-4">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex gap-3">
                  <div className="w-24 md:w-32 text-sm md:text-base text-${color} font-medium">
                    {event.startTime && (
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
                    )}
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
  );
}