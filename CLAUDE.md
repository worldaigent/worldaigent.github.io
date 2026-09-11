# CLAUDE.md — worldaigent.github.io

The **public marketing site** for World Aigent, at https://worldaigent.com.
This repo is the website only. The product it advertises lives in a separate
backend repo; see `.claude/docs/product-truth.md` for what that product
actually does, and check it before writing any claim on a page.

---

## Stack

React 19 + TypeScript 4.9, `react-router-dom` v6, Create React App
(`react-scripts` 5), FontAwesome 7. No CSS framework — hand-written CSS with
custom properties. Deployed to GitHub Pages via `gh-pages`.

```
npm start     # dev server, localhost:3000
npm run build # production build into build/
npm test      # CRA/Jest (only App.test.tsx exists today)
npm run deploy # build + publish build/ to the gh-pages branch
```

---

## Structure

```
src/
  App.tsx                  routes + layout (Navbar / <main> / Footer)
  index.tsx, index.css     entry + global reset
  components/
    Navbar, Home, Product, HowItWorks, UseCases, Team, Contact, Footer, About
                           each is Foo.tsx + Foo.css, imported by the component
    variables.css          ALL design tokens (colors, spacing, type, radii)
public/
  index.html               restores the SPA path from sessionStorage pre-boot
  404.html                 GitHub Pages SPA routing fix
  CNAME                    worldaigent.com — never delete
```

Routes live in `src/App.tsx`; the nav links live in `src/components/Navbar.tsx`.
**Adding a route means editing both**, plus the Footer if it belongs there.
`About.tsx` exists but is not routed.

---

## CSS rules — non-negotiable

### Mobile first, always
Write the small-screen rule as the **base** rule. Every media query adds with
`min-width`, never `max-width`. A stylesheet with `max-width` queries is
desktop-first and will be rejected. Breakpoints are in **`em`** (`34em`,
`48em`, `60em`) so they respect the reader's browser font size — never `px`.

### Relative units everywhere
| Job | Unit |
|-----|------|
| Type and spacing | `rem` (via the tokens), fluid through `clamp()` |
| Line length / measure | `ch` (cap body text at ~65ch, never past 75ch) |
| Layout widths | `%`, `fr`, `minmax()`, `auto-fit` |
| Full viewport height | `dvh` — never `vh` |
| Full width | `100%` — **never `100vw` / `100dvw`** |
| Component-relative | container queries (`cqi`, `@container`) |

**`100vw`/`100dvw` includes the scrollbar gutter**, so it is wider than the
visible page and produces a horizontal scrollbar on every desktop browser.
This bug was in `index.css`, `Footer.css` and `Navbar.css`. `width: 100%`
is what "full width" actually means.

**`vw` never appears alone on `font-size`.** It must always be one term inside
a `clamp()` that also has a `rem` term — `clamp(1rem, 0.9rem + 0.5vw, 1.25rem)`.
A size expressed in `vw` alone ignores browser zoom and the reader's font
setting entirely: that is an accessibility regression wearing responsive
clothing.

**`px` is allowed for exactly four things:** hairline borders (`1px`, `2px`),
`--radius-crisp`, `outline-width`, and sub-pixel transforms. Everything else
that is still in `px` is a bug.

### Prefer no breakpoint at all
The spacing and type tokens are already fluid, so most layouts need zero
overrides. Reach for these before a media query:
- `grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr))` —
  wraps by itself. The `min(…, 100%)` is required; bare `minmax(20rem, 1fr)`
  overflows any viewport narrower than the floor.
- `flex-wrap: wrap` with a `flex-basis`, so items reflow on their own.
- `clamp()` on padding and font-size.
- `@container` when a component should answer to its own width rather than the
  viewport's — that is the right question for anything reusable.

### Never
- **No `!important`.** If a rule needs it, the specificity is wrong. For motion,
  declare animation *inside* `@media (prefers-reduced-motion: no-preference)`
  so there is nothing to override — never a reset block afterwards.
- **No `display: none` to hide content on small screens.** It still downloads.
  If it does not matter on a phone, it does not belong on the page.
- **No fixed `width`** on layout containers — `max-width` + `margin-inline: auto`.
- **No `margin` shorthand on anything centered by `margin-inline: auto`.**
  `margin: 0` silently resets the inline axis and de-centers the element. Use
  `margin-block`. This exact bug shipped and had to be found by measurement.

### The measure
`--measure-max` / `--measure-gutter` in `variables.css` define one content
column for the entire site. `.container` (declared in *both* Navbar.css and
Footer.css — Footer wins the cascade) reads them, and so does every page. The
content edge must be identical on the navbar, every section, and the footer.
**Verify by measuring `getBoundingClientRect().left`, not by eye.**

### Cascade traps in this repo
1. `.container` owns horizontal padding — never redefine it in a new file.
2. Page-specific rules on generic selectors (`.section`, `.section.hero p`)
   must be scoped with the page wrapper (`.home-page .section.hero p`), or the
   last-loaded stylesheet bleeds across pages. Better: prefix new classes
   (`wa-*`) and sidestep the shared names entirely, as `Home.css` does.
