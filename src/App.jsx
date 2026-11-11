import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import './App.css';
import NavigationMenu from './components/NavigationMenu';
import ThemeToggle from './components/ThemeToggle';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import {
  profile,
  contact,
  navItems,
  focusAreas,
  projects,
} from './data/portfolioData';

// Dark is the default. index.html applies a saved choice before first paint,
// so we start from whatever it already set.
const getInitialTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState(getInitialTheme);

  // Tokens in App.css hang off <html data-theme>, so keep it in sync.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage can be blocked (private mode); the theme still works */
    }
  }, [theme]);

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0 });
  };

  const handleToggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  // Conditional rendering: only the active section is mounted.
  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <About profile={profile} focusAreas={focusAreas} />;
      case 'projects':
        return <Projects projects={projects} />;
      case 'contact':
        return <Contact contact={contact} resume={profile.resume} />;
      case 'home':
      default:
        return (
          <Home
            profile={profile}
            projects={projects}
            focusAreas={focusAreas}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    // MotionConfig makes every Framer Motion animation respect the
    // visitor's "reduce motion" system setting.
    <MotionConfig reducedMotion="user">
      <div className="app">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <header className="site-header">
          <div className="site-header__inner">
            <div className="site-header__theme">
              <ThemeToggle theme={theme} onToggle={handleToggleTheme} />
            </div>

            <button
              type="button"
              className="site-title"
              onClick={() => handleNavigate('home')}
            >
              {profile.name}
            </button>
            <p className="site-subtitle">Portfolio</p>

            <NavigationMenu
              items={navItems}
              activeTab={activeTab}
              onSelect={handleNavigate}
            />
          </div>
        </header>

        <main id="main" className="main">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
