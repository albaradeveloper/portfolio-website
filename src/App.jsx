import { useState } from 'react';
import './App.css';
import './styles/theme.css';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { currentColors } = useTheme();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
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
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      
      <Footer activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
