import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import UserTable from '../components/UserTable';
import PlatformHealth from '../components/PlatformHealth';

export default function Home({ isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  return (
    <div className={`app-main-wrapper min-h-screen ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-[260px] pt-16">
          <Topbar
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            onJoin={() => navigate('/home')}
          />
          <div className="page-content px-8 py-8">
            <div className="page-header mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>Admin Overview</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Manage your enterprise learning environment.</p>
              </div>
              <button className={`rounded-md px-4 py-2 font-semibold transition ${isDarkMode ? 'bg-slate-800 border border-slate-700 text-slate-100 hover:bg-slate-700' : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                Export Report
              </button>
            </div>

            <div className="cards-grid flex flex-wrap gap-5 mb-8">
              <StatCard title="Total Users" value="12,450" percentage="+12%" isPositive={true} subtitle="this month" color="#2563eb" />
              <StatCard title="Monthly Revenue" value="$84.2k" percentage="+8%" isPositive={true} subtitle="this month" color="#10b981" />
              <StatCard title="Active Sessions" value="342" percentage="Stable" isPositive={true} subtitle="" color="#f59e0b" />
              <StatCard title="Pending Approvals" value="18" percentage="Action Required" isPositive={false} subtitle="" color="#ef4444" />
            </div>

            <div className="bottom-section flex flex-col gap-5 lg:flex-row">
              <UserTable />
              <PlatformHealth />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
