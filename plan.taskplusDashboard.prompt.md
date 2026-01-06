## Plan: Create Taskplus Dashboard Route

This plan creates a new `/dashboard` route featuring a comprehensive dashboard layout with a sidebar and main content area. We will use flexible SCSS layouts to match the specific grid requirements (4 columns, split sections) and standard HTML/CSS for the structure.

### Steps
1. Install `lucide-react` for icons.
2. Create [app/routes/dashboard.tsx](app/routes/dashboard.tsx) to implement the 2-column layout (Sidebar & Main Content), incorporating the specific sections (Header, Navigation links, Promo, Dashboard widgets).
2. Create [app/styles/dashboard.scss](app/styles/dashboard.scss) to define the styling, using CSS Grid/Flexbox for the sidebar sections and the right-side layout (4-section row, split row, bottom banner).
3. Update [app/routes.ts](app/routes.ts) to register the new `dashboard` route in the application configuration.
4. Import [app/styles/dashboard.scss](app/styles/dashboard.scss) into the dashboard route to apply the styles.

### Further Considerations
1. **Icons:** The design requires many icons. We will use `lucide-react`.
2. **Assets:** There are requests for images (profile pictures, promo image). I will use placeholders (e.g., `https://placehold.co`) unless you provide specific assets.
3. **Toggle Logic:** The "Dark/Light mode" button will be a visual placeholder unless you have an existing theme context to hook into.
