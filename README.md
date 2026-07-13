# EduSphere Learning Platform

A React + Vite conversion of the EduSphere learning platform UI (video meeting, participants panel, live chat, live poll, dark mode, toasts, etc.), built with Tailwind CSS and `lucide-react` icons.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
edusphere/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx      # React entry point
    ├── index.css     # Tailwind directives
    └── App.jsx        # Full application (Sidebar, Header, VideoMeeting, ParticipantsPanel, Toasts, Modal)
```

## Notes

- Converted directly from the original `.tsx` file to `.jsx` — the source had no actual TypeScript type annotations, so this was a straightforward rename/move into a Vite scaffold.
- Dark mode is toggled via a `dark` class on the root wrapper (Tailwind `darkMode: 'class'`).
- The original code referenced a local `image_29acc2.jpg` background image that wasn't included in the upload; it's been swapped for a placeholder Unsplash lecture-hall photo so the app renders correctly out of the box. Swap `backgroundImage` in `VideoMeeting` (`src/App.jsx`) for your own asset if you have one.
