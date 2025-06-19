"use client"

import { useState, useEffect } from "react"
import type { Contest, ContestFilters } from "@/types/contest.types.ts"
import { filterContests } from "@/utils/filter-helpers"

const defaultFilters: ContestFilters = {
  search: "",
  platforms: [],
  dateRange: "all",
  duration: "all",
  status: "all",
}

export function useFilters() {
  const [filters, setFilters] = useState<ContestFilters>(defaultFilters)

  useEffect(() => {
    const saved = localStorage.getItem("contest-filters")
    if (saved) {
      try {
        setFilters({ ...defaultFilters, ...JSON.parse(saved) })
      } catch (error) {
        console.error("Error loading saved filters:", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contest-filters", JSON.stringify(filters))
  }, [filters])

  const updateFilter = (key: keyof ContestFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  const getFilteredContests = (contests: Contest[]) => {
    return filterContests(contests, filters)
  }

  return {
    filters,
    updateFilter,
    clearFilters,
    getFilteredContests,
  }
}
