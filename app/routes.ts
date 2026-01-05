import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("mood-switch", "routes/mood-switch/home.tsx")
] satisfies RouteConfig;
