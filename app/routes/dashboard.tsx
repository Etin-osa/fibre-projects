import "../styles/dashboard.scss";
import {
    Bell,
    Bot,
    Calendar,
    Folder,
    HelpCircle,
    Inbox,
    Layout,
    LayoutDashboard,
    PieChart,
    Search,
    Settings,
    Sparkles,
    X,
    CheckCircle2,
    Clock,
    TrendingUp,
    Users
} from "lucide-react";
import type { Route } from "./+types/dashboard";
import Card from "../components/Card";
import ThemeToggle from "../ThemeToggle";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Taskplus Dashboard" },
        { name: "description", content: "Manage your tasks and projects" },
    ];
}

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* 1. Left Navigation Sidebar */}
            <nav className="sidebar">
                {/* 1.1 Header */}
                <div className="sidebar-header">
                    <div className="brand">
                        <LayoutDashboard size={24} />
                        <span>Taskplus</span>
                    </div>
                    <div className="profile-pic">
                        <img src="https://placehold.co/100x100" alt="Profile" />
                    </div>
                </div>

                <div className="sidebar-nav">
                    {/* 1.2 Tools Section */}
                    <div className="sidebar-section">
                        <div className="nav-item">
                            <Search size={20} />
                            <span>Search</span>
                        </div>
                        <div className="nav-item">
                            <Sparkles size={20} />
                            <span>Taskplus AI</span>
                        </div>
                        <div className="nav-item">
                            <Layout size={20} />
                            <span>Templates</span>
                        </div>
                        <div className="nav-item">
                            <Bell size={20} />
                            <span>Notifications</span>
                        </div>
                    </div>

                    {/* 1.3 Main Navigation */}
                    <div className="sidebar-section">
                        <div className="nav-item active">
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </div>
                        <div className="nav-item">
                            <Inbox size={20} />
                            <span>Inbox</span>
                        </div>
                        <div className="nav-item">
                            <Folder size={20} />
                            <span>Projects</span>
                        </div>
                        <div className="nav-item">
                            <Calendar size={20} />
                            <span>Calendar</span>
                        </div>
                        <div className="nav-item">
                            <PieChart size={20} />
                            <span>Reports</span>
                        </div>
                        <div className="nav-item">
                            <HelpCircle size={20} />
                            <span>Help & Center</span>
                        </div>
                        <div className="nav-item">
                            <Settings size={20} />
                            <span>Settings</span>
                        </div>
                    </div>
                </div>

                {/* 1.4 Bottom Promo */}
                <div className="upgrade-card">
                    <div className="close-btn"><X size={16} /></div>
                    <div className="promo-image">
                        <Bot size={40} /> 
                    </div>
                    <h4>Upgrade to Pro</h4>
                    <p>Get more features now!</p>
                    <button>Upgrade Now</button>
                </div>
            </nav>

            {/* 2. Main Content Area */}
            <main className="main-content">
                {/* 2.1 Header Section */}
                <header className="content-header">
                    <div className="header-left">
                        <h1><LayoutDashboard /> Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <span className="last-updated">Last updated: Jan 6, 2026</span>
                        <div className="user-stack">
                            <img className="user-avatar" src="https://placehold.co/40" alt="u1" />
                            <img className="user-avatar" src="https://placehold.co/40" alt="u2" />
                            <img className="user-avatar" src="https://placehold.co/40" alt="u3" />
                        </div>
                        <ThemeToggle />
                    </div>
                </header>

                {/* 2.2 Title & Actions */}
                <div className="title-section">
                    <div className="text-group">
                        <h2>Overview</h2>
                        <p>Track your project progress and stats here.</p>
                    </div>
                    <div className="action-buttons">
                        <button>Filter</button>
                        <button className="primary">Create New Project</button>
                    </div>
                </div>

                {/* 2.3 Four Stats Sections */}
                <div className="stats-grid">
                    <Card hoverable className="stat-card">
                        <div className="stat-icon"><CheckCircle2 /></div>
                        <div className="stat-value">24</div>
                        <div className="stat-label">Tasks Completed</div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="stat-icon" style={{color: "#3b82f6", backgroundColor: "#1e3a8a"}}><TrendingUp /></div>
                        <div className="stat-value">12</div>
                        <div className="stat-label">Projects Active</div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="stat-icon" style={{color: "#eab308", backgroundColor: "#713f12"}}><Clock /></div>
                        <div className="stat-value">8</div>
                        <div className="stat-label">Pending Review</div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="stat-icon" style={{color: "#ef4444", backgroundColor: "#7f1d1d"}}><Users /></div>
                        <div className="stat-value">5</div>
                        <div className="stat-label">Team Members</div>
                    </Card>
                </div>

                {/* 2.4 Two Split Sections */}
                <div className="charts-grid">
                    <Card className="large-card">
                        <h3>Project Activity</h3>
                        <div style={{height: "200px", background: "#0f0f14", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#666"}}>
                            Chart Placeholder
                        </div>
                    </Card>
                    <Card className="side-card">
                        <h3>Today's Schedule</h3>
                        <div style={{marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px"}}>
                            <div className="schedule-item">09:00 AM - Team Meeting</div>
                            <div className="schedule-item">11:00 AM - Design Review</div>
                            <div className="schedule-item">02:00 PM - Client Call</div>
                        </div>
                    </Card>
                </div>

                {/* 2.5 Bottom Section */}
                <Card className="bottom-section">
                    <h3>Recent Tasks</h3>
                    <table className="tasks-table">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Assignee</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Redesign Homepage</td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                                <td>Alex M.</td>
                                <td>Jan 10, 2026</td>
                            </tr>
                            <tr>
                                <td>Fix Navigation Bug</td>
                                <td><span className="status-badge status-progress">In Progress</span></td>
                                <td>Sarah J.</td>
                                <td>Jan 12, 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </main>
        </div>
    );
}
