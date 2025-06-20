import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy } from "lucide-react"
import { AnimatedShinyText } from "./magicui/animated-shiny-text"

export function HeroSection() {
  return (
    <section className="text-center py-12 bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-4">
          <Trophy className="h-3 w-3 mr-1" />
          Programming Contests Hub
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Never Miss a Contest Again
        </h1>

        {/* <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover upcoming programming contests from LeetCode, Codeforces, CodeChef, and more. Filter by platform, add
          to your calendar, and stay ahead of the competition.
        </p> */}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center border p-2 rounded-2xl">
            <Calendar className="h-4 w-4 mr-2" />
            <AnimatedShinyText>Auto-sync with Calendar</AnimatedShinyText>
          </div>
          <div className="flex items-center border p-2 rounded-2xl">
            <Users className="h-4 w-4 mr-2" />
            <AnimatedShinyText>Multiple Platforms</AnimatedShinyText>
          </div>
          <div className="flex items-center border p-2 rounded-2xl">
            <Trophy className="h-4 w-4 mr-2" />
            <AnimatedShinyText>Real-time Updates</AnimatedShinyText> 
          </div>
        </div>
      </div>
    </section>
  )
}
