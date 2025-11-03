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
            <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontWeight: '600',
                      color: currentColors.text,
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)'
                    }}>{skill.name}</span>
                    <span style={{
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      color: currentColors.textSecondary,
                      fontWeight: '600'
                    }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    backgroundColor: isDarkMode ? '#334155' : '#e2e8f0',
                    borderRadius: '9999px',
                    height: 'clamp(10px, 2vw, 12px)',
                    overflow: 'hidden'
                  }}>
                    <div
                      style={{
                        height: '100%',
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
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
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
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: currentColors.textSecondary,
              maxWidth: '90%',
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              رحلتي المهنية في عالم تطوير الويب والتقنيات الحديثة
            </p>
          </div>
          
          <div className="experience-timeline" style={{ position: 'relative' }}>
            {/* Timeline line - Desktop */}
            <div className="timeline-line-desktop" style={{
              position: 'absolute',
              right: '50%',
              transform: 'translateX(50%)',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, #2563eb, #7c3aed, #9333ea)',
              borderRadius: '2px',
              zIndex: 1
            }}></div>
            
            {/* Timeline line - Mobile */}
            <div className="timeline-line-mobile" style={{
              position: 'absolute',
              right: '1.5rem',
              width: '3px',
              height: '100%',
              background: 'linear-gradient(to bottom, #2563eb, #7c3aed, #9333ea)',
              borderRadius: '2px',
              zIndex: 1,
              display: 'none'
            }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  {/* Desktop Layout */}
                  <div className="experience-desktop" style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    flexDirection: index % 2 === 0 ? 'row-reverse' : 'row'
                  }}>
                    <div style={{
                      width: '45%',
                      padding: index % 2 === 0 ? '0 0 0 2rem' : '0 2rem 0 0'
                    }}>
                      <div style={{
                        background: currentColors.cardBg,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        border: `1px solid ${currentColors.cardBorder}`,
                        boxShadow: `0 20px 40px ${currentColors.shadow}`,
                        transition: 'all 0.3s ease',
                        position: 'relative'
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
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '1rem',
                          gap: '0.75rem'
                        }}>
                          <div style={{
                            width: '12px',
                            height: '12px',
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            borderRadius: '50%'
                          }}></div>
                          <span style={{
                            fontSize: '0.875rem',
                            color: currentColors.accent,
                            fontWeight: '600',
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(37, 99, 235, 0.2)'
                          }}>{exp.period}</span>
                        </div>
                        <h4 style={{
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          color: currentColors.text,
                          marginBottom: '0.5rem'
                        }}>{exp.title}</h4>
                        <p style={{
                          color: currentColors.accent,
                          fontWeight: '600',
                          marginBottom: '0.75rem',
                          fontSize: '1rem'
                        }}>{exp.company}</p>
                        <p style={{
                          color: currentColors.textSecondary,
                          lineHeight: '1.6',
                          fontSize: '0.95rem'
                        }}>{exp.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot - Desktop */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      background: 'white',
                      border: '4px solid #2563eb',
                      borderRadius: '50%',
                      zIndex: 10,
                      position: 'relative',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                    }}>
                      <div style={{
                        width: '0.75rem',
                        height: '0.75rem',
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    
                    <div style={{ width: '45%' }}></div>
                  </div>
                  
                  {/* Mobile Layout */}
                  <div className="experience-mobile" style={{
                    display: 'none',
                    width: '100%',
                    paddingRight: '3rem',
                    position: 'relative'
                  }}>
                    <div style={{
                      background: currentColors.cardBg,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: `1px solid ${currentColors.cardBorder}`,
                      boxShadow: `0 15px 30px ${currentColors.shadow}`,
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        gap: '0.5rem'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{
                          fontSize: '0.8rem',
                          color: currentColors.accent,
                          fontWeight: '600',
                          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.75rem',
                          border: '1px solid rgba(37, 99, 235, 0.2)'
                        }}>{exp.period}</span>
                      </div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '800',
                        color: currentColors.text,
                        marginBottom: '0.5rem'
                      }}>{exp.title}</h4>
                      <p style={{
                        color: currentColors.accent,
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        fontSize: '0.9rem'
                      }}>{exp.company}</p>
                      <p style={{
                        color: currentColors.textSecondary,
                        lineHeight: '1.5',
                        fontSize: '0.85rem'
                      }}>{exp.description}</p>
                    </div>
                    
                    {/* Timeline dot - Mobile */}
                    <div style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '1.5rem',
                      width: '1.5rem',
                      height: '1.5rem',
                      background: 'white',
                      border: '3px solid #2563eb',
                      borderRadius: '50%',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                    }}>
                      <div style={{
                        width: '0.375rem',
                        height: '0.375rem',
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
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
          <div className="certificates-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
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