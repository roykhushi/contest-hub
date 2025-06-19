"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, X, Filter } from "lucide-react"
import type { ContestFilters } from "@/types/contest.types"

interface FilterPanelProps {
  filters: ContestFilters
  onUpdateFilter: (key: keyof ContestFilters, value: any) => void
  onClearFilters: () => void
  contestCount: number
}

const platforms = [
  { id: "leetcode", name: "LeetCode", color: "bg-orange-500" },
  { id: "codeforces", name: "Codeforces", color: "bg-blue-500" },
  { id: "codechef", name: "CodeChef", color: "bg-amber-600" },
  { id: "atcoder", name: "AtCoder", color: "bg-gray-600" },
]

export function FilterPanel({ filters, onUpdateFilter, onClearFilters, contestCount }: FilterPanelProps) {
  const hasActiveFilters =
    filters.search || filters.platforms.length > 0 || filters.dateRange !== "all" || filters.duration !== "all"

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <Badge variant="secondary" className="w-fit">
          {contestCount} contests found
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Contests</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search by contest name..."
              value={filters.search}
              onChange={(e) => onUpdateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Platforms */}
        <div className="space-y-3">
          <Label>Platforms</Label>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center space-x-2">
                <Checkbox
                  id={platform.id}
                  checked={filters.platforms.includes(platform.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onUpdateFilter("platforms", [...filters.platforms, platform.id])
                    } else {
                      onUpdateFilter(
                        "platforms",
                        filters.platforms.filter((p) => p !== platform.id),
                      )
                    }
                  }}
                />
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                  <Label htmlFor={platform.id} className="text-sm font-normal cursor-pointer">
                    {platform.name}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <Label>Date Range</Label>
          <Select value={filters.dateRange} onValueChange={(value) => onUpdateFilter("dateRange", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label>Contest Duration</Label>
          <Select value={filters.duration} onValueChange={(value) => onUpdateFilter("duration", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="short">Short (&lt; 3 hours)</SelectItem>
              <SelectItem value="medium">Medium (3-6 hours)</SelectItem>
              <SelectItem value="long">Long (&gt; 6 hours)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label>Contest Status</Label>
          <Select value={filters.status} onValueChange={(value) => onUpdateFilter("status", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="running">Running Now</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
