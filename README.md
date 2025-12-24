# MindFlow - Wellbeing & Mindfulness App

A TikTok-style social video platform dedicated to wellbeing and mindfulness content. Built with React and Vite.

## Features

- **Vertical Video Feed** - Scroll through mindfulness content with a familiar TikTok-like experience
- **Category Filters** - Browse content by categories: Meditation, Breathing, Yoga, Affirmations, Nature, Sleep, Motivation
- **Video Player** - Full-screen video playback with play/pause, mute controls, and progress bar
- **Social Interactions** - Like, save, share, and follow creators
- **Double-tap to Like** - Heart animation on double-tap
- **Discover Page** - Search for videos, explore trending tags, and find top creators
- **Create Content** - Interface for recording and uploading mindfulness videos
- **Inbox** - Activity notifications and messages
- **User Profile** - View your posts, saved videos, liked content, streaks, and achievements

## Tech Stack

- React 19
- React Router v7
- Vite
- Lucide React (icons)
- CSS with custom properties

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── VideoFeed.jsx      # Main scrollable video feed
│   ├── VideoCard.jsx      # Individual video player with controls
│   ├── CategoryBar.jsx    # Category filter tabs
│   ├── Navigation.jsx     # Bottom navigation bar
│   ├── Discover.jsx       # Search and discovery page
│   ├── CreatePost.jsx     # Content creation interface
│   ├── Inbox.jsx          # Notifications and messages
│   └── Profile.jsx        # User profile page
├── data/
│   └── videos.js          # Sample video data and categories
├── App.jsx                # Main app component with routing
├── App.css                # App-level styles
├── main.jsx               # React entry point
└── index.css              # Global styles and CSS variables
```

## Features Overview

### Video Feed
- Swipe/scroll to navigate between videos
- Keyboard support (arrow keys)
- Auto-play when video comes into view
- Progress indicator dots

### Categories
- For You (personalized feed)
- Meditation
- Breathing exercises
- Yoga flows
- Affirmations
- Nature sounds
- Sleep content
- Motivation

### Social Features
- Like videos (with animated heart)
- Save to collections
- Follow creators
- Share content
- Comment sections

## Design

The app features a calming dark theme with purple accent colors, designed to promote relaxation and mindfulness. Key design elements include:

- Gradient accents
- Smooth animations
- Glassmorphism effects
- Responsive mobile-first layout

## License

MIT
