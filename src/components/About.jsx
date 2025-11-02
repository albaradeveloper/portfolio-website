import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDarkMode, currentColors } = useTheme();
  
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 97, color: 'bg-yellow-500' },
    { name: 'NextJS', level: 85, color: 'bg-green-500' },
    { name: 'TailwindCSS', level: 80, color: 'bg-purple-500' },
    { name: 'Flutter', level: 87, color: 'bg-green-600' },
    { name: 'MongoDB', level: 70, color: 'bg-orange-500' }
  ];

  const getSkillGradient = (skillName) => {
    const gradients = {
      'React': 'linear-gradient(135deg, #61dafb, #21759b)',
      'JavaScript': 'linear-gradient(135deg, #f7df1e, #f0db4f)',
      'NextJS': 'linear-gradient(135deg, #000000, #333333)',
      'TailwindCSS': 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      'Flutter': 'linear-gradient(135deg, #02569b, #0175c2)',
      'MongoDB': 'linear-gradient(135deg, #4db33d, #3fa037)'
    };
    return gradients[skillName] || 'linear-gradient(135deg, #2563eb, #9333ea)';
  };

  const experiences = [
    {
      title: 'مطور ويب أول',
      company: 'شركة التقنية المتقدمة',
      period: '2022 - الآن',
      description: 'تطوير تطبيقات ويب متقدمة باستخدام React و Node.js'
    },
    {
      title: 'مطور فرونت إند',
      company: 'استوديو الإبداع الرقمي',
      period: '2021 - 2022',
      description: 'تصميم وتطوير واجهات المستخدم التفاعلية'
    },
    {
      title: 'مطور مبتدئ',
      company: 'شركة الحلول التقنية',
      period: '2020 - 2021',
      description: 'تعلم أساسيات تطوير الويب والعمل في فريق'
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
              معلوماتي الشخصية 👤
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
              تعرف عليّ
            </span>{' '}
            أكثر
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: currentColors.textSecondary,
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            اكتشف خبراتي ومهاراتي في مجال تطوير الويب والتقنيات الحديثة
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem'
        }} className="about-grid">
          {/* Personal Info */}
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
                نبذة شخصية
              </span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                color: currentColors.textSecondary,
                fontSize: '1.1rem',
                lineHeight: '1.7',
                textAlign: 'center'
              }}>
                أنا مطور ويب شغوف بالتقنيات الحديثة، أتمتع بخبرة واسعة في تطوير التطبيقات والمواقع الإلكترونية. 
                أسعى دائماً لتعلم التقنيات الجديدة وتطبيق أفضل الممارسات في البرمجة.
              </p>
              <p style={{
                color: currentColors.textSecondary,
                fontSize: '1.1rem',
                lineHeight: '1.7',
                textAlign: 'center'
              }}>
                أؤمن بأن التطوير الناجح يتطلب فهماً عميقاً لاحتياجات المستخدم وتقديم حلول مبتكرة تلبي تطلعاته. 
                أعمل بشكل مستمر على تحسين مهاراتي ومواكبة أحدث التطورات في عالم التقنية.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05))',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <h4 style={{
                    fontWeight: '700',
                    color: currentColors.text,
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>📧 البريد الإلكتروني</h4>
                  <p style={{
                    color: currentColors.accent,
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>braaomer98@gmail.com</p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <h4 style={{
                    fontWeight: '700',
                    color: currentColors.text,
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>📱 الهاتف</h4>
                  <p style={{
                    color: currentColors.success,
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>+249926699368</p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <h4 style={{
                    fontWeight: '700',
                    color: currentColors.text,
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>📍 الموقع</h4>
                  <p style={{
                    color: currentColors.warning,
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>الخرطوم، السودان</p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <h4 style={{
                    fontWeight: '700',
                    color: currentColors.text,
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>🎂 العمر</h4>
                  <p style={{
                    color: '#8b5cf6',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>27 سنة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
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
                المهارات التقنية
              </span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontWeight: '600',
                      color: currentColors.text,
                      fontSize: '1.1rem'
                    }}>{skill.name}</span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: currentColors.textSecondary,
                      fontWeight: '600'
                    }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    backgroundColor: isDarkMode ? '#334155' : '#e2e8f0',
                    borderRadius: '9999px',
                    height: '12px',
                    overflow: 'hidden'
                  }}>
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '9999px',
                        background: getSkillGradient(skill.name),
                        width: `${skill.level}%`,
                        transition: 'all 1s ease-out',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: currentColors.text,
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                الخبرات العملية
              </span>
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: currentColors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              رحلتي المهنية في عالم تطوير الويب والتقنيات الحديثة
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div style={{
                      background: currentColors.cardBg,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      padding: '2rem',
                      borderRadius: '1.5rem',
                      border: `1px solid ${currentColors.cardBorder}`,
                      boxShadow: `0 20px 40px ${currentColors.shadow}`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = `0 25px 50px ${currentColors.shadowHover}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = `0 20px 40px ${currentColors.shadow}`;
                    }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span style={{ fontSize: '0.875rem', color: currentColors.accent, fontWeight: '600' }}>{exp.period}</span>
                      </div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: currentColors.text, marginBottom: '0.5rem' }}>{exp.title}</h4>
                      <p style={{ color: currentColors.accent, fontWeight: '600', marginBottom: '0.75rem' }}>{exp.company}</p>
                      <p style={{ color: currentColors.textSecondary }}>{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: currentColors.text,
              marginBottom: '1rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                الشهادات والإنجازات
              </span>
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: currentColors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              الشهادات والإنجازات التي حققتها في مسيرتي المهنية
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: currentColors.cardBg,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.1)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{
                fontWeight: '800',
                color: currentColors.text,
                marginBottom: '0.5rem',
                fontSize: '1.25rem'
              }}>بكالريوس نظم المعلومات</h4>
              <p style={{
                color: currentColors.accent,
                fontSize: '0.95rem',
                fontWeight: '600'
              }}>النيلين - 2024</p>
            </div>
            
            <div style={{
              background: currentColors.cardBg,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(16, 185, 129, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.1)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎖️</div>
              <h4 style={{
                fontWeight: '800',
                color: currentColors.text,
                marginBottom: '0.5rem',
                fontSize: '1.25rem'
              }}>GDSC</h4>
              <p style={{
                color: currentColors.success,
                fontSize: '0.95rem',
                fontWeight: '600'
              }}>من Google - 2020</p>
            </div>
            
            <div style={{
              background: currentColors.cardBg,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.1)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥇</div>
              <h4 style={{
                fontWeight: '800',
                color: currentColors.text,
                marginBottom: '0.5rem',
                fontSize: '1.25rem'
              }}>شهادة في UI/UX</h4>
              <p style={{
                color: '#8b5cf6',
                fontSize: '0.95rem',
                fontWeight: '600'
              }}>منصة إدراك - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;