import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { isDarkMode, currentColors } = useTheme();

  const services = [
    {
      icon: '🌐',
      title: 'تطوير مواقع الويب',
      description: 'تصميم وتطوير مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات',
      features: ['تصميم متجاوب', 'سرعة عالية', 'SEO محسن', 'أمان متقدم'],
      price: 'يبدأ من 1,000,000 جنيه سوداني'
    },
    {
      icon: '📱',
      title: 'تطبيقات الموبايل',
      description: 'تطوير تطبيقات موبايل متقدمة لنظامي iOS و Android',
      features: ['تصميم أصلي', 'أداء عالي', 'تجربة مستخدم ممتازة', 'دعم متعدد المنصات'],
      price: 'يبدأ من 2,000,000 جنيه سوداني'
    },
    {
      icon: '🎨',
      title: 'تصميم UI/UX',
      description: 'تصميم واجهات مستخدم جذابة وتجربة مستخدم متميزة',
      features: ['تصميم حديث', 'سهولة الاستخدام', 'تجربة تفاعلية', 'اختبار المستخدمين'],
      price: 'يبدأ من 750,000 جنيه سوداني'
    },
    {
      icon: '⚡',
      title: 'تحسين الأداء',
      description: 'تحسين أداء المواقع والتطبيقات لضمان سرعة التحميل',
      features: ['تحسين السرعة', 'ضغط الملفات', 'تحسين الصور', 'تحسين قواعد البيانات'],
      price: 'يبدأ من 990,000 جنيه سوداني'
    },
    {
      icon: '🔧',
      title: 'الصيانة والدعم',
      description: 'خدمات صيانة ودعم فني مستمر للمواقع والتطبيقات',
      features: ['دعم 24/7', 'تحديثات دورية', 'نسخ احتياطية', 'مراقبة الأداء'],
      price: 'يبدأ من 500,000 جنيه سوداني/شهر'
    },
    {
      icon: '🚀',
      title: 'استشارات تقنية',
      description: 'استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة',
      features: ['تحليل المتطلبات', 'اختيار التقنيات', 'تخطيط المشاريع', 'إدارة الفرق'],
      price: 'يبدأ من 200,000 جنيه سوداني/ساعة'
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
        top: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(147, 51, 234, 0.1))',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
        borderRadius: '50%',
        filter: 'blur(50px)',
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
              خدماتي المتميزة ⚡
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
              الخدمات
            </span>{' '}
            التي أقدمها
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: currentColors.textSecondary,
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            أقدم مجموعة شاملة من الخدمات التقنية لمساعدتك في تحقيق أهدافك الرقمية
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: currentColors.cardBg,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                padding: '2.5rem',
                border: `1px solid ${currentColors.cardBorder}`,
                boxShadow: `0 25px 50px ${currentColors.shadow}`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 35px 70px ${currentColors.shadowHover}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 25px 50px ${currentColors.shadow}`;
              }}
            >
              {/* Service Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: currentColors.text,
                marginBottom: '1rem',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p style={{
                color: currentColors.textSecondary,
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                textAlign: 'center',
                fontSize: '1rem'
              }}>
                {service.description}
              </p>
              
              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    fontSize: '0.9rem',
                    color: currentColors.textSecondary
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '0.75rem',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '0.7rem' }}>✓</span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Price */}
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                borderRadius: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                marginTop: '1.5rem'
              }}>
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: currentColors.accent
                }}>
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: currentColors.cardBg,
          borderRadius: '2rem',
          border: `1px solid ${currentColors.cardBorder}`,
          boxShadow: `0 25px 50px ${currentColors.shadow}`,
          backdropFilter: 'blur(20px)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: currentColors.text,
            marginBottom: '1rem'
          }}>
            هل أنت مستعد لبدء مشروعك؟
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: currentColors.textSecondary,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            تواصل معي الآن للحصول على استشارة مجانية ومناقشة متطلبات مشروعك
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #9333ea 100%)',
              color: 'white',
              padding: '1.25rem 2.5rem',
              borderRadius: '1rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              fontSize: '1.1rem',
              boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)';
            }}>
              ابدأ مشروعك الآن 🚀
            </button>
            <button style={{
              background: currentColors.cardBg,
              color: currentColors.accent,
              border: `2px solid ${currentColors.accent}`,
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
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = currentColors.cardBg;
              e.target.style.color = currentColors.accent;
              e.target.style.transform = 'translateY(0) scale(1)';
            }}>
              استشارة مجانية 💬
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;