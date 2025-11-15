import './App.css';
import './styles/theme.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useSelector } from 'react-redux';
import usePageTitle from './hooks/usePageTitle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const activeSection = useSelector((state) => state.navigation.activeSection);
  const { currentColors } = useTheme();
  
  // تحديث عنوان الصفحة حسب القسم النشط
  usePageTitle(activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

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
        {renderSection()}
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
