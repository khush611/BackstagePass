# BackstagePass UI

Frontend assignment for Tagmango - building the BackstagePass product UI from the Figma design.

## What I built

This is a creator community platform UI with:
- Feed with posts, likes, comments
- Profile section with subscriber count
- Challenge tracking (like a 9-day fitness challenge)
- Day selector showing progress
- Passes/subscription tiers page
- Dark mode support

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Stack

- Next.js 14
- Tailwind CSS
- TypeScript
- Lucide icons

## Folder structure

```
src/
├── app/           # pages and global styles
├── components/    # all the UI components
├── hooks/         # useTheme hook for dark mode
├── lib/           # helper functions
└── data/          # mock data for the feed
```

## Notes

- Theme toggle in the header switches between light/dark
- The day selector has locked states for future days
- Mobile responsive - sidebar becomes a drawer on small screens
