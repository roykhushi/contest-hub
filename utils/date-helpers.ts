export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  if (hours === 0) {
    return `${minutes}m`
  } else if (minutes === 0) {
    return `${hours}h`
  } else {
    return `${hours}h ${minutes}m`
  }
}

export function getTimeUntilStart(startDate: string): string | null {
  const now = new Date()
  const start = new Date(startDate)
  const diff = start.getTime() - now.getTime()

  if (diff <= 0) return null

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) {
    return `in ${days}d ${hours}h`
  } else if (hours > 0) {
    return `in ${hours}h ${minutes}m`
  } else {
    return `in ${minutes}m`
  }
}

export function isContestRunning(startDate: string, endDate: string): boolean {
  const now = new Date()
  const start = new Date(startDate)
  const end = new Date(endDate)

  return now >= start && now <= end
}

export function isInDateRange(contestStart: string, range: string): boolean {
  const now = new Date()
  const start = new Date(contestStart)

  switch (range) {
    case "today":
      return start.toDateString() === now.toDateString()
    case "week":
      const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
      return start >= now && start <= weekFromNow
    case "month":
      const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
      return start >= now && start <= monthFromNow
    default:
      return true
  }
}
