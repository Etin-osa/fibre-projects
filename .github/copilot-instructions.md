# Copilot Instructions for Fibre Projects

This repository is a **React Router 7 Single Page Application (SPA)** exploring 3D web experiences and UI dashboards. It uses **TypeScript**, **SCSS**, **React Three Fiber (R3F)**, and **GSAP**.

## Tech Stack & Core Dependencies
- **Framework**: React Router 7 (`@react-router/*`), configured for SPA (`ssr: false`).
- **Language**: TypeScript (`.ts`, `.tsx`).
- **Styling**: SCSS (`.scss`), imported directly into components.
- **Graphics**: React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js.
- **Animations**: GSAP (`gsap`, `@gsap/react`).
- **Icons**: Lucide React (`lucide-react`).
- **Build Tool**: Vite.

## Architecture & Project Structure
- **Routing**: Routes are defined in `app/routes.ts` using the config API (not purely file-based).
  - Example: `route("dashboard", "routes/dashboard.tsx")`.
- **Root**: `app/root.tsx` serves as the main layout, importing `app/styles/global.scss`.
- **Components**: Page-level components correspond to routes in `app/routes/`.
- **Styles**: SCSS files are located in `app/styles/` and imported into their respective components (e.g., `import "../styles/dashboard.scss";`).

## Coding Conventions

### TypeScript & React
- Use **Functional Components** with standard `export default function ComponentName() {}`.
- Use **Type-Safe Routing**:
  - Leverage `react-router typegen` types (e.g., `Route.MetaArgs`, `Route.LinksFunction`).
  - Import types from `./+types/<route-name>` when available.
- **R3F Components**: When working with `@react-three/fiber`, keep 3D logic separate or clearly marked within components.

### Styling (SCSS)
- Write standard SCSS without CSS Modules (unless refactoring is requested).
- Use descriptive class names (BEM-lite or descriptive kebap-case).
- Import styles at the top of the `.tsx` file.
- Ensure strict responsiveness using Flexbox and Grid.

### Routing Pattern
If creating a new page:
1. Create the component in `app/routes/<name>.tsx`.
2. Register it in `app/routes.ts`.
3. Create corresponding styles in `app/styles/<name>.scss`.

## Development Workflow
- **Start Dev Server**: `npm run dev` (Runs `react-router dev`).
- **Type Checking**: `npm run typecheck` (Runs `react-router typegen && tsc`).
  - *Note: Always run typecheck after modifying routes to regenerate route types.*
- **Build**: `npm run build`.

## Critical Files
- `react-router.config.ts`: Main config (SSR settings).
- `app/routes.ts`: Route definitions.
- `app/root.tsx`: Global layout & providers.
- `vite.config.ts`: Vite & plugin setup.
