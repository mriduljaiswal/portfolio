import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-2
                 text-dark-text light:text-gray-800
                 hover:scale-110
                 transition-all duration-300 ease-in-out"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        {theme === 'dark' ? (
          <Sun 
            className="w-6 h-6 text-dark-text transition-transform duration-300 ease-in-out 
                       hover:rotate-12 hover:text-dark-text-secondary" 
          />
        ) : (
          <Moon 
            className="w-6 h-6 text-gray-600 transition-transform duration-300 ease-in-out 
                       hover:-rotate-12 hover:text-gray-800" 
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;