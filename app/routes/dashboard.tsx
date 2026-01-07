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
    Users,
    FileDown,
    Plus,
    FileText,
    FileCheck,
    FileX,
    File,
    SlidersHorizontal,
    ChevronDown
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
                {/* 1. Dashboard Header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </div>
                    <div className="header-right">
                        <span>Last updated Jan 7, 2026</span>
                        <div className="profile-group">
                            <div className="profile-placeholder"></div>
                            <div className="profile-placeholder"></div>
                            <div className="profile-placeholder"></div>
                        </div>
                        <ThemeToggle />
                    </div>
                </header>

                {/* 2. Welcome Section */}
                <div className="dashboard-welcome">
                    <div className="welcome-text">
                        <h1>Welcome back, Frederick! 👋</h1>
                        <p><strong>4</strong> Tasks Due Today, <strong>2</strong> Overdue Tasks, <strong>8</strong> Upcoming Deadlines (This Week)</p>
                    </div>
                    <div className="welcome-actions">
                        <button className="export-btn">
                            <FileDown size={20} />
                            Export
                        </button>
                        <button className="new-project-btn">
                            <Plus size={20} />
                            New Project
                        </button>
                    </div>
                </div>

                {/* 3. Stats Cards */}
                <div className="stats-grid">
                    <Card className="stat-card">
                        <div className="stat-info">
                            <div className="stat-title">Total Projects</div>
                            <div className="stat-number">15</div>
                            <div className="stat-change"><strong>+5</strong> vs last month</div>
                        </div>
                        <div className="stat-icon">
                            <Folder size={50} />
                        </div>
                    </Card>
                    <Card className="stat-card">
                        <div className="stat-info">
                            <div className="stat-title">Total Tasks</div>
                            <div className="stat-number">10</div>
                            <div className="stat-change"><strong>+2</strong> vs last month</div>
                        </div>
                        <div className="stat-icon">
                            <FileText size={50} />
                        </div>
                    </Card>
                    <Card className="stat-card">
                        <div className="stat-info">
                            <div className="stat-title">In Reviews</div>
                            <div className="stat-number">23</div>
                            <div className="stat-change"><strong>+12</strong> vs last month</div>
                        </div>
                        <div className="stat-icon">
                            <FileCheck size={50} />
                        </div>
                    </Card>
                    <Card className="stat-card">
                        <div className="stat-info">
                            <div className="stat-title">Completed Tasks</div>
                            <div className="stat-number">50</div>
                            <div className="stat-change"><strong>+15</strong> vs last month</div>
                        </div>
                        <div className="stat-icon">
                            <CheckCircle2 size={50} />
                        </div>
                    </Card>
                </div>

                {/* 4. Tasks & Performance Grid */}
                <div className="main-grid">
                    {/* Today's Tasks Card */}
                    <Card className="tasks-card">
                        <div className="card-header">
                            <h3>Today's Tasks</h3>
                            <div className="header-actions">
                                <div className="search-bar">
                                    <Search size={20} />
                                    <input type="text" placeholder="Search here…" />
                                </div>
                                <button className="filter-btn">
                                    <SlidersHorizontal size={20} />
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className="custom-table">
                            <div className="table-header">
                                <div>Task Name</div>
                                <div>Project</div>
                                <div>Due</div>
                            </div>
                            <div className="table-row">
                                <div className="task-cell">
                                    <File size={20} />
                                    <span>Prepare Q2 report</span>
                                </div>
                                <div className="project-cell">
                                    <div className="folder-icon">
                                        <Folder size={14} />
                                    </div>
                                    <span>Fintech Project</span>
                                </div>
                                <div className="date-cell">12 Mar 2025</div>
                            </div>
                            <div className="table-row">
                                <div className="task-cell">
                                    <File size={20} />
                                    <span>Design mockups</span>
                                </div>
                                <div className="project-cell">
                                    <div className="folder-icon">
                                        <Folder size={14} />
                                    </div>
                                    <span>E-commerce Platform</span>
                                </div>
                                <div className="date-cell">15 Mar 2025</div>
                            </div>
                            <div className="table-row">
                                <div className="task-cell">
                                    <File size={20} />
                                    <span>Code review</span>
                                </div>
                                <div className="project-cell">
                                    <div className="folder-icon">
                                        <Folder size={14} />
                                    </div>
                                    <span>Mobile App Redesign</span>
                                </div>
                                <div className="date-cell">18 Mar 2025</div>
                            </div>
                            <div className="table-row">
                                <div className="task-cell">
                                    <File size={20} />
                                    <span>Client meeting</span>
                                </div>
                                <div className="project-cell">
                                    <div className="folder-icon">
                                        <Folder size={14} />
                                    </div>
                                    <span>Marketing Campaign</span>
                                </div>
                                <div className="date-cell">20 Mar 2025</div>
                            </div>
                            <div className="table-row">
                                <div className="task-cell">
                                    <File size={20} />
                                    <span>Update documentation</span>
                                </div>
                                <div className="project-cell">
                                    <div className="folder-icon">
                                        <Folder size={14} />
                                    </div>
                                    <span>Backend Migration</span>
                                </div>
                                <div className="date-cell">22 Mar 2025</div>
                            </div>
                        </div>
                    </Card>

                    {/* Performance Card */}
                    <Card className="performance-card">
                        <div className="performance-header">
                            <h3>Performance</h3>
                            <select>
                                <option>This Week</option>
                                <option>This Month</option>
                            </select>
                        </div>
                        <div className="performance-stats">
                            <div className="performance-number">86%</div>
                            <div className="performance-change">
                                <span className="change-value">+15%</span>
                                <span className="change-period"> vs last week</span>
                            </div>
                        </div>
                        <div className="chart-placeholder">
                            Bar Chart Placeholder
                        </div>
                    </Card>
                </div>

                {/* 5. Projects List */}
                <Card className="projects-section">
                    <div className="card-header">
                        <h3>List Project</h3>
                        <div className="header-actions">
                            <div className="search-bar">
                                <Search size={20} />
                                <input type="text" placeholder="Search here…" />
                            </div>
                            <button className="filter-btn">
                                <SlidersHorizontal size={20} />
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="custom-table">
                        <div className="table-header">
                            <div>Project Name</div>
                            <div>Status</div>
                            <div>Progress</div>
                            <div>Total Tasks</div>
                            <div>Due Date</div>
                            <div>Owner</div>
                        </div>
                        <div className="table-row">
                            <div className="project-name-cell">
                                <div className="folder-icon">
                                    <Folder size={14} />
                                </div>
                                <span>Fintech Project</span>
                            </div>
                            <div className="status-cell">
                                <span className="status-badge in-progress">In Progress</span>
                            </div>
                            <div className="progress-cell">
                                <div className="progress-bar-container">
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                </div>
                            </div>
                            <div className="tasks-cell">
                                <span className="completed-count">14</span>
                                <span className="total-count"> / 20</span>
                            </div>
                            <div className="date-cell">12 Mar 2024</div>
                            <div className="owner-cell">
                                <div className="owner-avatar"></div>
                                <span>Sarah Chen</span>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="project-name-cell">
                                <div className="folder-icon">
                                    <Folder size={14} />
                                </div>
                                <span>E-commerce Platform</span>
                            </div>
                            <div className="status-cell">
                                <span className="status-badge completed">Completed</span>
                            </div>
                            <div className="progress-cell">
                                <div className="progress-bar-container">
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                </div>
                            </div>
                            <div className="tasks-cell">
                                <span className="completed-count">18</span>
                                <span className="total-count"> / 22</span>
                            </div>
                            <div className="date-cell">15 Mar 2024</div>
                            <div className="owner-cell">
                                <div className="owner-avatar"></div>
                                <span>Mike Johnson</span>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="project-name-cell">
                                <div className="folder-icon">
                                    <Folder size={14} />
                                </div>
                                <span>Mobile App Redesign</span>
                            </div>
                            <div className="status-cell">
                                <span className="status-badge on-hold">On Hold</span>
                            </div>
                            <div className="progress-cell">
                                <div className="progress-bar-container">
                                    <div className="progress-segment filled on-hold"></div>
                                    <div className="progress-segment filled on-hold"></div>
                                    <div className="progress-segment filled on-hold"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                </div>
                            </div>
                            <div className="tasks-cell">
                                <span className="completed-count">6</span>
                                <span className="total-count"> / 15</span>
                            </div>
                            <div className="date-cell">20 Mar 2024</div>
                            <div className="owner-cell">
                                <div className="owner-avatar"></div>
                                <span>Emily Davis</span>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="project-name-cell">
                                <div className="folder-icon">
                                    <Folder size={14} />
                                </div>
                                <span>Marketing Campaign</span>
                            </div>
                            <div className="status-cell">
                                <span className="status-badge in-progress">In Progress</span>
                            </div>
                            <div className="progress-cell">
                                <div className="progress-bar-container">
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment filled in-progress"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                    <div className="progress-segment"></div>
                                </div>
                            </div>
                            <div className="tasks-cell">
                                <span className="completed-count">10</span>
                                <span className="total-count"> / 18</span>
                            </div>
                            <div className="date-cell">25 Mar 2024</div>
                            <div className="owner-cell">
                                <div className="owner-avatar"></div>
                                <span>Alex Martinez</span>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="project-name-cell">
                                <div className="folder-icon">
                                    <Folder size={14} />
                                </div>
                                <span>Backend Migration</span>
                            </div>
                            <div className="status-cell">
                                <span className="status-badge completed">Completed</span>
                            </div>
                            <div className="progress-cell">
                                <div className="progress-bar-container">
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                    <div className="progress-segment filled completed"></div>
                                </div>
                            </div>
                            <div className="tasks-cell">
                                <span className="completed-count">25</span>
                                <span className="total-count"> / 25</span>
                            </div>
                            <div className="date-cell">08 Mar 2024</div>
                            <div className="owner-cell">
                                <div className="owner-avatar"></div>
                                <span>Sarah Chen</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
}
