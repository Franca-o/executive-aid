# ExecutiveAid — Pages Reference (src/app)

This document lists the top-level pages and important route components under `executive-aid-nextjs/src/app/` and explains what each page does.

Note: the project uses the Next.js App Router. Pages are defined by folders under `src/app` and `page.tsx` / client components in those folders.

## Root
- `src/app/page.tsx` — Home
  - Purpose: The public homepage. Renders the marketing hero, core services, portfolio links, and review call-to-action.
  - Key components used: `HomeClient.tsx` (client UI), `Navigation`, `CTA` sections, and links to `/services`, `/about`, `/credentials`.

- `src/app/layout.tsx` — Root layout
  - Purpose: Provides the HTML layout, global styles and the top-level structure for every page (head tags, fonts, global CSS import).

## About
- `src/app/about/page.tsx` — About page wrapper
  - Purpose: Server/component wrapper that renders the `AboutClient` client component.

- `src/app/about/AboutClient.tsx` — About page (client)
  - Purpose: The About Us UI: Our Story, Meet the Management, Values, FAQ, CTA and footer. Contains team members and founder information (linked LinkedIn in Our Story).
  - Important: Shows `Meet the Management` grid; the founder LinkedIn is rendered in the Our Story column.

## Services & Web Solutions (Portfolio)
- `src/app/services/page.tsx` — Services page wrapper
  - Purpose: Entry page for services; delegates UI to `ServicesClient`.

- `src/app/services/ServicesClient.tsx` — Services client UI
  - Purpose: Lists offered services (financial management, administrative assistance, digital marketing, etc.), CTAs to hire or view portfolio.

- `src/app/web-solutions/page.tsx` — Web Solutions (Portfolio) page wrapper
  - Purpose: Route for the portfolio / web solutions offerings.

- `src/app/web-solutions/WebSolutionsClient.tsx` — Portfolio UI
  - Purpose: Displays portfolio projects, gallery, and project details. This is the primary portfolio page referenced in navigation as `PORTFOLIO`.

## Razorbill (Web products)
- `src/app/razorbill/page.tsx` — Razorbill wrapper
  - Purpose: Static route for Razorbill Technologies information; delegates to `RazorbillClient`.

- `src/app/razorbill/RazorbillClient.tsx` — Razorbill client UI
  - Purpose: Describes Razorbill's web and SaaS solutions (CRM, POS, booking platforms) and links to portfolio examples.

## Credentials
- `src/app/credentials/page.tsx` — Credentials wrapper
  - Purpose: Renders `CredentialsClient` and supplies page metadata (title, canonical URL). This is the public credentials page.

- `src/app/credentials/CredentialsClient.tsx` — Credentials client UI
  - Purpose: Displays certifications, partnerships, client logos, and portfolio CTAs. Linked from multiple parts of the site.

## Reviews
- `src/app/review/page.tsx` — Review page
  - Purpose: Public reviews route. Renders review form and review list (client-side components).
  - Key components: `ReviewForm.tsx` (client form with optional image upload), `ReviewSection.tsx` (carousel / listing of approved reviews).

## Admin
- `src/app/admin/reviews/page.tsx` — Admin review manager
  - Purpose: Admin interface for moderating reviews: approve, unapprove, delete. Uses `AdminReviewManager.tsx`.
  - Notes: This route is part of the app but not access-protected in code — you should protect it or restrict via deployment/auth in production.

## Policies
- `src/app/policies/privacy-policy/page.tsx` — Privacy Policy page
  - Purpose: Static privacy policy content.

- `src/app/policies/terms-and-conditions/page.tsx` — Terms & Conditions page
  - Purpose: Static terms & conditions content.

## Other important client components (under `src/components/`)
- `Navigation.tsx` — Site navigation used by top layout and pages. Contains links including `CREDENTIALS` and `PORTFOLIO`.
- `ReviewForm.tsx` — Client review form component. Handles optional image preview/upload to Supabase Storage and inserts review records into `executive_aid_reviews`.
- `ReviewSection.tsx` — Carousel and listing of approved reviews.
- `AdminReviewManager.tsx` — Admin UI for moderating reviews.
- `HireVAModal.tsx` — Modal component used across pages to collect lead details or CTA interactions.
- `StructuredData.tsx` — JSON-LD structured data for SEO included on pages where needed.

## Adding a new page
1. Create a new folder under `src/app/<your-route>`.
2. Add a `page.tsx` (server component or wrapper) and a `<Component>Client.tsx` if you need client-side interactivity.
3. Import and reuse `Navigation`, `Footer`, and `StructuredData` as needed.

## Quick mapping (path -> purpose)
- `/` -> `src/app/page.tsx` (homepage)
- `/about` -> `src/app/about/page.tsx` + `AboutClient.tsx` (about & team)
- `/services` -> `src/app/services/page.tsx` + `ServicesClient.tsx` (services list)
- `/web-solutions` -> `src/app/web-solutions/page.tsx` + `WebSolutionsClient.tsx` (portfolio)
- `/razorbill` -> `src/app/razorbill/page.tsx` + `RazorbillClient.tsx` (web products)
- `/credentials` -> `src/app/credentials/page.tsx` + `CredentialsClient.tsx` (credentials page)
- `/review` -> `src/app/review/page.tsx` (reviews / leave a review)
- `/admin/reviews` -> `src/app/admin/reviews/page.tsx` (admin moderation UI)
- `/policies/privacy-policy` -> privacy policy page
- `/policies/terms-and-conditions` -> terms page

---
If you'd like, I can:
- Expand any page entry with a list of the exact components it uses and their important props.
- Create a visual sitemap or markdown TOC for the `docs/` folder.
- Add comments inside each page `page.tsx` linking to this doc.

Which page would you like detailed next? (I can generate a per-page developer checklist.)
