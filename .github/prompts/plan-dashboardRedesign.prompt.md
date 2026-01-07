# Plan: Redesign Dashboard UI with Modern Sections

Transform the dashboard's **content section** (keeping the existing sidebar intact) into a comprehensive multi-section interface with header, welcome banner, metrics cards, task management table, performance chart, and project list table. This involves restructuring [app/routes/dashboard.tsx](app/routes/dashboard.tsx), updating [app/styles/dashboard.scss](app/styles/dashboard.scss), creating reusable UI components, and integrating the existing [ThemeToggle](app/ThemeToggle.tsx) component.

## Design Decisions

- **Layout**: Keep existing sidebar; apply all changes to content section only
- **Data**: All data hardcoded in component files (no API integration)
- **Charts**: Pure CSS implementation with gray backgrounds, lighter gray bars, and percentage text inside bars at bottom (e.g., "+51%")
- **Profile Pictures**: Gray circular backgrounds without images
- **Responsive**: 4-card grid → 2x2 on tablets, single column on mobile; dual-card section stacks vertically below 1024px

## Steps

1. **Create reusable component library** — Build `Button.tsx`, `Badge.tsx`, `SearchBar.tsx`, `ProfileStack.tsx`, `IconCard.tsx`, `DataTable.tsx`, and `BarChart.tsx` components in [app/components/](app/components/) with corresponding SCSS files for consistent styling across all dashboard sections.

2. **Restructure content section layout** — Update the main content area in [app/routes/dashboard.tsx](app/routes/dashboard.tsx) to contain five main sections: header row, welcome banner, 4-metric cards grid (responsive: 4 cols → 2x2 → 1 col), dual-card row (tasks table + performance chart), and full-width projects table.

3. **Implement header section** — Build top row with "Dashboard" icon-text (left), "Last updated January 7, 2026" text, 3 gray profile circles using `ProfileStack`, and `ThemeToggle` component (right), all styled with gray text and proper spacing.

4. **Build welcome and metrics sections** — Create welcome banner with "Welcome back, [name]! 👋" (24px white) and task statistics ("4 Tasks Due Today, 2 Overdue Tasks, 8 Upcoming Deadlines" with numbers in white, text in gray), plus 4-column responsive grid of `IconCard` components showing Total Projects (15), Total Tasks (10), In Reviews (23), and Completed Tasks (50) with folder/file icons and month-over-month comparisons.

5. **Add task/performance dual-card section** — Implement side-by-side cards: "Today's Tasks" `DataTable` with search/filter functionality (left, ~60% width), and CSS `BarChart` for "Performance" with dropdown selector, 86% large number, "+15% vs last week" subtitle, and gray bars with lighter gray segments and inline percentage text (right, ~40% width). Stack vertically on mobile/tablet.

6. **Create full-width projects table** — Build comprehensive `DataTable` for "List Project" with columns for Project Name (colored icon + white text), Status (Badge: blue "In Progress", green "Completed", gray "On Hold"), Progress (10-segment horizontal bar chart with status color), Total Tasks (14/20: white/gray), Due Date, and Owner (gray profile circle + name), including search and filter controls in card header.

## Implementation Details

### Static UI Elements (No Functionality)
- **Welcome Name**: "Alex Morgan" 
- **Export Button**: Styled only, no download functionality
- **Search Bars**: Static input fields, no filtering
- **Filter Buttons**: Static buttons, no filter logic
- **Dropdown Menu**: Display "This Week" statically, no menu expansion

### Data Specifications
- **Today's Tasks Table**: 3 hardcoded rows
- **List Project Table**: 3 hardcoded rows
- **Performance Chart**: 7 bars for a week view with varying heights

### Component Technical Notes
- **BarChart Component**: CSS-only with flexbox/grid layout, gray container background, lighter gray bars with height percentages, white text labels positioned at bar bottom
- **Profile Circles**: Simple divs with gray background (#8e8e93 or similar), 32-40px diameter, white initials/numbers centered
- **Hardcoded Data**: Define mock data objects at top of [dashboard.tsx](app/routes/dashboard.tsx) for tasks, projects, and chart values
- **Responsive Breakpoints**: Use `@media (max-width: 1024px)` for tablet (2x2 grid, stacked dual cards) and `@media (max-width: 768px)` for mobile (single column)
- **Progress Bars**: 10 div segments in a flex container, colored based on completion percentage matching status badge color
