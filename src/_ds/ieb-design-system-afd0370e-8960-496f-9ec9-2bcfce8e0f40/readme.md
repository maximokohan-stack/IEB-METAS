# IEB+ Design System

Design system for **IEB+**, a young, simple, mobile-first investing app, and for its flagship feature **Mis metas IEB+** — where a university-age user sets a financial goal (what for, how much, by when, how much risk), gets a recommended investment option with a plain-language explanation, sees the monthly contribution it implies, and tracks progress.

The system exists to make one promise visible in the pixels: **investing is accessible, clear and trustworthy even if this is your first time.**

## Sources used

This system was built from a **written brand brief only** (pasted into the project on 18 Aug 2026): brand personality, copy examples, the core color list, typography direction, layout principles, the component inventory (CTAs, goal cards, recommendation card, progress, risk selector, bottom nav) and the "Mis metas IEB+" product direction.

No other source was provided:

- **No Figma file or link** — no design context, variables or component inventory to read.
- **No codebase / repository** — no production component source, no real screens.
- **No slide deck.**
- **No brand assets** — no logo files, illustrations, imagery, icon set or font binaries.

Everything visual here is derived from the brief's stated values plus the substitutions flagged below. If you have the real Figma, app repo, logo files or brand fonts, hand them over — they replace the substituted parts directly.

### Substitutions to review (flagged, not decided)

| Area | What was provided | What is used here |
|---|---|---|
| Typeface | "modern rounded sans serif", no files | **Nunito** (display + UI) and **Nunito Sans** (body) from Google Fonts — the closest widely available rounded sans. Swap in `tokens/fonts.css`. |
| Icons | "purple line icons", no set | **Lucide** line icons (2px stroke) loaded from jsDelivr and painted with CSS `mask` so they inherit `currentColor`. See ICONOGRAPHY. |
| Logo | none | **No mark was drawn.** The brand name is set in type (Nunito Black, `IEB` + coral `+`) wherever a logo would go — see `guidelines/brand-wordmark.html`. Send the real files. |
| Imagery | none | No photography or illustration is used anywhere; surfaces are white/lavender with line icons. |
| Product data | none | All figures, instrument names and article titles in the UI kit are plausible fakes. |

## Products represented

1. **IEB+ mobile app** — the only product surface described. Five tabs: Inicio, Metas, Mercado, Research, Perfil. Recreated in `ui_kits/mis_metas_app/`.
2. **Mis metas IEB+** — the goal feature inside that app: goal type, amount, date, risk profile, recommendation, tracking. Its dedicated components live in `components/metas/`.

There is no marketing site, docs site or slide template in the brief, so none was invented.

---

## CONTENT FUNDAMENTALS

**Language.** Rioplatense Spanish, informal *vos*: "Inverti", "Empeza", "Segui", "Poneleta", "Elegi". Never *tú* forms ("invierte", "empieza"), never *usted* ("optimice su portafolio").

**Person.** Always second person for the user, first-person plural for IEB+: "**Te** ayudamos a elegir segun tu meta", "**Elegimos** riesgo bajo porque tu meta es en 12 meses". The app narrates what it did and why; the user decides.

**Sentence length.** Short. One idea per sentence, 6–14 words. Two sentences maximum in a note or helper line. If a sentence needs a comma-spliced clause to survive, split it.

**Voice examples (canonical).**
- "Inverti con un objetivo claro"
- "Te ayudamos a elegir segun tu meta"
- "Segui tu progreso"
- "Empeza con una opcion recomendada"
- "Podes cambiarlo cuando quieras."
- "Un fondo conservador se mueve poco. Priorizamos que no pierdas capital."

**Jargon rule.** A financial term may appear only if the same screen explains it in everyday words, usually in a `Note`. "Riesgo" is never left bare: "Puede subir y bajar fuerte. Solo si podes esperar varios anos."

**Recommendations are offered, never imposed.** Every recommendation is paired with the reason and an exit: "Por que", "Ver otras opciones", "Podes cambiar de opcion en cualquier momento, sin costo."

**Casing.** Sentence case everywhere — headings, buttons, labels, badges ("Recomendado", "Riesgo bajo", "Sumar aporte"). ALL CAPS only for the tiny eyebrow on the recommendation card (`RECOMENDADO IEB+`, 12px, 0.08em tracking). Never Title Case On Every Word.

**Buttons.** Imperative verb first, 1–3 words: "Continuar", "Crear una meta", "Sumar aporte", "Elegir esta opcion". Never "Enviar", "Aceptar", "Submit", and never a bare noun.

