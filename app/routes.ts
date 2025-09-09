import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("cell_one", "routes/cell_one/index.tsx")
] satisfies RouteConfig;
