import React from 'react';
import { useTheme } from './ThemeContext';

export default function ThemedComponent() {
  // Access theme and toggleTheme from context
  const { theme, toggleTheme } = useTheme();

  // Use theme value to determine style
  const styles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#333333' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      {/* Button to toggle theme */}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
