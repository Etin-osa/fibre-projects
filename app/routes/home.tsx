import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Fibre-projects" },
        { name: "description", content: "Welcome to React Router!" }
    ];
}

export const clientLoader = () => { 
    return redirect("/transparent_s");
};

export default function Home() {
    return () => <></>
}