3. Watch for ancestor rules outranking the one you meant —
   `.section.use-cases-grid h2` (0-2-1) silently beat `.use-case-card h2`
   (0-1-1). Grep ancestors before editing the rule you were looking at.
4. Use the tokens. No raw hex, no magic numbers.
5. Green (`--status-live`) is a **mark** color only. For text use
   `--status-live-ink` — the bright green is 2.15:1 on white and fails AA.

### Verify before claiming done
- `npm run build` clean.
- Render it. Layout bugs here are found by looking, not by reading a diff.
- Check **390px and 768px**. The browser window in this environment does not
  reflow on resize — inject iframes at those widths and measure inside them.
- `scrollWidth === clientWidth` at every width. No horizontal scroll, ever.
- Contrast ≥ 4.5:1 for body text. Calculate it; do not eyeball it.

## Deployment

- `npm run deploy` runs `predeploy` (build) then `gh-pages -d build`.
- `build/` is gitignored and **must never be committed to `main`**. The
  `gh-pages` branch is managed entirely by the CLI.
- `public/CNAME` carries the custom domain. `gh-pages` preserves it. Deleting
  it takes worldaigent.com offline.
- **SPA routing is already solved.** `public/404.html` stores `location.href`
  in `sessionStorage` and redirects to `/`; `public/index.html` replays it
  through `history.replaceState` before React boots. The fix is generic — new
  routes need nothing. If `404.html` is ever regenerated, it must NOT be a bare
  `location.replace("/")`.
- `npm run deploy` names the HTTPS remote explicitly. `gh-pages` otherwise uses
  the SSH `origin`, which fails with `Permission denied (publickey)` whenever
  the SSH key is not loaded in the agent. HTTPS uses the osxkeychain helper and
  works either way. To restore SSH: `ssh-add ~/.ssh/id_ed25519`.
- Deploying from WSL2 can fail with `Failed to connect to github.com port 443`
  even when `curl` works (mirrored-networking routing). Fix order:
  `wsl --shutdown`, then deploy from Windows PowerShell, then check VPN.

---

## Keep `~/.claude/worldaigent/WEBSITE.md` current

`~/.claude/worldaigent/` holds one status file per World Aigent repo:
**WEBSITE.md** is this site, **STATUS.md** is the backend (`~/dev/CA_Temporal`).
They are separate so a session working on one never edits the other's file.
They live outside both repos so any session can read them, and because this
repo is public and some of that material must never be committed here.

1. **Read WEBSITE.md before planning anything non-trivial.** It carries state
   this repo cannot see: what the backend actually does, the positioning
   decisions and why, what is deliberately absent from the site.
2. **Update it in the same change that makes it wrong.** Not later. A status
   file that describes the world incorrectly is worse than none, because it
   gets trusted. Things here that belong in it: the deployed state of the site,
   positioning, the legal pages or company entity, the contact-form provider,
   deploy invariants, and any new rule about what must not be committed.
3. **Edit WEBSITE.md only.** STATUS.md belongs to the backend repo. If
   something you learn here changes the backend's picture, say so rather than
   editing their file.
4. **It is a map, not an authority.** Where it disagrees with this repo, the
   repo is right and the file is what to fix.
5. **No secrets, ever.** It is a plain file and it outlives any session.
6. **Under ~120 lines.** Detail belongs in the repo; link, do not copy.

## Working rules for this repo

- **No em-dashes or en-dashes (— –) in rendered copy.** It is the clearest
  tell that a machine wrote it, and it is already banned in the product's own
  LinkedIn output. Rewrite the sentence: full stop, colon, or commas. A hyphen
  substitute reads worse than either.
- **No invented features.** Every capability claim on a page must be traceable
  to `.claude/docs/product-truth.md` or confirmed by Nicolás. A marketing site
  that overstates a product is a liability, not copy polish.
- **Verify in the browser, not in the diff.** Layout and copy defects on this
  site have consistently been found by *looking at the rendered page* —
  `npm start` and read it, at desktop and at ~390px.
- **Match the surrounding style.** Copy is plain, concrete, third-person about
  the product. Components are functional with typed props; content lives in
  arrays at the top of the component, not scattered through JSX.
- Ask before changing brand colors, the tagline, or pricing/business-model
  language. Those are Nicolás's calls, not implementation details.

---

## Specialized agents

`.claude/agents/` holds four. Invoke by name with the Agent tool when the task
fits:

| Agent | Use for |
|-------|---------|
| `landing-copywriter` | Writing or rewriting page copy, headlines, feature blurbs, CTAs |
| `ui-engineer` | Building/refactoring React components and their CSS |
| `site-auditor` | Reviewing pages for claim accuracy, responsive breakage, a11y, SEO |
| `deploy-manager` | Building, verifying and publishing to GitHub Pages |

Positioning is recorded in `.claude/docs/product-truth.md`, which is
**gitignored on purpose**: this repository is public, and that file describes
the backend architecture, the GCP project, and internal names. Never commit it.
