import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import ThemedComponent from './theme/ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
