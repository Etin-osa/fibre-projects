import "../styles/card.scss";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({ children, className = "", hoverable = false }: CardProps) {
    return (
        <div className={`card ${hoverable ? "card-hoverable" : ""} ${className}`}>
            {children}
        </div>
    );
}