**Numbers.** Argentine format — thousands with dots, decimals with commas: `$600.000`, `38,2%`, `+12,4%`. Percentages of progress are whole numbers ("42%"). Money is never abbreviated to "1,2M" in goal screens. Always tabular figures.

**Emoji.** None. Ever. Warmth comes from the coral accent, rounded type and the copy — not from emoji.

**Punctuation.** No exclamation marks in product UI (a single one is tolerable in a celebration state). No ellipses to imply hesitation. Questions are allowed as step titles: "Cuanto riesgo te sentis comodo".

**Disclosure tone.** Honest, never fine-print-shaped: "Los rendimientos pasados no garantizan los futuros. Te mostramos estimaciones, no promesas."

**Vibe.** A calm, competent friend who studied finance and refuses to show off.

---

## VISUAL FOUNDATIONS

**Colors.** One brand hue does the work. Purple `#5B00D6` (`--brand-primary`) for CTAs, active states, icons and highlights; `#6200EE` kept as `--purple-500` for the material-leaning tint; deep purple `#2E005F` (`--text-heading`) for headings and emphasis; soft lavender `#F3E8FF` for selected states and helper surfaces; coral `#FF6F61` for small warm highlights and positive nudges — one coral element per screen, never a coral background block. White is the app background; `#F5F5F7` is the secondary surface. Text is `#111111` primary / `#6B6B76` secondary. Green/red/amber appear only on figures and validation. **Max two background colors per screen** (white + one of lavender/gray), and **exactly one purple-background card** per screen — the recommendation.

**Type.** Nunito (rounded, high x-height) for display, headings, labels, buttons and figures; Nunito Sans for reading text. Headings 800 weight in deep purple with −2% tracking; body 400/15px at 22px line-height; labels 13px bold; captions 12px. Financial figures are tabular, 800 weight: 34px for the hero percentage, 24px for amounts, 16px inline. No serif, no condensed, no all-caps headlines.

**Spacing.** 4px base step; 8/12/16/24 carry everything. Screens have a 20px gutter, cards 16px padding, stacked cards a 12px gap, sections 24px apart. Controls are 52px tall (CTA, fields), tap targets never below 44px. Mobile canvas 390–420px.

**Backgrounds.** Flat white. No photography, no illustration, no repeating pattern, no texture, no grain, no gradient — **gradients are not part of this system**; a purple surface is a flat purple fill. The only tinted surfaces are lavender `#F3E8FF` and gray `#F5F5F7`. There are no full-bleed images and no hero imagery.

**Cards.** White fill, 1px `#E2E2E8` border, 16px radius, soft purple-tinted shadow `0 1px 2px rgba(17,17,17,.04), 0 4px 14px rgba(46,0,95,.06)`. Variants: flat (no shadow), secondary (gray, no border), soft (lavender), brand (flat purple, white text, `--shadow-brand`). Never nest a shadowed card in a shadowed card; never use a colored left border as decoration.

**Radii.** 6 micro, 8 inputs and chips, 12 buttons and small cards, 16 cards, 24 bottom sheets, pill for badges, meters and progress. Device canvas 40.

**Shadows.** Three only: `--shadow-card` (rest), `--shadow-raised` (hover), `--shadow-brand` (purple CTA glow, `0 6px 18px rgba(91,0,214,.24)`). Bottom nav uses a hairline plus a wide upward shadow; sheets use `--shadow-sheet`. No inner shadows except the optional pressed inset.

**Borders.** Hairlines are 1px `--border-subtle`; interactive resting borders are 1.5px so the selected state can stay the same width; the selected border is 1.5px `--brand-primary`. Dividers inside cards are 1px hairlines, full row width, no extra margin.

**Selection.** One signal, used everywhere: **purple 1.5px border + lavender background + shadow removed**. No check badge, no scale change, no color-only fill.

**Hover (web/preview).** Buttons darken one step on the ramp (600 → 700); secondary and ghost fill with lavender/tint; cards keep their border color but gain `--shadow-raised` and a lavender-tinted border. Never opacity fades for hover.

**Press.** `transform: scale(0.98)`, shadow removed, background one step darker (700 → 800). 120ms.

**Focus.** `box-shadow: 0 0 0 3px rgba(91,0,214,.22)` on the control, border switches to `--brand-primary`. Visible on keyboard focus, never suppressed.

**Motion.** Purposeful and short: 120ms for hover/press/color, 200ms for selection and toggles, 320ms for sheets and progress fills, all on `cubic-bezier(.2,.8,.3,1)`. Bottom sheets slide up from the bottom edge; progress bars animate their width on mount. No bounce, no spring overshoot, no looping ambient animation, no parallax.

