import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-bg"></div>
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
              alt="AL-Bara Profile" 
              className="avatar-img"
            />
            <div className="status-indicator"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">AL-Bara</h1>
          <p className="profile-title">Full Stack Developer</p>
          <p className="profile-location">📍 Riyadh, Saudi Arabia</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.2K</span>
              <span className="stat-label">Following</span>
            </div>
          </div>

          <div className="profile-bio">
            <p>Passionate developer creating innovative solutions with modern technologies. 
               Specialized in React, Node.js, and cloud architecture.</p>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="profile-actions">
            <button className="btn-primary">Follow</button>
            <button className="btn-secondary">Message</button>
            <button className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;