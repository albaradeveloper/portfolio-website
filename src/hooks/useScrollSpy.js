import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../store/slices/navigationSlice';

const useScrollSpy = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.navigation.activeSection);
  const isUserScrollingRef = useRef(true);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact'];
    
    // عند تغيير القسم من الأزرار، نوقف المراقبة مؤقتاً
    isUserScrollingRef.current = false;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = true;
    }, 1000);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      // فقط نحدث القسم النشط إذا كان المستخدم يقوم بالـ scroll يدوياً
      if (isUserScrollingRef.current) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id));
          }
        });
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [dispatch, activeSection]);
};

export default useScrollSpy;
