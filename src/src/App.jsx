import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import './App.css';
import NavigationMenu from './components/NavigationMenu';
import ThemeToggle from './components/ThemeToggle';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { profile, navItems, focusAreas, projects, skills } from './data/portfolioData';

function App() {
  // State: which section is showing, and which colour theme is active.
  const validTabs = navItems.map((n) => n.id);
  const fromHash = () => {
    const id = window.location.hash.replace('#', '');
    return validTabs.includes(id) ? id : 'home';
  };
  const [activeTab, setActiveTab] = useState(fromHash);
  const [theme, setTheme] = useState('light');

  // Keep the URL in sync so each section can be linked and the back button works.
  useEffect(() => {
    const onHash = () => setActiveTab(fromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const label = navItems.find((n) => n.id === activeTab)?.label;
    document.title =
      activeTab === 'home'
        ? `${profile.name} | Web Developer Portfolio`
        : `${label} | ${profile.name}`;
  }, [activeTab]);

  const handleNavigate = (tabId) => {
    window.location.hash = tabId;
    window.scrollTo({ top: 0 });
  };

  const handleToggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  // Conditional rendering: only the active section is mounted.
  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <About profile={profile} focusAreas={focusAreas} skills={skills} />;
      case 'projects':
        return <Projects projects={projects} />;
      case 'contact':
        return <Contact />;
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
      <div className="app" data-theme={theme}>
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
            <p className="site-subtitle">Web Developer · CLSU</p>

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