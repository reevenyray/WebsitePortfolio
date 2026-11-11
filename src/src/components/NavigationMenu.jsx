import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

// Horizontal top navigation.
// Props: items (array), activeTab (string), onSelect (function)
function NavigationMenu({ items, activeTab, onSelect }) {
  return (
    <nav className="topnav" aria-label="Main">
      <ul className="topnav__list">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeTab;

          return (
            <li key={item.id} className="topnav__item">
              <button
                type="button"
                className={`nav-button ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="nav-button__highlight"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <Icon className="nav-button__icon" aria-hidden="true" />
                <span className="nav-button__label">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationMenu;