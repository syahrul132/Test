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
- Custom tempmail domain support

## Project Structure

- `pages/` routes and API routes
- `components/` UI building blocks
- `styles/` global CSS
- `lib/` mock temp mail data logic

## Configure Your Own TempMail Domain

1. Copy environment template:

   ```bash
   cp .env.example .env.local
   ```

2. Update `NEXT_PUBLIC_TEMPMAIL_DOMAIN` in `.env.local`:

   ```env
   NEXT_PUBLIC_TEMPMAIL_DOMAIN=mail.yourdomain.com
   ```

3. Restart development server so env is reloaded.

The generated temp address will use this domain automatically.

## DNS Setup (for custom domain)

If app is hosted on Vercel:

1. In Vercel project, open **Settings → Domains**.
2. Add your domain/subdomain (recommended subdomain like `mail.yourdomain.com`).
3. At your DNS provider, add the records requested by Vercel.
4. Wait until status is **Valid Configuration**.

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
4. Add env var in Vercel:
   - `NEXT_PUBLIC_TEMPMAIL_DOMAIN=mail.yourdomain.com`
5. Keep defaults (Framework: Next.js).
6. Click **Deploy**.

Optional config is already included in `vercel.json`.

## Production Build

```bash
npm run build
npm run start
```
