import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'AI Tutor', to: '/home' },
  { label: 'Exams', to: '/exams' },
  { label: 'Success Path', to: '/success' },
  { label: 'Courses', to: '/courses' },
  { label: 'Instructor', to: '/instructor' },
];

export default function Nav({ onLogin, onGetStarted }) {
  return (
    <div className="nav">
      <div className="logo">
        <i className="fa-solid fa-graduation-cap"></i>
        <h2>EduSphere</h2>
      </div>
      <div className="navItems">
        <ul className="navTabs">
          {navItems.map(({ label, to }) => (
            <li key={to} className="tab-item">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navButtons">
        <button onClick={onLogin} className="login">
          Login
        </button>
        <button onClick={onGetStarted} className="signup">
          Get Started
        </button>
      </div>
    </div>
  );
}
