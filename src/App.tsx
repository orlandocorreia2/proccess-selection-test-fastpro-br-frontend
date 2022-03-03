import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './hooks';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes';

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
}
