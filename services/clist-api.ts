import type { Contest } from "@/types/contest.types.ts";
const CLIST_API_KEY = process.env.NEXT_PUBLIC_CLIST_API_KEY;

export async function fetchContests(): Promise<Contest[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const response = await fetch('https://clist.by/api/v4/json/contest/', {
    method: 'GET',
    headers: {
      'Authorization': CLIST_API_KEY ?? '',
      'Content-Type': 'application/json',
    },
    // params: {
    //   limit: 100,
    //   start__gt: new Date().toISOString(),
    //   end__lt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    //   resource__name__in: 'leetcode,codeforces,codechef,atcoder'
    // }
  });
  console.log(response);

  const data = await response.json()
  return data.objects

  } catch (error) {
    throw new Error('Failed to fetch contests');
  }
  
}
