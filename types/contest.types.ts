export interface Contest {
  id: number
  event: string
  start: string 
  end: string 
  resource: string
  href: string
  duration: number 
  registration_url?: string,
  color:string,
  url:string
}

export interface ContestFilters {
  search: string
  platforms: string[]
  dateRange: "all" | "today" | "week" | "month"
  duration: "all" | "short" | "medium" | "long"
  status: "all" | "upcoming" | "running"
}

export interface PlatformInfo {
  name: string
  color: string
  url: string
}
