---
name: Northbound
description: An independent slow-travel magazine built as an Astro template; condensed newsroom headlines over serif reporting text.
colors:
  paper: "#ffffff"
  ink: "#121417"
  ink-2: "#3d434b"
  muted: "#5d636b"
  line: "#dde1e6"
  cobalt: "#1f47c7"
  cobalt-ink: "#17369a"
  sky: "#e9efff"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "fills the 1280px column (SVG wordmark, 160px in a 770-unit viewBox)"
    fontWeight: 800
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 62%; uppercase"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
    fontVariation: "font-stretch 75%"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "font-stretch 75%"
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.7
  dek:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  none: "0"
spacing:
  gutter: "20px"
  grid-gap: "40px"
  page-head: "56px"
  block: "96px"
  band: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  input-email:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "48px"
  newsletter-band:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.cobalt-ink}"
    padding: "72px 0"
  category-link:
    textColor: "{colors.cobalt}"
---

# Design System: Northbound

## Overview

**Creative North Star: "The Independent Newsstand Title"**

Northbound looks like a confident independent magazine, not a blog theme. A giant condensed wordmark runs the full width of the page, headlines are set in a narrowed Archivo, and the reading itself happens in Source Serif 4 at a generous 20px on a 680px measure. The page is white paper and near-black ink; one cobalt does the editorial marking: section names, links inside stories, pull quotes, the drop cap, and the newsletter band.

Structure comes from rules, not boxes. Thin 1px lines separate list items and footer rows, a heavy 4px ink bar opens every section, and nothing is rounded, shadowed or carded. Photographs carry the colour; the interface stays black, white and cobalt around them.

When customising, keep the two-voice split (condensed sans for anything that is announced, serif for anything that is read) and keep cobalt rare enough that it still means "this is a section or a link".

**Key Characteristics:**
- Full-width condensed uppercase wordmark on the home page; a compact text logo elsewhere.
- Archivo at 62% width (wordmark, drop cap) and 75% width (all headings, pull quotes).
- Source Serif 4 for article text, deks, bios and list headlines in the section index.
- White paper, ink text, one cobalt accent, a pale sky band reserved for the newsletter.
- Square corners, 1px hairlines, 4px section bars, no shadows.

## Colors

A newsroom palette: white, ink, and a single saturated cobalt, with one pale tint of that cobalt for the subscription band.

### Primary
- **Press Cobalt** (cobalt): category labels in meta lines, section-index headings, category page titles, links and list markers in article text, the drop cap, nav hover and current page, button hover, focus rings, `accent-color` and caret.
- **Deep Cobalt** (cobalt-ink): text on the sky band (newsletter headline, success note), pull quotes, and the selection text colour.

### Secondary
- **Pale Sky** (sky): the newsletter band background and text selection highlight. Not used as a general card or panel fill.

### Neutral
- **Paper** (paper): page background; text on ink buttons.
- **Press Ink** (ink): headlines, body copy, primary buttons, the masthead bottom rule, section bars, the author-box rule.
- **Soft Ink** (ink-2): deks, bios, newsletter copy, footer links. Secondary reading text, still serif where it is read.
- **Caption Grey** (muted): meta lines, captions, the utility row, footer small print.
- **Hairline** (line): 1px dividers between list items, under the utility row, under category headers; the dot separator in meta lines.
- **Error Red** (error): invalid email field border and error message only.

### Named Rules
**The Marking Rule.** Cobalt marks navigation and editorial structure (sections, links, quotes, the drop cap). It is never a large background fill, and never used for decoration without a job.

**The One Band Rule.** The sky tint belongs to the newsletter band. A second tinted band on the same page dilutes the subscribe moment.

## Typography

**Display Font:** Archivo variable (width 62-125%, weight 100-900), with ui-sans-serif / system-ui fallback
**Body Font:** Source Serif 4 variable (roman and italic), with Georgia fallback

**Character:** A narrowed, heavy grotesque announces; a contemporary text serif reports. All three font files are self-hosted in `/public/fonts`, and Archivo is preloaded.

### Hierarchy
- **Display** (800, 62% width, uppercase, -0.02em): the home-page wordmark only. Rendered as SVG `<text>` at its natural width so it fills the column without stretching glyphs. If you rename the site, adjust the SVG `viewBox` width to the new word's natural width instead of forcing the text to fit.
- **Headline** (700, 75% width, -0.015em, line-height 0.95-1): article titles (clamp 2.8-5.6rem), category page titles in cobalt (clamp 3-7rem), the lead story (clamp 2.4-4.4rem), the about-page headline (clamp 2.6-5rem).
- **Section head** (700, 75% width, clamp 1.8-2.6rem): "Latest", "Keep reading", "Writers"; always sits on a 4px ink bar.
- **Title** (700, 75% width, clamp 1.5-1.9rem): card headlines; writer names at 1.9rem.
- **Body** (Source Serif 4 400, 20px, line-height 1.7, 680px measure): article text, about intro. Bold in prose is 650, not 700.
- **Dek** (Source Serif 4 400, 17px card / 1.1-1.3rem lead / 1.2-1.55rem article, line-height 1.4-1.5, Soft Ink): the standfirst under every headline; max 46ch on articles.
- **Pull quote** (Archivo 700, 75% width, clamp 1.7-2.4rem, line-height 1.12, Deep Cobalt): markdown blockquotes, no rule or quote glyph.
- **Drop cap** (Archivo 800, 62% width, 4.6em, cobalt): the first letter of the first paragraph of every article.
- **UI** (Archivo 400, 17px, line-height 1.55): navigation (600, 16px), buttons (600, 15px), interface text.
- **Label** (Archivo 400, 14px, Caption Grey): meta lines (category · author · reading time), captions at 13px, footer.

