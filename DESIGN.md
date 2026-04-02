# Design System Document: The Editorial Professional

## 1. Overview & Creative North Star: "The Curated Gallery"
This design system is built for the senior practitioner who views UX not just as a set of wireframes, but as a disciplined narrative. Our Creative North Star is **"The Curated Gallery."** 

Unlike standard portfolios that rely on heavy containers and rigid grids, this system treats the screen like a high-end physical publication. We break the "template" look through **intentional asymmetry**, where large serif typography anchors the page, and body content breathes within generous white space. We favor "quiet" confidence—using subtle tonal shifts and elite typography to guide the eye rather than loud buttons or heavy borders.

---

## 2. Colors: Tonal Depth vs. Structural Lines
The palette is rooted in an "Off-White & Ink" foundation, utilizing a sophisticated blue (`#0056c5`) as a functional accent.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders to define sections. 
Structure must be achieved through:
- **Background Shifts:** Transitioning from `surface` (#faf9f4) to `surface-container-low` (#f4f4ef).
- **Negative Space:** Utilizing the `spacing-24` (8.5rem) scale to signal a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine, heavy-stock paper.
- **Base Layer:** `surface` (#faf9f4) for the main canvas.
- **Content Cards:** Use `surface-container-lowest` (#ffffff) to create a subtle "lift" for case study cards.
- **In-Page Callouts:** Use `surface-container-high` (#e9e8e3) for technical deep-dives or "Process" sidebars.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" feel, floating elements (like a sticky navigation bar) must use **Glassmorphism**:
- **Background:** `surface` at 80% opacity.
- **Effect:** `backdrop-blur: 20px`.
- **Signature Texture:** For primary CTAs, use a subtle linear gradient from `primary` (#0056c5) to `primary-container` (#2d6fe4) at a 135-degree angle. This adds a "lithographic" depth to the digital interface.

---

## 3. Typography: The Editorial Voice
The system relies on a high-contrast pairing: **Newsreader** (Serif) for narrative authority and **Work Sans** (Sans-Serif) for functional clarity.

*   **Display & Headline (Newsreader):** Use `display-lg` for project titles. The Serif represents the "Senior" voice—academic, experienced, and storytelling-driven.
*   **Body & Navigation (Work Sans):** Use `body-lg` for case study text. It provides a neutral, highly readable counterpoint to the expressive Serif.
*   **The Technical Edge (Space Grotesk):** Use `label-md` for metadata (e.g., "Role: Lead Designer," "Timeline: 6 Months"). This adds a hint of "process-oriented" brutalism, signaling precision.

---

## 4. Elevation & Depth: Tonal Layering
We reject traditional shadows in favor of **Ambient Light**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast is felt, not seen.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use: `box-shadow: 0 20px 40px rgba(27, 28, 25, 0.06)`. The shadow color is a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border":** If accessibility requires a stroke, use `outline-variant` (#c2c6d6) at **15% opacity**. This creates a suggestion of a boundary rather than a hard wall.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), white text, `rounded-sm` (0.125rem) for a sharp, architectural look.
- **Secondary:** Transparent background with a "Ghost Border."
- **Tertiary:** `newsreader` italicized text with a `primary` underline that expands on hover.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Style:** Separate list items using `spacing-5` (1.7rem). Use a `surface-variant` background on hover to indicate interactivity.
- **Layout:** Case study cards should use asymmetrical padding—wider on the left, tighter on the right—to mimic editorial magazine layouts.

### Input Fields
- **Style:** Underline only. Use `outline` (#737785) for the bottom stroke. On focus, transition the stroke to `primary` (#0056c5) and slightly shift the background to `surface-container-high`.

### Margin Callouts (Signature Component)
- **Purpose:** For senior portfolios, use the wide margins of the grid for "Director's Notes."
- **Styling:** `newsreader`, `headline-sm`, `on-tertiary-container` color. These should sit outside the main 8-column body grid to create visual interest.

---

## 6. Do's and Don'ts

### Do
- **Do** use large amounts of `spacing-20` (7rem) between major sections to let the portfolio "breathe."
- **Do** mix font styles within a single line (e.g., a Sans-Serif label followed by a Serif italicized keyword) to create a custom, high-end feel.
- **Do** use `surface-bright` for hero sections to create a sense of optimism and clarity.

### Don't
- **Don't** use 100% black (#000000). Always use `on-background` (#1b1c19) for text to maintain a premium, "ink-on-paper" softness.
- **Don't** use `rounded-full` for anything other than small status tags. Senior-level design is usually better served by the precision of `rounded-sm` or `rounded-none`.
- **Don't** use standard "drop shadows." If it looks like a default plugin setting, it’s wrong. Focus on tonal shifts.