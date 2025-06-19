import type { PlatformInfo } from "@/types/contest.types";

const platformMap: Record<string, PlatformInfo> = {
  leetcode: {
    name: "LeetCode",
    color: "bg-orange-500",
    url: "https://leetcode.com",
  },
  codeforces: {
    name: "Codeforces",
    color: "bg-blue-500",
    url: "https://codeforces.com",
  },
  codechef: {
    name: "CodeChef",
    color: "bg-amber-600",
    url: "https://codechef.com",
  },
  atcoder: {
    name: "AtCoder",
    color: "bg-gray-600",
    url: "https://atcoder.jp",
  },
}

export function getPlatformInfo(platformName: string): PlatformInfo {
  return (
    platformMap[platformName] || {
      name: platformName,
      color: "bg-gray-500",
      url: "#",
    }
  )
}
