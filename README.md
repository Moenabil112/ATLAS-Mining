# ATLAS Green Copper Finance Console

A **confidential, trilingual, experience-first** stakeholder console for **Atlas Mining SARL**,
presenting a Moroccan Green Copper platform and an **indicative USD 50M strategic expansion target**.

> **Confidential — not a public fundraising offer.** All figures are indicative planning figures,
> subject to technical, environmental, legal and financial validation.

## Purpose

The console is designed for controlled stakeholder presentations to Moroccan operating partners,
Attijariwafa Bank, EBRD / GEFF Morocco, EBRD climate finance stakeholders, European development
finance actors, technical/environmental advisors, and internal Atlas / Akanil decision-makers.

It follows an **experience-first narrative**: Atlas strength first, financing pathway last.

`Experience → Morocco Value → Green Pilot → USD 50M Expansion Map → Finance Pathways → Stakeholder Decision`

## Features

- **Confidential entry** with a mock role selector (6 stakeholder roles).
- **Trilingual** interface — **Arabic (RTL)**, **French (LTR)**, **English (LTR)** — with a live AR / FR / EN toggle. Language preference is persisted.
- **Alexandria** typography across the whole UI.
- **Ten rooms**, in narrative order:
  1. Executive Experience Dashboard
  2. Atlas Capability Room
  3. Morocco / Beni Mellal Value Room
  4. Green Copper Pilot Room (process flow)
  5. USD 50M Strategic Expansion Map (charts + 6 stakeholder lenses)
  6. Three Institutional Finance Pathways (EBRD/GEFF · EBRD Climate · Attijariwafa Bank)
  7. ESG Monitoring MVP (placeholder metrics)
  8. Evidence & Document Room
  9. Partner Decision Room
  10. Claims Control Footer
- **Claims-control discipline** — approved wording vs. prohibited claims is enforced in copy and surfaced in the footer.

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (transitions)
- Recharts (expansion map charts)
- Lucide icons

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  i18n/
    LanguageContext.tsx       # language provider + RTL/LTR direction
    translations.en.ts        # canonical dictionary (defines the Translation shape)
    translations.fr.ts
    translations.ar.ts
  data/
    types.ts                  # Localized helper + access/evidence types
    rolesData.ts
    atlasProfileData.ts
    expansionBudget50M.ts     # 6 capital clusters + stakeholder lenses
    pathwaysData.ts           # 3 institutional finance pathways
    esgMetricsData.ts
    documentRoomData.ts
    decisionPathwaysData.ts
  components/                 # AppShell + the ten rooms + reusable cards/badges
  App.tsx
  main.tsx
```

## Designed for future integration

This MVP is structured to later support: secure authentication, role-based access control,
document storage, an AI assistant, an audit trail, data-room permissions, ESG data ingestion,
and a green-finance application workflow.

## Disclaimers (claims control)

The interface never claims: proven reserves, commercially recoverable resources, guaranteed
production, confirmed green certification, GCF accreditation, fully renewed licenses, guaranteed
funding, guaranteed regional impact, guaranteed employment, or secured USD 50M funding.

It uses disciplined wording such as: *preliminary evidence · subject to verification · pilot-stage ·
under renewal · indicative expansion target · subject to eligibility review · subject to bank approval.*
