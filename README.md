# Pentacore Systems

Corporate marketing website for Pentacore Systems, an IT consulting and digital transformation company. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # run ESLint
```

## Running with Docker

The included `Dockerfile` produces a minimal production image using Next.js's standalone output. `docker-compose.yaml` runs it bound to `127.0.0.1:3000` only — it's meant to sit behind a reverse proxy (nginx), not be exposed directly.

```bash
docker compose up -d --build
```

Use `docker compose down` to stop it, and rerun `docker compose up -d --build` after a `git pull` to redeploy.

### Reverse proxy (production)

`deploy/nginx-pentacore.conf` is an nginx site config that proxies `:80` to the app on `127.0.0.1:3000`. On the server:

```bash
sudo cp deploy/nginx-pentacore.conf /etc/nginx/sites-available/pentacore
sudo ln -s /etc/nginx/sites-available/pentacore /etc/nginx/sites-enabled/pentacore
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## Project Structure

- `src/app` — routes (App Router)
- `src/components` — page sections and UI components, grouped by area (home, services, about, contact, etc.)
- `src/lib` — shared utilities
- `public` — static assets, including the Pentacore logo and favicon

## Deployment

The app builds to a standalone Next.js server (`output: "standalone"` in `next.config.ts`), so it can run behind any container platform, or be deployed directly to [Vercel](https://vercel.com/new).
