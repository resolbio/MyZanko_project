# MyZanko Project - File Architecture

This project uses a simple, scalable structure suitable for an educational web application.

## Directory layout

```text
MyZanko_project/
├─ public/                # Static public assets (images, icons, etc.)
├─ src/
│  ├─ client/             # Frontend application code (UI/pages/components)
│  ├─ server/             # Backend/API code (routes/controllers/services)
│  └─ shared/             # Code shared by client and server (types/utils)
├─ tests/                 # Automated tests (unit/integration)
├─ docs/                  # Project and technical documentation
└─ README.md              # Project entry documentation
```

## Conventions

- Keep UI-only logic inside `src/client`.
- Keep API/business logic inside `src/server`.
- Put reusable utilities/types in `src/shared`.
- Mirror source modules in `tests` for easier test discovery.
