# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 App Router project. All route handlers, layouts, and pages live in `src/app`, with `page.tsx` as the marketing landing screen and `app/api/*/route.ts` for server-side features such as the Resend-backed contact form and sitemap generation. Shared React components sit in `src/components`, hooks in `src/hooks`, and utilities (validation, spam filters, config helpers) in `src/lib`. Static assets (logos, hero images, fonts) belong in `public`. Styling is centralized in `src/app/globals.css`, which layers Tailwind CSS v4 themes and custom utilities, so prefer CSS variables and utility classes over ad-hoc styles. Root-level configs (`eslint.config.mjs`, `tsconfig.json`, `postcss.config.js`) must stay aligned with Next defaults.

## Build, Test, and Development Commands

- `pnpm dev` – run the local dev server with Turbopack on http://localhost:3000.
- `pnpm build` – create an optimized production bundle and validate type-safe routes.
- `pnpm start` – serve the last build output; use for pre-deploy smoke tests.
- `pnpm lint` – execute `next lint` with the shared ESLint config.
- `pnpm prettier` – format the entire tree; never hand-format large diffs.
- `pnpm preprod` – convenience script that formats, stages, builds, and reports git status before a PR.

## Coding Style & Naming Conventions

Write idiomatic TypeScript React components using function components and Server Components where possible. Let Prettier dictate spacing/quotes and avoid manual tweaks. Keep component files PascalCase (`HeroSection.tsx`), hooks camelCase prefixed with `use` (`useContactForm.ts`), and utility modules kebab- or snake-free (`spam.ts`). Export a single default component per route file, but prefer named exports elsewhere for easier tree-shaking. Tailwind utility classes plus the theme tokens in `globals.css` should cover layout/color needs; add new tokens instead of hard-coded hex values.

## Testing Guidelines

There is no dedicated test runner yet, so new logic must include at least lint coverage plus manual verification. When adding automated tests, colocate them as `*.spec.ts[x]` next to the unit (`src/lib/validations.spec.ts`) and document the chosen runner in `package.json`. Validate form flows by running `pnpm dev`, submitting the contact form, and observing server logs for honeypot, email, and phone validation branches. Include screenshots or screen recordings when updating UI states or animations.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit style (`chore:`, `fix:`, `feat:`). Write imperative summaries (<60 chars) and reference issue IDs when relevant (`feat: add booking CTA (#42)`). Before opening a PR, run `pnpm preprod` and ensure no stray console noise remains beyond intentional logging in API routes. PR descriptions should cover context, testing steps, and UI receipts (mobile + desktop) when visuals change. Link required issues, note environment migrations, and mention any new scripts/secrets.

## Security & Configuration Tips

Store credentials such as `RESEND_API_KEY` in `.env.local` and never commit the file. The `src/app/api/contact/route.ts` handler will crash without the key, so document secret prerequisites in PRs. Avoid logging user-submitted content beyond the guarded debug statements already present, and scrub logs before shipping. If you introduce new integrations, update the README and this guide with setup instructions and rotate keys after testing.
