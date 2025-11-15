import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  
  const skills = [
    { name: 'React', level: 90, gradient: 'from-cyan-400 to-blue-600' },
    { name: 'JavaScript', level: 97, gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'NextJS', level: 85, gradient: 'from-gray-800 to-gray-600' },
    { name: 'TailwindCSS', level: 80, gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Flutter', level: 87, gradient: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 70, gradient: 'from-green-500 to-green-700' }
  ];

  const experiences = [
    {
      title: 'مطور واجهات المستخدم ',
      company: 'شركة التقنية المتقدمة',
      period: '2025 - الآن',
      description: 'تطوير واجهات مستخدم تفاعلية بستخدام ReactJS,TailwindCSS'
    },
    {
      title: 'مطور تطبيقات الموبايل',
      company: 'استوديو الإبداع الرقمي',
      period: '2022 - 2023',
      description: 'تطوير تطبيقات الموبايل بستخدام Flutter Freamwork'
    },
    {
      title: 'مطور باك إند',
      company: 'شركة الحلول التقنية',
      period: '2020 - 2021',
      description: 'تطوير الواجهات الخلفية بستخدام Express.JS,MangoDB'
    }
  ];

  return (
    <section className={`
      min-h-screen pt-24 relative overflow-hidden
      ${isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-purple-50'
      }
    `}>
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[40px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[30px]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6
            bg-gradient-to-r from-blue-500/10 to-purple-500/10
            border backdrop-blur-sm
            ${isDarkMode ? 'text-blue-400 border-blue-500/20' : 'text-blue-700 border-blue-500/20'}
          `}>
            معلوماتي الشخصية 👤
          </span>
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              تعرف عليّ
            </span>{' '}
            أكثر
          </h2>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            اكتشف خبراتي ومهاراتي في مجال تطوير الويب والتقنيات الحديثة
          </p>
        </div>

        {/* Personal Info */}
        <div className={`
          backdrop-blur-xl rounded-3xl p-10 mb-12
          border shadow-2xl
          ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'}
        `}>
          <h3 className="text-3xl font-black text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              نبذة شخصية
            </span>
          </h3>
          
          <div className="space-y-6">
            <p className={`text-xl md:text-2xl text-center leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              أنا مطور ويب شغوف بالتقنيات الحديثة، أتمتع بخبرة واسعة في تطوير التطبيقات والمواقع الإلكترونية. 
              أسعى دائماً لتعلم التقنيات الجديدة وتطبيق أفضل الممارسات في البرمجة.
            </p>
            <p className={`text-xl md:text-2xl text-center leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              أؤمن بأن التطوير الناجح يتطلب فهماً عميقاً لاحتياجات المستخدم وتقديم حلول مبتكرة تلبي تطلعاته.
            </p>
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 p-6 rounded-xl border border-blue-500/20 text-center hover:-translate-y-2 transition-transform">
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📧 البريد الإلكتروني</h4>
                <p className="text-blue-600 font-semibold text-sm">braaomer98@gmail.com</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 rounded-xl border border-green-500/20 text-center hover:-translate-y-2 transition-transform">
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📱 الهاتف</h4>
                <p className="text-green-600 font-semibold text-sm">+249926699368</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 p-6 rounded-xl border border-yellow-500/20 text-center hover:-translate-y-2 transition-transform">
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>📍 الموقع</h4>
                <p className="text-yellow-600 font-semibold text-sm">الخرطوم، السودان</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-700/5 p-6 rounded-xl border border-purple-500/20 text-center hover:-translate-y-2 transition-transform">
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🎂 العمر</h4>
                <p className="text-purple-600 font-semibold text-sm">27 سنة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`
          backdrop-blur-xl rounded-3xl p-10 mb-12
          border shadow-2xl
          ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'}
        `}>
          <h3 className="text-3xl font-black text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              المهارات التقنية
            </span>
          </h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className={`text-4xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                الخبرات العملية
              </span>
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              رحلتي المهنية في عالم تطوير الويب والتقنيات الحديثة
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-purple-700 rounded-full" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className={`
                        backdrop-blur-xl rounded-2xl p-8 border shadow-xl
                        hover:-translate-y-2 transition-all duration-300
                        ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'}
                      `}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                          <span className="text-sm font-semibold text-blue-600 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            {exp.period}
                          </span>
                        </div>
                        <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-3">{exp.company}</p>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    </div>
                    
                    <div className="w-5/12" />
                  </div>
                  
                  {/* Mobile Layout */}
                  <div className="md:hidden pr-12 relative">
                    <div className={`
                      backdrop-blur-xl rounded-xl p-6 border shadow-xl
                      ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'}
                    `}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                        <span className="text-xs font-semibold text-blue-600 bg-blue-500/10 px-2 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2 text-sm">{exp.company}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Mobile timeline dot */}
                    <div className="absolute right-3 top-6 w-6 h-6 bg-white border-3 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="text-center mb-12">
            <h3 className={`text-4xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                الشهادات والإنجازات
              </span>
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              الشهادات والإنجازات التي حققتها في مسيرتي المهنية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`
              backdrop-blur-xl rounded-2xl p-8 text-center
              border border-blue-500/20 shadow-xl
              hover:-translate-y-3 hover:scale-105 transition-all duration-300
              ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
            `}>
              <div className="text-5xl mb-4">🏆</div>
              <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                بكالريوس نظم المعلومات
              </h4>
              <p className="text-blue-600 font-semibold">النيلين - 2024</p>
            </div>
            
            <div className={`
              backdrop-blur-xl rounded-2xl p-8 text-center
              border border-green-500/20 shadow-xl
              hover:-translate-y-3 hover:scale-105 transition-all duration-300
              ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
            `}>
              <div className="text-5xl mb-4">🎖️</div>
              <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                GDSC
              </h4>
              <p className="text-green-600 font-semibold">Google - 2020</p>
            </div>
            
            <div className={`
              backdrop-blur-xl rounded-2xl p-8 text-center
              border border-purple-500/20 shadow-xl
              hover:-translate-y-3 hover:scale-105 transition-all duration-300
              ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
            `}>
              <div className="text-5xl mb-4">📜</div>
              <h4 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                شهادات أخرى
              </h4>
              <p className="text-purple-600 font-semibold">SoloLerin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
