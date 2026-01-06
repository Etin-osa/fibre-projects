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
    Moon,
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

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Taskplus Dashboard" },
        { name: "description", content: "Manage your tasks and projects" },
    ];
}

// TODO: Add shadow to every card in dashboard section

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
                        <button className="theme-toggle">
                            <Moon size={20} />
                        </button>
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
                    <div className="stat-card">
                        <div className="stat-icon"><CheckCircle2 /></div>
                        <div className="stat-value">24</div>
                        <div className="stat-label">Tasks Completed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{color: "#3b82f6", backgroundColor: "#eff6ff"}}><TrendingUp /></div>
                        <div className="stat-value">12</div>
                        <div className="stat-label">Projects Active</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{color: "#eab308", backgroundColor: "#fef9c3"}}><Clock /></div>
                        <div className="stat-value">8</div>
                        <div className="stat-label">Pending Review</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{color: "#ef4444", backgroundColor: "#fef2f2"}}><Users /></div>
                        <div className="stat-value">5</div>
                        <div className="stat-label">Team Members</div>
                    </div>
                </div>

                {/* 2.4 Two Split Sections */}
                <div className="charts-grid">
                    <div className="large-card">
                        <h3>Project Activity</h3>
                        <div style={{height: "200px", background: "#2c2c2c", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#999"}}>
                            Chart Placeholder
                        </div>
                    </div>
                    <div className="side-card">
                        <h3>Today's Schedule</h3>
                        <div style={{marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                            <div style={{padding: "10px", background: "#2c2c2c", borderRadius: "6px"}}>09:00 AM - Team Meeting</div>
                            <div style={{padding: "10px", background: "#2c2c2c", borderRadius: "6px"}}>11:00 AM - Design Review</div>
                            <div style={{padding: "10px", background: "#2c2c2c", borderRadius: "6px"}}>02:00 PM - Client Call</div>
                        </div>
                    </div>
                </div>

                {/* 2.5 Bottom Section */}
                <div className="bottom-section">
                    <h3>Recent Tasks</h3>
                    <table style={{width: "100%", borderCollapse: "collapse", marginTop: "15px"}}>
                        <thead>
                            <tr style={{textAlign: "left", color: "#666", borderBottom: "1px solid #eee"}}>
                                <th style={{padding: "10px"}}>Task Name</th>
                                <th style={{padding: "10px"}}>Status</th>
                                <th style={{padding: "10px"}}>Assignee</th>
                                <th style={{padding: "10px"}}>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{padding: "15px 10px"}}>Redesign Homepage</td>
                                <td style={{padding: "15px 10px"}}><span style={{background: "#dcfce7", color: "#166534", padding: "4px 8px", borderRadius: "12px", fontSize: "0.8rem"}}>Completed</span></td>
                                <td style={{padding: "15px 10px"}}>Alex M.</td>
                                <td style={{padding: "15px 10px"}}>Jan 10, 2026</td>
                            </tr>
                            <tr>
                                <td style={{padding: "15px 10px"}}>Fix Navigation Bug</td>
                                <td style={{padding: "15px 10px"}}><span style={{background: "#fef9c3", color: "#854d0e", padding: "4px 8px", borderRadius: "12px", fontSize: "0.8rem"}}>In Progress</span></td>
                                <td style={{padding: "15px 10px"}}>Sarah J.</td>
                                <td style={{padding: "15px 10px"}}>Jan 12, 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
