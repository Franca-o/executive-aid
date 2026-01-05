# ExecutiveAid — Website Documentation

This document provides a concise developer and maintainer guide for the ExecutiveAid website.

## Project overview
- Mono-repo containing the Next.js site in `executive-aid-nextjs/`.
- Public site: https://executiveaid.org (deployed via Vercel/Netlify configs present).
- Key features: marketing pages, portfolio (web solutions), credentials, client reviews with optional images (Supabase backend/storage).

## Tech stack
- Next.js (App Router) — React 19
- TypeScript
- Tailwind CSS
- Supabase (Postgres + Storage)
- Swiper (carousel)

## Important folders & files
- `executive-aid-nextjs/` — the Next.js app and all source code.
  - `src/app/` — top-level route folders (e.g., `about`, `services`, `credentials`, `web-solutions`).
  - `src/components/` — shared React components (e.g., `ReviewForm.tsx`, `ReviewSection.tsx`, `Navigation.tsx`).
  - `src/lib/supabase.ts` — Supabase client and types (currently contains client URL and key).
  - `public/sitemap.xml` — static sitemap used for SEO.
  - `public/robots.txt` — robots directives.
  - `netlify.toml`, `vercel.json` — deployment configuration hints for Netlify and Vercel.

## Local development
1. Install root helper deps (optional):

   ```powershell
   cd executive-aid-nextjs
   npm install
   npm run dev
   ```

2. The Next dev server runs with `next dev` (turbopack by default in `package.json`). Open `http://localhost:3000`.

3. Type-checking & lint:

   ```powershell
   npm run type-check
   npm run lint
   ```

## Environment & Supabase
- The site uses Supabase for storing reviews and images. Current Supabase usage is in `src/lib/supabase.ts`.
- Recommended: do NOT commit service keys to the repo. Move keys to environment variables and update `src/lib/supabase.ts` to read from `process.env` (server-only) or use Next.js runtime configs.

Example `.env.local` (place in `executive-aid-nextjs/`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-supabase-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-or-public-key>
SUPABASE_SERVICE_KEY=<service-role-key> # keep this server-side only if needed
```

Then update `src/lib/supabase.ts` to read from those variables.

### Reviews table & images
- Reviews stored in `executive_aid_reviews` table. Columns used by the app:
  - `client_name`, `email`, `service_type`, `rating`, `comment`, `approved`, `created_at`, `display_order`.
- Optional: `image_url` — the ReviewForm uploads images to a Supabase Storage bucket named `review-images` and attempts to store a public URL in `image_url`.
- If you want the `image_url` persisted, add the column in SQL:

```sql
ALTER TABLE executive_aid_reviews
ADD COLUMN image_url TEXT;
```

- To make uploaded images publicly accessible:
  1. Open your Supabase project → Storage → Buckets → create `review-images`.
  2. Configure public access or generate signed URLs as needed.

## SEO, sitemap & robots
- `public/robots.txt` contains explicit `Allow:` rules for important routes (e.g., `/about`, `/services`, `/web-solutions`, `/credentials`, `/portfolio`).
- `public/sitemap.xml` lists canonical URLs. After changes, increment `lastmod` and re-deploy.
- To prompt Google to re-crawl:
  - Submit `https://executiveaid.org/sitemap.xml` in Google Search Console
  - Use `URL Inspection` and `Request indexing` for single pages

## Routes & pages
- App routes live in `src/app/`. Create a new page by adding a new folder with a `page.tsx` (or `page.ts`) file.
- Example routes in this project: `/about`, `/services`, `/web-solutions`, `/credentials`, `/review`, etc.

## Deployment notes
- Two deployment configs are present:
  - `vercel.json` for Vercel deployments
  - `netlify.toml` for Netlify deployments
- On deployment providers, add the required environment variables (Supabase keys, any analytics keys) in the project settings.

## Security notes
- Remove any hard-coded secrets (example: the Supabase key in `src/lib/supabase.ts`). Replace with environment variables.
- Limit public access to storage buckets only if you require public images; otherwise use signed URLs and short expiry times.

## Contributing & style
- The project uses TypeScript and Tailwind. Keep components small and follow the existing CSS utility patterns.
- Run `npm run lint` and `npm run type-check` before opening PRs.

## Troubleshooting
- If reviews don't appear:
  - Check Supabase query errors in browser console or server logs.
  - Verify `executive_aid_reviews` table structure and `approved` flags.
  - For images: ensure `review-images` bucket exists and the uploaded object is accessible.

## Helpful commands (PowerShell)

```powershell
cd executive-aid-nextjs
npm install
npm run dev       # dev server
npm run build
npm run start
npm run lint
npm run type-check
```

## Next steps I can help with
- Move Supabase keys into environment variables and patch `src/lib/supabase.ts`.
- Create a dynamic sitemap generator.
- Add a `/portfolio` redirect page to `/web-solutions` if you want a separate friendly route.
- Convert this document into `docs/` with per-topic MD files.

---
If you want, I can expand any section into a more detailed step-by-step (e.g., add the exact code patch to read env vars, or add SQL migration files). Which part would you like me to expand first?
