# TempMailX - Modern Temp Mail Web App

A futuristic temporary email web app built with **Next.js** and **Tailwind CSS**.

## Features

- Landing page with clear hero and CTA
- Dashboard/inbox page with generated temp email
- Auto-copy email button
- Polling inbox
- Mail detail modal
- Dark mode by default + light mode toggle
- Smooth transitions, skeleton loading, hover animations
- Custom 404 page
- Custom tempmail domain support
- Inbound webhook endpoint for real incoming email ingestion

## Project Structure

- `pages/` routes and API routes
- `components/` UI building blocks
- `styles/` global CSS
- `lib/` temp mail data + inbox storage logic

## Configure Your TempMail Domain (`morvo.me`)

1. Copy env template:

   ```bash
   cp .env.example .env.local
   ```

2. Set:

   ```env
   NEXT_PUBLIC_TEMPMAIL_DOMAIN=morvo.me
   MOCK_INBOUND=false
   INBOUND_WEBHOOK_SECRET=super-secret-token
   ```

## Inbound Provider Setup (MX + Webhook)

Use any provider that can receive email for your domain and forward events to webhook.

### 1) DNS / MX
- In your DNS provider for `morvo.me`, add MX records required by your inbound provider.
- If provider suggests receiving on subdomain, use `mail.morvo.me` for safer isolation.

### 2) Provider inbound route
Configure provider inbound route to send POST webhook to:

```txt
https://<your-vercel-domain>/api/inbound/webhook
```

Add header:

```txt
x-webhook-secret: <INBOUND_WEBHOOK_SECRET>
```

Expected payload keys:

```json
{
  "to": "random@morvo.me",
  "from": "sender@example.com",
  "subject": "Hello",
  "text": "Email body"
}
```

### 3) Vercel env vars
In Vercel Project Settings → Environment Variables:
- `NEXT_PUBLIC_TEMPMAIL_DOMAIN=morvo.me`
- `MOCK_INBOUND=false`
- `INBOUND_WEBHOOK_SECRET=<same secret used by provider>`

## API routes
- `GET /api/generate-email` → create temp address
- `GET /api/messages?email=<address>` → list messages for inbox
- `POST /api/inbound/webhook` → ingest real inbound email event

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
4. Add env vars above.
5. Deploy.

## Production Build

```bash
npm run build
npm run start
```
