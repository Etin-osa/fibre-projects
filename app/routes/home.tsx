import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Fibre-projects" },
        { name: "description", content: "Welcome to React Router!" }
    ];
}

export const clientLoader = () => { 
    // return redirect("/mood-switch");
};

export default function Home() {
    return (
        <div className="app">
            <p>Welcome to home page of</p>
            <h1>FIBRE</h1>
            <h1>PROJECTS</h1>
            <p>A playground website for working with three js and react three fibre</p>
        </div>
    )
}
