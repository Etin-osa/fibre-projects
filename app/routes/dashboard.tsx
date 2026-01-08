import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
    File,
    Plus,
    FileText,
    FileCheck,
    FileX,
    Filter,
} from "lucide-react";
import Card from "../components/Card";
import ThemeToggle from "../ThemeToggle";

export function meta() {
    return [
        { title: "Taskplus Dashboard" },
        { name: "description", content: "Manage your tasks and projects" },
    ];
}

export default function Dashboard() {
    const container = useRef(null)

    return (
        <div ref={container} className="dashboard-container">
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
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </div>
                    <div className="header-right">
                        <span className="last-updated">Last updated January 8, 2026</span>
                        <div className="avatars">
                            <div className="avatar avatar-1"></div>
                            <div className="avatar avatar-2"></div>
                            <div className="avatar avatar-3"></div>
                        </div>
                        <ThemeToggle />
                    </div>
                </header>

                {/* 2.2 Welcome Section */}
                <div className="welcome-section">
                    <div className="welcome-text">
                        <h2>Welcome back, John Connor! 👋</h2>
                        <p>
                            <span className="highlight">4</span> Tasks Due Today, <span className="highlight">2</span> Overdue Tasks, <span className="highlight">8</span> Upcoming Deadlines (This Week)
                        </p>
                    </div>
                    <div className="welcome-actions">
                        <button className="btn-export">
                            <File size={18} />
                            <span>Export</span>
                        </button>
                        <button className="btn-new-project">
                            <Plus size={18} />
                            <span>New Project</span>
                        </button>
                    </div>
                </div>

                {/* 2.3 Four Stats Cards */}
                <div className="stats-grid">
                    <Card hoverable className="stat-card">
                        <div className="card-left">
                            <div className="stat-title">Total Projects</div>
                            <div className="stat-number">15</div>
                            <div className="stat-comparison">
                                <span className="comparison-value">+5</span> vs last month
                            </div>
                        </div>
                        <div className="card-right">
                            <Folder className="stat-icon-large" />
                        </div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="card-left">
                            <div className="stat-title">Total Task</div>
                            <div className="stat-number">10</div>
                            <div className="stat-comparison">
                                <span className="comparison-value">+2</span> vs last month
                            </div>
                        </div>
                        <div className="card-right">
                            <FileText className="stat-icon-large" />
                        </div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="card-left">
                            <div className="stat-title">In Reviews</div>
                            <div className="stat-number">23</div>
                            <div className="stat-comparison">
                                <span className="comparison-value">+12</span> vs last month
                            </div>
                        </div>
                        <div className="card-right">
                            <FileCheck className="stat-icon-large" />
                        </div>
                    </Card>
                    <Card hoverable className="stat-card">
                        <div className="card-left">
                            <div className="stat-title">Completed Tasks</div>
                            <div className="stat-number">50</div>
                            <div className="stat-comparison">
                                <span className="comparison-value">+15</span> vs last month
                            </div>
                        </div>
                        <div className="card-right">
                            <FileX className="stat-icon-large" />
                        </div>
                    </Card>
                </div>

                {/* 2.4 Charts Grid Section */}
                <div className="charts-grid">
                    {/* Big Card (Left) - Today's Tasks */}
                    <Card className="tasks-card">
                        <div className="card-header">
                            <h3>Today's Tasks</h3>
                            <div className="header-actions">
                                <div className="search-bar">
                                    <Search size={18} />
                                    <input type="text" placeholder="Search here..." />
                                </div>
                                <button className="filter-btn">
                                    <Filter size={18} />
                                    <span>Filter</span>
                                </button>
                            </div>
                        </div>
                        <div className="tasks-table">
                            <div className="table-header-row">
                                <div className="table-header-cell">Task Name</div>
                                <div className="table-header-cell">Project</div>
                                <div className="table-header-cell">Due</div>
                            </div>
                            <div className="table-body">
                                <div className="table-row">
                                    <div className="table-cell">
                                        <FileText size={18} className="task-icon" />
                                        <span>Prepare Q2 report</span>
                                    </div>
                                    <div className="table-cell">
                                        <Folder size={18} className="project-icon" />
                                        <span>Fintech Project</span>
                                    </div>
                                    <div className="table-cell">12 Mar 2025</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">
                                        <FileText size={18} className="task-icon" />
                                        <span>Update API documentation</span>
                                    </div>
                                    <div className="table-cell">
                                        <Folder size={18} className="project-icon" />
                                        <span>Mobile Banking App</span>
                                    </div>
                                    <div className="table-cell">15 Mar 2025</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">
                                        <FileText size={18} className="task-icon" />
                                        <span>Review security audit</span>
                                    </div>
                                    <div className="table-cell">
                                        <Folder size={18} className="project-icon" />
                                        <span>Enterprise Platform</span>
                                    </div>
                                    <div className="table-cell">18 Mar 2025</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">
                                        <FileText size={18} className="task-icon" />
                                        <span>Design system updates</span>
                                    </div>
                                    <div className="table-cell">
                                        <Folder size={18} className="project-icon" />
                                        <span>UI Kit Redesign</span>
                                    </div>
                                    <div className="table-cell">20 Mar 2025</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">
                                        <FileText size={18} className="task-icon" />
                                        <span>Client presentation deck</span>
                                    </div>
                                    <div className="table-cell">
                                        <Folder size={18} className="project-icon" />
                                        <span>Marketing Campaign</span>
                                    </div>
                                    <div className="table-cell">22 Mar 2025</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Performance Card */}
                    <Card className="performance-card">
                        <div className="card-header">
                            <h3>Performance</h3>
                            <select className="period-dropdown">
                                <option>This Week</option>
                                <option>This Month</option>
                            </select>
                        </div>
                        <div className="performance-numbers">
                            <div className="main-value">86%</div>
                            <div className="comparison">
                                <span className="trend-value">+15%</span>
                                <span className="trend-label">vs last week</span>
                            </div>
                        </div>
                        <div className="chart-placeholder">
                            <span>Bar Chart Placeholder</span>
                        </div>
                    </Card>
                </div>

                {/* 2.5 Recent Projects Table */}
                <Card className="bottom-section">
                    <div className="table-header-row">
                        <h3>List Project</h3>
                        <div className="header-actions">
                            <div className="search-bar">
                                <Search size={18} />
                                <input type="text" placeholder="Search here..." />
                            </div>
                            <button className="filter-btn">
                                <Filter size={18} />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>
                    <div className="projects-table">
                        <div className="table-header-row">
                            <div className="table-header-cell">Project Name</div>
                            <div className="table-header-cell">Status</div>
                            <div className="table-header-cell">Progress</div>
                            <div className="table-header-cell">Total Tasks</div>
                            <div className="table-header-cell">Due Date</div>
                            <div className="table-header-cell">Owner</div>
                        </div>
                        <div className="table-body">
                            {/* Example Row 1 */}
                            <div className="table-row">
                                <div className="table-cell project-name">
                                    <div className="project-icon" style={{background: 'linear-gradient(135deg, #6366f1, #818cf8)'}}>
                                        <Folder size={18} />
                                    </div>
                                    <span>Website Redesign</span>
                                </div>
                                <div className="table-cell">
                                    <span className="status-badge status-inprogress">In Progress</span>
                                </div>
                                <div className="table-cell">
                                    <div className="progress-bar-segments">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={i < 8 ? "bar-segment inprogress" : "bar-segment"}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="table-cell">
                                    <span style={{color: '#fff'}}>14</span><span style={{color: '#8e8e93'}}>/20</span>
                                </div>
                                <div className="table-cell">12 Mar 2024</div>
                                <div className="table-cell owner-cell">
                                    <img className="owner-avatar" src="https://i.pravatar.cc/40?img=1" alt="Sarah Chen" />
                                    <span>Sarah Chen</span>
                                </div>
                            </div>
                            {/* Example Row 2 */}
                            <div className="table-row">
                                <div className="table-cell project-name">
                                    <div className="project-icon" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>
                                        <Folder size={18} />
                                    </div>
                                    <span>Mobile App Development</span>
                                </div>
                                <div className="table-cell">
                                    <span className="status-badge status-completed">Completed</span>
                                </div>
                                <div className="table-cell">
                                    <div className="progress-bar-segments">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={"bar-segment completed"}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="table-cell">
                                    <span style={{color: '#fff'}}>20</span><span style={{color: '#8e8e93'}}>/20</span>
                                </div>
                                <div className="table-cell">18 Mar 2024</div>
                                <div className="table-cell owner-cell">
                                    <img className="owner-avatar" src="https://i.pravatar.cc/40?img=2" alt="Mike Johnson" />
                                    <span>Mike Johnson</span>
                                </div>
                            </div>
                            {/* Example Row 3 */}
                            <div className="table-row">
                                <div className="table-cell project-name">
                                    <div className="project-icon" style={{background: 'linear-gradient(135deg, #eab308, #ca8a04)'}}>
                                        <Folder size={18} />
                                    </div>
                                    <span>Data Migration</span>
                                </div>
                                <div className="table-cell">
                                    <span className="status-badge status-onhold">On Hold</span>
                                </div>
                                <div className="table-cell">
                                    <div className="progress-bar-segments">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={i < 4 ? "bar-segment onhold" : "bar-segment"}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="table-cell">
                                    <span style={{color: '#fff'}}>4</span><span style={{color: '#8e8e93'}}>/20</span>
                                </div>
                                <div className="table-cell">22 Mar 2024</div>
                                <div className="table-cell owner-cell">
                                    <img className="owner-avatar" src="https://i.pravatar.cc/40?img=3" alt="Emily Davis" />
                                    <span>Emily Davis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
}