**Transparency and blur.** Almost none. Two sanctioned uses: white at 16–24% opacity for controls and tracks sitting on a purple surface, and the deep-purple scrim `rgba(29,0,60,.44)` behind a bottom sheet. No frosted glass, no backdrop blur.

**Layout rules.** Fixed elements: 56px top bar at the top, 64px bottom nav at the bottom, and a CTA dock above the nav in flows (white background, upward shadow). Content scrolls between them. One primary CTA per screen, full width, at the bottom. Goal tiles sit in a 2-column grid; everything else is a single column.

**Imagery / color vibe.** No imagery is defined. If photography is ever added it should be warm, bright, daylight, real young people, no stock-finance handshakes and no dark trading-desk imagery. Dark dominant backgrounds are out of the system.

**Data display.** Numbers are large, tabular and unadorned; charts are not part of the system yet (goal progress uses a pill bar, not a chart). No dashboards, no dense tables, no more than 5 instrument rows per list on a beginner screen.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) line icons — 2px stroke, rounded caps, 24px grid. This is a **flagged substitution**: the brief asked for "purple line icons" but shipped no icon files. Lucide matches the stroke weight and rounded geometry closest.
- **Delivery:** no icon font, no sprite sheet, no PNGs. Icons are individual SVGs loaded from `https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/<name>.svg` and applied as a CSS `mask` on a `.ieb-icon` span, so every icon paints in `currentColor` (purple by default, white on purple surfaces, gray when inactive). Use the `Icon` component; never inline a hand-drawn SVG path.
- **Sizes:** 16 inline with text, 20 in buttons and list rows, 22–24 in navigation and goal tiles.
- **Containers:** a 40×40 lavender square with 12px radius holds the icon in list rows and goal tiles; it turns white when the tile is selected.
- **Goal vocabulary (fixed):** Viaje `plane`, Auto `car`, Emergencia `umbrella`, Vivienda `house`, Estudio `graduation-cap`, Otro `sparkles`.
- **Navigation (fixed):** Inicio `house`, Metas `target`, Mercado `trending-up`, Research `book-open`, Perfil `user`.
- **Emoji and unicode glyphs are never used as icons** — no ✓ characters, no arrows typed as text. Currency signs (`$`) and percent are typography, not icons.
- If a needed concept has no Lucide equivalent, pick the nearest Lucide metaphor rather than drawing one, and note it here.

### Intentional additions

The brief listed CTAs, goal cards, the recommendation card, progress, the risk selector and the bottom nav. To make those buildable, the system also includes the standard primitives they sit on — `Icon` (wrapper for the Lucide set), `Card`, `Badge`, `Tag`, `Input`, `AmountInput`, `Select`, `Checkbox`, `Radio`, `Switch`, `TopBar`, `Stepper`, `ProgressBar`, `Note`, `Sheet`, `ListRow` — each derived from a layout or copy rule the brief states. Nothing beyond that: no Toast, no Avatar, no Tabs, no Tooltip, no Accordion.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper so this system works inside Claude Code.
- `thumbnail.html` — homepage tile for the system.

**`tokens/`** — `fonts.css` (Nunito imports), `colors.css` (ramps + semantic aliases), `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` (element defaults).

**`css/components.css`** — the class layer every component renders against (`.ieb-btn`, `.ieb-card`, `.ieb-goalcard`, …). Shipped to consumers via `styles.css`.

**`components/`** — each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one card HTML.
- `core/` — Icon, Button, IconButton, Card, Badge, Tag
- `forms/` — Input, AmountInput, Select, Checkbox, Radio, Switch
- `navigation/` — TopBar, BottomNav, Stepper
- `feedback/` — ProgressBar, Note, Sheet
- `metas/` — GoalCard, RecommendationCard, GoalProgress, RiskSelector, ListRow

**`guidelines/`** — 18 specimen cards: brand purple ramp, surfaces, coral accent, neutrals, status, display/body/figure/weight type, spacing scale, layout tokens, radii, elevation, motion, wordmark placeholder, voice snippets, iconography, selection pattern.

**`ui_kits/mis_metas_app/`** — click-through recreation of the app (Inicio, Metas, Nueva meta 4-step flow, Detalle de meta, Mercado, Research, Perfil). Start at `index.html`; details in its own `README.md`.

**Namespace:** components are exposed at `window.IEBDesignSystem_afd037` in card and kit HTML.
