import { ContestCard } from "@/components/contest-card"
import type { Contest } from "@/types/contest.types"

interface ContestGridProps {
  contests: Contest[]
}

export function ContestGrid({ contests }: ContestGridProps) {
  if (contests.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🏆</div>
        <h3 className="text-xl font-semibold mb-2">No contests found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or check back later for new contests.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {contests.map((contest) => (
        <ContestCard key={contest.id} contest={contest} />
      ))}
    </div>
  )
}
