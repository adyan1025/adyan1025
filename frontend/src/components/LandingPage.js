import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>AppName</h2>
          </div>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
          </div>
        </nav>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to the Future of
              <span className="gradient-text"> Digital Solutions</span>
            </h1>
            <p className="hero-description">
              Experience seamless authentication and modern web applications built with React and Flask. 
              Join thousands of users who trust our platform for their digital needs.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
              <Link to="/login" className="btn btn-secondary">Sign In</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="card-header"></div>
              <div className="card-body">
                <div className="card-line"></div>
                <div className="card-line short"></div>
                <div className="card-line"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose Our Platform?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Authentication</h3>
                <p>Industry-standard security with encrypted passwords and session management.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Optimized performance with React frontend and Flask backend integration.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Modern Design</h3>
                <p>Clean, responsive interface that works perfectly on all devices.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2024 AppName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;