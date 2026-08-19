# MyZanko_project

MyZanko Project is an educational web and application-based system focused on helping students.

## Project architecture

```text
MyZanko_project/
├─ public/                # Static assets and base HTML
├─ src/
│  ├─ client/             # Frontend browser code
│  ├─ server/             # Backend/API code
│  └─ shared/             # Shared constants and helpers
├─ tests/                 # Node test files
├─ docs/                  # Documentation
├─ scripts/               # Build/automation scripts
└─ package.json           # Project scripts and metadata
```

See `/docs/ARCHITECTURE.md` for structure conventions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available commands

- `npm run dev` — start local server
- `npm run build` — generate `dist/` output
- `npm run lint` — syntax check project JavaScript files
- `npm test` — run focused Node tests
