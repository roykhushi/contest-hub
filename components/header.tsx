"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Filter, Moon, Sun, Calendar } from "lucide-react"
import { useTheme } from "next-themes"

interface HeaderProps {
  onToggleFilters: () => void
}

export function Header({ onToggleFilters }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <Calendar className="h-8 w-8 text-primary" /> */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            ContestHub
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={onToggleFilters} className="lg:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
