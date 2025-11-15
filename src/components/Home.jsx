import { useTheme } from '../contexts/ThemeContext';

const Home = ({ setActiveSection }) => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`
      min-h-screen pt-24 relative overflow-hidden
      ${isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-purple-50'
      }
    `}>
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[40px] z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[30px] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-right space-y-6">
            {/* Welcome Badge */}
            <div className="mb-8">
              <span className={`
                inline-block px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-blue-500/10 to-purple-500/10
                border backdrop-blur-sm
                ${isDarkMode 
                  ? 'text-blue-400 border-blue-500/20' 
                  : 'text-blue-700 border-blue-500/20'
                }
              `}>
                مرحباً بك في موقعي الشخصي ✨
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className={`
              text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
            `}>
              أنا{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                البراء المغواري
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className={`
              text-2xl md:text-3xl lg:text-4xl font-semibold
              ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            `}>
              مطور ويب متخصص في التقنيات الحديثة
            </h2>
            
            {/* Description */}
            <p className={`
              text-xl md:text-2xl leading-relaxed max-w-2xl
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
            `}>
              أقوم بتطوير مواقع ويب وتطبيقات حديثة باستخدام أحدث التقنيات مثل React و NextJS و Flutter. 
              أسعى لتقديم حلول مبتكرة وتجارب مستخدم استثنائية.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-4 mt-12 flex-wrap">
              <button 
                onClick={() => setActiveSection('contact')}
                className="
                  bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700
                  text-white px-10 py-4 rounded-xl font-bold text-lg
                  shadow-[0_8px_25px_rgba(37,99,235,0.3)]
                  hover:shadow-[0_15px_35px_rgba(37,99,235,0.4)]
                  hover:-translate-y-1 hover:scale-105
                  transition-all duration-300
                "
              >
                تواصل معي 💬
              </button>
              <button 
                onClick={() => alert('سيتم إضافة رابط تحميل السيرة الذاتية قريباً!')}
                className={`
                  px-10 py-4 rounded-xl font-bold text-lg
                  border-2 backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:scale-105
                  ${isDarkMode
                    ? 'bg-gray-800/50 text-blue-400 border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                    : 'bg-white/50 text-blue-600 border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                  }
                `}
              >
                تحميل السيرة الذاتية 📄
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 mt-12">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/249926699368" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  border-2 border-green-500/20 backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-green-500 hover:border-green-500 hover:-translate-y-2 hover:scale-110
                  hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)]
                  ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
                `}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 hover:text-white transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:braaomer98@gmail.com"
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  border-2 border-red-500/20 backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-red-500 hover:border-red-500 hover:-translate-y-2 hover:scale-110
                  hover:shadow-[0_15px_30px_rgba(234,67,53,0.4)]
                  ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
                `}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 hover:text-white transition-colors">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727C23.268 3.82 24 4.57 24 5.457z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/braaomer98" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  border-2 border-black/20 backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-black hover:border-black hover:-translate-y-2 hover:scale-110
                  hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]
                  ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}
                `}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black hover:text-white transition-colors">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Avatar Section */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main avatar container */}
              <div className="
                w-80 h-80 rounded-full p-1.5
                bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700
                shadow-[0_20px_40px_rgba(37,99,235,0.3)]
                hover:scale-105 hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)]
                transition-all duration-300
              ">
                <div className={`
                  w-full h-full rounded-full p-2
                  shadow-inner border-2
                  ${isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                  }
                `}>
                  <img
                    src="./public/pro.jpg"
                    alt="AL-Bara - مطور ويب متخصص"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/320?text=AL-Bara';
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="
                absolute top-4 -right-5 w-12 h-12
                bg-gradient-to-br from-yellow-400 to-orange-500
                rounded-full flex items-center justify-center text-lg
                shadow-[0_6px_15px_rgba(251,191,36,0.4)]
                border-2 border-white
                hover:scale-110 hover:shadow-[0_8px_20px_rgba(251,191,36,0.5)]
                transition-all duration-300 cursor-pointer
                animate-bounce
              " title="سرعة في التطوير">
                ⚡
              </div>
              
              <div className="
                absolute top-1/2 -left-7 w-12 h-12
                bg-gradient-to-br from-purple-500 to-purple-700
                rounded-full flex items-center justify-center text-base
                shadow-[0_6px_15px_rgba(139,92,246,0.4)]
                border-2 border-white
                hover:scale-110 hover:shadow-[0_8px_20px_rgba(139,92,246,0.5)]
                transition-all duration-300 cursor-pointer
                animate-pulse
              " title="ابتكار وإبداع">
                🚀
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 p-12 rounded-3xl
          backdrop-blur-xl border
          ${isDarkMode 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white/50 border-gray-200'
          }
          shadow-[0_20px_40px_rgba(0,0,0,0.1)]
        `}>
          {/* Stat 1 */}
          <div className="
            text-center p-6 rounded-xl
            bg-gradient-to-br from-blue-500/10 to-purple-500/5
            border border-blue-500/20
            hover:-translate-y-2 transition-transform duration-300
          ">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              مشروع مكتمل
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="
            text-center p-6 rounded-xl
            bg-gradient-to-br from-green-500/10 to-emerald-500/5
            border border-green-500/20
            hover:-translate-y-2 transition-transform duration-300
          ">
            <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-2">
              13+
            </div>
            <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              عميل راضي
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="
            text-center p-6 rounded-xl
            bg-gradient-to-br from-yellow-500/10 to-orange-500/5
            border border-yellow-500/20
            hover:-translate-y-2 transition-transform duration-300
          ">
            <div className="text-5xl font-black bg-gradient-to-r from-yellow-600 to-orange-700 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              سنوات خبرة
            </div>
          </div>
          
          {/* Stat 4 */}
          <div className="
            text-center p-6 rounded-xl
            bg-gradient-to-br from-purple-500/10 to-purple-700/5
            border border-purple-500/20
            hover:-translate-y-2 transition-transform duration-300
          ">
            <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              دعم فني
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
