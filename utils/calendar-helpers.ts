import type { Contest } from "@/types/contest.types"

export function addToCalendar(contest: Contest) {
  const startDate = new Date(contest.start)
  const endDate = new Date(contest.end)

  const formatDateForCalendar = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const title = encodeURIComponent(`[${contest.resource}] ${contest.event}`)
  const details = encodeURIComponent(
    `Contest: ${contest.event}\nPlatform: ${contest.resource}\nRegistration: ${contest.href}`,
  )
  const location = encodeURIComponent(contest.href)

  const startTime = formatDateForCalendar(startDate)
  const endTime = formatDateForCalendar(endDate)


  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`

  window.open(googleCalendarUrl, "_blank")
}

export function generateICSFile(contest: Contest): string {
  const startDate = new Date(contest.start)
  const endDate = new Date(contest.end)

  const formatDateForICS = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ContestHub//Contest Calendar//EN
BEGIN:VEVENT
UID:contest-${contest.id}@contesthub.com
DTSTAMP:${formatDateForICS(new Date())}
DTSTART:${formatDateForICS(startDate)}
DTEND:${formatDateForICS(endDate)}
SUMMARY:[${contest.resource}] ${contest.event}
DESCRIPTION:Contest: ${contest.event}\\nPlatform: ${contest.resource}\\nRegistration: ${contest.registration_url || contest.href}
URL:${contest.href}
LOCATION:${contest.href}
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Contest starting in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`

  return icsContent
}
