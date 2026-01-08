import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; // Assuming type generation, otherwise optional
import type { Route } from "./+types/home";
import SnowFall from "~/components/SnowFall";
import "../styles/billie.scss";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Billie Duvalle" },
        { name: "description", content: "Interactive animation" },
    ];
}

export default function Billie() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    
    // Refs for tracking mutable state without re-renders
    const lastPos = useRef({ x: 0, y: 0 });
    
    useGSAP(() => {
        // 1. Intro Animation
        if (textRef.current) {
            const tl = gsap.timeline();
            
            tl.to(textRef.current, {
                scale: 1,
                duration: 1.5,
                ease: "power3.out"
            }, 0)
            .to(textRef.current, {
                backgroundPosition: "0% 0",
                duration: 1.5,
                ease: "power2.inOut"
            }, 0.2);
        }

        // 2. Cursor Follower Setup
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3" });

        // 3. Mouse Move Handler
        const handleMouseMove = (e: MouseEvent) => {
            // Move cursor dot
            xTo(e.clientX);
            yTo(e.clientY);

            // Trail Logic
            // Calculate distance to throttle creation
            const dx = e.clientX - lastPos.current.x;
            const dy = e.clientY - lastPos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only spawn if moved enough (e.g., 150px)
            if (dist > 150) {
                spawnTrail(e.clientX, e.clientY);
                lastPos.current = { x: e.clientX, y: e.clientY };
            }
        };

        const spawnTrail = (x: number, y: number) => {
            if (!trailRef.current) return;

            const el = document.createElement("div");
            el.className = "trail-box";
            el.style.position = "absolute";
            el.style.backgroundColor = "#d3d3d3"; 
            
            const size = gsap.utils.random(250, 250); 
            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
            el.style.left = `${x - size}px`;
            el.style.top = `${y - (size * 0.75) / 2}px`;
            
            gsap.set(el, { scale: 0, opacity: 0 });
            
            trailRef.current.appendChild(el);

            // Animate Appearance & Disappearance
            const tl = gsap.timeline({
                onComplete: () => {
                    if (el.parentNode) el.parentNode.removeChild(el); 
                }
            });

            tl.to(el, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)"
            })
            .to(el, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                delay: .2 // Persist for a second
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, { scope: containerRef });

    return (
        <div className="billie-container" ref={containerRef}>
            <div className="trail-container" ref={trailRef}></div>
            <div className="cursor-dot" ref={cursorRef}></div>
            <h1 className="text-content" ref={textRef}>
                Billie Duvalle
            </h1>
        </div>
    );
}
