import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("billie", "routes/billie.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
