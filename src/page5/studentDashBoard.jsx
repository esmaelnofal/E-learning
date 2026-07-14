// import "./StudentDashboard.css";
// import { useState } from "react";
// import {
//   Menu,
//   Search,
//   Bell,
//   Home,
//   GraduationCap,
//   BookOpen,
//   Calendar,
//   Users,
//   Settings,
//   HelpCircle,
//   LogOut,
//   X,
//   Play,
//   Sparkles,
//   Flame,
//   ChevronRight,
//   MessageCircle,
//   Trophy,
//   CheckCircle2,
//   Lock,
//   Clock,
// } from "lucide-react";

// export default function StudentDashboard() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={`dashboard ${open ? "open" : ""}`}>

//       {open && (
//         <div
//           className="overlay"
//           onClick={() => setOpen(false)}
//         />
//       )}
//       {/* Sidebar */}

//       <aside className="sidebar">

//   <div className="logo">

//     <div className="logo-circle">
//       <GraduationCap size={18}/>
//     </div>

//     <div>
//       <h2>EduSphere</h2>
//       <span>Learning Portal</span>
//     </div>

//     <button
//       className="close"
//       onClick={() => setOpen(false)}
//     >
//       <X size={20}/>
//     </button>

//   </div>

//   <nav>

//     <a className="active">
//       <Home size={18}/>
//       Home
//     </a>

//     <a>
//       <GraduationCap size={18}/>
//       My Courses
//     </a>

//     <a>
//       <BookOpen size={18}/>
//       Learning Path
//     </a>

//     <a>
//       <Calendar size={18}/>
//       Calendar
//     </a>

//     <a>
//       <Users size={18}/>
//       Community
//     </a>

//     <a>
//       <Settings size={18}/>
//       Settings
//     </a>

//   </nav>

//   <div className="bottom">

//     <button className="upgrade">
//       Upgrade To Pro
//     </button>

//     <a>
//       <HelpCircle size={18}/>
//       Help Center
//     </a>

//     <a>
//       <LogOut size={18}/>
//       Logout
//     </a>

//   </div>

// </aside>
//       {/* Main */}

//       <div className="main">

// <header className={open ? "header-open" : ""}>

// {!open && (

// <button
// className="menu-btn"
// onClick={() => setOpen(true)}
// >

// <Menu/>

// </button>

// )}

//           <div className="search">

//             <Search size={18} />

//             <input
//               type="text"
//               placeholder="Search courses, mentors or topics..."
//             />

//           </div>

//           <div className="header-right">

//             <Bell />

//             <img
//               src="https://i.pravatar.cc/50?img=33"
//               alt="Student"
//             />

//           </div>

//         </header>

//         <div className="content">

//          <div className="content">

//   {/* ================= Welcome ================= */}

//   <div className="student-layout">

//     {/* Left Side */}

//     <div className="left-content">

//       <div className="welcome">

//         <div>

//           <h1>Welcome back, Alex!</h1>

//           <p>
//             You've completed 75% of your weekly goal.
//             Keep up the great work!
//           </p>

//         </div>

//       </div>

//     </div>

//     {/* Right Side */}

//     <div className="right-content">

//       <div className="streak-card">

//         <div className="streak-icon">

//           <Flame size={24} />

//         </div>

//         <div>

//           <h3>12 Day Streak</h3>

//           <span>
//             2 days left to beat your record
//           </span>

//         </div>

//       </div>

//     </div>

//   </div>

//   {/* ================= Main Grid ================= */}

//   <div className="student-layout">

//     {/* ================= LEFT ================= */}

//     <div className="left-content">

//       <div className="focus-card">

//         <span className="focus-badge">
//           Current Focus
//         </span>

//         <div className="focus-content">

//           <img
//             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600"
//             alt=""
//           />

//           <div className="focus-info">

//             <h2>
//               Mastering Artificial Intelligence
//             </h2>

//             <p>
//               Module 4: Neural Networks and Deep Learning
//             </p>

//             <div className="progress-text">

//               <span>Progress</span>

//               <span>68%</span>

//             </div>

//             <div className="progress">

//               <div
//                 className="progress-fill student-progress"
//               ></div>

//             </div>

//           </div>

//           <button className="resume-btn">

//             <Play size={18} />

//             Resume Lesson

//           </button>

//         </div>

//       </div>

//       {/* الجزء اللي بعده هيبدأ من هنا */}
//             {/* ================= Recommended ================= */}

//       <div className="recommend-section">

//         <div className="section-title">

//           <h2>

//             <Sparkles size={18} />

//             Recommended For You

//           </h2>

//         </div>

//         <div className="recommend-card">

//           <img
//             src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500"
//             alt=""
//           />

//           <div className="recommend-info">

//             <span className="recommend-tag">
//               AI Match • Based on your interests
//             </span>

//             <h3>
//               Advanced Machine Learning
//             </h3>

//             <p>
//               Take your AI knowledge to the next level
//               with predictive modeling.
//             </p>

//           </div>

//           <ChevronRight size={20} />

//         </div>

//       </div>

//     </div>

//     {/* ================= RIGHT ================= */}

//     <div className="right-content">

//       {/* Upcoming Classes */}

//       <div className="coming">

//         <h2>Upcoming Classes</h2>

//         <div className="event">

//           <div className="date">

//             <small>OCT</small>

//             <h3>14</h3>

//           </div>

//           <div className="event-info">

//             <h4>Live Q&amp;A: Neural Nets</h4>

//             <p>

//               <Clock size={14} />

//               2:00 PM - 3:30 PM

//             </p>

//           </div>

//         </div>

//         <div className="event">

//           <div className="date">

//             <small>OCT</small>

//             <h3>16</h3>

//           </div>

//           <div className="event-info">

//             <h4>Study Group: Python Basics</h4>

//             <p>

//               <Clock size={14} />

//               4:00 PM - 5:00 PM

//             </p>

//           </div>

//         </div>

//       </div>

//       {/* الجزء الثالث هيبدأ من هنا */}

//       {/* ================= Recent Badges ================= */}

//       <div className="badges-card">

//         <div className="section-title">

//           <h2>Recent Badges</h2>

//           <a href="/">View All</a>

//         </div>

//         {/* <div className="badges">

//           <div className="badge">

//             <div className="badge-icon orange">

//               <Trophy size={22} />

//             </div>

//             <span>Top 10%</span>

//           </div> */}

//           {/* <div className="badge">

//             <div className="badge-icon green">

//               <CheckCircle2 size={22} />

//             </div>

//             {/* <span>Fast Learner</span> */}

      

//           {/* <div className="badge">

//             <div className="badge-icon gray">

//               <Lock size={20} />

//             </div>

//             <span>Next Goal</span>

//           </div> */}
// {
        
//     </div>

//   </div>

// </div> }

// {/* Floating Chat */}

// <button className="chat-btn">

//   <MessageCircle size={22} />

// </button>
//         </div>

//       </div>

//       {/* Floating Chat Button */}

//       <button className="chat-btn">

//         <MessageCircle size={22} />

//       </button>

//     </div>

//   );


// }
