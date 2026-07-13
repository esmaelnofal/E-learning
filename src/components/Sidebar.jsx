import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  GraduationCap,
  Settings,
  HelpCircle,
  Lock,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/home", icon: BookOpen, label: "Courses" },
  { to: "/home", icon: Bot, label: "AI Tutor" },
  { to: "/exams", icon: GraduationCap, label: "Exams" },
];

const Sidebar = () => (
  <div className="w-64 bg-[#1e293b] text-slate-300 flex flex-col h-screen fixed left-0 top-0">
    <div className="p-6">
      <h1 className="text-xl font-bold text-white tracking-tight">EduSphere</h1>
      <p className="text-xs text-slate-400 mt-1">Enterprise Learning</p>
    </div>

    <nav className="flex-1 px-4 space-y-2 mt-4">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to + label}
          to={to}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-200"
            }`
          }
        >
          <Icon size={20} />
          <span className="text-sm font-medium">{label}</span>
        </NavLink>
      ))}
      <div className="border-t border-slate-700 pt-4" />
      <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-slate-100 text-slate-900 transition-colors hover:bg-white">
        <Lock size={16} />
        <span className="text-sm font-medium">Admin</span>
      </button>
    </nav>

    <div className="p-4 mt-auto">
      <button className="w-full bg-slate-100 text-slate-900 py-2.5 rounded-lg text-sm font-semibold hover:bg-white transition-colors mb-4">
        Upgrade Plan
      </button>
      <div className="space-y-1">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors">
          <HelpCircle size={18} />
          <span className="text-sm">Support</span>
        </button>
      </div>
    </div>
  </div>
);

export default Sidebar;
