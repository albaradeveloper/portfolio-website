import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // التحقق من التفضيل المحفوظ في localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // التحقق من تفضيل النظام
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // تطبيق الخلفية فور التحميل
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f8fafc';
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const colors = {
    light: {
      // الخلفيات
      bg: '#ffffff',
      bgSecondary: '#f8fafc',
      bgTertiary: '#f1f5f9',
      
      // النصوص
      text: '#0f172a',
      textSecondary: '#475569',
      textMuted: '#64748b',
      
      // النافبار
      navbarBg: 'rgba(255, 255, 255, 0.85)',
      navbarBorder: 'rgba(226, 232, 240, 0.6)',
      
      // الحدود والظلال
      border: 'rgba(226, 232, 240, 0.6)',
      shadow: 'rgba(0, 0, 0, 0.1)',
      shadowHover: 'rgba(0, 0, 0, 0.15)',
      
      // الأزرار
      buttonBg: 'rgba(248, 250, 252, 0.8)',
      buttonHover: 'rgba(241, 245, 249, 0.9)',
      
      // الكروت
      cardBg: 'rgba(255, 255, 255, 0.8)',
      cardBorder: 'rgba(255, 255, 255, 0.3)',
      
      // الألوان المميزة
      accent: '#2563eb',
      accentHover: '#1d4ed8',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    dark: {
      // الخلفيات
      bg: '#0f172a',
      bgSecondary: '#1e293b',
      bgTertiary: '#334155',
      
      // النصوص
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      textMuted: '#94a3b8',
      
      // النافبار
      navbarBg: 'rgba(30, 41, 59, 0.85)',
      navbarBorder: 'rgba(51, 65, 85, 0.6)',
      
      // الحدود والظلال
      border: 'rgba(51, 65, 85, 0.6)',
      shadow: 'rgba(0, 0, 0, 0.3)',
      shadowHover: 'rgba(0, 0, 0, 0.4)',
      
      // الأزرار
      buttonBg: 'rgba(51, 65, 85, 0.8)',
      buttonHover: 'rgba(71, 85, 105, 0.9)',
      
      // الكروت
      cardBg: 'rgba(30, 41, 59, 0.8)',
      cardBorder: 'rgba(51, 65, 85, 0.3)',
      
      // الألوان المميزة
      accent: '#3b82f6',
      accentHover: '#2563eb',
      success: '#22c55e',
      warning: '#fbbf24',
      error: '#f87171'
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // حفظ التفضيل في localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // إضافة/إزالة كلاس من body للتأثيرات العامة
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f8fafc';
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
  }, [isDarkMode]);

  // الاستماع لتغييرات تفضيل النظام
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // تحديث الوضع فقط إذا لم يكن المستخدم قد اختار تفضيلاً محدداً
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    isDarkMode,
    toggleTheme,
    colors,
    currentColors: isDarkMode ? colors.dark : colors.light
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};