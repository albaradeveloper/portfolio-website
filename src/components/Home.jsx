import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Home = ({ setActiveSection }) => {
  const { isDarkMode, currentColors } = useTheme();
  
  const backgroundGradient = isDarkMode 
    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f8fafc 75%, #faf5ff 100%)';

  return (
    <section style={{
      minHeight: '100vh',
      background: backgroundGradient,
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
        borderRadius: '50%',
        filter: 'blur(30px)',
        zIndex: 0
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        paddingTop: '3rem',
        paddingBottom: '5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '80vh'
        }} className="main-grid">
          {/* Text Content */}
          <div style={{ 
            textAlign: 'center',
            padding: '2rem 0'
          }} className="text-content">
            <div style={{ marginBottom: '2rem' }}>
              <span style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                color: '#1e40af',
                borderRadius: '2rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                marginBottom: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                مرحباً بك في موقعي الشخصي ✨
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '900',
              color: currentColors.text,
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              أنا{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}>
                البراء المغواري
              </span>
            </h1>
            
            <h2 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
              color: currentColors.textSecondary,
              marginBottom: '2rem',
              fontWeight: '600',
              lineHeight: '1.4'
            }}>
              مطور ويب متخصص في التقنيات الحديثة
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
              color: currentColors.textSecondary,
              marginBottom: '2.5rem',
              lineHeight: '1.625',
              maxWidth: '48rem',
              margin: '0 auto 2.5rem auto'
            }} className="description-text">
               أقوم بتطوير مواقع ويب وتطبيقات حديثة باستخدام أحدث التقنيات مثل React و NextJS و Flutter. 
              أسعى لتقديم حلول مبتكرة وتجارب مستخدم استثنائية.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              justifyContent: 'center', 
              marginTop: '3rem',
              maxWidth: '400px',
              margin: '3rem auto 0 auto'
            }} className="buttons-container">
              <button 
                onClick={() => setActiveSection('contact')}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                  color: 'white',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '1rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)';
                }}
              >
                تواصل معي 💬
              </button>
              <button 
                onClick={() => {
                  // يمكن إضافة رابط تحميل السيرة الذاتية هنا
                  alert('سيتم إضافة رابط تحميل السيرة الذاتية قريباً!');
                }}
                style={{
                  background: currentColors.cardBg,
                  color: currentColors.accent,
                  border: `2px solid ${currentColors.accent}30`,
                  padding: '1.25rem 2.5rem',
                  borderRadius: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '1.1rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 4px 15px ${currentColors.shadow}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentColors.accent;
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentColors.cardBg;
                  e.target.style.color = currentColors.accent;
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = `0 4px 15px ${currentColors.shadow}`;
                }}
              >
                تحميل السيرة الذاتية 📄
              </button>
            </div>
            
            {/* Social Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }} className="social-links">
              {/* WhatsApp */}
              <a href="https://wa.me/249926699368" target="_blank" rel="noopener noreferrer" style={{
                width: '3.5rem',
                height: '3.5rem',
                backgroundColor: currentColors.cardBg,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                boxShadow: `0 4px 15px ${currentColors.shadow}`,
                border: '2px solid rgba(37, 211, 102, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#25d366';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.4)';
                e.currentTarget.style.borderColor = '#25d366';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentColors.cardBg;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${currentColors.shadow}`;
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.2)';
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25d366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:braaomer98@gmail.com" style={{
                width: '3.5rem',
                height: '3.5rem',
                backgroundColor: currentColors.cardBg,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                boxShadow: `0 4px 15px ${currentColors.shadow}`,
                border: '2px solid rgba(234, 67, 53, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ea4335';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(234, 67, 53, 0.4)';
                e.currentTarget.style.borderColor = '#ea4335';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentColors.cardBg;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${currentColors.shadow}`;
                e.currentTarget.style.borderColor = 'rgba(234, 67, 53, 0.2)';
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ea4335' }}>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727C23.268 3.82 24 4.57 24 5.457z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/braaomer98" target="_blank" rel="noopener noreferrer" style={{
                width: '3.5rem',
                height: '3.5rem',
                backgroundColor: currentColors.cardBg,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                boxShadow: `0 4px 15px ${currentColors.shadow}`,
                border: '2px solid rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.borderColor = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentColors.cardBg;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${currentColors.shadow}`;
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#000000' }}>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Image/Avatar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            padding: '2rem 0'
          }} className="avatar-section">
            <div style={{ position: 'relative' }}>
              {/* Main avatar container */}
              <div style={{
                width: '320px',
                height: '320px',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                borderRadius: '50%',
                padding: '6px',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.3)';
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: isDarkMode ? currentColors.cardBg : 'white',
                  borderRadius: '50%',
                  padding: '8px',
                  boxShadow: `inset 0 4px 12px ${currentColors.shadow}`,
                  border: `2px solid ${currentColors.cardBorder}`
                }}>
                  <img
                    src="public/pro.jpg"
                    alt="AL-Bara - مطور ويب متخصص"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      // في حالة عدم وجود الصورة، استخدم صورة افتراضية
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face';
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating skill badges */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                boxShadow: '0 8px 20px rgba(251, 191, 36, 0.4)',
                animation: 'bounce 2s infinite',
                border: '4px solid white'
              }}>
                ⚡
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '-30px',
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)',
                animation: 'pulse 3s infinite',
                border: '4px solid white'
              }}>
                💻
              </div>
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '-40px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)',
                animation: 'bounce 2.5s infinite',
                border: '4px solid white'
              }}>
                🚀
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginTop: '6rem',
          padding: '3rem 2rem',
          background: currentColors.cardBg,
          borderRadius: '2rem',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${currentColors.cardBorder}`,
          boxShadow: `0 20px 40px ${currentColors.shadow}`
        }} className="stats-grid">
          <div style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05))',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              background: 'linear-gradient(135deg, #2563eb, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem' 
            }}>5+</div>
            <div style={{ color: currentColors.textSecondary, fontWeight: '600' }}>مشروع مكتمل</div>
          </div>
          
          <div style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              background: 'linear-gradient(135deg, #10b981, #059669)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem' 
            }}>13+</div>
            <div style={{ color: currentColors.textSecondary, fontWeight: '600' }}>عميل راضي</div>
          </div>
          
          <div style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem' 
            }}>4+</div>
            <div style={{ color: currentColors.textSecondary, fontWeight: '600' }}>سنوات خبرة</div>
          </div>
          
          <div style={{ 
            textAlign: 'center',
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem' 
            }}>24/7</div>
            <div style={{ color: currentColors.textSecondary, fontWeight: '600' }}>دعم فني</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;