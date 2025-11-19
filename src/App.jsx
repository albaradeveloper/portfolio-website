import { useEffect, useRef } from 'react';
import './App.css';
import './styles/theme.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useSelector } from 'react-redux';
import usePageTitle from './hooks/usePageTitle';
import useScrollSpy from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const activeSection = useSelector((state) => state.navigation.activeSection);
  const { currentColors } = useTheme();
  const prevSectionRef = useRef(activeSection);
  
  // تحديث عنوان الصفحة حسب القسم النشط
  usePageTitle(activeSection);
  
  // مراقبة الـ scroll لتحديث القسم النشط
  useScrollSpy();

  // Scroll إلى القسم المحدد عند الضغط على الأزرار
  useEffect(() => {
    // فقط عند تغيير القسم من خلال الضغط على الأزرار
    if (prevSectionRef.current !== activeSection) {
      const element = document.getElementById(activeSection);
      if (element) {
        // استخدام scrollIntoView مباشرة للحصول على انتقال فوري وسلس
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
      prevSectionRef.current = activeSection;
    }
  }, [activeSection]);

  return (
    <div 
      className="min-h-screen font-inter transition-colors duration-300" 
      dir="rtl"
      style={{ 
        minHeight: '100vh',
        color: currentColors.text
      }}
    >
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App
