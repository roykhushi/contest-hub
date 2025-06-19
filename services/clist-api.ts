import type { Contest } from "@/types/contest.types.ts";

export async function fetchContests(): Promise<Contest[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch('https://clist.by/api/v4/json/contest/', {
    method: 'GET',
    headers: {
      'Authorization': `ApiKey roykhushi:82949538c9d3965d1141cb22a8ac3977bee65208`,
      'Content-Type': 'application/json',
    },
    // params: {
    //   limit: 100,
    //   start__gt: new Date().toISOString(),
    //   end__lt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    //   resource__name__in: 'leetcode,codeforces,codechef,atcoder'
    // }
  })
  console.log(response);
  if (!response) {
    throw new Error('Failed to fetch contests');
  }
  
  const data = await response.json()
  return data.objects
  
}
