"use client"

import { useState, useEffect } from "react"
import type { Contest } from "@/types/contest.types.ts"
import { fetchContests } from "@/services/clist-api"

export function useContests() {
  const [contests, setContests] = useState<Contest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadContests = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchContests()
      setContests(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch contests")
      console.error("Error fetching contests:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContests()
    const interval = setInterval(loadContests, 15 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return {
    contests,
    loading,
    error,
    refetch: loadContests,
  }
}
