import type { Contest, ContestFilters } from "@/types/contest.types"
import { isInDateRange, isContestRunning } from "./date-helpers"

export function filterContests(contests: Contest[], filters: ContestFilters): Contest[] {
  return contests.filter((contest) => {
    // Search filter
    if (filters.search && !contest.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }

    // Platform filter
    if (filters.platforms.length > 0 && !filters.platforms.includes(contest.resource.name)) {
      return false
    }

    // Date range filter
    if (filters.dateRange !== "all" && !isInDateRange(contest.start, filters.dateRange)) {
      return false
    }

    // Duration filter
    if (filters.duration !== "all") {
      const hours = contest.duration / 3600
      switch (filters.duration) {
        case "short":
          if (hours >= 3) return false
          break
        case "medium":
          if (hours < 3 || hours > 6) return false
          break
        case "long":
          if (hours <= 6) return false
          break
      }
    }

    // Status filter
    if (filters.status !== "all") {
      const isRunning = isContestRunning(contest.start, contest.end)
      const isUpcoming = new Date(contest.start) > new Date()

      switch (filters.status) {
        case "running":
          if (!isRunning) return false
          break
        case "upcoming":
          if (!isUpcoming) return false
          break
      }
    }

    return true
  })
}
