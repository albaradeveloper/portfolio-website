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
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#ffffff';
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0a0a0a';
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const colors = {
    light: {
      // الخلفيات
      bg: '#ffffff',
      bgSecondary: '#fffbeb',
      bgTertiary: '#fef3c7',
      
      // النصوص
      text: '#0a0a0a',
      textSecondary: '#212529',
      textMuted: '#495057',
      
      // النافبار
      navbarBg: 'rgba(255, 255, 255, 0.90)',
      navbarBorder: 'rgba(245, 158, 11, 0.2)',
      
      // الحدود والظلال
      border: 'rgba(245, 158, 11, 0.2)',
      shadow: 'rgba(245, 158, 11, 0.15)',
      shadowHover: 'rgba(245, 158, 11, 0.25)',
      
      // الأزرار
      buttonBg: 'rgba(255, 251, 235, 0.8)',
      buttonHover: 'rgba(254, 243, 199, 0.9)',
      
      // الكروت
      cardBg: 'rgba(255, 255, 255, 0.9)',
      cardBorder: 'rgba(245, 158, 11, 0.15)',
      
      // الألوان المميزة
      accent: '#f59e0b',
      accentHover: '#d97706',
      success: '#10b981',
      warning: '#fbbf24',
      error: '#ef4444'
    },
    dark: {
      // الخلفيات
      bg: '#0a0a0a',
      bgSecondary: '#212529',
      bgTertiary: '#343a40',
      
      // النصوص
      text: '#ffffff',
      textSecondary: '#f8f9fa',
      textMuted: '#dee2e6',
      
      // النافبار
      navbarBg: 'rgba(33, 37, 41, 0.90)',
      navbarBorder: 'rgba(245, 158, 11, 0.3)',
      
      // الحدود والظلال
      border: 'rgba(245, 158, 11, 0.3)',
      shadow: 'rgba(245, 158, 11, 0.2)',
      shadowHover: 'rgba(245, 158, 11, 0.3)',
      
      // الأزرار
      buttonBg: 'rgba(52, 58, 64, 0.8)',
      buttonHover: 'rgba(73, 80, 87, 0.9)',
      
      // الكروت
      cardBg: 'rgba(33, 37, 41, 0.9)',
      cardBorder: 'rgba(245, 158, 11, 0.2)',
      
      // الألوان المميزة
      accent: '#fbbf24',
      accentHover: '#f59e0b',
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
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0a0a0a';
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