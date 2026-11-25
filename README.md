# EA Academy — Professional Executive Assistant Program

A self-contained training website with three courses:

1. **The Executive Assistant** — 8 modules, 24 lessons: the role, the director profile, where to find any information, calendar management, communication and gatekeeping, meetings and minutes, documents and finance, scenario handling, routines and growth.
2. **Outlook for Executive Assistants** — 7 modules, 18 lessons, plus an interactive **Outlook practice lab** with 11 guided missions.
3. **Travel Management** — 7 modules, 16 lessons: policy, domestic and international flights, IRCTC, cabs, hotels, visas, forex, itineraries and disruptions.

Also included: 100 quiz questions (70% pass mark), 10 office scenarios, 3 travel-desk missions, a glossary, lesson search, and a printable certificate.

## Run it

No installation or build step.

- **On one computer:** unzip and double-click `index.html`.
- **For a team:** host it on GitHub Pages or Render (below), or upload the whole folder to any static host (company intranet/IIS, Netlify, S3, Hostinger). Keep the folder structure as it is.

## Host on GitHub Pages (from the terminal)

```bash
gh auth status                      # which GitHub account is logged in
cd ea-academy
git init -b main
git add . && git commit -m "EA Academy"
gh repo create ea-academy --public --source=. --remote=origin --push
gh api -X POST repos/{owner}/ea-academy/pages -f "source[branch]=main" -f "source[path]=/"
```

The site appears at `https://<your-username>.github.io/ea-academy/` after a minute or two. GitHub Pages on a free account needs a **public** repository.

To update later: `git add . && git commit -m "Update" && git push`.

## Host on Render

`render.yaml` is included. In the Render dashboard: **New → Blueprint**, pick the `ea-academy` repository, and apply. Every `git push` redeploys automatically.

Fonts load from Google Fonts. Without internet the site still works with system fonts.

## Rebrand

Edit `js/config.js`:

```js
brand: 'EA Academy',
programTitle: 'Professional Executive Assistant Program',
organisation: '',   // e.g. 'Aura Jewels' — appears on the certificate
passMark: 70,
```

The sample names used in lessons and the lab (Vikram Shah, Neha Joshi, Horizon Retail, yourcompany.in) are fictional and can be replaced with search-and-replace across the `js/data` folder and `js/outlook-lab.js`.

## Progress and certificates

Progress (lessons, quiz scores, scenarios, lab missions) is saved in the trainee's **browser** (localStorage). There are no logins:

- Each trainee should use their own browser/computer profile.
- Clearing browser data resets progress.
- There is no central record of who completed what. If you need that, the next step is a small backend (login + database).

The certificate unlocks when every lesson is completed and every module quiz is passed in all three courses. Print it, or choose "Save as PDF" in the print dialog.

## Folder structure

```
index.html            page shell
css/styles.css        all styling (light and dark themes)
js/config.js          branding and settings
js/app.js             routing, lessons, quizzes, scenarios, search, certificate
js/outlook-lab.js     Outlook practice lab
js/data/ea-1.js       Course 1, modules 1–4
js/data/ea-2.js       Course 1, modules 5–8
js/data/outlook-1.js  Course 2, modules 1–4
js/data/outlook-2.js  Course 2, modules 5–7
js/data/travel-1.js   Course 3, modules 1–4
js/data/travel-2.js   Course 3, modules 5–7
js/data/scenarios.js  scenario practice and travel missions
js/data/glossary.js   glossary terms
```

## Editing lesson content

Lessons are written in a simple Markdown-style format inside backtick strings in the `js/data` files. Do not use backticks or `${` inside lesson text.

| Write | Result |
|---|---|
| `## Heading` / `### Subheading` | Headings |
| `**bold**`, `*italic*` | Bold, italic |
| `- item` / `1. item` | Bullet / numbered list (indent 2 spaces for a sub-item) |
| `- [ ] item` | Tickable checklist |
| `\| a \| b \|` rows | Table (first row is the header) |
| `[[Ctrl+Shift+M]]` | Keyboard keys |
| `:::tip Title` … `:::` | Callout. Types: `tip`, `warn`, `note`, `example`, `script`, `template` (script and template get a Copy button) |
| `@lab 3 Text` | Link to Outlook lab mission 3 |
| `@scenario ea Text` / `@scenario travel Text` | Link to scenario practice |

Quiz questions: `{ q: "Question", o: ["A", "B", "C", "D"], a: 1, why: "Explanation" }` — `a` is the index of the correct option, starting at 0.

## Keep the facts current

Content was written in November 2026. Some details change over time and should be reviewed every 6–12 months:

- Airline baggage allowances and check-in timings
- IRCTC rules (advance reservation period, Tatkal timings, Aadhaar verification)
- DGCA passenger rights
- Visa requirements for Indian passport holders
- Forex rules (LRS limit, cash limits, TCS)
- Outlook menu locations (Microsoft updates new Outlook frequently)

Lessons already tell trainees to verify these on official sources before acting.

## Browser support

Current Chrome, Edge, Safari and Firefox on desktop and mobile.