### Named Rules
**The Two Voices Rule.** Condensed Archivo for what is announced (wordmark, headings, quotes, drop cap, UI); Source Serif 4 for what is read (body, deks, bios, index headlines). Do not set long reading text in Archivo.

**The Natural Width Rule.** Condensing comes from Archivo's width axis (`font-stretch`), never from scaling or `textLength` distortion of glyphs.

## Layout

A single 1280px column (`min(1280px, 100% - 40px)`), no sidebars. The home page leads with an 8/12 + 4/12 split: a 16:10 photo left, headline, dek and meta bottom-aligned right; it stacks below 960px. Story lists use a three-column grid (gaps 40px row, clamp 20-40px column) that drops to two columns at 900px and one at 600px. The section index is three columns of hairline-ruled serif lists, one per category.

Article pages break the column: the header aligns its left edge with the 680px text measure, the cover photo runs full bleed (capped at 78vh), the prose sits centred at 680px, and inline images break out up to 120px wider than the text.

Vertical rhythm is generous and stepped: 40px between grid rows, 56px above page headers and between article parts, 96px between home-page sections, 112px before "Keep reading" and the newsletter band.

### Named Rules
**The Measure Rule.** Article text never exceeds 680px; deks stop at 46ch, intros at 40-44ch.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth and grouping come from rules and the one tinted band: a 1px ink rule under the masthead and above the footer, a 4px ink bar over each section head, 1px hairlines between list rows, and the sky band behind the newsletter. Image hover is a slight fade to 88% opacity, not a lift.

### Named Rules
**The Ruled Page Rule.** Separate content with rules and whitespace, never with shadows or boxed cards.

## Shapes

Square everything: buttons, inputs, images and avatars all have 0 radius. Photography is cropped to fixed ratios (16:10 for the lead story, 3:2 for cards) with `object-fit: cover`. Lines are either a 1px hairline (Hairline or Ink) or the 4px ink section bar; there is no middle weight.

## Components

### Buttons
Solid and blunt.
- **Shape:** square corners (0), minimum 44px tall (48px in the newsletter form), 18px side padding.
- **Primary:** ink fill, white Archivo 600 15px text, 1px ink border.
- **Hover / Focus:** fill and border switch to cobalt over 0.2s; focus is the global 2px cobalt outline offset 3px.
- **Busy:** disabled at 60% opacity with a progress cursor while the demo form submits.

### Inputs / Fields
- **Style:** white field, 1px pale cobalt border (#b9c6ea), square, 48px tall, Archivo 16px.
- **Focus:** 2px cobalt outline flush to the field, border turns cobalt.
- **Error:** border and status note turn Error Red; success note is Deep Cobalt 600.

### Navigation
- **Masthead:** a utility row (tagline, last-updated date, Subscribe and RSS links) in 14px Caption Grey above a hairline; the wordmark; then section links in Archivo 600 16px with the ink Subscribe button on the right; a 1px ink rule closes the masthead.
- **States:** hover and `aria-current="page"` turn cobalt; no underline bars.
- **Mobile (640px and below):** tagline and the Subscribe button hide; a text Subscribe link appears in the utility row; section links wrap.

### Story Card
- **Structure:** 3:2 photo, title, serif dek, meta line; 12px internal gap; no border, background or padding.
- **Hover:** photo fades to 88%; title turns cobalt.
- **Meta line:** cobalt category link (600) then author and reading time, separated by a Hairline-coloured middle dot.

### Section Head
A 4px ink bar with 14px of space above an Archivo section title; 32px to the content below. Every major block on index pages opens with one.

### Newsletter Band
Full-width sky band, 72px padding, two columns (headline + serif pitch left, form right, aligned to the bottom), stacking at 760px. Headline in Deep Cobalt at clamp 2.2-3.8rem. The footer drops its top rule when it follows the band.

### Article Furniture
Byline with a 48px square cobalt initials avatar, bold name and meta; an author box closing the article under a 1px ink rule with a 96px avatar and serif bio; photo credits as 13px captions aligned to the text measure.

## Do's and Don'ts

### Do:
- **Do** keep cobalt (#1f47c7) to sections, links, quotes, the drop cap, focus and hover states.
- **Do** set headings in Archivo with `font-stretch: 75%` and the wordmark and drop cap at 62%.
- **Do** keep article text in Source Serif 4 at 20px / 1.7 within 680px.
- **Do** open each home or article section with the 4px ink bar section head.
- **Do** keep every corner square and every surface shadowless.
- **Do** resize the wordmark SVG `viewBox` to the new name's natural width when rebranding.

### Don't:
- **Don't** add box shadows, rounded corners or bordered cards to story listings.
- **Don't** add sidebars or tag clouds; the single column and the section index carry navigation.
- **Don't** stretch or squash the wordmark with `textLength`, transforms or non-uniform scaling.
- **Don't** use the sky tint for anything except the newsletter band and text selection.
- **Don't** set body or dek text in Archivo, or headlines in the serif.
