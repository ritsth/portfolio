# Ritika Shrestha — Portfolio

A clean, minimal portfolio built with **Next.js + Tailwind CSS**. Dark/light
theme, scroll-reveal animations, fully responsive. Inspired by the design
patterns in [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios).

## Edit your content

Everything you'd change lives in **one file**: [`src/lib/data.ts`](src/lib/data.ts)
— your bio, experience, projects, and skills. No need to touch the components.

To swap your résumé PDF, replace `public/Ritika-Shrestha-Resume.pdf`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel (free)

1. Push this folder to a **new GitHub repo**:
   ```bash
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ritsth/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New
   Project** → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done — you get a free
   `your-project.vercel.app` URL, and every push auto-redeploys.
4. (Optional) Add a custom domain under **Settings → Domains**.

## Stack

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript
