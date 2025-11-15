import { useEffect } from 'react';

const usePageTitle = (section) => {
  useEffect(() => {
    const titles = {
      home: 'البراء - الرئيسية',
      about: 'البراء - معلوماتي',
      services: 'البراء - الخدمات',
      contact: 'البراء- التواصل'
    };

    document.title = titles[section] || 'AL-Bara Dev';
  }, [section]);
};

export default usePageTitle;
