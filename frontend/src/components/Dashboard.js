import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <div className="nav-brand">
            <h2>AppName</h2>
          </div>
          <div className="nav-user">
            <span className="user-greeting">Hello, {user.name || user.email}!</span>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="welcome-section">
            <h1>Welcome to Your Dashboard</h1>
            <p>You have successfully logged in to your account.</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-icon">👤</div>
              <h3>Profile</h3>
              <p>Manage your account settings and personal information.</p>
              <button className="card-action">View Profile</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">📊</div>
              <h3>Analytics</h3>
              <p>View your activity and usage statistics.</p>
              <button className="card-action">View Analytics</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">⚙️</div>
              <h3>Settings</h3>
              <p>Configure your preferences and account settings.</p>
              <button className="card-action">Open Settings</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">📝</div>
              <h3>Projects</h3>
              <p>Create and manage your projects and tasks.</p>
              <button className="card-action">View Projects</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">💬</div>
              <h3>Messages</h3>
              <p>Check your messages and notifications.</p>
              <button className="card-action">View Messages</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">📈</div>
              <h3>Reports</h3>
              <p>Generate and download your activity reports.</p>
              <button className="card-action">Generate Report</button>
            </div>
          </div>

          <div className="user-info-section">
            <div className="user-info-card">
              <h3>Account Information</h3>
              <div className="user-details">
                <div className="detail-row">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{user.name || 'Not provided'}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value status-active">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;