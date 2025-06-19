"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink, Plus } from "lucide-react"
import type { Contest } from "@/types/contest.types"
import { formatDate, formatDuration, getTimeUntilStart, isContestRunning } from "@/utils/date-helpers"
import { addToCalendar } from "@/utils/calendar-helpers"
import { getPlatformInfo } from "@/utils/platform-helpers"

interface ContestCardProps {
  contest: Contest
}

export function ContestCard({ contest }: ContestCardProps) {
  const platformInfo = getPlatformInfo(contest.resource.name)
  const timeUntil = getTimeUntilStart(contest.start)
  const isRunning = isContestRunning(contest.start, contest.end)

  const handleAddToCalendar = () => {
    addToCalendar(contest)
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${platformInfo.color}`} title={platformInfo.name} />
            <span className="text-sm text-muted-foreground font-medium truncate">{platformInfo.name}</span>
          </div>
          <Badge variant={isRunning ? "default" : "secondary"} className="ml-2 flex-shrink-0">
            {isRunning ? "Live" : "Upcoming"}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {contest.event}
        </h3>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{formatDate(contest.start)}</span>
          </div>

          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{formatDuration(contest.duration)}</span>
          </div>

          {!isRunning && timeUntil && <div className="text-primary font-medium">Starts {timeUntil}</div>}
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={handleAddToCalendar} className="flex-1 cursor-pointer">
            <Calendar className="h-4 w-4 mr-1" />
            Calendar
          </Button>

          <Button size="sm" onClick={() => window.open(contest.href, "_blank")} className="flex-1 cursor-pointer">
            <ExternalLink className="h-4 w-4 mr-1" />
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
