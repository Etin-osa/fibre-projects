
import { useEffect, useRef } from "react";

export default function SnowFall() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const particles: {
            x: number;
            y: number;
            radius: number;
            swayOffset: number;
            speed: number;
            drift: number;
            swayAmp: number;
        }[] = [];

        const particleCount = 2700;

        for (let i = 0; i < particleCount; i++) {
            const radius = Math.random() * 1.6 + 0.3;
            let speed = Math.random() * 2 + 0.5;
            let drift = (Math.random() - 0.5) * 0.5;
            let swayAmp = 0.5;

            // Make some smaller snowflakes fall faster
            if (radius < 1 && Math.random() > 0.5) {
                speed += Math.random() * 2 + 1.5;
                drift += (Math.random() - 0.5) * 3;
                swayAmp = 1 + Math.random() * 1.5;
            }

            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: radius,
                swayOffset: Math.random() * Math.PI * 2,
                speed: speed,
                drift: drift,
                swayAmp: swayAmp,
            });
        }

        let animationId: number;
        let angle = 0;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.beginPath();

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true);
            }

            ctx.fill();
            update();
            animationId = requestAnimationFrame(draw);
        };

        const update = () => {
            angle += 0.01;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];

                p.y += p.speed;
                p.x += p.drift + Math.sin(angle + p.swayOffset) * p.swayAmp;

                if (p.x > width + 20 || p.x < -20 || p.y > height) {
                    p.x = Math.random() * width;
                    p.y = -10;
                }
            }
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: -1,
            }}
        />
    );
}
