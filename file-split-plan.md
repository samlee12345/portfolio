# File Split Plan — case-study-alerts.html

## Goal
Split the single large HTML file into part-based fragments to reduce tokens per editing session.

## Structure
```
Portfolio/
  case-study-alerts.html         ← shell (head, nav, CSS, empty containers, JS loader)
  parts/
    alerts-part-1.html           ← Overview
    alerts-part-2.html           ← Discover
    alerts-part-3.html           ← Define
    alerts-part-4.html           ← Develop
    alerts-part-5.html           ← Redefine (to build)
    alerts-part-6.html           ← Redevelop (to build)
    alerts-part-7.html           ← Deliver (to build)
```

## Loading mechanism
fetch() in the shell, injected into container divs. Works on GitHub Pages (HTTPS). Requires VS Code Live Server for local editing (extension by Ritwick Dey).

## Section ID map

| Part | Section IDs |
|---|---|
| 1 | pf-mission, pf-problem, pf-solution, pf-why-alerting, pf-impact |
| 2 | pf-design-process, pf-domain, pf-user-research, pf-benchmarking, pf-findings, pf-insights |
| 3 | pf-redefine-scope, pf-wireframing, pf-define-notification-labels, pf-define-trigger-fields, pf-define-alert-source, pf-define-alert-discovery, pf-define-quick-button, pf-define-notifications |
| 4 | pf-layout-anatomy, pf-trigger-conditions, pf-notification-delivery, pf-alert-source, pf-alert-discovery, pf-quick-alert-button, pf-notifications-blotter, pf-prototype, pf-round1-research, pf-validation-synthesis, pf-round1-insights |
| 5–7 | Not yet built |

## Prerequisites
- Install VS Code Live Server (Ritwick Dey) before starting
- Do a full em dash sweep via sed before splitting (cleaner to do on one file)
- Back up the original single file before restructuring
