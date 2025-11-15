import { useTheme } from '../contexts/ThemeContext';

const Footer = ({ activeSection, setActiveSection }) => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'معلوماتي' },
    { id: 'services', label: 'الخدمات' },
    { id: 'contact', label: 'التواصل' }
  ];

  const socialLinks = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      ),
      label: 'WhatsApp', 
      url: 'https://wa.me/249926699368', 
      color: 'hover:bg-green-500 hover:text-white',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727C23.268 3.82 24 4.57 24 5.457z"/>
        </svg>
      ),
      label: 'Email', 
      url: 'mailto:braaomer98@gmail.com', 
      color: 'hover:bg-red-500 hover:text-white',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ),
      label: 'X', 
      url: 'https://x.com/braaomer98', 
      color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      bgColor: 'bg-gray-50 dark:bg-gray-800'
    }
  ];

  return (
    <footer className={`
      relative overflow-hidden border-t
      ${isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-gray-800' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-purple-50 border-gray-200'
      }
    `}>
      {/* Background decorative element */}
      <div className="absolute top-0 right-[10%] w-[200px] h-[200px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[40px]" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              AL-Bara Dev
            </h3>
            <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              مطور ويب متخصص في بناء تطبيقات ومواقع حديثة باستخدام أحدث التقنيات. 
              أسعى لتقديم حلول مبتكرة وتجارب مستخدم استثنائية.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-110
                    ${social.bgColor}
                    ${social.color}
                    shadow-lg hover:shadow-2xl
                    border-2 border-transparent hover:border-current
                  `}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveSection(link.id)}
                    className={`
                      text-right transition-all duration-300
                      hover:translate-x-2
                      ${activeSection === link.id
                        ? 'text-blue-600 font-semibold'
                        : isDarkMode 
                          ? 'text-gray-400 hover:text-blue-400' 
                          : 'text-gray-600 hover:text-blue-600'
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              معلومات التواصل
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727C23.268 3.82 24 4.57 24 5.457z"/>
                  </svg>
                </div>
                <div>
                  <p className={`text-base font-bold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    البريد الإلكتروني
                  </p>
                  <a 
                    href="mailto:braaomer98@gmail.com"
                    className="text-base text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                  >
                    braaomer98@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className={`text-base font-bold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    الهاتف
                  </p>
                  <a 
                    href="https://wa.me/249926699368"
                    className="text-base text-green-600 hover:text-green-700 transition-colors hover:underline"
                  >
                    +249926699368
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C7.802 0 4.403 3.403 4.403 7.602 4.403 11.8 7.469 16.812 12 24c4.531-7.188 7.597-12.2 7.597-16.398C19.597 3.403 16.198 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </div>
                <div>
                  <p className={`text-base font-bold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    الموقع
                  </p>
                  <p className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    الخرطوم، السودان
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`
          pt-8 border-t text-center
          ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}
        `}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} AL-Bara Dev. جميع الحقوق محفوظة.
          </p>
          <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            صُنع بـ ❤️ باستخدام React و Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
