import React from 'react'
import { useState } from 'react';
import './nav.css';
export default function Nav() {
    const [activeItem, setActiveItem] =useState('Explore');
    const navItems = [
        "Explore",
        "Pricing",
        "About",
    ]
    
  return (
    <div className="nav">
         <div className="logo">
             <i className ="fa-solid fa-graduation-cap"></i>
              <h2>EduSphere</h2>
         </div>
         <div className="navItems">
            <ul className="navTabs">
             {navItems.map((item) => (
                    <li key={item} className={`tab-item  ${activeItem === item ? 'active' : ''}`} onClick={() => setActiveItem(item)}>
                        {item}
                    </li>
                 ))}
                </ul>
         </div>
         <div className="navButtons">
          <button className="login">Login</button>
          <button className="signup">Get Started</button>
         </div>
    </div>
  )
}
