import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/navigationSlice';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const activeSection = useSelector((state) => state.navigation.activeSection);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'about', label: 'معلوماتي', icon: '👤' },
    { id: 'services', label: 'الخدمات', icon: '⚡' },
    { id: 'contact', label: 'التواصل', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    checkMobile();
    const interval = setInterval(checkMobile, 500);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const initialCheck = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    initialCheck();
    setTimeout(initialCheck, 100);
  }, []);

  return (
    <>
      <nav 
        className={`
          fixed left-1/2 -translate-x-1/2 z-[1000]
          transition-all duration-400 ease-in-out
          ${isVisible || isMobile ? (isMobile ? 'top-2' : 'top-4') : '-top-24'}
          ${isMobile ? 'w-[96%] max-w-[600px]' : 'w-[95%] max-w-[1200px]'}
          ${isMobile ? 'rounded-[1.25rem]' : 'rounded-[1.5rem]'}
          ${isDarkMode 
            ? 'bg-gray-900/90 border-white/10' 
            : 'bg-white/90 border-black/10'
          }
          backdrop-blur-[25px] border
          shadow-[0_20px_40px_rgba(0,0,0,0.1)]
        `}
      >
        <div className="w-full mx-auto px-8 flex justify-between items-center h-[4.5rem] transition-all duration-400">
          {/* Logo */}
          <div 
            onClick={() => dispatch(setActiveSection('home'))} 
            className="cursor-pointer"
          >
            <h1 className="text-[1.75rem] font-black bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent m-0 flex items-center gap-2 tracking-tight">
              <span className="text-[1.4rem] transition-all duration-400">🚀</span>
              AL-Bara
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className={`${isMobile ? 'hidden' : 'block'}`}>
            <div className={`
              flex gap-1 p-2 rounded-[1.25rem] border
              ${isDarkMode 
                ? 'bg-gray-800/50 border-white/10' 
                : 'bg-gray-100/50 border-black/10'
              }
              shadow-lg transition-all duration-400
            `}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => dispatch(setActiveSection(item.id))}
                  className={`
                    px-5 py-3 rounded-[1rem] text-[0.95rem] font-bold
                    border-none cursor-pointer transition-all duration-400
                    flex items-center gap-2 whitespace-nowrap
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)]'
                      : isDarkMode
                        ? 'bg-transparent text-gray-400 hover:bg-gray-700/50 hover:text-blue-400'
                        : 'bg-transparent text-gray-600 hover:bg-gray-200/50 hover:text-blue-600'
                    }
                    ${activeSection === item.id ? 'translate-y-[-2px] scale-[1.02]' : 'translate-y-0 scale-100'}
                  `}
                >
                  <span className="text-[1rem]">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`
                  p-3 rounded-[1rem] text-[1.1rem] border-none cursor-pointer
                  transition-all duration-400 flex items-center justify-center
                  min-w-[2.8rem]
                  ${isDarkMode
                    ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-yellow-400'
                    : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 hover:text-blue-600'
                  }
                  hover:translate-y-[-2px] hover:scale-105
                  shadow-md
                `}
                title={isDarkMode ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className={`${isMobile ? 'flex' : 'hidden'} gap-2 items-center`}>
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className={`
                flex items-center justify-center p-3 rounded-[1rem]
                border-none cursor-pointer transition-all duration-400
                ${isDarkMode
                  ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-yellow-400'
                  : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 hover:text-blue-600'
                }
                hover:scale-105 shadow-md
              `}
              title={isDarkMode ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
            >
              <span className="text-[1.2rem]">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                flex items-center justify-center p-3 rounded-[1rem]
                border-none cursor-pointer transition-all duration-400
                ${isDarkMode
                  ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-blue-400'
                  : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 hover:text-blue-600'
                }
                hover:scale-105 shadow-md
              `}
            >
              <svg 
                className="w-[1.4rem] h-[1.4rem] transition-all duration-400"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && isMobile && (
          <div 
            className={`
              absolute top-full left-0 right-0 mt-1 z-[1001]
              rounded-b-[1.25rem] border overflow-visible
              ${isDarkMode
                ? 'bg-gray-900/95 border-white/10'
                : 'bg-white/95 border-black/10'
              }
              backdrop-blur-[25px]
              shadow-[0_15px_35px_rgba(0,0,0,0.15)]
              animate-slideDown
            `}
          >
            <div className="p-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    dispatch(setActiveSection(item.id));
                    setIsMenuOpen(false);
                  }}
                  className={`
                    flex items-center justify-between w-full
                    px-4 py-3 rounded-lg text-[0.95rem] font-semibold
                    border-none cursor-pointer mb-1 last:mb-0
                    transition-all duration-300 min-h-[44px]
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]'
                      : isDarkMode
                        ? 'bg-transparent text-gray-400 hover:bg-gray-800/50 hover:text-blue-400'
                        : 'bg-transparent text-gray-600 hover:bg-gray-100/50 hover:text-blue-600'
                    }
                    ${activeSection === item.id ? '-translate-x-1' : 'translate-x-0'}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="text-[1.1rem]">{item.icon}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
