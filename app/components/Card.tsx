import "../styles/card.scss";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    isSnowing?: boolean;
}

export default function Card({ children, className = "", hoverable = false, isSnowing = false }: CardProps) {
    return (
        <div className={`card ${hoverable ? "card-hoverable" : ""} ${isSnowing ? "is-snowing" : ""} ${className}`}>
            {children}
        </div>
    );
}
