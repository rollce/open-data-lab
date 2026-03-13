# Open Data Lab

Open Data Lab is a multi-page research and storytelling web app designed to make public datasets easier to understand for non-experts.

Live: https://data.rollsev.work

## Why this project exists

Open datasets are often technically available but practically inaccessible to students, local teams, and decision-makers without data science backgrounds. This project demonstrates how to package data into a clear product experience.

## Product goals

- Increase transparency of data sources
- Present trends through readable visual analytics
- Document a reproducible analysis workflow
- Make the project suitable for university portfolio review

## Pages and user flows

- `/` Overview
  - Product context, KPI cards, and navigation to analysis modules
- `/insights`
  - Interactive visual analytics and trend interpretation
- `/datasets`
  - Data catalog with source, refresh cadence, coverage, and quality information
- `/methodology`
  - Step-by-step workflow from question definition to publication

## Key features

- Structured module navigation for research storytelling
- Dataset provenance and quality visibility
- Chart-driven insight communication
- Methodology-first presentation for explainability

## UI / UX stack

- Ant Design components (`Menu`, `Card`, `Table`, `Statistic`, `Timeline`, `Steps`)
- Recharts for data visualizations
- Framer Motion for transitions and section animations

## Technical stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Ant Design
- Recharts
- Framer Motion

## Architecture notes

- Frontend-focused implementation with static/mock data presentation
- Route-level decomposition by domain concern (insights, datasets, methodology)
- No external backend dependency required for local run

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

- Deployed on Railway
- Public domain: `data.rollsev.work`

## Portfolio value

This project demonstrates product thinking for data communication, not only raw chart rendering.

## Roadmap

- Add API-backed dataset ingestion
- Add exportable insight reports
- Add comparison mode for multi-region analysis
