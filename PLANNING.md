# BackstagePass UI Implementation Plan

## Overview
This document outlines the approach for building the BackstagePass UI based on the Figma design, focusing on pixel-perfect execution, responsiveness, and light/dark mode support.

---

## 1. Component Structure & Organization

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Top navigation header
│   │   ├── Sidebar.tsx     # Right sidebar wrapper
│   │   └── MainLayout.tsx  # Page layout wrapper
│   ├── profile/
│   │   ├── ProfileCard.tsx # User profile section
│   │   └── ProfileStats.tsx# Subscriber/post counts
│   ├── feed/
│   │   ├── FeedPostCard.tsx      # Standard feed post
│   │   ├── SubscriberCard.tsx    # Welcome card with confetti
│   │   ├── FeedInput.tsx         # "What's on your mind?" input
│   │   └── FeedFilters.tsx       # Post filtering tabs
│   ├── sidebar/
│   │   ├── WorkshopBanner.tsx    # Upcoming workshop section
│   │   ├── ChallengeCard.tsx     # Challenge item card
│   │   ├── DaySelector.tsx       # Day selection grid
│   │   └── ExploreSection.tsx    # Explore challenges section
│   ├── challenges/
│   │   ├── ChallengeProgress.tsx # Challenge with progress bar
│   │   └── TaskCard.tsx          # Daily task card
│   └── ui/
│       ├── Avatar.tsx      # User avatar component
│       ├── Badge.tsx       # Status badges
│       ├── Button.tsx      # Button variants
│       ├── Card.tsx        # Base card component
│       ├── Tabs.tsx        # Tab navigation
│       ├── Confetti.tsx    # Confetti animation
│       └── ThemeToggle.tsx # Light/dark mode toggle
├── hooks/
│   └── useTheme.ts         # Theme management hook
├── lib/
│   └── utils.ts            # Utility functions
└── data/
    └── mockData.ts         # Static mock data
```

---

## 2. Approach to Building UI Elements

### Header
- Fixed position at top
- Logo on left, navigation in center (if applicable)
- Responsive: hamburger menu on mobile

### Profile Section
- Circular avatar with border
- Name, title, and verification badge
- Stats row (subscribers, posts)
- Tab navigation (Backstage, Posts)

### Sidebar
- **Workshop Banner**: Golden gradient background, event details
- **Challenge Cards**: Progress indicators with day counts
- **Day Selector**: 30-day grid with:
  - Completed state (filled)
  - Current state (white indicator with ring)
  - Locked state (blurred/disabled)
  - Interactive click to change selection

### Feed Post Card
- User avatar and name with timestamp
- Post content (text)
- Optional media (images)
- Engagement actions (like, comment, share)
- Comment count display

### Subscriber Card with Confetti
- Special header with confetti animation (CSS/canvas)
- Welcome message styling
- Distinct visual treatment from regular posts

### Challenge Cards
- Progress bar visualization
- Day counter badges
- Check-in buttons with states
- Locked/unlocked visual states

---

## 3. Responsiveness Strategy

### Breakpoints
```css
/* Mobile first approach */
- Default: 0-639px (mobile)
- sm: 640px+ (small tablets)
- md: 768px+ (tablets)
- lg: 1024px+ (desktop)
- xl: 1280px+ (large desktop)
```

### Layout Changes
| Viewport | Layout |
|----------|--------|
| Mobile (<768px) | Single column, sidebar hidden or collapsible |
| Tablet (768-1023px) | Single column with condensed sidebar |
| Desktop (1024px+) | Two columns (main content + sidebar) |

### Component Adaptations
- **Header**: Full nav → hamburger menu
- **Profile**: Horizontal → stacked vertical
- **Sidebar**: Fixed right → bottom sheet or hidden
- **Cards**: Full width on mobile, constrained on desktop
- **Day Selector**: Scrollable on mobile

---

## 4. Light & Dark Mode Implementation

### Approach: CSS Custom Properties + Tailwind

```css
:root {
  /* Light mode (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-card: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border-color: #e5e5e5;
  --accent-gold: #f5a623;
  --accent-blue: #3b82f6;
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-card: #1f1f1f;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --border-color: #333333;
}
```

### Theme Toggle
- Store preference in localStorage
- Respect system preference (prefers-color-scheme)
- Smooth transition between themes
- Toggle button in header

### Color Considerations
- Sufficient contrast ratios (WCAG AA)
- Consistent accent colors across themes
- Adjusted shadows and borders for dark mode
- Image overlays for better text readability

---

## 5. Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (for confetti and interactions)
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

---

## 6. Key Visual Specifications (from design analysis)

### Colors
| Element | Light | Dark |
|---------|-------|------|
| Background | #FFFFFF | #0A0A0A |
| Card BG | #FFFFFF | #1A1A1A |
| Text Primary | #1A1A1A | #FFFFFF |
| Text Secondary | #666666 | #A0A0A0 |
| Accent Gold | #F5A623 | #F5A623 |
| Accent Blue | #3B82F6 | #60A5FA |

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Sizes**: 12px, 14px, 16px, 18px, 24px, 32px

### Spacing
- Base unit: 4px
- Common values: 8px, 12px, 16px, 20px, 24px, 32px

### Border Radius
- Small: 4px
- Medium: 8px
- Large: 12px
- Full: 9999px (pills, avatars)

### Shadows
- Light mode: `0 1px 3px rgba(0,0,0,0.1)`
- Dark mode: `0 1px 3px rgba(0,0,0,0.3)`

---

## 7. Implementation Order

1. Project setup & theme system
2. Layout structure (header, main, sidebar)
3. Profile section
4. Sidebar components (workshop, challenges, day selector)
5. Feed components (input, filters, posts)
6. Subscriber card with confetti
7. Responsive adjustments
8. Hover states & micro-interactions
9. Polish & testing

---

## 8. Interaction Details

### Day Selector
- Click on day → white indicator moves
- Smooth animation transition
- Locked days show blur/disabled state
- Current day has ring indicator

### Challenge Cards
- "Check in for Day X" button
- Progress bar animation
- Hover state on cards

### Feed Posts
- Like/comment/share hover states
- Image lightbox on click (optional)
- Expandable comments

### Theme Toggle
- Smooth color transition (300ms)
- Icon animation (sun ↔ moon)

---

## 9. Quality Checklist

- [ ] Pixel-perfect match to Figma
- [ ] All interactive states implemented
- [ ] Smooth animations (60fps)
- [ ] Responsive across all breakpoints
- [ ] Light/dark mode fully functional
- [ ] Accessible (keyboard nav, contrast)
- [ ] Clean, organized code
- [ ] No console errors
- [ ] Fast load times
