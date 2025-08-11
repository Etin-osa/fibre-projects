import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("transparent_s", "routes/transparent_s/index.tsx")
] satisfies RouteConfig;
