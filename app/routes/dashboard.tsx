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
    File,
    Plus,
    FileText,
    FileCheck,
    FileX
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

                {/* 2.4 Performance Chart Section */}
                <div className="charts-grid">
                    <Card className="chart-card">
                        <div className="card-header">
                            <h3>Performance Overview</h3>
                            <div className="chart-tabs">
                                <button className="tab active">Week</button>
                                <button className="tab">Month</button>
                                <button className="tab">Year</button>
                            </div>
                        </div>
                        <div className="bar-chart">
                            <div className="chart-bar" style={{height: '60%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Mon</span>
                            </div>
                            <div className="chart-bar" style={{height: '75%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Tue</span>
                            </div>
                            <div className="chart-bar" style={{height: '45%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Wed</span>
                            </div>
                            <div className="chart-bar" style={{height: '85%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Thu</span>
                            </div>
                            <div className="chart-bar" style={{height: '70%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Fri</span>
                            </div>
                            <div className="chart-bar" style={{height: '55%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Sat</span>
                            </div>
                            <div className="chart-bar" style={{height: '40%'}}>
                                <div className="bar-fill"></div>
                                <span className="bar-label">Sun</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="side-card">
                        <h3>Team Activity</h3>
                        <div className="activity-list">
                            <div className="activity-item">
                                <img src="https://i.pravatar.cc/40?img=1" alt="Sarah" />
                                <div className="activity-info">
                                    <span className="activity-name">Sarah Chen</span>
                                    <span className="activity-action">Completed 3 tasks</span>
                                </div>
                                <span className="activity-time">2h ago</span>
                            </div>
                            <div className="activity-item">
                                <img src="https://i.pravatar.cc/40?img=2" alt="Mike" />
                                <div className="activity-info">
                                    <span className="activity-name">Mike Johnson</span>
                                    <span className="activity-action">Updated project status</span>
                                </div>
                                <span className="activity-time">4h ago</span>
                            </div>
                            <div className="activity-item">
                                <img src="https://i.pravatar.cc/40?img=3" alt="Emily" />
                                <div className="activity-info">
                                    <span className="activity-name">Emily Davis</span>
                                    <span className="activity-action">Created new milestone</span>
                                </div>
                                <span className="activity-time">5h ago</span>
                            </div>
                            <div className="activity-item">
                                <img src="https://i.pravatar.cc/40?img=4" alt="Alex" />
                                <div className="activity-info">
                                    <span className="activity-name">Alex Martinez</span>
                                    <span className="activity-action">Uploaded 5 files</span>
                                </div>
                                <span className="activity-time">6h ago</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* 2.5 Recent Projects Table */}
                <Card className="bottom-section">
                    <div className="table-header">
                        <h3>Recent Projects</h3>
                        <button className="view-all-btn">View All</button>
                    </div>
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Team Lead</th>
                                <th>Progress</th>
                                <th>Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="project-name">
                                        <div className="project-icon" style={{background: 'linear-gradient(135deg, #6366f1, #818cf8)'}}>W</div>
                                        <span>Website Redesign</span>
                                    </div>
                                </td>
                                <td>Sarah Chen</td>
                                <td>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: '85%'}}></div>
                                    </div>
                                    <span className="progress-text">85%</span>
                                </td>
                                <td><span className="status-badge status-active">Active</span></td>
                                <td>Jan 15, 2026</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-name">
                                        <div className="project-icon" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>M</div>
                                        <span>Mobile App Development</span>
                                    </div>
                                </td>
                                <td>Mike Johnson</td>
                                <td>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: '60%'}}></div>
                                    </div>
                                    <span className="progress-text">60%</span>
                                </td>
                                <td><span className="status-badge status-active">Active</span></td>
                                <td>Feb 01, 2026</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-name">
                                        <div className="project-icon" style={{background: 'linear-gradient(135deg, #eab308, #ca8a04)'}}>D</div>
                                        <span>Data Migration</span>
                                    </div>
                                </td>
                                <td>Emily Davis</td>
                                <td>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: '95%'}}></div>
                                    </div>
                                    <span className="progress-text">95%</span>
                                </td>
                                <td><span className="status-badge status-review">In Review</span></td>
                                <td>Jan 10, 2026</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-name">
                                        <div className="project-icon" style={{background: 'linear-gradient(135deg, #ec4899, #db2777)'}}>B</div>
                                        <span>Brand Guidelines</span>
                                    </div>
                                </td>
                                <td>Alex Martinez</td>
                                <td>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: '40%'}}></div>
                                    </div>
                                    <span className="progress-text">40%</span>
                                </td>
                                <td><span className="status-badge status-active">Active</span></td>
                                <td>Jan 25, 2026</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-name">
                                        <div className="project-icon" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>C</div>
                                        <span>Customer Portal</span>
                                    </div>
                                </td>
                                <td>Sarah Chen</td>
                                <td>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: '100%'}}></div>
                                    </div>
                                    <span className="progress-text">100%</span>
                                </td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                                <td>Jan 05, 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </main>
        </div>
    );
}
