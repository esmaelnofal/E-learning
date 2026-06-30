import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCard from './components/StatCard';
import UserTable from './components/UserTable';
import PlatformHealth from './components/PlatformHealth';
import LandingPage from './pages/LandingPage'; // استدعاء الصفحة الجديدة
import './App.css';

function App() {
  return (
    <div className="app-main-wrapper" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* 1. الجزء الأول: لوحة التحكم (Dashboard) اللي عملناها في الأول */}
      <div className="dashboard-section" style={{ display: 'flex', minHeight: '100vh' }}>
        {/* الشريط الجانبي الثابت */}
        <Sidebar />
        
        {/* المحتوى الرئيسي للوحة التحكم */}
        <div className="main-layout" style={{ flexGrow: 1, marginLeft: '260px', paddingTop: '70px' }}>
          <Topbar />
          
          <div className="page-content" style={{ padding: '32px' }}>
            {/* رأس الصفحة */}
            <div className="page-header" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ color: '#1e293b', margin: '0 0 4px 0', fontSize: '24px', fontWeight: '700' }}>Admin Overview</h2>
                <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>Manage your enterprise learning environment.</p>
              </div>
              <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '6px', color: '#1e293b', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>
                Export Report
              </button>
            </div>
            
            {/* قسم كروت الإحصائيات الأربعة */}
            <div className="cards-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <StatCard title="Total Users" value="12,450" percentage="+12%" isPositive={true} subtitle="this month" color="#2563eb" />
              <StatCard title="Monthly Revenue" value="$84.2k" percentage="+8%" isPositive={true} subtitle="this month" color="#10b981" />
              <StatCard title="Active Sessions" value="342" percentage="Stable" isPositive={true} subtitle="" color="#f59e0b" />
              <StatCard title="Pending Approvals" value="18" percentage="Action Required" isPositive={false} subtitle="" color="#ef4444" />
            </div>
            
            {/* قسم الجدول وكارت الـ Health جنب بعض */}
            <div className="bottom-section" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <UserTable />
              <PlatformHealth />
            </div>
          </div>
        </div>
      </div>

      {/* 2. الجزء الثاني: الجزء الجديد (Landing Page Section) المحفوظ في فولدر pages */}
      {/* عملنا له مارجن شمال عشان ميتداراش ورا السايدبار الثابت ويكون متناسق */}
      <div className="landing-section-preview" style={{ marginLeft: '260px', borderTop: '4px dashed #2563eb', marginTop: '40px' }}>
        <div style={{ padding: '20px', backgroundColor: '#eff6ff', color: '#1e40af', fontWeight: 'bold', textAlign: 'center' }}>
          👇 الجزء الجديد المطلوب (Landing Page Components) 👇
        </div>
        <LandingPage />
      </div>

    </div>
  );
}

export default App;