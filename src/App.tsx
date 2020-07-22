import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Header from './components/Header';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Routes from './routes';
import GlobalStyles from './styles/global';
import usePeristedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
