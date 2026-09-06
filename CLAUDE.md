# CLAUDE.md

Guidance for Claude Code (and anyone else) working in this repo.

## What this is

Pranit Patil's personal portfolio site (pranitpatil.com). Minimal design, work-first homepage. Fully static — no database, no auth, no third-party media storage.

- Framework: Next.js 14.2.x (App Router primary, `src/pages/` legacy remnant for a few dead pages)
- Language: TypeScript (build-time type errors are suppressed, see Gotchas — run `npx tsc --noEmit` manually)
- Styling: Tailwind CSS 3 + `prettier-plugin-tailwindcss`
- Content: everything — homepage, work, talks, blogs, privacy policy — is hardcoded in the repo. No DB, no CMS.
- Media: local files under `public/`. No Cloudinary, no S3, no remote image host except an unused `source.unsplash.com` pattern in `next.config.js`.
- Analytics: Google Analytics via `@next/third-parties`.

## Commands

```
yarn dev      # dev server
yarn build    # production build
yarn start    # run built app
yarn lint     # next lint
```

Package manager is yarn (yarn.lock present, no package-lock.json).

## Structure

```
src/app/                    # App Router (current, primary)
  (home)/                   # homepage — hardcoded JSX
  about/                    # about page — hardcoded JSX
  work/                     # case study pages — hardcoded JSX
  talk/                     # talks page — hardcoded JSX (single talk), public/talks/ for images
  blogs/                    # blog list + [slug] detail — reads from src/content/blogs/
  privacypolicy/            # static privacy policy page

src/content/blogs/          # Blog posts, one file per slug + a type + an index.
                             # See "Adding a blog post" below.

src/pages/                  # Pages Router (legacy, dead code, not cleaned up — out of scope
                             # of the DB/auth removal). _app.tsx/_document.tsx duplicate the
                             # GA/font setup already done in src/app/layout.tsx. work/bluold.jsx,
                             # work/luckynumbers1.jsx, work/index.jsx duplicate src/app/work/*.
                             # api/hello.js is the unmodified create-next-app demo route.

src/components/             # Mix of used components (Navbar, MenuBar, ToastContainerWrapper)
                             # and unused duplicates that shadow src/app/(home)/* versions
                             # (WorkSection.jsx, WorkCard.jsx, SmallWork.jsx, BlogSideBar.jsx,
                             # Blog404.jsx, TalkCard.tsx). Dead code, not cleaned up — out of scope.
```

## History: this used to be a full-stack app

Up to 2026-08-27 this repo had MongoDB (Mongoose), a JWT-based admin login, an admin panel with a Tiptap blog editor, and Cloudinary for image storage/upload. All of that has been removed:

- `src/models/`, `src/middleware/mongo.ts`, `src/middleware/verifyToken.ts`, `src/middleware.ts`, `src/app/admin/**`, `src/app/auth/**`, `src/app/api/**`, `src/pages/api/admin/image/upload.js`, `src/utils/cloudinaryConfig.js`, `src/utils/config.ts`, `src/types/mongo.d.ts`, `src/helpers/` — all deleted.
- Dependencies removed: `mongoose`, `cloudinary`, `next-cloudinary`, `jsonwebtoken`, `jose`, `crypto-js`, `formidable`, `multer`, `universal-cookie`, `zod`, all `@tiptap/*`, plus their `@types/*`.
- `.env` is untracked and gitignored going forward. **Its old committed values (Mongo URI, `PASS_SEC`, `JWT_SEC`) were pushed to a public GitHub repo and must be treated as compromised — rotate/delete the Atlas DB user if that hasn't happened yet.** No env vars are needed anymore.
- The 2 published blog posts were exported from Mongo (raw dump kept at `backup/blogs-dump.json`, gitignored, local only) into `src/content/blogs/`. 7 unpublished drafts/test posts were not migrated.
- Blog images (featured + inline body images) were downloaded from Cloudinary to `public/blogs/` and re-pointed to local paths.

If something references a route or import that no longer exists, it's fallout of this removal, not a bug to silently work around — check this section first.

## Blog content model

`src/content/blogs/types.ts` — the `Blog` interface: `slug`, `title`, `desc`, `category`, `image`, `createdAt`, `updatedAt`, `content` (raw HTML string).

`src/content/blogs/<slug>.ts` — one file per post, `export default` a `Blog` object.

`src/content/blogs/index.ts` — imports every post file into a `blogs` array, plus `getBlogBySlug(slug)`.

`content` is raw HTML (originally Tiptap/ProseMirror editor output), rendered via `dangerouslySetInnerHTML` in `src/app/blogs/[slug]/page.tsx`, styled by `.ProseMirror`/`.content` CSS classes and `highlight.js` (vs2015 theme) for `<pre><code>` blocks. Keep new posts in this same HTML shape — don't switch to MDX, the render path isn't set up for it.

## Adding a blog post

1. Create `src/content/blogs/<new-slug>.ts` modeled on an existing file — fill in `title`, `desc`, `category`, `image`, `createdAt`, `updatedAt`, and `content` as an HTML string.
2. Drop any images in `public/blogs/` and reference them as local paths (`/blogs/whatever.png`), both for the `image` field and any `<img>` tags inside `content`.
3. Add the import + entry to the `blogs` array in `src/content/blogs/index.ts`.
4. `yarn build` — the new post gets statically generated automatically via `generateStaticParams`.

No login, no admin UI, no database, no image upload endpoint. Removing a post is deleting its file and its `index.ts` entry.

## Gotchas

- `next.config.js` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`. **`next build` will not catch type errors.** Run `npx tsc --noEmit` as a manual gate before trusting a build.
- App Router and Pages Router coexist. Pages Router content is legacy/dead (see Structure above) — left in place, not part of the DB/auth cleanup.

## Conventions

- ESLint: `eslint-config-standard-with-typescript` + Prettier, function return types annotated (`: JSX.Element`, etc.).
- Prettier + `prettier-plugin-tailwindcss` for class sorting.
