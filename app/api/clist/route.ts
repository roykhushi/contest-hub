
export async function GET() {
  const CLIST_API_KEY = process.env.NEXT_PUBLIC_CLIST_API_KEY;
  const response = await fetch('https://clist.by/api/v4/contest', {
    headers: {
      'Authorization': CLIST_API_KEY ?? '',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return Response.json(data.objects);
}