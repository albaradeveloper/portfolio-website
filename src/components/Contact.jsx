import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode, currentColors } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'البريد الإلكتروني',
      value: 'braaomer98@gmail.com',
      link: 'mailto:braaomer98@gmail.com'
    },
    {
      icon: '📱',
      title: 'الهاتف',
      value: '+249926699368',
      link: 'tel:+249926699368'
    },
    {
      icon: '💬',
      title: 'واتساب',
      value: '+249926699368',
      link: 'https://wa.me/249926699368'
    },
    {
      icon: '🐦',
      title: 'تويتر',
      value: '@braaomer98',
      link: 'https://x.com/braaomer98'
    }
  ];

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
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              color: currentColors.accent,
              borderRadius: '2rem',
              fontSize: '0.95rem',
              fontWeight: '600',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              تواصل معي 📧
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: '900',
            color: currentColors.text,
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              لنبدأ
            </span>{' '}
            العمل معاً
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: currentColors.textSecondary,
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            أنا هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معي وسأكون سعيداً للعمل معك
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem'
        }} className="contact-grid">
          {/* Contact Form */}
          <div style={{
            background: currentColors.cardBg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '2rem',
            padding: '2.5rem',
            border: `1px solid ${currentColors.cardBorder}`,
            boxShadow: `0 25px 50px ${currentColors.shadow}`
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: currentColors.text,
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                أرسل رسالة
              </span>
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: currentColors.text
                  }}>
                    الاسم *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: `2px solid ${currentColors.border}`,
                      backgroundColor: currentColors.bgSecondary,
                      color: currentColors.text,
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = currentColors.accent;
                      e.target.style.boxShadow = `0 0 0 3px ${currentColors.accent}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = currentColors.border;
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: currentColors.text
                  }}>
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: `2px solid ${currentColors.border}`,
                      backgroundColor: currentColors.bgSecondary,
                      color: currentColors.text,
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = currentColors.accent;
                      e.target.style.boxShadow = `0 0 0 3px ${currentColors.accent}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = currentColors.border;
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: currentColors.text
                }}>
                  الموضوع *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${currentColors.border}`,
                    backgroundColor: currentColors.bgSecondary,
                    color: currentColors.text,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentColors.accent;
                    e.target.style.boxShadow = `0 0 0 3px ${currentColors.accent}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = currentColors.border;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="موضوع الرسالة"
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: currentColors.text
                }}>
                  الرسالة *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${currentColors.border}`,
                    backgroundColor: currentColors.bgSecondary,
                    color: currentColors.text,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentColors.accent;
                    e.target.style.boxShadow = `0 0 0 3px ${currentColors.accent}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = currentColors.border;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              
              <button
                type="submit"
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
                  width: '100%'
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
                إرسال الرسالة 📤
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: currentColors.cardBg,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  border: `1px solid ${currentColors.cardBorder}`,
                  boxShadow: `0 20px 40px ${currentColors.shadow}`,
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 25px 50px ${currentColors.shadowHover}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${currentColors.shadow}`;
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {info.icon}
                </div>
                <h4 style={{
                  fontWeight: '700',
                  color: currentColors.text,
                  marginBottom: '0.5rem',
                  fontSize: '1.1rem'
                }}>
                  {info.title}
                </h4>
                <p style={{
                  color: currentColors.accent,
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;