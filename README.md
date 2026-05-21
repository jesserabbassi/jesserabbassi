# Jesser Abbassi Portfolio

A premium portfolio rebuilt with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## What Changed

- Replaced a single large static `index.html` with a component-based Next.js application.
- Moved portfolio content into typed data in `lib/data.ts`.
- Added reusable sections, project cards, navigation, page transitions, and contact UI.
- Reframed projects as case studies using Problem, Solution, Impact, stack, features, and links.
- Added SEO metadata, optimized images with `next/image`, accessible form labels, and Vercel-ready scripts.

## Project Structure

```txt
app/
  page.tsx
  layout.tsx
  template.tsx
  globals.css
  about/page.tsx
  contact/page.tsx
  projects/page.tsx
components/
  ContactPanel.tsx
  Hero.tsx
  Navbar.tsx
  PageTransition.tsx
  ProjectCard.tsx
  Reveal.tsx
  Section.tsx
lib/
  data.ts
public/
  images/
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy On Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`.
5. Output is handled automatically by Vercel for Next.js.

No environment variables are required for the current version. The contact form posts to Formspree.
