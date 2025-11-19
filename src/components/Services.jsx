import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ProjectDialog from './ProjectDialog';

const Services = () => {
  const { isDarkMode } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    {
      icon: '🌐',
      title: 'تطوير مواقع الويب',
      description: 'تصميم وتطوير مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات',
      features: ['تصميم متجاوب', 'سرعة عالية', 'SEO محسن', 'أمان متقدم'],
      price: 'يبدأ من 1,000,000 جنيه سوداني',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'تطبيقات الموبايل',
      description: 'تطوير تطبيقات موبايل متقدمة لنظامي iOS و Android',
      features: ['تصميم أصلي', 'أداء عالي', 'تجربة مستخدم ممتازة', 'دعم متعدد المنصات'],
      price: 'يبدأ من 2,000,000 جنيه سوداني',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'تصميم UI/UX',
      description: 'تصميم واجهات مستخدم جذابة وتجربة مستخدم متميزة',
      features: ['تصميم حديث', 'سهولة الاستخدام', 'تجربة تفاعلية', 'اختبار المستخدمين'],
      price: 'يبدأ من 750,000 جنيه سوداني',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '⚡',
      title: 'تحسين الأداء',
      description: 'تحسين أداء المواقع والتطبيقات لضمان سرعة التحميل',
      features: ['تحسين السرعة', 'ضغط الملفات', 'تحسين الصور', 'تحسين قواعد البيانات'],
      price: 'يبدأ من 990,000 جنيه سوداني',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🔧',
      title: 'الصيانة والدعم',
      description: 'خدمات صيانة ودعم فني مستمر للمواقع والتطبيقات',
      features: ['دعم 24/7', 'تحديثات دورية', 'نسخ احتياطية', 'مراقبة الأداء'],
      price: 'يبدأ من 500,000 جنيه سوداني/شهر',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'استشارات تقنية',
      description: 'استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة',
      features: ['تحليل المتطلبات', 'اختيار التقنيات', 'تخطيط المشاريع', 'إدارة الفرق'],
      price: 'يبدأ من 200,000 جنيه سوداني/ساعة',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className={`
      min-h-screen pt-24 relative overflow-hidden
      ${isDarkMode 
        ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950' 
        : 'bg-gradient-to-br from-white via-primary-50 to-primary-100'
      }
    `}>
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary-400/15 to-primary-600/10 rounded-full blur-[40px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary-500/10 to-primary-400/15 rounded-full blur-[30px]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6
            bg-gradient-to-r from-primary-400/15 to-primary-600/10
            border backdrop-blur-sm
            ${isDarkMode ? 'text-primary-400 border-primary-500/30' : 'text-primary-700 border-primary-500/30'}
          `}>
            الخدمات المقدمة ⚡
          </span>
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
              خدماتي
            </span>{' '}
            المتميزة
          </h2>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
            أقدم مجموعة متنوعة من الخدمات التقنية المتخصصة لتلبية احتياجاتك
          </p>
        </div>

        {/* Services Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group backdrop-blur-xl rounded-3xl p-8
                border shadow-xl
                hover:-translate-y-3 hover:scale-105
                transition-all duration-300
                flex flex-col items-center text-center
                ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
              `}
            >
              {/* Icon */}
              <div className={`
                w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6
                bg-gradient-to-br ${service.gradient}
                shadow-lg group-hover:scale-110 transition-transform duration-300
              `}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className={`mb-6 text-lg leading-relaxed ${isDarkMode ? 'text-dark-200' : 'text-dark-600'}`}>
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-6 w-full">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-3">
                    <span className={`
                      w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}
                    `} />
                    <span className={`text-base ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Price */}
              <div className={`
                pt-6 border-t w-full
                ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
              `}>
                <p className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`
          mt-20 backdrop-blur-xl rounded-3xl p-12 text-center
          border shadow-2xl
          ${isDarkMode ? 'bg-dark-800/50 border-primary-500/20' : 'bg-white/50 border-primary-500/20'}
        `}>
          <h3 className={`text-3xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-dark-950'}`}>
            هل لديك مشروع في ذهنك؟
          </h3>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-dark-100' : 'text-dark-700'}`}>
            دعنا نحول فكرتك إلى واقع رقمي مذهل
          </p>
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="
              bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700
              text-white px-12 py-5 rounded-xl font-bold text-lg
              shadow-[0_8px_25px_rgba(37,99,235,0.3)]
              hover:shadow-[0_15px_35px_rgba(37,99,235,0.4)]
              hover:-translate-y-1 hover:scale-105
              transition-all duration-300
            "
          >
            ابدأ مشروعك الآن 🚀
          </button>
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </section>
  );
};

export default Services;
