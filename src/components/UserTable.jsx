import React, { useState } from 'react';
import './UserTable.css';

const UserTable = () => {
  const [activeFilter, setActiveFilter] = useState('All Users');

  const usersData = [
    { name: 'Sarah Jenkins', email: 'sarah.j@enterprise.org', role: 'Senior Instructor', status: 'Active' },
    { name: 'Michael Chen', email: 'm.chen@enterprise.org', role: 'Content Manager', status: 'Active' },
    { name: 'Emily Johnson', email: 'emily.j@enterprise.org', role: 'Student', status: 'Inactive' },
  ];

  return (
    <div className="user-table-container">
      {}
      <div className="table-header">
        <h3 className="table-title">User Management</h3>
        <div className="filter-buttons">
          {['All Users', 'Instructors', 'Students'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {}
      <table className="user-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>ROLE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-info">
                  <div className="user-avatar">{user.name[0]}</div>
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="user-role">{user.role}</td>
              <td>
                <span className={`status-badge ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td className="user-action">
                <span className="edit-icon">✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      <div className="table-footer">
        <span className="entries-info">Showing 1 to 3 of 12,450 entries</span>
        <div className="pagination-btns">
          <button className="page-btn">Prev</button>
          <button className="page-btn active">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;