import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './ThemeHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
  <Router>
    <App />
  </Router>
  </GlobalProvider>
);
