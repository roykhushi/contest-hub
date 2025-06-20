# Contest Hub

A web app to discover and track upcoming programming contests from major platforms like LeetCode, Codeforces, CodeChef, and AtCoder.

## Features

- 🏆 Browse upcoming programming contests in a clean grid
- 🔍 Filter contests by platform, date range, duration, and status
- 🔎 Search contests by name
- 🎨 Responsive and modern UI
- 🔗 Direct links to contest pages
- 🚦 Status indicators for running/upcoming contests

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Clist API** (for contest data)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/contest-hub.git
cd contest-hub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your Clist API key:

```
NEXT_PUBLIC_CLIST_API_KEY=your_clist_api_key_here
```

> **Note:** Never commit your API key to a public repository.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
  api/clist/route.ts      # API route proxying Clist API
  page.tsx                # Main page, fetches and displays contests
components/
  contest-grid.tsx        # Grid display for contests
  contest-card.tsx        # Individual contest card
  filter-panel.tsx        # Sidebar filter UI
  loading-state.tsx       # Loading indicator
  error-state.tsx         # Error indicator
hooks/
  use-filter.ts           # Custom hook for filter logic
types/
  contest.types.ts        # TypeScript types for contests and filters
utils/
  filter-helpers.ts       # Filtering logic
  platform-helpers.ts     # Platform info mapping
  date-helpers.ts         # Date utilities
```

## How It Works

- The app fetches contest data from the Clist API via a Next.js API route (`/api/clist`).
- All filtering (platform, date, duration, status, search) is handled client-side for a fast and interactive experience.
- Platform info (name, color, URL) is mapped using the domain string from the API response.

## Credits

- Contest data powered by [Clist.by](https://clist.by/)
- UI inspired by modern dashboard designs


Made with 💙 by Khushi