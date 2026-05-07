# TempMailX - Modern Temp Mail Web App

A futuristic temporary email web app built with **Next.js** and **Tailwind CSS**.

## Features

- Landing page with clear hero and CTA
- Dashboard/inbox page with generated temp email
- Auto-copy email button
- Polling inbox (mock API simulation)
- Mail detail modal
- Dark mode by default + light mode toggle
- Smooth transitions, skeleton loading, hover animations
- Custom 404 page

## Project Structure

- `pages/` routes and API routes
- `components/` UI building blocks
- `styles/` global CSS
- `lib/` mock temp mail data logic

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repository.
4. Keep defaults (Framework: Next.js).
5. Click **Deploy**.

Optional config is already included in `vercel.json`.

## Production Build

```bash
npm run build
npm run start
```
