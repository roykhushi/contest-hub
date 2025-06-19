"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"

interface ErrorStateProps {
  onRetry: () => void
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="text-center py-12">
      <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Failed to load contests</h3>
      <p className="text-muted-foreground mb-6">There was an error fetching contest data. Please try again.</p>
      <Button onClick={onRetry}>
        <RefreshCw className="h-4 w-4 mr-2" />
        Try Again
      </Button>
    </div>
  )
}
