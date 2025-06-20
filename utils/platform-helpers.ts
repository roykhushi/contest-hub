import type { PlatformInfo } from "@/types/contest.types";

const platformMap: Record<string, PlatformInfo> = {
  "leetcode.com": {
    name: "LeetCode",
    color: "bg-orange-500",
    url: "https://leetcode.com",
  },
  "codeforces.com": {
    name: "Codeforces",
    color: "bg-blue-500",
    url: "https://codeforces.com",
  },
  "codechef.com": {
    name: "CodeChef",
    color: "bg-amber-600",
    url: "https://codechef.com",
  },
  "atcoder.jp": {
    name: "AtCoder",
    color: "bg-gray-600",
    url: "https://atcoder.jp",
  },
};

export function getPlatformInfo(platformName: string): PlatformInfo {
  return (
    platformMap[platformName] || {
      name: platformName,
      color: "bg-yellow-500",
      url: "#",
    }
  );
}