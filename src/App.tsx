import './App.css';

import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { Provider } from 'react-redux';

import { customRoutes } from './chore/routes';
import { customTheme } from './chore/themeProvider';
import { store as reduxStore } from './chore/store';

export default function App(): ReactElement {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>{customRoutes}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
