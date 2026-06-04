# ATLAS Green Copper Strategic Gateway

A **confidential, trilingual, institutional stakeholder gateway** for Atlas Mining's
Beni Mellal green copper project — presented as **a regional industrial development,
climate resilience, skills, and SME ecosystem platform anchored by a green copper
platform**, powered by **Akanil**.

> **Confidential institutional material.** All figures and indicators are indicative
> and subject to technical, environmental, and financial validation.

## What it does

- **Left sidebar + main strategic canvas** layout with a sticky top bar.
- **Partner View Selector** (Board · Industrial · Development · Financial · Technical &
  Environmental) that subtly highlights the most relevant nav sections, documents,
  decisions and capital layers for the selected stakeholder.
- **Trilingual** — **Arabic (RTL)**, **French (LTR)**, **English (LTR)** — via an
  AR / FR / EN toggle, using the **Alexandria** font throughout. Choice is persisted.
- Premium, data-room-inspired institutional design: deep graphite, copper accents,
  mineral green, Moroccan earth tones and subtle gold highlights.

## The seven rooms

1. **Executive Gateway** — first impression, four key cards (Green Copper · Beni Mellal
   Industrial Development · Climate-Resilient Processing · Skills & SME Ecosystem).
2. **Project Map** — five connected layers (Mineral · Industrial Processing · Innovation
   *powered by Akanil* · Regional Development · Finance & Governance).
3. **Partner Pathways** — five partner cards, each switching the active partner view.
4. **Technology Architecture** *(Powered by Akanil)* — a 10-step intelligent, low-impact
   processing flow from field data capture to expansion decision.
5. **USD 50M Map** — a staged strategic development envelope across six layers, with a
   donut chart and per-layer cards.
6. **Document Package Room** — documents grouped by access level (General · Partner ·
   Validation · Finance) with status badges and downloads.
7. **Decision Room** — seven board-level decision cards (decision · why it matters ·
   supporting document · next step).

## Documents

Nine project PDFs are bundled under `public/docs/` and wired as live downloads
(Validation Framework, Sampling Protocol, Metallurgical Test Plan, Processing Options,
Environmental & Water, ESG Data Governance, Financial Envelope, Partnership Strategy,
Regional & SME). Briefs and the restricted risk register use placeholder links until
their files are provided.

## Tech stack

React · TypeScript · Vite · Tailwind CSS · Framer Motion · Recharts · Lucide · Alexandria.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
public/
  akanil-logo.svg
  docs/                       # the downloadable project PDFs
src/
  components/
    AppShell.tsx              # top bar + sidebar + section router + footer
    Sidebar.tsx
    LanguageToggle.tsx
    PartnerViewSelector.tsx
    ConfidentialBadge.tsx
    viewContext.tsx           # partner view + active section + highlight helpers
    ExecutiveGateway.tsx
    ProjectMap.tsx
    PartnerPathways.tsx / PartnerPathwayCard.tsx
    TechArchitecture.tsx
    CapitalMap.tsx
    DocumentRoom.tsx / DocumentCard.tsx
    DecisionRoom.tsx / DecisionCard.tsx
    ui.tsx
  data/
    content.ts                # exec cards, project layers, technology steps
    partnerViews.ts           # partner pathways + per-view highlight config
    capitalMap.ts             # the six USD 50M layers
    documents.ts              # document packages (incl. real PDF links)
    decisions.ts              # decision room entries
  i18n/
    LanguageContext.tsx       # lang + RTL/LTR direction
    translations.ts           # trilingual UI chrome & page headers
    types.ts                  # Localized helper
  pages/
    Gateway.tsx
  styles/
    globals.css
```

## Notes

- The USD 50M envelope is presented as a staged **development** map — never as secured
  funding or an investment offer.
- The interface is stakeholder-facing only; it contains no developer instructions.
- Designed to later support secure auth, role-based access control, document storage,
  an AI assistant, and audit trails.
