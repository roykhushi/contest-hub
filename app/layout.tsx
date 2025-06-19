import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ContestHub - Programming Contest Aggregator",
  description:
    "Discover upcoming programming contests from LeetCode, Codeforces, CodeChef, and more. Never miss a contest again!",
  keywords: "programming contests, competitive programming, leetcode, codeforces, codechef, atcoder",
  authors: [{ name: "ContestHub" }],
  openGraph: {
    title: "ContestHub - Programming Contest Aggregator",
    description: "Discover upcoming programming contests from multiple platforms",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
