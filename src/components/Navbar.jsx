import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDarkMode, toggleTheme, currentColors } = useTheme();

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'about', label: 'معلوماتي', icon: '👤' },
    { id: 'services', label: 'الخدمات', icon: '⚡' },
    { id: 'contact', label: 'التواصل', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const navbarStyle = {
    position: 'fixed',
    top: isVisible ? '1rem' : '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '95%',
    maxWidth: '1200px',
    backgroundColor: currentColors.navbarBg,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    boxShadow: `0 20px 40px ${currentColors.shadow}, 0 0 0 1px ${currentColors.border}`,
    zIndex: 1000,
    borderRadius: '1.5rem',
    border: `1px solid ${currentColors.border}`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.5rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const logoStyle = {
    fontSize: '1.75rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    letterSpacing: '-0.025em',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const desktopNavStyle = {
    display: 'flex',
    gap: '0.25rem',
    backgroundColor: currentColors.buttonBg,
    padding: '0.5rem',
    borderRadius: '1.25rem',
    border: `1px solid ${currentColors.border}`,
    boxShadow: `0 4px 12px ${currentColors.shadow}`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const getButtonStyle = (isActive) => ({
    padding: '0.7rem 1.4rem',
    borderRadius: '1rem',
    fontSize: '0.95rem',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    backgroundColor: isActive 
      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' 
      : 'transparent',
    background: isActive 
      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' 
      : 'transparent',
    color: isActive ? 'white' : currentColors.textSecondary,
    boxShadow: isActive 
      ? '0 8px 20px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
      : 'none',
    transform: isActive ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap'
  });

  const mobileButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.7rem',
    borderRadius: '1rem',
    color: currentColors.textSecondary,
    border: 'none',
    backgroundColor: currentColors.buttonBg,
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `0 4px 12px ${currentColors.shadow}`,
    position: 'relative',
    overflow: 'hidden'
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    backgroundColor: currentColors.navbarBg,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    borderRadius: '0 0 1.25rem 1.25rem',
    border: `1px solid ${currentColors.border}`,
    boxShadow: `0 15px 35px ${currentColors.shadowHover}`,
    marginTop: '0.25rem',
    overflow: 'hidden',
    animation: isMenuOpen ? 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'slideUp 0.3s ease-in',
    transformOrigin: 'top',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const mobileMenuItemStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '0.875rem 1.25rem',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '0.25rem',
    background: isActive 
      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' 
      : 'transparent',
    color: isActive ? 'white' : currentColors.textSecondary,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    gap: '0.75rem',
    boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none',
    transform: isActive ? 'translateX(-4px)' : 'translateX(0)',
    minHeight: '44px'
  });

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <div onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
            <h1 style={logoStyle}>
              <span style={{ fontSize: '1.4rem', transition: 'font-size 0.4s ease' }}>
                🚀
              </span>
              AL-Bara
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: 'none' }}>
            <div style={desktopNavStyle}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  style={getButtonStyle(activeSection === item.id)}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = currentColors.buttonHover;
                      e.target.style.color = currentColors.accent;
                      e.target.style.transform = 'translateY(-2px) scale(1.02)';
                      e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = currentColors.textSecondary;
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                style={{
                  padding: '0.7rem',
                  borderRadius: '1rem',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: currentColors.buttonBg,
                  color: currentColors.textSecondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '2.8rem',
                  boxShadow: `0 2px 8px ${currentColors.shadow}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentColors.buttonHover;
                  e.target.style.color = currentColors.accent;
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  e.target.style.boxShadow = `0 4px 12px ${currentColors.shadowHover}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentColors.buttonBg;
                  e.target.style.color = currentColors.textSecondary;
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = `0 2px 8px ${currentColors.shadow}`;
                }}
                title={isDarkMode ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="mobile-nav" style={{ display: 'flex', gap: '0.5rem' }}>
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              style={{
                ...mobileButtonStyle,
                backgroundColor: currentColors.buttonBg,
                color: currentColors.textSecondary
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = currentColors.buttonHover;
                e.target.style.color = currentColors.accent;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = currentColors.buttonBg;
                e.target.style.color = currentColors.textSecondary;
                e.target.style.transform = 'scale(1)';
              }}
              title={isDarkMode ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
            >
              <span style={{ fontSize: '1.2rem' }}>
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                ...mobileButtonStyle,
                backgroundColor: currentColors.buttonBg,
                color: currentColors.textSecondary
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = currentColors.buttonHover;
                e.target.style.color = currentColors.accent;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = currentColors.buttonBg;
                e.target.style.color = currentColors.textSecondary;
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg 
                style={{ 
                  width: '1.4rem', 
                  height: '1.4rem',
                  transition: 'all 0.4s ease'
                }} 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu" style={mobileMenuStyle}>
            {/* Mobile menu header */}
            <div style={{
              padding: '1rem 1.5rem 0.5rem',
              borderBottom: `1px solid ${currentColors.border}`,
              marginBottom: '0.5rem'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: currentColors.textMuted,
                textAlign: 'center',
                margin: 0
              }}>
                التنقل السريع
              </p>
            </div>
            
            <div style={{ padding: '0.5rem 1rem 1.5rem' }}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="mobile-menu-item"
                  style={{
                    ...mobileMenuItemStyle(activeSection === item.id),
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = currentColors.buttonHover;
                      e.target.style.color = currentColors.accent;
                      e.target.style.transform = 'translateX(-8px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = currentColors.textSecondary;
                      e.target.style.transform = 'translateX(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {item.label}
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile menu footer */}
            <div style={{
              padding: '1rem 1.5rem',
              borderTop: `1px solid ${currentColors.border}`,
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: currentColors.textMuted,
                margin: 0
              }}>
                AL-Bara © 2024
              </p>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
        }

        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-item {
          animation: fadeInStagger 0.3s ease-out forwards;
        }

        .navbar-glow {
          position: relative;
        }

        .navbar-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .navbar-glow:hover::before {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Navbar;