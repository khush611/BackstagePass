# BackstagePass UI

Frontend assignment for Tagmango - building the BackstagePass product UI from the Figma design.

## 🚀 Live Demo

**[Visit the app on Vercel](https://tagmango-rho.vercel.app)**

## Screenshots

### Desktop - Light Mode
![Desktop Light Mode](screenshots/localhost_3000_%20(2).png)

### Desktop - Dark Mode
![Desktop Dark Mode](screenshots/localhost_3000_%20(3).png)

### Desktop - Passes Page
![Passes Light](screenshots/localhost_3000_%20(4).png)
![Passes Dark](screenshots/localhost_3000_%20(5).png)

### Mobile
![Mobile Light](screenshots/localhost_3000_(iPhone%2014%20Pro%20Max).png)
![Mobile Dark](screenshots/localhost_3000_(iPhone%2014%20Pro%20Max)%20(1).png)

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
