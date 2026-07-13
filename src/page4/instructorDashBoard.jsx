import "./InstructorDashboard.css";
import {
  Menu,
  Search,
  Bell,
  Home,
  GraduationCap,
  BookOpen,
  Calendar,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { useState } from "react";

export default function InstructorDashboard() {
  const [open, setOpen] = useState(false);
const engagementData = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 38 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 60 },
  { day: "Sun", value: 78 },
];
  return (
   <div className={`dashboard ${open ? "open" : ""}`}>

      {open && (
  <div
    className="overlay"
    onClick={() => setOpen(false)}
  />
)}

      {/* Sidebar */}

<aside className="sidebar">
            <div className="logo">

          <div className="logo-circle">
            E
          </div>

          <div>
            <h2>EduSphere</h2>
            <span>Learning Portal</span>
          </div>

          <button
            className="close"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>

        </div>

        <nav>

          <a className="active">
            <Home size={18} />
            Home
          </a>

          <a>
            <GraduationCap size={18} />
            My Courses
          </a>

          <a>
            <BookOpen size={18} />
            Learning Path
          </a>

          <a>
            <Calendar size={18} />
            Calendar
          </a>

          <a>
            <Users size={18} />
            Community
          </a>

          <a>
            <Settings size={18} />
            Settings
          </a>

        </nav>

        <div className="bottom">

          <button className="upgrade">
            Upgrade To Pro
          </button>

          <a>
            <HelpCircle size={18} />
            Help Center
          </a>

          <a>
            <LogOut size={18} />
            Logout
          </a>

        </div>

      </aside>

      {/* Main */}

<div className="main">
            <header className={open ? "header-open" : ""}>

         {!open && (
    <button
        className="menu-btn"
        onClick={() => setOpen(true)}
    >
        <Menu />
    </button>
)}
          <div className="search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search students, courses..."
            />

          </div>

          <div className="header-right">

            <Bell />

            <button className="login">
              Login
            </button>

            <button className="start">
              Get Started
            </button>

            <img
              src="https://i.pravatar.cc/50?img=12"
              alt=""
            />

          </div>

        </header>

        <div className="content">

          <div className="title">

            <div>

              <h1>Instructor Dashboard</h1>

              <p>
                Welcome back, Dr. Smith.
                Here's what's happening with your courses today.
              </p>

            </div>

            <div className="buttons">

              <button className="gray">
                Grade Assignments
              </button>

              <button className="blue">
                Create Course
              </button>

            </div>

          </div>
<div className="stats">

  <div className="card">

    <div className="card-top">

      <div className="icon blue-bg">👥</div>

      <span className="up">+12%</span>

    </div>

    <p>Total Students</p>

    <h2>2,451</h2>

  </div>

  <div className="card">

    <div className="card-top">

      <div className="icon orange-bg">⭐</div>

      <span className="up">+0.2</span>

    </div>

    <p>Average Rating</p>

    <h2>4.8 <small>/5.0</small></h2>

  </div>

  <div className="card">

    <div className="card-top">

      <div className="icon green-bg">💵</div>

      <span className="up">+8%</span>

    </div>

    <p>Total Revenue</p>

    <h2>$12,840</h2>

  </div>

  <div className="card">

    <div className="card-top">

      <div className="icon blue-bg">✔</div>

      <span className="down">-2%</span>

    </div>

    <p>Completion Rate</p>

    <h2>68%</h2>

  </div>

</div>
<div className="section">

  {/* Active Courses */}

  <div className="courses">

    <div className="section-title">

      <h2>Active Courses</h2>

      <a href="/">View All</a>

    </div>

    <div className="course-grid">

      <div className="course-card">

        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
          alt=""
        />

        <span className="live">LIVE</span>

        <div className="course-body">

          <h3>Advanced React Patterns</h3>

          <p>
            Master modern React architecture,
            hooks and performance optimization.
          </p>

          <div className="course-info">

            <span>👥 842</span>

            <span>⭐ 4.9</span>

          </div>

          <div className="progress-text">

            <span>Avg. Progress</span>

            <span>45%</span>

          </div>

          <div className="progress">

            <div className="progress-fill"></div>

          </div>

        </div>

      </div>

      <div className="course-card">

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
          alt=""
        />

        <span className="review">REVIEW</span>

        <div className="course-body">

          <h3>Data Science</h3>

          <p>
            Introduction to Python, Pandas and
            Machine Learning.
          </p>

          <div className="course-info">

            <span>👥 --</span>

            <span>Pending</span>

          </div>

          <button className="edit-btn">
            Edit Draft
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* Coming Up */}

  <div className="coming">

    <h2>Coming Up</h2>

    <div className="event">

      <div className="date">

        <small>TODAY</small>

        <h3>14</h3>

      </div>

      <div>

        <h4>Live Q&A: React Hooks</h4>

        <p>2:00 PM - 3:00 PM</p>

      </div>

    </div>

    <div className="event">

      <div className="date">

        <small>TOM</small>

        <h3>15</h3>

      </div>

      <div>

        <h4>Module 3 Assignment</h4>

        <p>54 Submissions Expected</p>

      </div>

    </div>

    <a className="calendar-link" href="/">
      View Full Calendar
    </a>

  </div>

</div>
<div className="bottom-section">

    <div className="students">

        <div className="section-title">

            <h2>Student Performance Alerts</h2>

        </div>

        <table>

            <thead>

                <tr>

                    <th>Student</th>
                    <th>Course</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td>Jane Doe</td>

                    <td>React</td>

                    <td>

                        <div className="table-progress">

                            <div className="red"></div>

                        </div>

                        15%

                    </td>

                    <td>

                        <span className="danger">
                            Falling Behind
                        </span>

                    </td>

                    <td>

                        <button>Message</button>

                    </td>

                </tr>

                <tr>

                    <td>Mark Smith</td>

                    <td>UI Design</td>

                    <td>

                        <div className="table-progress">

                            <div className="green"></div>

                        </div>

                        95%

                    </td>

                    <td>

                        <span className="success">

                            Excelling

                        </span>

                    </td>

                    <td>

                        <button>Review</button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

    <div className="chart-card">

        <div className="section-title">

            <h2>Weekly Engagement</h2>

            <span>Last 7 days</span>

        </div>

        <div style={{ width: "100%", height: 250 }}>

            <ResponsiveContainer>

                <BarChart data={engagementData}>

                    <Bar
                        dataKey="value"
                        radius={[6, 6, 0, 0]}
                    >

                        {engagementData.map((item, index) => (

                            <Cell
                                key={index}
                                fill={
                                    index === 5
                                        ? "#2563eb"
                                        : "#93c5fd"
                                }
                            />

                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    </div>

</div>
        </div>

      </div>

    </div>
  );
}